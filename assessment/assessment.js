(function () {
  'use strict';

  const page = document.body.dataset.assessmentPage;
  if (!page) return;
  const key = `desk-tidy-assessment-read-v1:${page}`;
  const checkbox = document.querySelector('[data-assessment-acknowledgement]');
  const status = document.querySelector('[data-assessment-save-state]');

  if (checkbox) {
    try {
      checkbox.checked = localStorage.getItem(key) === 'true';
    } catch (error) {
      if (status) status.textContent = 'Browser save is unavailable.';
    }

    checkbox.addEventListener('change', () => {
      try {
        localStorage.setItem(key, String(checkbox.checked));
        if (status) status.textContent = checkbox.checked
          ? 'Acknowledgement saved in this browser.'
          : 'Acknowledgement removed.';
      } catch (error) {
        if (status) status.textContent = 'Browser save is unavailable.';
      }
    });
  }

  document.querySelectorAll('[data-print-assessment]').forEach(button => {
    button.addEventListener('click', () => window.print());
  });
})();
