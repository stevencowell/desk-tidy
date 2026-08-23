(() => {
  const visuals = {
    brief: {
      id: 'VIS-DT-016',
      file: 'assets/learning/support-user-storage-criteria.webp',
      purpose: 'Prompt students to connect their own user research to capacity, access and separation evidence.',
      alt: 'Illustrative timber organiser holding pens, clips and a cable, shown only as a prompt for comparing storage needs.',
      caption: 'Use the items as an evidence prompt: your own user notes and criteria, not this illustrative organiser, control your design.',
      notice: 'Which intended items need quick access, containment or separation in your own brief?'
    },
    concepts: {
      id: 'VIS-DT-004',
      file: 'assets/learning/section-04-four-concept-sketches.webp',
      purpose: 'Help students check that their own concept evidence shows genuine divergence rather than cosmetic variations.',
      alt: 'Illustrative sketchbook with four different desk organiser concepts; none is approved or intended to copy.',
      caption: 'This image models difference between early concepts only; it is not an approved design or a source to copy.',
      notice: 'Does your evidence show meaningful differences in form, layout or use between all four original concepts?'
    },
    selection: {
      id: 'VIS-DT-005',
      file: 'assets/learning/section-05-concept-comparison-matrix.webp',
      purpose: 'Prompt students to show a consistent, evidence-led comparison without preselecting a design.',
      alt: 'Four generic organiser concept cards beside a blank comparison matrix with no winner selected.',
      caption: 'This blank matrix models consistent comparison only; your criteria, evidence and teacher approval determine the preferred direction.',
      notice: 'Can each score or judgement in your evidence be traced back to the same criteria?'
    },
    culture: {
      id: 'VIS-DT-006',
      file: 'assets/learning/section-06-respectful-research-workflow.webp',
      purpose: 'Help students check that their research record shows context, attribution and an original response.',
      alt: 'Four-stage research, listening, attribution and original-response workflow with no cultural motifs.',
      caption: 'Use this workflow to check the integrity of your source record; it does not authorise copying cultural imagery or knowledge.',
      notice: 'Does your evidence name the source and context, record attribution and show an original response?'
    },
    drawings: {
      id: 'VIS-DT-007',
      file: 'assets/learning/section-07-orthographic-view-relationship.webp',
      purpose: 'Help students check alignment and consistency between their own approved drawing views.',
      alt: 'Generic stepped block linked to matching front, top and side views; it is not a Desk Tidy plan.',
      caption: 'This generic view relationship supplies no Desk Tidy geometry or dimensions; use it only to check how your own views communicate one form.',
      notice: 'Do corresponding edges align across your views, and do written dimensions come from your own teacher-approved design?'
    },
    schedule: {
      id: 'VIS-DT-008',
      file: 'assets/learning/section-08-drawing-list-schedule-flow.webp',
      purpose: 'Prompt students to trace their own part and sequence evidence back to approved design information.',
      alt: 'Generic flow from a checked abstract drawing to a blank parts table and production-stage symbols.',
      caption: 'This is a dependency prompt, not a cutting list or prescribed production schedule for the Desk Tidy.',
      notice: 'Can every part and sequence entry in your evidence be traced to your own approved drawing or checkpoint?'
    },
    whs: {
      id: 'VIS-DT-017',
      file: 'assets/learning/support-hazard-risk-control-relationship.webp',
      purpose: 'Help students distinguish the hazard, possible exposure and teacher-authorised controls in their own evidence.',
      alt: 'Generic hazard, exposure and layered-control diagram with a barrier, procedure and safety glasses.',
      caption: 'This relationship diagram is not a local risk assessment, tool instruction or permission to begin practical work.',
      notice: 'Which hazard, possible exposure and teacher-authorised controls does your own evidence record?'
    },
    markout: {
      id: 'VIS-DT-009',
      file: 'assets/learning/section-09-datum-square-marking.webp',
      purpose: 'Prompt students to explain the datum and checking evidence visible in their own mark-out record.',
      alt: 'Generic practice board with a square seated against one edge, a fine pencil line and a steel rule nearby.',
      caption: 'This generic practice setup provides no usable measurement and does not prescribe the local mark-out procedure.',
      notice: 'Does your evidence identify the chosen datum, show a fine line and explain a check made under teacher instruction?'
    },
    joinery: {
      id: 'VIS-DT-011',
      file: 'assets/learning/section-11-butt-joint-principle.webp',
      purpose: 'Provide one neutral joint-principle comparison that prompts students to justify their own approved joint evidence.',
      alt: 'Top-view generic butt-joint principle showing one square timber end meeting another timber face.',
      caption: 'This is one generic comparison example only; it does not select a joint, project location, size or manufacturing method.',
      notice: 'What contact, alignment or fit evidence supports your own teacher-approved joint choice?'
    },
    assembly: {
      id: 'VIS-DT-012',
      file: 'assets/learning/section-12-dry-fit-square-check.webp',
      purpose: 'Prompt students to explain what their own dry-fit evidence revealed before permanent assembly.',
      alt: 'Generic three-piece pine dry fit held lightly by a clamp with a square checking one corner.',
      caption: 'This generic checking example does not approve component geometry, clamp placement, adhesive use or a practical procedure.',
      notice: 'What did your own teacher-authorised dry fit reveal before permanent assembly?'
    },
    finish: {
      id: 'VIS-DT-024',
      file: 'assets/learning/support-finish-quality-comparison.webp',
      purpose: 'Help students identify observable surface evidence when explaining preparation and finish quality.',
      alt: 'Three generic clear-finished pine samples showing even coverage, one dried run and pooling in a corner.',
      caption: 'These are comparison examples only; they do not specify a product, application method or approved response to a fault.',
      notice: 'Which observable surface condition does your evidence show, and what teacher-approved response followed?'
    },
    evaluation: {
      id: 'VIS-DT-015',
      file: 'assets/learning/section-15-evaluation-evidence-pathway.webp',
      purpose: 'Prompt students to link each evaluation judgement to a criterion, evidence and realistic improvement.',
      alt: 'Five-step pathway from criterion to evidence, judgement, improvement and reflection.',
      caption: 'This generic pathway structures an evidence-based evaluation; it does not certify product performance or practical competence.',
      notice: 'Can each judgement link a criterion to visible evidence and one realistic improvement?'
    }
  };

  function createGraphic(card, visual) {
    const figure = document.createElement('figure');
    figure.className = 'folio-card-graphic';
    figure.dataset.visualId = visual.id;
    figure.dataset.evidencePurpose = visual.purpose;

    const image = document.createElement('img');
    image.className = 'folio-card-image';
    image.src = visual.file;
    image.alt = visual.alt;
    image.loading = 'lazy';
    image.decoding = 'async';

    const caption = document.createElement('figcaption');
    const captionText = document.createElement('span');
    captionText.className = 'folio-card-caption';
    captionText.textContent = visual.caption;

    const notice = document.createElement('span');
    notice.className = 'folio-card-notice';
    const noticeLabel = document.createElement('strong');
    noticeLabel.textContent = 'Notice: ';
    notice.append(noticeLabel, visual.notice);

    const openLarger = document.createElement('a');
    openLarger.className = 'folio-card-open-larger screen-only';
    openLarger.href = visual.file;
    openLarger.target = '_blank';
    openLarger.rel = 'noopener';
    openLarger.textContent = 'Open larger';
    const cardTitle = card.querySelector('h2')?.textContent || 'folio evidence card';
    openLarger.setAttribute('aria-label', `Open larger visual for ${cardTitle} (opens in a new tab)`);

    caption.append(captionText, notice, openLarger);
    figure.append(image, caption);
    return figure;
  }

  function addInfographics() {
    const cards = document.querySelectorAll('#folioCards .folio-card[data-folio-key]');
    cards.forEach(card => {
      const visual = visuals[card.dataset.folioKey];
      const header = card.querySelector('.folio-head');
      if (!visual || !header || card.querySelector('.folio-card-graphic')) return;
      header.insertAdjacentElement('afterend', createGraphic(card, visual));
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
