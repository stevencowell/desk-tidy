(function () {
  'use strict';

  const moduleKey = window.LESSON_CONFIG?.resetLabel || '';
  const moduleData = {
    'Weeks 1-2': {
      presentation: '../presentations/desk-tidy-weeks-1-2.pptx',
      folio: '../desk-tidy-folio.html#folio-1',
      slices: [[0, 3], [3, 7], [7, 12]],
      sections: [
        { id: 'design-brief', items: [
          ['Why should a design brief avoid prescribing one finished solution?', 'It leaves room for original responses to the same need', ['It removes the need for criteria', 'It guarantees every product is identical', 'It replaces user research'], 'A brief defines the problem and intended outcome while students develop and justify their own solutions.'],
          ['Which evidence best reveals a user\'s storage need?', 'A list of the items used and how often they need access', ['A copied organiser image', 'The price of an unrelated product', 'A favourite colour alone'], 'Real items and work habits reveal the storage, access and space requirements the design must address.'],
          ['What makes “fits the intended desk space” useful as a criterion?', 'It can be checked against the real workspace', ['It describes a personal opinion only', 'It fixes every compartment size', 'It avoids testing'], 'A useful criterion can be observed, measured or tested in the intended context.'],
          ['Why should storage capacity and access be separate considerations?', 'An item may fit but still be awkward to remove', ['Capacity automatically proves stability', 'Access is only an appearance issue', 'Both terms mean colour'], 'A compartment can hold an item without allowing the user to reach it efficiently.'],
          ['Which question best tests whether a feature belongs in the design?', 'How does this feature help the intended user?', ['Can I copy it quickly?', 'Does another student have it?', 'Will it make the folio longer?'], 'Every feature should respond to the brief, the user or a measurable criterion.'],
          ['Why record the intended user before selecting a layout?', 'The layout should follow the user\'s items and work habits', ['The user decides workshop rules', 'The layout makes drawings unnecessary', 'The user supplies fixed dimensions'], 'User evidence should guide compartment relationships rather than being added after the design is chosen.'],
          ['Which is the strongest evidence that a criterion has been met?', 'A repeatable test result linked to that criterion', ['A vague claim that it looks good', 'A copied sentence', 'The number of sketches produced'], 'A judgement is strongest when it names the test, result and criterion.']
        ]},
        { id: 'workshop-safety', items: [
          ['What is risk in a workshop context?', 'The likelihood and consequence of harm from a hazard', ['A source with potential to cause harm', 'A list of tools', 'A finished product fault only'], 'Risk combines how likely harm is with how serious its consequence could be.'],
          ['Why are guards and secure workholding stronger than PPE alone?', 'They control exposure closer to the hazard', ['They make training optional', 'They permit damaged tools', 'They remove the need to stop'], 'Controls closer to the source reduce reliance on a person reacting perfectly.'],
          ['When should a student reassess risk?', 'When the task, tool, material or conditions change', ['Only after an injury', 'Only at the end of term', 'Never after teacher approval'], 'Risk management is continuous because conditions can change during practical work.'],
          ['What should happen before using an unfamiliar tool?', 'Stop and obtain teacher instruction and authorisation', ['Copy another student', 'Test it on finished work', 'Use extra force carefully'], 'Training, demonstration and authorisation are required before unfamiliar equipment is used.'],
          ['Why is a tidy work area a safety control?', 'It reduces trip, obstruction and uncontrolled-material hazards', ['It makes PPE unnecessary', 'It eliminates every workshop hazard', 'It is only for presentation'], 'Order supports safe movement, stable work and clear access to tools and exits.'],
          ['Which response shows active risk control?', 'Stop, isolate the issue and report it before continuing', ['Work around the issue quickly', 'Hide the fault', 'Ask a classmate to take the risk'], 'Stopping and reporting prevents continued exposure while the hazard is assessed.']
        ]},
        { id: 'materials', items: [
          ['Why compare material samples before deciding?', 'Observed properties support an evidence-based choice', ['Samples guarantee the cheapest option', 'The first sample must be selected', 'Testing removes the brief'], 'Sample investigation connects material properties with the product requirements.'],
          ['Which observation distinguishes solid pine from MDF?', 'Pine shows natural grain while MDF has a manufactured structure', ['MDF always has visible growth rings', 'Pine has no fibre direction', 'Both have identical edges'], 'Solid timber and manufactured board differ in structure, appearance and working behaviour.'],
          ['Why does edge behaviour matter in a Desk Tidy?', 'Edges affect shaping, joining and finish quality', ['Edges determine the user', 'Edges replace dimensions', 'Edges do not affect production'], 'Material edges can respond differently to cutting, sanding and finishing.'],
          ['What is a responsible way to select stock?', 'Match suitable pieces to parts while reducing avoidable waste', ['Use the largest board for every part', 'Ignore defects and grain', 'Discard all offcuts immediately'], 'Thoughtful layout and stock selection conserve material while maintaining quality.'],
          ['Why is durability part of sustainability?', 'A longer-lasting product may need fewer replacements', ['Durability means using more material', 'It removes the need for repair', 'It applies only to colour'], 'Service life, maintenance and repair all affect the resources used over time.']
        ]}
      ]
    },
    'Weeks 3-4': {
      presentation: '../presentations/desk-tidy-weeks-3-4.pptx', folio: '../desk-tidy-folio.html#folio-2', slices: [[0, 3], [3, 8], [8, 12]], sections: [
        { id: 'research-concepts', items: [
          ['What should research reveal about how an organiser was created?', 'How designer, producer and manufacturer decisions shaped the product or system', ['Only its retail price', 'Only the final colour', 'Only the product name'], 'Research should connect design decisions with the materials, processes and production roles used to make the product.'],
          ['What should annotations beside a concept sketch explain?', 'How features respond to the user, criteria and manufacture', ['Only the colour name', 'The final mark', 'Another student\'s opinion'], 'Annotations make the reasoning behind features visible and testable.'],
          ['Why generate four genuinely different concepts?', 'Different arrangements allow meaningful comparison before commitment', ['Four copies prove accuracy', 'It removes teacher approval', 'It fixes exact dimensions'], 'Variation expands the solution space and exposes trade-offs.'],
          ['Which change creates a genuine alternative?', 'Reorganising compartment relationships for a different user priority', ['Redrawing the same form darker', 'Changing only the title', 'Tracing the reference image'], 'A genuine alternative changes how the solution responds to the problem.'],
          ['Why include quick dimensions or proportions in concept development?', 'They help test whether the arrangement is realistic', ['They make working drawings unnecessary', 'They permit scaling from a picture', 'They guarantee material choice'], 'Early proportion checks expose impractical layouts before detailed development.'],
          ['What is the best use of feedback during concept development?', 'Revise a feature and record why the change improves the response', ['Accept every suggestion automatically', 'Erase all earlier evidence', 'Use feedback only after finishing'], 'Feedback is useful when it is evaluated against the brief and documented.'],
          ['What is the safest ethical and legal response before reusing an online image, plan or design?', 'Record the source, check copyright or licence conditions and ask when permission is unclear', ['Assume public access means permission', 'Remove the creator name', 'Reuse it if it looks educational'], 'Public access is not automatic permission; attribution, copyright, licences and permission must be considered.']
        ]},
        { id: 'compare-concepts', items: [
          ['Why should a decision matrix use the same criteria for every concept?', 'A common basis makes the comparison fair', ['It guarantees the teacher\'s favourite wins', 'It removes the need for judgement', 'It hides trade-offs'], 'Consistent criteria make scores comparable across alternatives.'],
          ['What should a high score in a decision matrix represent?', 'Strong evidence that the concept meets the named criterion', ['The concept drawn first', 'The most colourful page', 'The largest number of features'], 'Scores need evidence and must connect directly to the criterion.'],
          ['Why may the highest total still need discussion?', 'Weighting, evidence quality and serious weaknesses can affect the decision', ['Totals are never useful', 'The matrix should be ignored', 'The lowest score always wins'], 'A matrix supports judgement; it does not replace reasoned interpretation.'],
          ['Why create a prototype, model or sample before final drawings?', 'To test an uncertain feature and refine the concept using evidence', ['To replace all research', 'To avoid teacher approval', 'To make the final product immediately'], 'A focused prototype, model or sample makes an idea testable before final decisions are locked in.'],
          ['What should be recorded after teacher feedback?', 'The decision, the reason and any approved design change', ['Only the teacher\'s initials', 'A new mark estimate', 'Nothing once a concept is selected'], 'A clear decision trail shows how evidence and feedback shaped the approved design.']
        ]},
        { id: 'respectful-design', items: [
          ['Why is attribution important when learning from a cultural source?', 'It acknowledges where knowledge or inspiration came from', ['It grants automatic permission to copy', 'It makes the design traditional', 'It replaces consultation'], 'Attribution recognises provenance but does not remove the need for permission and respectful use.'],
          ['What should a student do when cultural permission is unclear?', 'Pause and seek teacher guidance before using the element', ['Assume public images are free to copy', 'Change one colour and proceed', 'Remove the source note'], 'Uncertainty is a reason to stop and clarify, not to guess.'],
          ['Which approach avoids tokenism?', 'Engage with meaning, context and source rather than adding a decorative motif', ['Add any pattern at the end', 'Copy a symbol without context', 'Use culture only as a theme label'], 'Respectful engagement is grounded in meaning and relationships, not surface decoration.'],
          ['Why can a publicly visible image still require care?', 'Visibility does not establish cultural authority or permission to reuse it', ['All online images are public domain', 'Credit always grants permission', 'Schoolwork has no responsibilities'], 'Access to an image is not the same as authority to reproduce cultural knowledge.'],
          ['What is the safest design decision if a restricted symbol cannot be verified?', 'Do not use it and develop an original alternative', ['Use it without attribution', 'Simplify it slightly', 'Ask another student to approve it'], 'When authority cannot be established, an original response avoids appropriation.'],
          ['How should cultural research appear in the folio?', 'With source, context, reflection and the resulting design decision', ['As an unlabelled screenshot', 'As copied decoration only', 'As a claim of ownership'], 'A transparent evidence trail shows what was learned and how it affected the design.']
        ]}
      ]
    },
    'Weeks 5-6': {
      presentation: '../presentations/desk-tidy-weeks-5-6.pptx', folio: '../desk-tidy-folio.html#folio-5', slices: [[0, 3], [3, 6], [6, 12]], sections: [
        { id: 'working-drawings', items: [
          ['Why are several orthographic views needed?', 'Each view communicates different component relationships without perspective', ['One view always shows every hidden detail', 'They replace written dimensions', 'They allow parts to be guessed'], 'Related front, top and side views work together to communicate the approved form.'],
          ['Which information controls production: the apparent picture size or written dimensions?', 'The written millimetre dimensions', ['The screen zoom level', 'The printed image width', 'The sketch border'], 'Written dimensions state the intended size and must be checked across views.'],
          ['What does a 1:10 drawing scale mean?', 'The drawn length is one tenth of the intended size', ['All dimensions are written in centimetres', 'The product must be ten millimetres high', 'The drawing can be measured instead of read'], 'Scale describes the representation; written millimetre dimensions still control production.'],
          ['Why compare matching features across views?', 'A mismatch can produce conflicting production information', ['It improves colour choice', 'It removes the need for labels', 'It changes the brief'], 'Views must agree or the maker cannot know which information is correct.'],
          ['What is the main role of an isometric drawing?', 'To communicate the overall three-dimensional form', ['To replace all orthographic views', 'To supply hidden dimensions automatically', 'To authorise production'], 'Isometric and orthographic drawings serve complementary communication purposes.'],
          ['When is a drawing set ready for production?', 'After it matches the approved design, includes required information and passes teacher checks', ['As soon as one view is sketched', 'When it resembles the reference photo', 'Before dimensions are added'], 'Complete, consistent and approved drawings are a quality gate before material is marked.'],
          ['Why add short notes to a working drawing?', 'They clarify information that geometry and dimensions alone may not show', ['They decorate empty space', 'They replace accurate lines', 'They permit unapproved changes'], 'Notes should resolve ambiguity and support accurate manufacture.']
        ]},
        { id: 'cutting-schedule', items: [
          ['What must every cutting-list entry identify?', 'Part, quantity, material and approved dimensions', ['Only a part colour', 'Only the total cost', 'The final evaluation'], 'A cutting list translates the approved drawing into complete part information.'],
          ['Why compare the cutting list back to every drawing view?', 'To find missing parts, wrong quantities or conflicting dimensions', ['To choose a new user', 'To avoid teacher approval', 'To change the scale'], 'Cross-checking prevents planning errors from becoming material waste.'],
          ['What is a milestone in a production schedule?', 'A significant checked point that confirms readiness to continue', ['Any spare lesson', 'A decorative timeline label', 'A guessed completion date'], 'Milestones such as approved drawings or a successful dry fit act as quality gates.'],
          ['Why place dry fitting before assembly?', 'Fit and alignment problems can be corrected before adhesive makes changes difficult', ['Dry fitting applies the finish', 'Assembly must happen first', 'It removes the need for clamps'], 'The sequence protects quality by checking reversible conditions before commitment.'],
          ['What is contingency time for?', 'Realistic delay, correction or extra checking', ['Rushing the first stages', 'Skipping milestones', 'Changing the brief without approval'], 'Contingency makes the plan resilient without lowering quality expectations.'],
          ['Why should shared tools affect a schedule?', 'Access constraints can change when a task can realistically occur', ['They change the approved dimensions', 'They remove safety requirements', 'They decide the preferred concept'], 'A realistic schedule accounts for people, resources and dependencies.'],
          ['When should a student move to the next production stage?', 'When the current quality gate is met and the next stage is approved', ['When the calendar reaches a date regardless of quality', 'When another student moves on', 'As soon as one part is complete'], 'Progress depends on checked readiness, not time alone.']
        ]},
        { id: 'accurate-markout', items: [
          ['Why measure related features from one datum?', 'It reduces accumulated error from inconsistent starting edges', ['It makes the rule longer', 'It changes material properties', 'It removes the waste side'], 'A shared reference keeps positions and component relationships consistent.'],
          ['What is parallax when reading a rule?', 'A viewing-angle error that makes a mark appear aligned with the wrong scale point', ['A joint gap', 'A surface finish fault', 'A scheduling delay'], 'Looking directly above the scale helps prevent parallax error.'],
          ['Why mark the waste side before cutting?', 'To protect the required material from being removed', ['To replace measuring', 'To identify the user', 'To authorise the tool'], 'Waste marking clarifies which side of the line may be removed.'],
          ['Why compare matching components during mark-out?', 'Related parts must agree before irreversible cutting', ['They must have different lengths', 'It improves the finish colour', 'It removes the drawing'], 'Early comparison catches inconsistencies while they are still easy to correct.']
        ]}
      ]
    },
    'Weeks 7-8': {
      presentation: '../presentations/desk-tidy-weeks-7-8.pptx', folio: '../desk-tidy-folio.html#folio-8', slices: [[0, 3], [3, 6], [6, 12]], sections: [
        { id: 'cutting-shaping', items: [
          ['Why cut on the waste side of a line?', 'It preserves material for controlled refinement to the final size', ['It removes the datum', 'It makes checking unnecessary', 'It guarantees a square cut'], 'Leaving the line protects the intended dimension and allows gradual correction.'],
          ['Why secure work in the demonstrated setup?', 'Stable work improves control, accuracy and hand safety', ['It permits unfamiliar tools', 'It changes the drawing scale', 'It replaces teacher supervision'], 'A bench hook or vice supports controlled tool use when demonstrated for the task.'],
          ['What should happen if a saw cut begins to wander?', 'Stop, diagnose the cause and seek guidance before correction', ['Force the saw back immediately', 'Hide the error with finish', 'Continue beyond the line'], 'Early stopping prevents a small deviation becoming an unrecoverable fault.'],
          ['Why check matching parts often while shaping?', 'Small differences can create larger fit and alignment problems later', ['Matching parts should be random', 'Only appearance matters', 'Checks slow production without benefit'], 'Regular comparison supports consistency before assembly.'],
          ['What does controlled refinement mean?', 'Remove small amounts and check progress against the approved information', ['Remove all material in one pass', 'Sand until the mark disappears without measuring', 'Change dimensions to suit the error'], 'Gradual work protects accuracy and reduces the chance of overcutting.'],
          ['When may an unfamiliar correction be attempted?', 'After teacher guidance and approval', ['Whenever a classmate suggests it', 'Only on the finished product', 'Without securing the part'], 'Corrections can introduce new hazards or faults and must be teacher-directed.'],
          ['Which check best supports a square component?', 'Compare the edge with the approved checking tool and drawing', ['Judge it from across the room', 'Use the finish as a guide', 'Count the tool strokes'], 'Quality is confirmed with appropriate tools and reference information.']
        ]},
        { id: 'joint-choices', items: [
          ['What is the main alignment limitation of a butt joint?', 'It relies heavily on square edges and secure positioning', ['It always includes a locating recess', 'It uses hidden cylindrical connectors', 'It cannot use adhesive'], 'A butt joint provides little mechanical location unless the parts are accurately prepared and held.'],
          ['How can a rebate assist assembly?', 'Its recess provides a locating seat for the connected part', ['It removes the need for accuracy', 'It guarantees any dimension', 'It is always invisible'], 'A well-formed rebate can improve location and glue area.'],
          ['What must be accurate for a dowel joint to align correctly?', 'Matching hole positions and orientation', ['Only the finish colour', 'The number of sketches', 'The desk location'], 'Misaligned dowel holes can prevent assembly or pull components out of position.'],
          ['Why is the strongest joint not automatically the best choice?', 'Suitability also depends on parts, appearance, skill, tools and approved design', ['Strength never matters', 'All joints behave identically', 'The cheapest joint must win'], 'Joint selection is a trade-off linked to the actual design context.'],
          ['What evidence supports a joint choice?', 'A reasoned link between the joint features and the component relationship', ['A copied label', 'A guess after assembly', 'The joint used by another student'], 'A justified choice explains why the joint suits the design and production conditions.'],
          ['Why test a joint on scrap when directed?', 'It reveals fit and process issues before the project parts are committed', ['It authorises every machine', 'It changes the project dimensions', 'It replaces dry fitting'], 'A test piece provides low-risk evidence before irreversible work.'],
          ['Who determines the approved joint and process for the project?', 'The approved drawing and teacher direction', ['An unrelated online video', 'The nearest student', 'The finished reference image alone'], 'Online learning supports theory but does not override project authority.']
        ]},
        { id: 'dry-fit-glue', items: [
          ['What is the purpose of a dry fit?', 'To check fit, order, squareness and clamp access before glue', ['To apply the finish', 'To hide joint gaps', 'To replace drawings'], 'Dry fitting keeps adjustments reversible before adhesive is introduced.'],
          ['Why plan clamp positions before applying glue?', 'The assembly must be held accurately while access and open time are limited', ['Clamps change material type', 'More clamps always fix poor joints', 'Planning removes cleanup'], 'A rehearsed clamp setup supports alignment without rushed decisions.'],
          ['What should happen when a dry fit reveals a gap?', 'Diagnose the cause and seek approval for the correction', ['Use extra glue to fill it', 'Force the parts together', 'Proceed and hide it later'], 'Glue is not a substitute for accurate fit and forcing can damage the work.'],
          ['Why record an assembly checkpoint photograph?', 'It provides evidence of fit, order and workmanship before later stages hide details', ['It replaces the product', 'It grants permission to proceed', 'It is only decorative'], 'Timely evidence shows the process and quality decisions, not only the final appearance.']
        ]}
      ]
    },
    'Weeks 9-10': {
      presentation: '../presentations/desk-tidy-weeks-9-10.pptx', folio: '../desk-tidy-folio.html#folio-11', slices: [[0, 4], [4, 8], [8, 12]], sections: [
        { id: 'clear-finish', items: [
          ['Why sand through the approved grit sequence?', 'Each stage refines scratches left by the previous stage', ['The coarsest grit creates the final surface', 'Skipping grits improves consistency', 'Grit choice changes the brief'], 'Progressive sanding prepares an even surface without relying on the finish to hide faults.'],
          ['Why inspect under good light before finishing?', 'Roughness, scratches, glue and dust are easier to identify', ['Light cures every finish', 'Inspection replaces sanding', 'It changes the grain direction'], 'A finish can highlight preparation faults, so they should be corrected first.'],
          ['What controls the exact finish application?', 'Teacher demonstration and the product information', ['An unrelated video', 'Another student\'s project', 'A guessed drying time'], 'The approved school process and product information are authoritative.'],
          ['Why should the project remain undisturbed while drying or curing?', 'Handling can mark the surface and affect performance', ['It changes the design criteria', 'It removes the need for ventilation', 'It increases storage capacity'], 'Protection during drying preserves coverage and surface quality.'],
          ['What should a student do after noticing a run or pooled finish?', 'Stop and seek teacher guidance before attempting a correction', ['Wipe it with any material', 'Add more finish immediately', 'Hide it in photographs'], 'Unapproved correction can worsen the fault or introduce safety risks.'],
          ['Why is one approved coat not permission to add more?', 'The authorised finish system controls product use and quality expectations', ['Extra coats always reduce durability', 'Coats have no effect', 'The colour decides the number'], 'Students follow the verified unit requirement rather than improvising product use.']
        ]},
        { id: 'functional-testing', items: [
          ['Why test with the intended stationery?', 'The product must work with the real items named in the brief', ['Any objects give identical evidence', 'Empty testing proves capacity', 'Appearance replaces function'], 'Authentic items make capacity and access tests relevant to the user.'],
          ['What separates evidence from opinion?', 'Evidence is observable, measurable or shown clearly', ['Evidence is always positive', 'Opinion includes millimetres', 'Evidence hides faults'], 'A test observation or photograph supports a judgement more strongly than a vague preference.'],
          ['How should stability be tested?', 'On a flat surface while intended items are added and removed', ['By holding the product in the air', 'Before assembly', 'Only by looking at a photograph'], 'The test should reproduce realistic use and allow rocking or tipping to be observed.'],
          ['Why diagnose a fault before proposing an improvement?', 'The change should address the likely cause rather than the symptom alone', ['Every fault needs the same repair', 'Diagnosis removes teacher approval', 'Improvements are only decorative'], 'Cause-and-effect reasoning makes improvement suggestions realistic and relevant.'],
          ['What is a fair way to compare the result with criteria?', 'Use the same defined test conditions and record specific observations', ['Change the criteria after testing', 'Ignore unexpected results', 'Use another student\'s product'], 'Consistent conditions support honest comparison with the original intentions.'],
          ['What should happen before altering a finished product after testing?', 'Discuss the evidence and obtain teacher approval', ['Force the change immediately', 'Remove the test record', 'Copy another solution'], 'Any adjustment may affect safety, quality or assessment evidence and remains teacher-controlled.']
        ]},
        { id: 'evaluation-reflection', items: [
          ['What structure creates a strong evaluation statement?', 'Criterion, evidence, judgement and improvement', ['Opinion, colour and mark', 'Photo without explanation', 'Copied conclusion'], 'A strong evaluation traces the intended result to evidence and a reasoned judgement.'],
          ['Why identify both successes and faults?', 'Balanced evidence shows accurate judgement and useful learning', ['Faults must be hidden', 'Only success affects criteria', 'Evaluation is advertising'], 'Honest evaluation is more credible and supports realistic improvement.'],
          ['What makes an improvement realistic?', 'It responds to evidence and considers time, materials, skill and approval', ['It promises a perfect result', 'It changes every feature', 'It ignores the cause'], 'A useful improvement is specific, feasible and connected to the diagnosed issue.'],
          ['Why justify material and process choices in the evaluation?', 'They shaped performance, appearance, waste and manufacture', ['They are unrelated to the product', 'They replace testing', 'They determine the user automatically'], 'Design decisions create trade-offs that should be judged against evidence.'],
          ['What should a presentation of the design journey include?', 'Selected evidence arranged to explain decisions, making and testing', ['Every photo without labels', 'Only the finished product', 'Another student\'s drawings'], 'A logical evidence sequence communicates how the outcome developed and why.'],
          ['What is the purpose of reflection?', 'To identify learning, challenge, response and next-step growth', ['To rewrite the brief', 'To claim there were no problems', 'To predict a mark'], 'Reflection focuses on how the student\'s understanding and skills changed.']
        ]}
      ]
    }
  };

  const data = moduleData[moduleKey];
  if (!data || !Array.isArray(window.MC_QUESTIONS)) return;

  const videoLibrary = window.DESK_TIDY_VIDEO_LIBRARY;
  if (!videoLibrary || !Array.isArray(videoLibrary.sections)) {
    throw new Error('The verified Desk Tidy video library did not load.');
  }
  const videoBySection = new Map(videoLibrary.sections.map(entry => [entry.sectionId, entry]));
  const matchedVideoIds = videoLibrary.sections
    .filter(entry => entry.outcome === 'MATCHED' && entry.video)
    .map(entry => entry.video.id);
  if (new Set(matchedVideoIds).size !== matchedVideoIds.length) {
    throw new Error('Each matched Desk Tidy video must be used for exactly one theory section.');
  }

  const escapeMarkup = value => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const sectionActivities = {
    'design-brief': ['brief-to-criteria', 'Turn the brief into testable criteria'],
    'workshop-safety': ['hazard-risk-control-chain', 'Build a hazard-risk-control chain'],
    'materials': ['materials-evidence-sort', 'Sort material evidence from unsupported claims'],
    'research-concepts': ['research-to-four-concepts', 'Sequence research into four original concepts'],
    'compare-concepts': ['concept-evidence-decisions', 'Make evidence-led concept decisions'],
    'respectful-design': ['respectful-design-research', 'Check cultural safety in design research'],
    'working-drawings': ['working-drawing-language', 'Retrieve the language of working drawings'],
    'cutting-schedule': ['production-plan-sequence', 'Build a workable production sequence'],
    'accurate-markout': ['datum-stop-check', 'Make the datum stop-or-proceed check'],
    'cutting-shaping': ['controlled-cutting-routine', 'Sequence a controlled cut'],
    'joint-choices': ['joint-detective', 'Match joint evidence to butt, rebate or dowel'],
    'dry-fit-glue': ['dry-fit-to-surface', 'Sequence dry fitting, assembly and surface preparation'],
    'clear-finish': ['finish-readiness-inspection', 'Inspect readiness for the clear finish'],
    'functional-testing': ['functional-test-builder', 'Match each criterion to a functional test'],
    'evaluation-reflection': ['evaluation-evidence-check', 'Strengthen evaluation, presentation and reflection']
  };

  function questionFromTuple(tuple, sectionId, index) {
    const [question, correctText, wrong, why] = tuple;
    const rotation = index % 4;
    const options = [...wrong];
    options.splice(rotation, 0, correctText);
    return {
      question,
      options,
      correct: rotation,
      hint: `Return to the precise theory section “${document.getElementById(sectionId)?.querySelector('h2')?.textContent || sectionId}” and identify the decision being explained.`,
      strongHint: why,
      feedback: options.map((option, optionIndex) => optionIndex === rotation ? why : `Not quite. The section supports “${correctText}”. ${why}`)
    };
  }

  const original = window.MC_QUESTIONS.slice();
  const expanded = [];
  data.sections.forEach((section, sectionIndex) => {
    const [start, end] = data.slices[sectionIndex];
    const existing = original.slice(start, end);
    const additions = section.items.map((item, index) => questionFromTuple(item, section.id, index));
    const group = existing.concat(additions);
    if (group.length !== 10) throw new Error(`${moduleKey} ${section.id} must contain exactly 10 checks; found ${group.length}.`);
    expanded.push(...group);
  });
  window.MC_QUESTIONS = expanded;
  window.LESSON_CONFIG.storageKey = moduleKey === 'Weeks 3-4'
    ? window.LESSON_CONFIG.storageKey.replace(/-v\d+$/, '-v3')
    : window.LESSON_CONFIG.storageKey.replace(/-v1$/, '-v2');

  const overview = document.querySelector('main .lesson-overview');
  if (overview) {
    const support = document.createElement('section');
    support.className = 'card module-support-panel screen-only';
    support.innerHTML = moduleKey === 'Weeks 1-2'
      ? `<div><p class="section-kicker">Project unit and evidence</p><h2>Use the project unit and save evidence</h2><p>Use the Desk Tidy Project Unit alongside the module, then open the folio when your evidence is ready.</p></div><div class="button-row"><a class="primary-button" href="../Desk-Tidy-Project-Unit.pdf" target="_blank" rel="noopener">Open Project Unit</a><a class="secondary-button" href="${data.folio}">Open mapped folio evidence</a></div>`
      : `<div><p class="section-kicker">Module learning pack</p><h2>Preview, learn and save evidence</h2><p>Download the eight-slide student presentation, then use the linked folio evidence card when your work is ready.</p></div><div class="button-row"><a class="primary-button" href="${data.presentation}" download>Download presentation</a><a class="secondary-button" href="${data.folio}">Open mapped folio evidence</a></div>`;
    overview.insertAdjacentElement(moduleKey === 'Weeks 1-2' ? 'afterend' : 'beforebegin', support);
  }

  if (location.pathname.includes('/weeks9-10/')) {
    const finalNext = document.querySelector('.completion-card .week-switcher .next');
    if (finalNext) {
      finalNext.href = '../index.html#modules';
      finalNext.textContent = 'All modules →';
    }
  }

  const visualPlacements = [
    { id: 'VIS-DT-001', section: 'design-brief', file: 'section-01-desk-tidy-reference.webp', alt: 'Illustrative timber Desk Tidy with a wide front pocket, tall back panel and smaller side compartments.', caption: 'This authorised reference image gives project context only; it is not a construction drawing or a design to copy.', notice: 'Notice the different storage zones. Which user needs could each zone address?', replace: '.plan-figure', compact: true },
    { id: 'VIS-DT-002', section: 'workshop-safety', file: 'section-02-hierarchy-of-controls-generated.webp', alt: 'Six-level hierarchy diagram showing elimination, substitution, isolation, engineering controls, administrative controls and safety glasses as PPE.', caption: 'The hierarchy moves from removing the hazard towards controls that rely more on people; PPE is the final layer.', notice: 'Notice how the strongest levels act on the hazard before exposure occurs.', after: '.plan-layout' },
    { id: 'VIS-DT-003', section: 'materials', file: 'section-03-radiata-pine-mdf.webp', alt: 'Radiata pine sample beside MDF, showing natural grain on the pine and a uniform fibreboard surface on the MDF.', caption: 'Radiata pine shows natural grain and end grain; MDF has a uniform face and fine fibre edge.', notice: 'Notice the surface, grain and edge differences that would affect shaping, sanding and finishing.', afterParagraph: 2, remove: '.lesson-visual' },
    { id: 'VIS-DT-004', section: 'research-concepts', file: 'section-04-four-concept-sketches.webp', alt: 'Open sketchbook with four different graphite-and-marker concepts for a small desk organiser.', caption: 'Four early concepts vary in form and compartment layout; none is an approved construction design.', notice: 'Notice at least two meaningful differences between every concept.', afterParagraph: 3, remove: '.plan-figure', singlePlan: true },
    { id: 'VIS-DT-005', section: 'compare-concepts', file: 'section-05-concept-comparison-matrix.webp', alt: 'Four organiser concept cards beside a blank four-criterion comparison matrix.', caption: 'A comparison matrix keeps the same criteria visible while each concept is considered.', notice: 'Notice that no winner is preselected; evidence should drive the preferred concept.', afterParagraph: 2 },
    { id: 'VIS-DT-006', section: 'respectful-design', file: 'section-06-respectful-research-workflow.webp', alt: 'Four-stage workflow showing research, listening, attribution and an original design response without cultural motifs.', caption: 'Respectful learning begins with credible sources and authorised voices, records context and attribution, then develops an original response.', notice: 'Notice the separation between learning from knowledge and copying cultural imagery.', afterParagraph: 3 },
    { id: 'VIS-DT-007', section: 'working-drawings', file: 'section-07-orthographic-view-relationship.webp', alt: 'Generic stepped block linked by projection lines to matching front, top and side views.', caption: 'Orthographic views flatten the same form from different directions; the isometric view helps connect them.', notice: 'Notice which edges align across the front, top and side views.', afterParagraph: 2, remove: '.lesson-visual' },
    { id: 'VIS-DT-008', section: 'cutting-schedule', file: 'section-08-drawing-list-schedule-flow.webp', alt: 'Three-stage flow from an abstract checked drawing to a blank parts table and seven production-stage symbols.', caption: 'Approved design information feeds the part list, then a checked production sequence.', notice: 'Notice why each stage depends on accurate information from the stage before it.', afterParagraph: 3, remove: '.lesson-visual' },
    { id: 'VIS-DT-009', section: 'accurate-markout', file: 'section-09-datum-square-marking.webp', alt: 'Combination square against the edge of a pine practice board with one fine perpendicular pencil line and a steel rule nearby.', caption: 'A square seated against one datum edge extends a fine line across the practice board.', notice: 'Notice the firm edge contact and fine line. Do not read measurements from this generated image.', afterParagraph: 2, remove: '.lesson-visual' },
    { id: 'VIS-DT-010', section: 'cutting-shaping', file: 'section-10-secured-hand-cutting-setup.webp', alt: 'Pine practice slat held upright in a wooden-faced vice with a tenon saw resting on the bench.', caption: 'The practice slat is secured before hand cutting, and the waste side is marked clearly.', notice: 'Notice the support, fine cut line and waste hatching before any cut begins.', afterParagraph: 2, remove: '.lesson-visual' },
    { id: 'VIS-DT-011', section: 'joint-choices', file: 'section-11-butt-joint-principle.webp', alt: 'Top-view T-shaped butt-joint principle made from two plain pine pieces.', caption: 'A butt joint brings the square end of one piece against the face of another.', notice: 'Notice the end-grain-to-face-grain contact and the need for square, even seating.', afterParagraph: 2, remove: '.lesson-visual' },
    { id: 'VIS-DT-012', section: 'dry-fit-glue', file: 'section-12-dry-fit-square-check.webp', alt: 'Generic three-piece pine dry fit held by a bar clamp with an engineer’s square inside one corner.', caption: 'A dry fit checks order, contact and squareness before adhesive makes the assembly permanent.', notice: 'Notice the full corner contact, light holding pressure and square used for checking.', afterParagraph: 1, remove: '.lesson-visual' },
    { id: 'VIS-DT-013', section: 'clear-finish', file: 'section-13-raw-clear-finish-comparison.webp', alt: 'Raw radiata pine sample beside a similar sample with an even clear satin finish.', caption: 'A clear finish can deepen grain and add a restrained sheen without hiding poor surface preparation.', notice: 'Notice the change in reflected light and grain contrast, not a change of timber species.', afterParagraph: 2, remove: '.lesson-visual' },
    { id: 'VIS-DT-014', section: 'functional-testing', file: 'section-14-functional-test-criteria.webp', alt: 'Generic desk-organiser symbol connected to five test symbols for capacity, access, stability, footprint and workmanship.', caption: 'Functional testing connects the design criteria to storage, access, stability, desk fit and workmanship evidence.', notice: 'Notice that every test answers a different part of the original brief.', afterParagraph: 1, remove: '.lesson-visual' },
    { id: 'VIS-DT-015', section: 'evaluation-reflection', file: 'section-15-evaluation-evidence-pathway.webp', alt: 'Five-step icon pathway showing criterion, evidence, judgement, improvement and reflection.', caption: 'Evaluation moves from criterion to evidence, judgement, improvement and reflection.', notice: 'Notice that the pathway includes both success and a visible fault.', after: '.evidence-reflection-structure', remove: '.lesson-visual' },
    { id: 'VIS-DT-016', section: 'design-brief', file: 'support-user-storage-criteria.webp', alt: 'Compact timber organiser holding pens, paperclips and a coiled charging cable.', caption: 'A user-centred organiser provides distinct places for pens, clips and a cable without prescribing the final design.', notice: 'Notice which items need quick access, containment or separation.', replace: '.criteria-visual', compact: true },
    { id: 'VIS-DT-017', section: 'workshop-safety', file: 'support-hazard-risk-control-relationship.webp', alt: 'Three-stage diagram linking a sharp edge and dust to possible eye and hand exposure, then a barrier, checklist and safety glasses.', caption: 'A hazard is the source of harm; risk considers exposure; layered controls reduce exposure without pretending PPE removes the hazard.', notice: 'Notice how the barrier and procedure act before safety glasses provide final personal protection.', replace: '.plan-figure', compact: true },
    { id: 'VIS-DT-018', section: 'materials', file: 'support-efficient-stock-layout.webp', alt: 'Two stock boards comparing four aligned rectangular templates with four scattered templates and hatched offcuts.', caption: 'The same four abstract parts leave one useful offcut when aligned, but many narrow slivers when scattered.', notice: 'Notice how shared edges and compact spacing reduce avoidable waste.', afterParagraph: 4 },
    { id: 'VIS-DT-019', section: 'accurate-markout', file: 'support-parallax-viewing-comparison.webp', alt: 'Split diagram comparing a vertical eye line over a ruler mark with an angled eye line reaching a neighbouring tick.', caption: 'Reading directly above the mark aligns the sight line; an angled view can appear to shift the reading.', notice: 'Notice where each sight line meets the scale relative to the pencil point.', afterParagraph: 3 },
    { id: 'VIS-DT-020', section: 'cutting-shaping', file: 'support-waste-side-kerf-relationship.webp', alt: 'Timber strip diagram with required area, fine pencil line, grey kerf band and cross-hatched waste area.', caption: 'The grey kerf band sits on the cross-hatched waste side so the fine pencil line remains with the required piece.', notice: 'Notice which side keeps the line and which side loses material to the saw kerf.', after: '.kerf-explanation' },
    { id: 'VIS-DT-021', section: 'joint-choices', file: 'support-rebate-joint-principle.webp', alt: 'Side-section of a simple rebate principle with a rectangular timber piece seated in one L-shaped ledge.', caption: 'A rebate provides one ledge and shoulder that locate the mating piece.', notice: 'Notice how the seated piece contacts both the horizontal ledge and vertical shoulder.', afterParagraph: 3 },
    { id: 'VIS-DT-022', section: 'joint-choices', file: 'support-dowel-joint-alignment.webp', alt: 'Two pine blocks separated to show two timber dowels aligned with two matching holes.', caption: 'A dowel joint closes only when hole positions and dowels align accurately.', notice: 'Notice the exact one-to-one alignment of two dowels and two matching holes.', afterParagraph: 4 },
    { id: 'VIS-DT-023', section: 'dry-fit-glue', file: 'support-sanding-progression.webp', alt: 'Three pine samples with coarse, medium and fine surface texture above matching abrasive sheets.', caption: 'Progressive abrasives replace coarse scratches with finer ones before final surface checking.', notice: 'Notice the scratch pattern becoming progressively finer from left to right.', afterParagraph: 5 },
    { id: 'VIS-DT-024', section: 'clear-finish', file: 'support-finish-quality-comparison.webp', alt: 'Three clear-finished pine samples showing even satin coverage, one vertical run and pooled finish in a corner.', caption: 'Raking light reveals even coverage, a dried run and pooling in an inside corner.', notice: 'Notice how sheen and surface shape expose different finish faults.', after: '.finish-quality-checklist' }
  ];

  function createLearningVisual(item) {
    const figure = document.createElement('figure');
    figure.className = `learning-visual${item.compact ? ' learning-visual--compact' : ''}`;
    figure.dataset.visualId = item.id;
    figure.innerHTML = `<img src="../assets/learning/${escapeMarkup(item.file)}" alt="${escapeMarkup(item.alt)}" loading="lazy"><figcaption><span class="visual-caption-main">${escapeMarkup(item.caption)}</span><span class="visual-notice"><strong>Notice:</strong> ${escapeMarkup(item.notice)}</span></figcaption>`;
    return figure;
  }

  visualPlacements
    .filter(item => document.getElementById(item.section))
    .forEach(item => {
      const section = document.getElementById(item.section);
      const figure = createLearningVisual(item);
      if (item.replace) {
        const target = section.querySelector(item.replace);
        if (!target) throw new Error(`Visual ${item.id} could not find ${item.replace}.`);
        target.replaceWith(figure);
        return;
      }
      if (item.remove) section.querySelector(item.remove)?.remove();
      if (item.singlePlan) section.querySelector('.plan-layout')?.classList.add('plan-layout--single');
      let anchor = null;
      if (item.after) anchor = section.querySelector(item.after);
      if (item.afterParagraph) {
        const directParagraphs = Array.from(section.children).filter(element => element.tagName === 'P');
        anchor = directParagraphs[item.afterParagraph - 1];
      }
      if (!anchor) throw new Error(`Visual ${item.id} has no valid placement anchor.`);
      anchor.insertAdjacentElement('afterend', figure);
    });

  function videoPreviewMarkup(entry) {
    const clip = entry.video;
    return `<img class="video-thumbnail" src="${escapeMarkup(clip.thumbnailUrl)}" alt="Video thumbnail for ${escapeMarkup(clip.title)}" loading="lazy"><div class="video-overlay"><button type="button" class="video-play" aria-label="Play ${escapeMarkup(clip.title)}"><span aria-hidden="true">▶</span> Play video</button><a href="${escapeMarkup(clip.watchUrl)}" target="_blank" rel="noopener">Open on YouTube</a></div>`;
  }

  function renderVideoPreview(shell, entry, focusPlay = false) {
    shell.dataset.playing = 'false';
    shell.innerHTML = videoPreviewMarkup(entry);
    if (focusPlay) shell.querySelector('.video-play')?.focus();
  }

  data.sections.forEach(section => {
    const theory = document.getElementById(section.id);
    const entry = videoBySection.get(section.id);
    if (!theory || !entry) {
      throw new Error(`No verified video-learning outcome was found for ${section.id}.`);
    }
    const card = document.createElement('aside');
    card.className = `section-video screen-only${entry.outcome === 'GAP' ? ' section-video--gap' : ''}`;
    card.dataset.videoSection = entry.sectionId;
    card.dataset.videoOutcome = entry.outcome;

    const text = document.createElement('div');
    const outcomeLabel = entry.outcome === 'GAP' ? 'GAP — NO CLIP' : 'Watch, then check';
    const sourceLine = entry.video
      ? `YouTube · ${entry.video.channel} · ${entry.video.durationLabel} · focused segment ${entry.video.segmentLabel}`
      : 'No external clip assigned';
    text.innerHTML = `<p class="section-kicker">${outcomeLabel}</p><h3>${escapeMarkup(entry.video?.title || entry.sectionTitle)}</h3><p>${escapeMarkup(entry.reasonToWatch)}</p><p class="video-watch-for"><strong>Watch for:</strong> ${escapeMarkup(entry.watchFor)}</p><p class="video-equivalent"><strong>Equivalent non-video path:</strong> ${escapeMarkup(entry.equivalentPath)}</p><p class="video-boundary"><strong>Source and practical boundary:</strong> ${escapeMarkup(entry.sourceBoundary)}</p><p class="video-evidence"><strong>Evidence supported:</strong> ${escapeMarkup(entry.evidenceLink)}</p><p class="video-source">${escapeMarkup(sourceLine)}</p><p><a href="../${escapeMarkup(entry.theoryPath)}">Return to this theory section</a></p>`;
    card.append(text);

    if (entry.outcome === 'MATCHED' && entry.video) {
      const shell = document.createElement('div');
      shell.className = 'video-shell';
      shell.dataset.videoSection = entry.sectionId;
      shell.dataset.playing = 'false';
      renderVideoPreview(shell, entry);
      card.append(shell);
    } else {
      const gap = document.createElement('div');
      gap.className = 'video-gap-panel';
      gap.innerHTML = `<strong>Use the complete theory instead</strong><p>${escapeMarkup(entry.gapReason || entry.equivalentPath)}</p>`;
      card.append(gap);
    }
    theory.append(card);
  });

  data.sections.forEach(section => {
    const theory = document.getElementById(section.id);
    const activity = sectionActivities[section.id];
    if (!theory || !activity) return;
    const [activityId, activityTitle] = activity;
    const panel = document.createElement('aside');
    panel.className = 'section-activity-link screen-only';
    panel.innerHTML = `<div><p class="section-kicker">Practise this idea</p><h3>${activityTitle}</h3><p>Apply the section concept, check your reasoning and save a browser-local practice record.</p></div><a class="secondary-button" href="../activities/activity.html?id=${activityId}">Open activity</a>`;
    theory.append(panel);
  });

  document.querySelectorAll('figure').forEach(figure => {
    const image = figure.querySelector('img');
    if (!image) return;
    let caption = figure.querySelector('figcaption');
    if (!caption) {
      caption = document.createElement('figcaption');
      caption.textContent = 'Teaching visual.';
      figure.append(caption);
    }
    if (caption.querySelector('.open-larger')) return;
    caption.append(document.createTextNode(' '));
    const link = document.createElement('a');
    link.className = 'open-larger screen-only';
    link.href = image.getAttribute('src');
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = 'Open larger';
    caption.append(link);
  });

  function stopVideo(shell, focusPlay = true) {
    const entry = videoBySection.get(shell?.dataset.videoSection);
    if (!shell || !entry?.video) return;
    renderVideoPreview(shell, entry, focusPlay);
  }

  document.addEventListener('click', event => {
    const playButton = event.target.closest('.video-play');
    if (playButton) {
      const shell = playButton.closest('.video-shell');
      const entry = videoBySection.get(shell?.dataset.videoSection);
      if (!shell || !entry?.video) return;
      const clip = entry.video;
      const embed = `${clip.embedUrl}?autoplay=1&rel=0&start=${clip.segmentStart || 0}`;
      shell.dataset.playing = 'true';
      shell.innerHTML = `<iframe src="${escapeMarkup(embed)}" title="${escapeMarkup(clip.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><div class="video-player-controls"><button type="button" class="video-close">Close / stop</button><a href="${escapeMarkup(clip.watchUrl)}" target="_blank" rel="noopener">Open on YouTube</a></div>`;
      shell.querySelector('.video-close')?.focus();
      return;
    }

    const closeButton = event.target.closest('.video-close');
    if (closeButton) stopVideo(closeButton.closest('.video-shell'));
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const activeShell = document.querySelector('.video-shell[data-playing="true"]');
    if (activeShell) {
      event.preventDefault();
      stopVideo(activeShell);
    }
  });
})();
