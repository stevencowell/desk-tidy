(function () {
  "use strict";

  const bank = window.DESK_TIDY_ACTIVITIES;
  const params = new URLSearchParams(window.location.search);
  const activityId = params.get("id") || "";
  const activity = bank?.activities.find((item) => item.id === activityId);
  const module = activity ? bank.modules.find((item) => item.id === activity.moduleId) : null;
  const root = document.getElementById("activity-root");
  const errorPanel = document.getElementById("activity-error");
  const loading = document.getElementById("loading-message");
  const workspace = document.getElementById("activity-workspace");
  const resultPanel = document.getElementById("activity-result");
  const saveIndicator = document.getElementById("save-indicator");
  let selectedClassifyItem = null;
  let state;

  if (!bank || !activity || !module || !root || !workspace || !resultPanel) {
    if (loading) loading.hidden = true;
    if (errorPanel) errorPanel.hidden = false;
    return;
  }

  const storageKey = bank.storagePrefix + activity.id;

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function defaultState() {
    const base = {
      schemaVersion: bank.schemaVersion,
      activityId: activity.id,
      complete: false,
      lastScore: null,
      maxScore: null,
      updatedAt: null,
      checkedAt: null
    };
    if (activity.mechanic === "classify") base.assignments = {};
    if (activity.mechanic === "match" || activity.mechanic === "scenario" || activity.mechanic === "glossary") base.answers = {};
    if (activity.mechanic === "sequence") base.order = activity.initialOrder.slice();
    return base;
  }

  function readState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(storageKey));
      if (!parsed || parsed.activityId !== activity.id || parsed.schemaVersion !== bank.schemaVersion) return defaultState();
      return Object.assign(defaultState(), parsed);
    } catch (_error) {
      return defaultState();
    }
  }

  function persistState() {
    state.updatedAt = new Date().toISOString();
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
      saveIndicator.textContent = "Saved in this browser";
    } catch (_error) {
      saveIndicator.textContent = "Browser storage is unavailable—print before closing";
    }
  }

  function clearCheckedState() {
    state.complete = false;
    state.lastScore = null;
    state.maxScore = null;
    state.checkedAt = null;
    resultPanel.hidden = true;
    resultPanel.removeAttribute("data-result");
    workspace.querySelectorAll("[data-result]").forEach((element) => element.removeAttribute("data-result"));
  }

  function changed() {
    clearCheckedState();
    persistState();
  }

  function setText(id, text) {
    const element = document.getElementById(id);
    if (element) element.textContent = text;
  }

  function preparePage() {
    document.title = `${activity.title} | Desk Tidy Activities`;
    setText("activity-module", `${module.label} · ${module.title}`);
    setText("activity-title", activity.title);
    setText("activity-goal", activity.goal);
    setText("activity-placement", activity.lessonPlacement);
    setText("activity-support", activity.support);
    setText("mechanic-label", activity.mechanicLabel);

    const meta = document.getElementById("activity-meta");
    meta.innerHTML = [activity.duration, activity.theorySection, activity.period]
      .map((item) => `<span>${escapeHtml(item)}</span>`).join("");

    const instructions = document.getElementById("activity-instructions");
    instructions.innerHTML = activity.instructions.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

    const breadcrumb = document.getElementById("module-breadcrumb");
    breadcrumb.href = module.route;
    breadcrumb.textContent = module.label;

    const returnModule = document.getElementById("return-module");
    returnModule.href = activity.sourceAnchor;
    returnModule.textContent = `Return to ${activity.theorySection}`;

    const printLink = document.getElementById("print-activity");
    printLink.href = `print.html?id=${encodeURIComponent(activity.id)}`;

    loading.hidden = true;
    root.hidden = false;
  }

  function classifyItemHtml(item) {
    const selected = selectedClassifyItem === item.id;
    return `<button type="button" class="classify-item" draggable="true" data-item-id="${escapeHtml(item.id)}" aria-pressed="${selected}">${escapeHtml(item.text)}</button>`;
  }

  function bindClassifyItems() {
    workspace.querySelectorAll(".classify-item").forEach((button) => {
      button.addEventListener("click", () => {
        selectedClassifyItem = selectedClassifyItem === button.dataset.itemId ? null : button.dataset.itemId;
        renderClassify();
        const next = workspace.querySelector(`[data-item-id="${CSS.escape(button.dataset.itemId)}"]`);
        next?.focus();
      });
      button.addEventListener("dragstart", (event) => {
        selectedClassifyItem = button.dataset.itemId;
        event.dataTransfer.setData("text/plain", button.dataset.itemId);
        event.dataTransfer.effectAllowed = "move";
      });
    });
  }

  function assignClassifyItem(itemId, categoryId) {
    if (!itemId) return;
    if (categoryId) state.assignments[itemId] = categoryId;
    else delete state.assignments[itemId];
    selectedClassifyItem = null;
    changed();
    renderClassify();
  }

  function bindDropZone(zone, categoryId) {
    zone.addEventListener("dragover", (event) => {
      event.preventDefault();
      zone.classList.add("is-over");
      event.dataTransfer.dropEffect = "move";
    });
    zone.addEventListener("dragleave", () => zone.classList.remove("is-over"));
    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      zone.classList.remove("is-over");
      assignClassifyItem(event.dataTransfer.getData("text/plain"), categoryId);
    });
  }

  function renderClassify() {
    const unassigned = activity.items.filter((item) => !state.assignments[item.id]);
    const categories = activity.categories.map((category) => {
      const placed = activity.items.filter((item) => state.assignments[item.id] === category.id);
      return `
        <section class="category-zone" data-category-id="${escapeHtml(category.id)}">
          <h3>${escapeHtml(category.title)}</h3>
          <p>${escapeHtml(category.description)}</p>
          <button class="category-target" type="button" data-assign-category="${escapeHtml(category.id)}">Move selected statement here</button>
          <div>${placed.map(classifyItemHtml).join("") || '<p class="inline-feedback">No statements placed yet.</p>'}</div>
        </section>`;
    }).join("");

    workspace.innerHTML = `
      <p class="workspace-intro">Select a statement, then choose a category. You can also drag statements between areas.</p>
      <div class="classify-board">
        <section class="item-pool" data-category-id="">
          <h3>Statements to sort</h3>
          <p>Select or drag one statement at a time.</p>
          <button class="category-target" type="button" data-assign-category="">Move selected statement back here</button>
          <div>${unassigned.map(classifyItemHtml).join("") || '<p class="inline-feedback">All statements have been placed.</p>'}</div>
        </section>
        <div class="category-grid" data-count="${activity.categories.length}">${categories}</div>
      </div>`;

    bindClassifyItems();
    workspace.querySelectorAll("[data-assign-category]").forEach((button) => {
      button.addEventListener("click", () => assignClassifyItem(selectedClassifyItem, button.dataset.assignCategory || null));
    });
    workspace.querySelectorAll("[data-category-id]").forEach((zone) => bindDropZone(zone, zone.dataset.categoryId || null));
  }

  function renderMatch() {
    workspace.innerHTML = `<p class="workspace-intro">Choose one match for each prompt.</p><div class="match-list">${activity.items.map((item) => {
      const options = ['<option value="">Choose a match…</option>'].concat(activity.options.map((option) => (
        `<option value="${escapeHtml(option.value)}"${state.answers[item.id] === option.value ? " selected" : ""}>${escapeHtml(option.label)}</option>`
      ))).join("");
      return `<label class="match-row" data-match-id="${escapeHtml(item.id)}"><p>${escapeHtml(item.prompt)}</p><select data-answer-id="${escapeHtml(item.id)}">${options}</select></label>`;
    }).join("")}</div>`;

    workspace.querySelectorAll("[data-answer-id]").forEach((select) => {
      select.addEventListener("change", () => {
        state.answers[select.dataset.answerId] = select.value;
        changed();
      });
    });
  }

  function renderSequence(focusItemId) {
    const itemLookup = Object.fromEntries(activity.items.map((item) => [item.id, item]));
    workspace.innerHTML = `<p class="workspace-intro">Move the stages until the sequence is defensible.</p><div class="sequence-list">${state.order.map((itemId, index) => {
      const item = itemLookup[itemId];
      return `
        <div class="sequence-row" data-sequence-id="${escapeHtml(item.id)}">
          <span class="sequence-number">${index + 1}</span>
          <p>${escapeHtml(item.text)}</p>
          <div class="sequence-controls">
            <button class="move-button" type="button" data-move="up" data-item-id="${escapeHtml(item.id)}" aria-label="Move step ${index + 1} up"${index === 0 ? " disabled" : ""}>↑</button>
            <button class="move-button" type="button" data-move="down" data-item-id="${escapeHtml(item.id)}" aria-label="Move step ${index + 1} down"${index === state.order.length - 1 ? " disabled" : ""}>↓</button>
          </div>
        </div>`;
    }).join("")}</div>`;

    workspace.querySelectorAll("[data-move]").forEach((button) => {
      button.addEventListener("click", () => {
        const index = state.order.indexOf(button.dataset.itemId);
        const target = button.dataset.move === "up" ? index - 1 : index + 1;
        if (target < 0 || target >= state.order.length) return;
        [state.order[index], state.order[target]] = [state.order[target], state.order[index]];
        changed();
        renderSequence(button.dataset.itemId);
      });
    });

    if (focusItemId) workspace.querySelector(`[data-item-id="${CSS.escape(focusItemId)}"]`)?.focus();
  }

  function renderScenario() {
    workspace.innerHTML = `<p class="workspace-intro">Choose the response with the strongest source-grounded reasoning.</p><div class="scenario-list">${activity.scenarios.map((scenario, index) => `
      <article class="scenario-card" data-scenario-id="${escapeHtml(scenario.id)}">
        <fieldset>
          <legend>${index + 1}. ${escapeHtml(scenario.prompt)}</legend>
          ${scenario.choices.map((choice) => `
            <label class="choice-row">
              <input type="radio" name="${escapeHtml(scenario.id)}" value="${escapeHtml(choice.id)}"${state.answers[scenario.id] === choice.id ? " checked" : ""}>
              <span>${escapeHtml(choice.text)}</span>
            </label>`).join("")}
        </fieldset>
      </article>`).join("")}</div>`;

    workspace.querySelectorAll(".scenario-card input").forEach((radio) => {
      radio.addEventListener("change", () => {
        state.answers[radio.name] = radio.value;
        changed();
      });
    });
  }

  function renderGlossary() {
    workspace.innerHTML = `<p class="workspace-intro">Type the drawing term that matches each clue.</p><div class="glossary-list">${activity.clues.map((clue, index) => `
      <label class="glossary-row" data-clue-id="${escapeHtml(clue.id)}">
        <span class="clue-number">${index + 1}</span>
        <p>${escapeHtml(clue.clue)}</p>
        <input type="text" data-clue-answer="${escapeHtml(clue.id)}" value="${escapeHtml(state.answers[clue.id] || "")}" autocomplete="off" spellcheck="true">
      </label>`).join("")}</div>`;

    workspace.querySelectorAll("[data-clue-answer]").forEach((input) => {
      input.addEventListener("input", () => {
        state.answers[input.dataset.clueAnswer] = input.value;
        changed();
      });
    });
  }

  function renderWorkspace() {
    if (activity.mechanic === "classify") renderClassify();
    if (activity.mechanic === "match") renderMatch();
    if (activity.mechanic === "sequence") renderSequence();
    if (activity.mechanic === "scenario") renderScenario();
    if (activity.mechanic === "glossary") renderGlossary();
  }

  function normalise(value) {
    return String(value || "").trim().toLowerCase().replace(/\s+/g, " ");
  }

  function assess() {
    const errors = [];
    let score = 0;
    let maxScore = 0;

    workspace.querySelectorAll("[data-result]").forEach((element) => element.removeAttribute("data-result"));

    if (activity.mechanic === "classify") {
      maxScore = activity.items.length;
      activity.items.forEach((item) => {
        const correct = state.assignments[item.id] === item.correct;
        if (correct) score += 1;
        else errors.push(item.feedback);
        workspace.querySelector(`[data-item-id="${CSS.escape(item.id)}"]`)?.setAttribute("data-result", correct ? "correct" : "incorrect");
      });
    }

    if (activity.mechanic === "match") {
      maxScore = activity.items.length;
      activity.items.forEach((item) => {
        const correct = state.answers[item.id] === item.correct;
        if (correct) score += 1;
        else errors.push(item.feedback);
        workspace.querySelector(`[data-match-id="${CSS.escape(item.id)}"]`)?.setAttribute("data-result", correct ? "correct" : "incorrect");
      });
    }

    if (activity.mechanic === "sequence") {
      maxScore = activity.items.length;
      activity.items.forEach((item, index) => {
        const correct = state.order[index] === item.id;
        if (correct) score += 1;
        else if (errors.length < 4) errors.push(item.feedback);
        const placed = state.order[index];
        workspace.querySelector(`[data-sequence-id="${CSS.escape(placed)}"]`)?.setAttribute("data-result", correct ? "correct" : "incorrect");
      });
    }

    if (activity.mechanic === "scenario") {
      maxScore = activity.scenarios.length;
      activity.scenarios.forEach((scenario) => {
        const selected = scenario.choices.find((choice) => choice.id === state.answers[scenario.id]);
        const correct = Boolean(selected?.correct);
        if (correct) score += 1;
        else errors.push(selected?.feedback || `Choose a response for: ${scenario.prompt}`);
        workspace.querySelector(`[data-scenario-id="${CSS.escape(scenario.id)}"]`)?.setAttribute("data-result", correct ? "correct" : "incorrect");
      });
    }

    if (activity.mechanic === "glossary") {
      maxScore = activity.clues.length;
      activity.clues.forEach((clue) => {
        const answer = normalise(state.answers[clue.id]);
        const correct = clue.answers.some((accepted) => normalise(accepted) === answer);
        if (correct) score += 1;
        else errors.push(clue.feedback);
        workspace.querySelector(`[data-clue-id="${CSS.escape(clue.id)}"]`)?.setAttribute("data-result", correct ? "correct" : "incorrect");
      });
    }

    state.lastScore = score;
    state.maxScore = maxScore;
    state.complete = score === maxScore;
    state.checkedAt = new Date().toISOString();
    persistState();
    showResult(errors);
  }

  function showResult(errors) {
    const complete = state.complete;
    resultPanel.dataset.result = complete ? "complete" : "retry";
    resultPanel.innerHTML = "";
    const heading = document.createElement("h2");
    heading.textContent = complete ? "Ready to apply the idea" : "Revise, then check again";
    const summary = document.createElement("p");
    summary.textContent = `${state.lastScore} of ${state.maxScore} decisions are currently correct. ${complete ? activity.feedback.success : activity.feedback.retry}`;
    resultPanel.append(heading, summary);

    if (!complete && errors.length) {
      const list = document.createElement("ul");
      errors.slice(0, 5).forEach((message) => {
        const item = document.createElement("li");
        item.textContent = message;
        list.append(item);
      });
      resultPanel.append(list);
    }

    resultPanel.hidden = false;
    resultPanel.tabIndex = -1;
    resultPanel.focus();
  }

  function showStoredResult() {
    if (state.lastScore === null || state.maxScore === null) return;
    showResult([]);
  }

  function resetActivity() {
    const confirmed = window.confirm("Reset this browser-local activity record? This cannot be undone on this device.");
    if (!confirmed) return;
    try { localStorage.removeItem(storageKey); } catch (_error) { /* Continue with an in-memory reset. */ }
    state = defaultState();
    selectedClassifyItem = null;
    resultPanel.hidden = true;
    saveIndicator.textContent = "Autosave is on";
    renderWorkspace();
    document.getElementById("workspace-title")?.focus();
  }

  state = readState();
  preparePage();
  renderWorkspace();
  showStoredResult();

  document.getElementById("check-activity")?.addEventListener("click", assess);
  document.getElementById("reset-activity")?.addEventListener("click", resetActivity);
})();
