(function () {
  "use strict";

  const data = window.DESK_TIDY_ACTIVITIES;
  const grid = document.getElementById("activity-grid");
  const filters = document.getElementById("module-filters");
  const progress = document.getElementById("bank-progress");
  let activeFilter = "all";

  if (!data || !grid || !filters || !progress) {
    if (grid) grid.innerHTML = '<p class="error-panel">The activity bank could not load. Refresh the page or use the printable activity list.</p>';
    return;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function readRecord(activityId) {
    try {
      const raw = localStorage.getItem(data.storagePrefix + activityId);
      return raw ? JSON.parse(raw) : null;
    } catch (_error) {
      return null;
    }
  }

  function statusFor(activity) {
    const record = readRecord(activity.id);
    if (record && record.complete) return { label: "Mastered", key: "complete" };
    if (record && record.updatedAt) return { label: "In progress", key: "started" };
    return { label: "Not started", key: "new" };
  }

  function renderFilters() {
    const choices = [{ id: "all", label: "All modules" }].concat(
      data.modules.map((module) => ({ id: module.id, label: module.label }))
    );

    filters.innerHTML = choices.map((choice) => (
      `<button class="filter-button" type="button" data-filter="${escapeHtml(choice.id)}" aria-pressed="${choice.id === activeFilter}">${escapeHtml(choice.label)}</button>`
    )).join("");

    filters.querySelectorAll("[data-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;
        renderFilters();
        renderCards();
      });
    });
  }

  function renderCards() {
    const activities = data.activities.filter((activity) => activeFilter === "all" || activity.moduleId === activeFilter);
    const moduleLookup = Object.fromEntries(data.modules.map((module) => [module.id, module]));

    grid.innerHTML = activities.map((activity) => {
      const module = moduleLookup[activity.moduleId];
      const status = statusFor(activity);
      return `
        <article class="activity-tile" data-module="${escapeHtml(activity.moduleId)}">
          <p class="section-kicker">${escapeHtml(module.label)} · ${escapeHtml(activity.period)}</p>
          <h3>${escapeHtml(activity.title)}</h3>
          <p class="tile-source">Theory: ${escapeHtml(activity.theorySection)}</p>
          <p>${escapeHtml(activity.goal)}</p>
          <div class="tile-footer">
            <span class="status-chip" data-status="${status.key}">${status.label}</span>
            <a class="button button--primary" href="activity.html?id=${encodeURIComponent(activity.id)}">Open activity</a>
          </div>
        </article>`;
    }).join("");

    const mastered = data.activities.filter((activity) => statusFor(activity).key === "complete").length;
    progress.textContent = `${mastered} of ${data.activities.length}`;
  }

  function resetBank() {
    const confirmed = window.confirm("Reset all fifteen browser-local Desk Tidy activity records? This cannot be undone on this device.");
    if (!confirmed) return;
    data.activities.forEach((activity) => {
      try { localStorage.removeItem(data.storagePrefix + activity.id); } catch (_error) { /* Continue when storage is unavailable. */ }
    });
    renderCards();
  }

  renderFilters();
  renderCards();

  document.getElementById("reset-bank")?.addEventListener("click", resetBank);
  document.getElementById("print-bank")?.addEventListener("click", () => window.print());
  window.addEventListener("storage", renderCards);
})();
