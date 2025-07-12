const sections = [
  'program',
  'syllabus',
  'assessment',
  'project-unit',
  'main-theory',
  'support-activities',
  'advanced-activities'
];

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

document.addEventListener('DOMContentLoaded', () => {
  loadSections().then(() => {
    if (typeof initPage === 'function') initPage();
    if (typeof initQuizFeatures === 'function') initQuizFeatures();
  });
});
