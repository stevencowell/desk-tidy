(() => {
  const graphics = [
    'Project brief, user and criteria',
    'Research and four concepts',
    'Concept comparison and approval',
    'Respectful design research',
    'Working drawings',
    'Cutting list and production schedule',
    'Work health and safety',
    'Datums and accurate mark-out',
    'Joint selection and production',
    'Dry fit, PVA and clamping',
    'Surface preparation and finish',
    'Functional testing and evaluation'
  ];

  function addInfographics() {
    const cards = document.querySelectorAll('#folioCards .folio-card');
    cards.forEach((card, index) => {
      const graphic = graphics[index];
      const header = card.querySelector('.folio-head');
      if (!graphic || !header || card.querySelector('.folio-card-graphic')) return;

      const figure = document.createElement('figure');
      figure.className = 'folio-card-graphic';
      const column = index % 4;
      const row = Math.floor(index / 4);
      figure.innerHTML = `<div class="folio-card-sprite"><img src="assets/folio/desk-tidy-folio-cards.png" alt="${graphic} infographic" decoding="async" style="--panel-column:${column};--panel-row:${row}"></div><figcaption>Use this visual to identify the evidence and explanation needed for this stage.</figcaption>`;
      header.insertAdjacentElement('afterend', figure);
    });
  }

  function start() {
    requestAnimationFrame(addInfographics);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
