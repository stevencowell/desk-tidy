(function () {
  "use strict";

  const bank = window.DESK_TIDY_ACTIVITIES;
  const params = new URLSearchParams(window.location.search);
  const activity = bank?.activities.find((item) => item.id === params.get("id"));
  const module = activity ? bank.modules.find((item) => item.id === activity.moduleId) : null;
  const root = document.getElementById("print-root");
  const back = document.getElementById("back-to-activity");

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function lines(count) {
    return Array.from({ length: count }, () => '<span class="answer-line"></span>').join("");
  }

  function printableTasks() {
    if (activity.mechanic === "classify") {
      return `<table class="print-table"><thead><tr><th>Statement</th><th>Category</th><th>Reason</th></tr></thead><tbody>${activity.items.map((item) => `<tr><td>${escapeHtml(item.text)}</td><td></td><td></td></tr>`).join("")}</tbody></table>
        <p><strong>Category choices:</strong> ${activity.categories.map((category) => escapeHtml(category.title)).join(" · ")}</p>`;
    }

    if (activity.mechanic === "match") {
      return `<table class="print-table"><thead><tr><th>Prompt</th><th>Your match</th><th>Reason or evidence</th></tr></thead><tbody>${activity.items.map((item) => `<tr><td>${escapeHtml(item.prompt)}</td><td></td><td></td></tr>`).join("")}</tbody></table>
        <p><strong>Match choices:</strong> ${activity.options.map((option) => escapeHtml(option.label)).join(" · ")}</p>`;
    }

    if (activity.mechanic === "sequence") {
      return `<table class="print-table"><thead><tr><th style="width:12%">Order</th><th>Stage</th><th>Why here?</th></tr></thead><tbody>${activity.items.map((item) => `<tr><td></td><td>${escapeHtml(item.text)}</td><td></td></tr>`).join("")}</tbody></table>`;
    }

    if (activity.mechanic === "scenario") {
      return activity.scenarios.map((scenario, index) => `<article class="print-task"><p><strong>${index + 1}. ${escapeHtml(scenario.prompt)}</strong></p>${scenario.choices.map((choice) => `<p>□ ${escapeHtml(choice.text)}</p>`).join("")}<p><strong>Evidence for my choice:</strong></p>${lines(2)}</article>`).join("");
    }

    if (activity.mechanic === "glossary") {
      return `<table class="print-table"><thead><tr><th>Clue</th><th>Term</th><th>Meaning or memory aid</th></tr></thead><tbody>${activity.clues.map((clue) => `<tr><td>${escapeHtml(clue.clue)}</td><td></td><td></td></tr>`).join("")}</tbody></table>`;
    }

    return "<p>Ask your teacher for the low-tech version of this activity.</p>";
  }

  if (!root || !activity || !module) {
    if (root) root.innerHTML = '<section class="error-panel"><h1>Printable activity not found</h1><p>Return to the activity bank and choose another activity.</p><a href="index.html">Open activity bank</a></section>';
    if (back) back.href = "index.html";
    return;
  }

  document.title = `${activity.title} | Printable Desk Tidy Activity`;
  back.href = `activity.html?id=${encodeURIComponent(activity.id)}`;

  root.innerHTML = `
    <header class="print-heading">
      <p class="section-kicker">${escapeHtml(module.label)} · ${escapeHtml(activity.period)} · formative practice only</p>
      <h1>${escapeHtml(activity.title)}</h1>
      <p>${escapeHtml(activity.goal)}</p>
      <div class="print-meta"><span>${escapeHtml(activity.theorySection)}</span><span>·</span><span>${escapeHtml(activity.duration)}</span></div>
    </header>
    <div class="student-line" aria-label="Student details">
      <label>Name<span></span></label>
      <label>Class<span></span></label>
      <label>Date<span></span></label>
    </div>
    <section class="print-section">
      <h2>When to use this</h2>
      <p>${escapeHtml(activity.lessonPlacement)}</p>
    </section>
    <section class="print-section">
      <h2>Low-tech instructions</h2>
      <p>${escapeHtml(activity.lowTech)}</p>
      <p><strong>Answer-neutral support:</strong> ${escapeHtml(activity.support)}</p>
    </section>
    <section class="print-section">
      <h2>Practice task</h2>
      ${printableTasks()}
    </section>
    <section class="print-section">
      <h2>One thing to apply next</h2>
      ${lines(3)}
    </section>
    <p class="print-footnote">${escapeHtml(bank.recordMeaning)} Return to the named lesson section and follow current teacher direction before practical work.</p>`;

  document.getElementById("print-now")?.addEventListener("click", () => window.print());
})();
