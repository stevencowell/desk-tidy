const sections = [
  'program',
  'syllabus',
  'assessment',
  'project-unit',
  'main-theory',
  'support-activities',
  'advanced-activities'
];

const weekCounts = {
  'main-theory': 10,
  'support-activities': 10,
  'advanced-activities': 10
};

function loadSections() {
  return Promise.all(sections.map(id => {
    return fetch('sections/' + id + '.html')
      .then(resp => resp.text())
      .then(html => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
      });
  }));
}

function loadWeeks() {
  const promises = [];
  for (const [section, count] of Object.entries(weekCounts)) {
    const container = document.getElementById(section + '-weeks');
    if (!container) continue;
    for (let i = 1; i <= count; i++) {
      promises.push(
        fetch(`sections/${section}/week${i}.html`)
          .then(resp => resp.text())
          .then(html => {
            const div = document.createElement('div');
            div.innerHTML = html;
            container.appendChild(div);
          })
      );
    }
  }
  return Promise.all(promises);
}

document.addEventListener('DOMContentLoaded', () => {
  loadSections()
    .then(loadWeeks)
    .then(() => {
      if (typeof initPage === 'function') initPage();
      if (typeof initQuizFeatures === 'function') initQuizFeatures();
    });
});
