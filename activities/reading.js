(function () {
  'use strict';

  const data = window.DESK_TIDY_READING;
  if (!data || !Array.isArray(data.activities) || !Array.isArray(data.modules)) return;

  const prefix = 'desk-tidy:active-reading:v1:';
  const script = document.currentScript;
  const root = new URL('../', script ? script.src : new URL('reading.js', location.href));
  const bankURL = new URL('activities/reading.html', root);
  bankURL.searchParams.set('v', 'read7');
  const modules = new Map(data.modules.map(module => [module.id, module]));
  const activities = data.activities.filter(activity => modules.has(activity.moduleId));
  const memory = new Map();
  const views = new Map();
  let storageOK = true;
  let bankStatus;
  const kinds = {
    hunt: { label: 'Text hunt', time: '4–6 min', starter: 'The text explains… This matters because…', description: 'Find the idea, then explain why it matters.' },
    repair: { label: 'Fix the answer', time: '5–7 min', starter: 'I would change… The text supports this because…', description: 'Spot a weak claim and improve it using the text.' },
    decision: { label: 'Make a decision', time: '5–7 min', starter: 'I would choose… because the text explains…', description: 'Choose a response and justify it with evidence.' }
  };

  function el(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }
  function button(text, callback, secondary) {
    const element = el('button', secondary ? 'reading-button reading-button-secondary' : 'reading-button', text);
    element.type = 'button';
    element.addEventListener('click', callback);
    return element;
  }
  function link(text, url, className) {
    const element = el('a', className || 'reading-link', text);
    element.href = url;
    return element;
  }
  function empty(activity) {
    return { schemaVersion: '1.0', activityId: activity.id, answer: '', evidence: '', feedbackOpen: false, reviewed: false, updatedAt: null };
  }
  function normalise(activity, value) {
    const result = empty(activity);
    const fields = ['schemaVersion', 'activityId', 'answer', 'evidence', 'feedbackOpen', 'reviewed', 'updatedAt'];
    if (!value || typeof value !== 'object' || Array.isArray(value) || Object.keys(value).length !== fields.length || fields.some(field => !Object.prototype.hasOwnProperty.call(value, field)) || value.schemaVersion !== '1.0' || value.activityId !== activity.id || typeof value.answer !== 'string' || typeof value.evidence !== 'string' || typeof value.feedbackOpen !== 'boolean' || typeof value.reviewed !== 'boolean' || (value.updatedAt !== null && (typeof value.updatedAt !== 'string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value.updatedAt) || !Number.isFinite(Date.parse(value.updatedAt))))) {
      throw new Error('Reading record is not in the expected format.');
    }
    result.answer = typeof value.answer === 'string' ? value.answer : '';
    result.evidence = typeof value.evidence === 'string' ? value.evidence : '';
    const attempted = Boolean(result.answer.trim() && result.evidence.trim());
    result.feedbackOpen = attempted && value.feedbackOpen === true;
    result.reviewed = result.feedbackOpen && value.reviewed === true;
    result.updatedAt = typeof value.updatedAt === 'string' ? value.updatedAt : null;
    return result;
  }
  function read(activity, force) {
    if (memory.has(activity.id) && !force) return memory.get(activity.id);
    try {
      const raw = localStorage.getItem(prefix + activity.id);
      const record = raw ? normalise(activity, JSON.parse(raw)) : empty(activity);
      memory.set(activity.id, record);
      return record;
    } catch (error) {
      storageOK = false;
      return memory.get(activity.id) || empty(activity);
    }
  }
  function save(activity, record) {
    record.updatedAt = new Date().toISOString();
    memory.set(activity.id, record);
    try {
      localStorage.setItem(prefix + activity.id, JSON.stringify(record));
      storageOK = true;
    } catch (error) {
      storageOK = false;
    }
    publish(activity.id);
  }
  function progress() {
    return {
      total: activities.length,
      reviewed: activities.filter(activity => read(activity).reviewed).length,
      started: activities.filter(activity => Boolean(read(activity).answer.trim() || read(activity).evidence.trim())).length
    };
  }
  function status(activity) {
    const record = read(activity);
    return record.reviewed ? 'Self-reviewed' : (record.answer.trim() || record.evidence.trim() ? 'In progress' : 'Ready to try');
  }
  function publish(id) {
    updateStatuses();
    document.dispatchEvent(new CustomEvent('desk-tidy-reading-updated', { detail: { activityId: id, ...progress(), storageAvailable: storageOK } }));
  }
  function updateStatuses() {
    document.querySelectorAll('[data-reading-status]').forEach(node => {
      const activity = activities.find(item => item.id === node.dataset.readingStatus);
      if (activity) {
        node.textContent = status(activity);
        node.classList.toggle('is-reviewed', read(activity).reviewed);
      }
    });
    if (bankStatus) {
      const current = progress();
      bankStatus.textContent = current.reviewed + ' of ' + current.total + ' self-reviewed';
    }
    document.querySelectorAll('.reading-save-state').forEach(node => {
      node.textContent = storageOK
        ? 'Your work saves in this browser.'
        : 'Browser storage could not be read or saved. Your current work is held on this page only; print or save a PDF before leaving.';
    });
  }
  function lessonURL(activity) {
    const url = new URL(modules.get(activity.moduleId).route, root);
    url.hash = activity.sectionId;
    return url.href;
  }
  function activityURL(activity, printMode) {
    const url = new URL(bankURL);
    url.searchParams.set('id', activity.id);
    if (printMode) url.searchParams.set('print', printMode);
    return url.href;
  }
  function sourceText(activity) {
    return Array.isArray(activity.sourceText) ? activity.sourceText : [];
  }
  function sourceBlock(activity, headingLevel) {
    const block = el('section', 'reading-source');
    block.append(el(headingLevel || 'h3', '', 'Read the text'));
    const paragraphs = sourceText(activity);
    if (paragraphs.length) paragraphs.forEach(paragraph => block.append(el('p', '', paragraph)));
    else block.append(el('p', '', 'Open the lesson section to read the text for this challenge.'));
    block.append(link('Open the original lesson section', lessonURL(activity)));
    return block;
  }
  function list(items, className) {
    const result = el('ul', className);
    (items || []).forEach(item => result.append(el('li', '', item)));
    return result;
  }
  function responseField(labelText, activity, field, value) {
    const label = el('label', 'reading-field');
    const labelTextNode = el('span', '', labelText);
    const textarea = el('textarea');
    textarea.id = activity.id + '-' + field;
    textarea.rows = field === 'answer' ? 4 : 3;
    textarea.value = value;
    textarea.spellcheck = true;
    textarea.autocomplete = 'off';
    const printValue = el('div', 'reading-print-response', value || 'No response recorded.');
    label.append(labelTextNode, textarea, printValue);
    return { label, textarea, printValue };
  }
  function challenge(activity, options) {
    const optionsValue = options || {};
    const kind = kinds[activity.mechanic] || kinds.hunt;
    let record = read(activity);
    let stageIndex = 0;
    let cardIndex = 0;
    const cards = activity.readingCards || [{ heading: activity.sourceTitle, paragraphs: sourceText(activity) }];
    const panel = el('div', 'reading-challenge');
    panel.dataset.readingActivity = activity.id;
    const mission = el('header', 'reading-mission');
    mission.append(el('p', 'reading-eyebrow', kind.label + ' · about 5 minutes'));
    const title = el(optionsValue.inline ? 'h3' : 'h2', 'reading-challenge-title', activity.title);
    title.tabIndex = -1;
    mission.append(title, el('p', 'reading-prompt', activity.mission || activity.prompt));
    if (activity.scenario) {
      const scenario = el('aside', 'reading-scenario');
      scenario.append(el('strong', '', activity.mechanic === 'repair' ? 'Someone says… Is this right?' : 'Imagine this…'), el('p', '', activity.scenario));
      mission.append(scenario);
    }
    panel.append(mission);
    const steps = el('nav', 'reading-steps');
    steps.setAttribute('aria-label', 'Challenge steps');
    const stages = ['Read', 'Answer', 'Check'].map((name, index) => {
      const stage = el('section', 'reading-stage');
      stage.id = activity.id + '-step-' + index;
      stage.setAttribute('aria-label', name);
      return stage;
    });
    const stepButtons = ['1  Read', '2  Answer', '3  Check'].map((name, index) => {
      const control = button(name, () => showStage(index, true), true);
      control.classList.add('reading-step');
      control.setAttribute('aria-controls', stages[index].id);
      steps.append(control);
      return control;
    });
    panel.append(steps, ...stages);

    const answer = responseField(activity.answerLabel || 'Your answer', activity, 'answer', record.answer);
    const evidence = responseField('The sentence or idea that helped me', activity, 'evidence', record.evidence);
    answer.textarea.rows = 3;
    evidence.textarea.rows = 2;
    const answerHint = el('p', 'reading-small', activity.answerHint || 'Write one or two sentences in your own words.');
    answerHint.id = activity.id + '-answer-help';
    answer.textarea.setAttribute('aria-describedby', answerHint.id);

    const layout = el('div', 'reading-reader-layout');
    const reader = el('div', 'reading-reader');
    reader.append(el('p', 'reading-reader-help', 'Read the three short parts. Tap a sentence that helps answer the question.'));
    const cardNav = el('nav', 'reading-card-nav');
    cardNav.setAttribute('aria-label', 'Reading parts');
    const content = el('div', 'reading-page-content');
    const cardButtons = cards.map((card, index) => {
      const control = button(String(index + 1) + '. ' + card.heading, () => showCard(index, true), true);
      control.classList.add('reading-card-tab');
      cardNav.append(control);
      return control;
    });
    const clueStatus = el('p', 'reading-clue-status');
    clueStatus.setAttribute('role', 'status');
    const cardActions = el('div', 'reading-card-actions');
    const count = el('span', 'reading-page-count');
    const nextCard = button('Next part →', () => {
      if (cardIndex < cards.length - 1) showCard(cardIndex + 1, true);
      else showStage(1, true);
    });
    cardActions.append(count, nextCard);
    reader.append(cardNav, content, clueStatus, cardActions);
    layout.append(reader);
    if (activity.visual && activity.visual.src) {
      const figure = el('figure', 'reading-visual');
      const picture = el('img');
      picture.src = new URL(activity.visual.src, root).href;
      picture.alt = activity.visual.alt;
      picture.loading = 'lazy';
      const caption = el('figcaption');
      caption.append(el('strong', '', 'Look closely'), el('p', '', activity.visual.caption));
      figure.append(picture, caption);
      layout.append(figure);
    }
    stages[0].append(layout);
    if (activity.glossary && activity.glossary.length) {
      const words = el('div', 'reading-word-help');
      words.append(el('p', 'reading-small', 'Word help — tap a word'));
      const wordList = el('div', 'reading-word-list');
      activity.glossary.forEach(entry => {
        const word = el('details', 'reading-word');
        word.append(el('summary', '', entry.term), el('p', '', entry.definition));
        wordList.append(word);
      });
      words.append(wordList);
      stages[0].append(words);
    }
    const originalLesson = el('p', 'reading-original-lesson');
    originalLesson.append(link('Open the original lesson section', lessonURL(activity)));
    stages[0].append(originalLesson);

    stages[1].append(answer.label, answerHint, evidence.label);
    const starter = el('details', 'reading-starter');
    starter.append(el('summary', '', 'Help me start'), el('p', '', activity.sentenceStarter || kind.starter));
    stages[1].append(starter);
    const attemptNote = el('p', 'reading-small');
    attemptNote.setAttribute('role', 'status');
    const reveal = button('Check my thinking →', () => showStage(2, true));
    const answerActions = el('div', 'reading-actions');
    answerActions.append(button('← Back to reading', () => showStage(0, true), true), reveal);
    stages[1].append(attemptNote, answerActions);

    const feedback = el('section', 'reading-feedback');
    feedback.id = activity.id + '-feedback';
    feedback.tabIndex = -1;
    const reviewAnswer = el('blockquote', 'reading-review-response', record.answer);
    stages[2].append(el('h3', '', 'Your answer'), reviewAnswer);
    feedback.append(el('h3', '', 'Look for these ideas'), list(activity.lookFor, 'reading-look-for'));
    const reviewLabel = el('label', 'reading-self-check');
    const review = el('input');
    review.type = 'checkbox';
    reviewLabel.append(review, el('span', '', 'I checked my answer and improved it if needed.'));
    feedback.append(reviewLabel, el('p', 'reading-small', 'This is your own check, not a teacher mark.'));
    review.addEventListener('change', () => {
      record.reviewed = review.checked && record.feedbackOpen && Boolean(record.answer.trim() && record.evidence.trim());
      save(activity, record);
      refresh();
    });
    stages[2].append(feedback, button('← Improve my answer', () => showStage(1, true), true));
    if (activity.pairPrompt) {
      const pair = el('details', 'reading-pair');
      pair.append(el('summary', '', 'Talk with a partner'), el('p', '', activity.pairPrompt));
      stages[2].append(pair);
    }
    const saved = el('p', 'reading-save-state');
    saved.setAttribute('role', 'status');
    panel.append(saved);
    const tools = el('details', 'reading-tools reading-screen-only');
    tools.append(el('summary', '', 'Print or start again'));
    const actions = el('div', 'reading-actions reading-screen-only');
    ['responded', 'blank'].forEach(mode => {
      const printLink = link(mode === 'responded' ? 'Print my work / save PDF' : 'Print a blank copy', activityURL(activity, mode), 'reading-button reading-button-secondary');
      printLink.target = '_blank';
      printLink.rel = 'noopener';
      printLink.addEventListener('click', event => {
        if (mode === 'responded' && !storageOK) { event.preventDefault(); printCurrentRecord(activity, record); }
      });
      actions.append(printLink);
    });
    const confirmBox = el('div', 'reading-reset-confirm reading-screen-only');
    confirmBox.hidden = true;
    confirmBox.append(el('p', '', 'Clear only this reading activity? Your other course work will stay saved.'));
    const reset = button('Reset this activity', () => {
      confirmBox.hidden = false;
      reset.setAttribute('aria-expanded', 'true');
      confirmButton.focus();
    }, true);
    reset.setAttribute('aria-expanded', 'false');
    const confirmButton = button('Yes, clear this activity', () => {
      record = empty(activity);
      memory.set(activity.id, record);
      try { localStorage.removeItem(prefix + activity.id); } catch (error) { storageOK = false; }
      confirmBox.hidden = true;
      reset.setAttribute('aria-expanded', 'false');
      stageIndex = 0;
      showCard(0, false);
      refresh(true);
      publish(activity.id);
      reset.focus();
    }, true);
    confirmBox.append(confirmButton, button('Keep my work', () => {
      confirmBox.hidden = true;
      reset.setAttribute('aria-expanded', 'false');
      reset.focus();
    }, true));
    actions.append(reset);
    tools.append(actions, confirmBox);
    panel.append(tools);

    function showCard(index, focus) {
      cardIndex = index;
      const card = cards[index];
      const heading = el('h3', '', card.heading);
      heading.tabIndex = -1;
      content.replaceChildren(heading);
      card.paragraphs.forEach(paragraph => {
        const p = el('p', 'reading-prose');
        // Sentence buttons keep the source wording intact and let students bring evidence to their answer.
        const sentences = paragraph.match(/[^.!?]+(?:[.!?]+[”’"']*|$)/g) || [paragraph];
        sentences.forEach(sentence => {
          const text = sentence.trim();
          if (!text) return;
          const choice = button(text, () => {
            record.evidence = text;
            record.reviewed = false;
            if (!record.answer.trim()) record.feedbackOpen = false;
            save(activity, record);
            refresh(true);
          }, true);
          choice.className = 'reading-sentence';
          choice.setAttribute('aria-pressed', String(record.evidence.trim() === text));
          choice.title = 'Use this sentence as my clue';
          p.append(choice, document.createTextNode(' '));
        });
        content.append(p);
      });
      cardButtons.forEach((control, i) => control.setAttribute('aria-current', i === index ? 'true' : 'false'));
      count.textContent = 'Part ' + (index + 1) + ' of ' + cards.length;
      nextCard.textContent = index < cards.length - 1 ? 'Next part →' : 'Write my answer →';
      if (focus) {
        heading.focus({ preventScroll: true });
        cardNav.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }
    function showStage(index, focus) {
      const attempted = Boolean(record.answer.trim() && record.evidence.trim());
      if (index === 2 && !attempted) return;
      if (index === 2 && !record.feedbackOpen) { record.feedbackOpen = true; save(activity, record); }
      stageIndex = index;
      refresh();
      if (focus) {
        const target = index === 0 ? content.querySelector('h3') : index === 1 ? answer.textarea : feedback;
        target.focus({ preventScroll: true });
        steps.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }
    function refresh(replaceValues) {
      if (replaceValues) { answer.textarea.value = record.answer; evidence.textarea.value = record.evidence; }
      answer.printValue.textContent = record.answer || 'No response recorded.';
      evidence.printValue.textContent = record.evidence || 'No response recorded.';
      const attempted = Boolean(record.answer.trim() && record.evidence.trim());
      reviewAnswer.textContent = record.answer;
      if (stageIndex === 2 && (!attempted || !record.feedbackOpen)) stageIndex = 1;
      stages.forEach((stage, index) => { stage.hidden = index !== stageIndex; });
      stepButtons.forEach((control, index) => {
        if (index === stageIndex) control.setAttribute('aria-current', 'step');
        else control.removeAttribute('aria-current');
      });
      stepButtons[2].disabled = !attempted;
      reveal.disabled = !attempted;
      attemptNote.textContent = attempted ? 'Ready to compare your thinking with the key ideas.' : 'Write your answer and add a clue from the reading first.';
      review.checked = record.reviewed;
      clueStatus.textContent = record.evidence.trim() ? '✓ Your clue is saved. You can change it by choosing another sentence.' : 'No clue chosen yet. Tap a useful sentence, or add your own words in Answer.';
      content.querySelectorAll('.reading-sentence').forEach(control => control.setAttribute('aria-pressed', String(control.textContent === record.evidence.trim())));
      updateStatuses();
    }
    [answer, evidence].forEach((field, index) => {
      field.textarea.addEventListener('input', () => {
        record[index === 0 ? 'answer' : 'evidence'] = field.textarea.value;
        record.reviewed = false;
        if (!record.answer.trim() || !record.evidence.trim()) record.feedbackOpen = false;
        save(activity, record);
        refresh();
      });
    });
    views.set(activity.id, { panel, refresh: () => { record = read(activity, true); refresh(true); } });
    showCard(0, false);
    refresh();
    return panel;
  }

  function printSheet(activity, record, blank) {
    const sheet = el('article', 'reading-print-sheet');
    const kind = kinds[activity.mechanic] || kinds.hunt;
    sheet.append(el('p', 'reading-eyebrow', 'Desk Tidy · ' + modules.get(activity.moduleId).title), el('h1', '', activity.title), el('p', '', kind.label + ' · ' + kind.time));
    sheet.append(el('p', 'reading-student-line', 'Name: ________________________    Class: __________    Date: __________'));
    sheet.append(el('h2', '', 'Your challenge'), el('p', '', activity.prompt));
    if (activity.scenario) sheet.append(el('p', 'reading-scenario', activity.scenario));
    if (activity.readingCards) {
      activity.readingCards.forEach(card => {
        sheet.append(el('h2', '', card.heading));
        card.paragraphs.forEach(paragraph => sheet.append(el('p', '', paragraph)));
      });
      sheet.append(link('Full original lesson', lessonURL(activity)));
    } else sheet.append(sourceBlock(activity, 'h2'));
    sheet.append(el('p', '', 'If you need a start: “' + (activity.sentenceStarter || kind.starter) + '”'));
    [[activity.answerLabel || 'Your answer', record.answer], ['The sentence or idea that helped me', record.evidence]].forEach(([title, text]) => {
      sheet.append(el('h2', '', title));
      sheet.append(el('div', blank ? 'reading-blank-lines' : 'reading-print-answer', blank ? '' : (text || 'No response recorded.')));
    });
    if (activity.pairPrompt) sheet.append(el('h2', '', 'Compare and share'), el('p', '', activity.pairPrompt));
    if (!blank && record.feedbackOpen) {
      sheet.append(el('h2', '', 'Review prompts'), list(activity.lookFor, 'reading-look-for'));
    }
    sheet.append(el('p', 'reading-print-review', (blank ? '☐' : record.reviewed ? '☑' : '☐') + ' I checked my answer against the text.'));
    sheet.append(el('p', 'reading-small', 'Reading practice and self-review. This is not a teacher mark or a formal submission.'));
    return sheet;
  }
  function printCurrentRecord(activity, record) {
    const old = document.getElementById('reading-session-print');
    if (old) old.remove();
    const wrap = el('div');
    wrap.id = 'reading-session-print';
    wrap.append(printSheet(activity, record, false));
    document.body.append(wrap);
    document.body.classList.add('reading-session-printing');
    const cleanup = () => {
      document.body.classList.remove('reading-session-printing');
      wrap.remove();
    };
    window.addEventListener('afterprint', cleanup, { once: true });
    window.print();
  }
  function printView(host, activity, blank) {
    document.body.classList.add('reading-print-page');
    const toolbar = el('div', 'reading-actions reading-screen-only');
    toolbar.append(button('Print / save PDF', () => window.print()), link('Return to this activity', activityURL(activity), 'reading-button reading-button-secondary'));
    host.replaceChildren(toolbar, printSheet(activity, read(activity), blank));
    if (!storageOK && !blank) host.prepend(el('p', 'reading-save-state', 'Browser storage is unavailable. Return to the page where you wrote your answer to print it.'));
  }
  function renderBank(host) {
    host.classList.add('reading-bank');
    const query = new URLSearchParams(location.search);
    const selected = activities.find(activity => activity.id === query.get('id'));
    if (selected && ['blank', 'responded'].includes(query.get('print'))) {
      printView(host, selected, query.get('print') === 'blank');
      return;
    }
    const picker = el('details', 'reading-picker');
    picker.open = !selected;
    picker.append(el('summary', '', 'Choose a challenge · spin the wheel or pick a title'));
    const chooser = el('section', 'reading-chooser');
    const wheelWrap = el('div', 'reading-wheel-wrap');
    wheelWrap.setAttribute('aria-hidden', 'true');
    const wheel = el('div', 'reading-wheel');
    const pointer = el('span', 'reading-pointer');
    const wheelCentre = el('span', 'reading-wheel-centre', '?');
    wheelWrap.append(pointer, wheel, wheelCentre);
    const controls = el('div', 'reading-chooser-controls');
    controls.append(el('h2', '', 'What will you investigate?'), el('p', '', 'Choose your module. Spin the wheel, or pick a challenge below.'));
    const label = el('label', 'reading-field');
    label.append(el('span', '', 'Choose a module'));
    const select = el('select');
    select.append(new Option('All modules', 'all'));
    data.modules.forEach(module => select.append(new Option(module.title, module.id)));
    if (selected) select.value = selected.moduleId;
    else if (modules.has(query.get('module'))) select.value = query.get('module');
    label.append(select);
    const live = el('p', 'reading-spin-result', 'Or choose a named activity from the list below.');
    live.setAttribute('role', 'status');
    live.setAttribute('aria-live', 'polite');
    let used = new Set();
    let angle = 0;
    let spinning = false;
    const wheelCount = el('p', 'reading-small');
    const launch = button('Start this challenge →', () => {
      picker.open = false;
      current.scrollIntoView({ behavior: 'auto', block: 'start' });
      current.querySelector('.reading-challenge-title').focus({ preventScroll: true });
    });
    launch.hidden = true;
    const spin = button('Spin for a challenge', () => {
      if (spinning) return;
      let pool = filtered().filter(activity => !used.has(activity.id));
      if (!pool.length) { used = new Set(); pool = filtered(); }
      if (!pool.length) { live.textContent = 'No activities are available for this module.'; return; }
      const picked = pool[Math.floor(Math.random() * pool.length)];
      used.add(picked.id);
      spinning = true;
      launch.hidden = true;
      spin.disabled = true;
      spin.textContent = 'Spinning…';
      select.disabled = true;
      chooser.setAttribute('aria-busy', 'true');
      rows.querySelectorAll('.reading-choice').forEach(choice => choice.setAttribute('aria-disabled', 'true'));
      current.inert = true;
      live.textContent = 'The wheel is spinning. Wait for it to settle…';
      wheelCentre.textContent = '?';
      const wheelActivities = filtered();
      const sectorAngle = 360 / wheelActivities.length;
      const target = (360 - wheelActivities.findIndex(activity => activity.id === picked.id) * sectorAngle) % 360;
      const startAngle = angle;
      const turns = 5 + Math.floor(Math.random() * 3);
      // Land comfortably inside the chosen sector, with a slightly different stop each time.
      const landingRange = Math.min(12, sectorAngle * .22);
      const landing = target + (Math.random() * 2 - 1) * landingRange;
      angle += turns * 360 + ((landing - angle % 360 + 360) % 360);
      const finish = () => {
        wheel.style.transform = 'rotate(' + angle + 'deg)';
        pointer.style.transform = 'rotate(0deg)';
        wheelCentre.textContent = '✓';
        open(picked, false);
        live.textContent = picked.title + ' — ' + (kinds[picked.mechanic] || kinds.hunt).label + '. Your challenge is ready below.';
        spin.disabled = false;
        spin.textContent = 'Spin again';
        select.disabled = false;
        chooser.removeAttribute('aria-busy');
        rows.querySelectorAll('.reading-choice').forEach(choice => choice.removeAttribute('aria-disabled'));
        current.inert = false;
        spinning = false;
        launch.hidden = false;
      };
      const duration = 4800 + Math.random() * 800;
      const distance = angle - startAngle;
      let startTime;
      const pegAngle = 360 / Math.max(12, wheelActivities.length * 2);
      let lastPeg = Math.floor(startAngle / pegAngle);
      let lastClickTime = -Infinity;
      const frame = (now) => {
        if (startTime === undefined) startTime = now;
        const progress = Math.min(1, (now - startTime) / duration);
        // Cubic ease-out starts briskly and continuously loses speed down to a complete stop.
        const position = startAngle + distance * (1 - Math.pow(1 - progress, 3));
        wheel.style.transform = 'rotate(' + position + 'deg)';
        const peg = Math.floor(position / pegAngle);
        if (peg !== lastPeg) {
          lastPeg = peg;
          lastClickTime = now;
        }
        // The pointer flicks as each rim peg passes; the clicks spread out as the wheel slows.
        const flick = Math.max(0, 1 - (now - lastClickTime) / 100);
        pointer.style.transform = 'rotate(' + (-25 * flick) + 'deg)';
        if (progress < 1) window.requestAnimationFrame(frame);
        else finish();
      };
      window.requestAnimationFrame(frame);
    });
    controls.append(label, wheelCount, spin, live, launch);
    chooser.append(wheelWrap, controls);
    const current = el('section', 'reading-current');
    current.id = 'reading-current';
    current.setAttribute('aria-label', 'Current reading challenge');
    current.hidden = true;
    const directory = el('section', 'reading-directory');
    directory.id = 'reading-directory';
    const headingRow = el('div', 'reading-directory-heading');
    bankStatus = el('p', 'reading-progress');
    headingRow.append(el('h2', '', 'Choose a challenge'), bankStatus);
    const rows = el('div');
    directory.append(headingRow, rows);
    picker.append(chooser, directory);
    host.replaceChildren(picker, current);
    function filtered() { return activities.filter(activity => select.value === 'all' || activity.moduleId === select.value); }
    function renderWheel() {
      const choices = filtered();
      const slice = 360 / choices.length;
      const colours = ['#dfecc9', '#f5d97f', '#abd3b5', '#f2ccac', '#c8dcec', '#e4d4eb', '#ece6af'];
      wheel.replaceChildren();
      wheel.style.background = 'conic-gradient(from ' + (-slice / 2) + 'deg, ' + choices.map((activity, i) => colours[i % colours.length] + ' ' + (i * slice) + 'deg ' + ((i + 1) * slice) + 'deg').join(', ') + ')';
      choices.forEach((activity, index) => {
        const degrees = index * slice;
        const radians = degrees * Math.PI / 180;
        const labelText = choices.length > 7 ? String(index + 1) : (activity.wheelLabel || ({ hunt: 'Hunt', repair: 'Repair', decision: 'Decide' }[activity.mechanic]));
        const label = el('span', 'reading-wheel-label reading-wheel-segment-label', labelText);
        label.style.left = (50 + 33 * Math.sin(radians)) + '%';
        label.style.top = (50 - 33 * Math.cos(radians)) + '%';
        label.style.transform = 'translate(-50%, -50%) rotate(' + degrees + 'deg)';
        label.style.fontSize = choices.length > 3 ? '.72rem' : '.9rem';
        wheel.append(label);
      });
      const pegs = Math.max(12, choices.length * 2);
      for (let index = 0; index < pegs; index += 1) {
        const peg = el('span', 'reading-wheel-peg');
        const radians = index * 2 * Math.PI / pegs;
        peg.style.left = (50 + 49 * Math.sin(radians)) + '%';
        peg.style.top = (50 - 49 * Math.cos(radians)) + '%';
        wheel.append(peg);
      }
      angle = 0;
      wheel.style.transform = 'rotate(0deg)';
      wheelCount.textContent = choices.length + ' challenges · no repeats until you have seen them all.';
    }
    function renderRows() {
      renderWheel();
      rows.replaceChildren();
      data.modules.forEach(module => {
        const available = filtered().filter(activity => activity.moduleId === module.id);
        if (!available.length) return;
        const group = el('section', 'reading-module-group');
        group.append(el('h3', '', module.title));
        const ul = el('ul', 'reading-activity-list');
        available.forEach(activity => {
          const li = el('li');
          const choice = link((filtered().findIndex(item => item.id === activity.id) + 1) + '. ' + activity.title, activityURL(activity), 'reading-choice');
          choice.addEventListener('click', event => {
            if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
            event.preventDefault();
            if (spinning) return;
            open(activity, true);
          });
          const meta = el('span', 'reading-row-meta');
          const state = el('span', 'reading-status');
          state.dataset.readingStatus = activity.id;
          meta.append(el('span', '', (kinds[activity.mechanic] || kinds.hunt).label), state);
          li.append(choice, meta);
          ul.append(li);
        });
        group.append(ul);
        rows.append(group);
      });
      updateStatuses();
    }
    function open(activity, focus) {
      views.clear();
      current.replaceChildren(challenge(activity));
      const returnLink = link('Choose another challenge', '#reading-directory');
      returnLink.addEventListener('click', () => { picker.open = true; });
      current.append(returnLink);
      current.hidden = false;
      host.closest('main').classList.add('reading-has-activity');
      const url = new URL(location.href);
      url.searchParams.set('id', activity.id);
      if (select.value !== 'all') url.searchParams.set('module', select.value);
      else url.searchParams.delete('module');
      url.searchParams.delete('print');
      history.replaceState(null, '', url);
      updateStatuses();
      if (focus) {
        picker.open = false;
        current.scrollIntoView({ behavior: 'auto', block: 'start' });
        const title = current.querySelector('h2');
        if (title) title.focus({ preventScroll: true });
      }
    }
    select.addEventListener('change', () => {
      used = new Set();
      views.clear();
      current.replaceChildren();
      current.hidden = true;
      host.closest('main').classList.remove('reading-has-activity');
      launch.hidden = true;
      const url = new URL(location.href);
      url.searchParams.delete('id');
      url.searchParams.delete('print');
      if (select.value !== 'all') url.searchParams.set('module', select.value);
      else url.searchParams.delete('module');
      history.replaceState(null, '', url);
      live.textContent = 'Module selected. Spin or choose a challenge below.';
      renderRows();
    });
    renderRows();
    if (selected) open(selected, false);
  }
  function renderInline() {
    activities.forEach(activity => {
      if (activity.placement === 'bank') return;
      const section = document.getElementById(activity.sectionId);
      if (!section || !section.matches('.textbook-section') || document.getElementById(activity.id)) return;
      const heading = section.querySelector('h2');
      if (!heading) return;
      const paragraphs = Array.from(section.querySelectorAll('p'));
      const theory = paragraphs.find(paragraph => !(paragraph.classList.contains('kicker') || paragraph.classList.contains('section-kicker')) && (heading.compareDocumentPosition(paragraph) & Node.DOCUMENT_POSITION_FOLLOWING));
      const source = theory || heading;
      if (!source.id) source.id = activity.sectionId + '-reading-text';
      source.tabIndex = -1;
      source.classList.add('reading-source-target');
      const details = el('details', 'reading-practice');
      details.id = activity.id;
      const summary = el('summary');
      const label = el('span', 'reading-summary-title', 'Read with a purpose: ' + activity.title);
      const meta = el('span', 'reading-summary-meta', (kinds[activity.mechanic] || kinds.hunt).label + ' · ' + (kinds[activity.mechanic] || kinds.hunt).time);
      const state = el('span', 'reading-status');
      state.dataset.readingStatus = activity.id;
      summary.append(label, meta, state);
      details.append(summary, challenge(activity, { inline: true, sourceId: source.id }));
      details.querySelector('.reading-tools .reading-actions').append(link('All reading challenges', bankURL.href, 'reading-link'));
      heading.after(details);
    });
    function revealHash() {
      let id;
      try { id = decodeURIComponent(location.hash.slice(1)); } catch (error) { return; }
      const target = document.getElementById(id);
      const details = target && (target.matches('.reading-practice') ? target : target.closest('.reading-practice'));
      if (details) details.open = true;
    }
    revealHash();
    window.addEventListener('hashchange', revealHash);
  }
  window.DeskTidyReading = {
    storagePrefix: prefix,
    getProgress: progress,
    getStatus: id => {
      const activity = activities.find(item => item.id === id);
      return activity ? status(activity) : null;
    },
    refresh: () => {
      activities.forEach(activity => read(activity, true));
      views.forEach(view => view.refresh());
      publish(null);
    }
  };
  function initialise() {
    const host = document.querySelector('[data-reading-bank]');
    if (host) renderBank(host);
    else renderInline();
    updateStatuses();
  }
  // The lesson engine enhances the original theory at DOMContentLoaded. Run
  // after its earlier listener so those enhancements cannot target new prompts.
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialise, { once: true });
  else initialise();
  window.addEventListener('storage', event => {
    if (event.key && !event.key.startsWith(prefix)) return;
    activities.forEach(activity => { if (!event.key || event.key === prefix + activity.id) read(activity, true); });
    views.forEach(view => view.refresh());
    publish(event.key ? event.key.slice(prefix.length) : null);
  });
}());
