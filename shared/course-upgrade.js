(function () {
  'use strict';

  const moduleKey = window.LESSON_CONFIG?.resetLabel || '';
  const moduleData = {
    'Weeks 1-2': {
      presentation: '../presentations/desk-tidy-weeks-1-2.pptx',
      folio: '../desk-tidy-folio.html#folio-1',
      slices: [[0, 3], [3, 7], [7, 12]],
      sections: [
        { id: 'design-brief', video: ['BiwmJ4t2KWM', 'Communicating a design clearly', 'Riaan Meeser'], items: [
          ['Why should a design brief avoid prescribing one finished solution?', 'It leaves room for original responses to the same need', ['It removes the need for criteria', 'It guarantees every product is identical', 'It replaces user research'], 'A brief defines the problem and intended outcome while students develop and justify their own solutions.'],
          ['Which evidence best reveals a user\'s storage need?', 'A list of the items used and how often they need access', ['A copied organiser image', 'The price of an unrelated product', 'A favourite colour alone'], 'Real items and work habits reveal the storage, access and space requirements the design must address.'],
          ['What makes “fits the intended desk space” useful as a criterion?', 'It can be checked against the real workspace', ['It describes a personal opinion only', 'It fixes every compartment size', 'It avoids testing'], 'A useful criterion can be observed, measured or tested in the intended context.'],
          ['Why should storage capacity and access be separate considerations?', 'An item may fit but still be awkward to remove', ['Capacity automatically proves stability', 'Access is only an appearance issue', 'Both terms mean colour'], 'A compartment can hold an item without allowing the user to reach it efficiently.'],
          ['Which question best tests whether a feature belongs in the design?', 'How does this feature help the intended user?', ['Can I copy it quickly?', 'Does another student have it?', 'Will it make the folio longer?'], 'Every feature should respond to the brief, the user or a measurable criterion.'],
          ['Why record the intended user before selecting a layout?', 'The layout should follow the user\'s items and work habits', ['The user decides workshop rules', 'The layout makes drawings unnecessary', 'The user supplies fixed dimensions'], 'User evidence should guide compartment relationships rather than being added after the design is chosen.'],
          ['Which is the strongest evidence that a criterion has been met?', 'A repeatable test result linked to that criterion', ['A vague claim that it looks good', 'A copied sentence', 'The number of sketches produced'], 'A judgement is strongest when it names the test, result and criterion.']
        ]},
        { id: 'workshop-safety', video: ['XOkPcLD5Soo', 'The hierarchy of controls', 'Healthier Workforce Center'], items: [
          ['What is risk in a workshop context?', 'The likelihood and consequence of harm from a hazard', ['A source with potential to cause harm', 'A list of tools', 'A finished product fault only'], 'Risk combines how likely harm is with how serious its consequence could be.'],
          ['Why are guards and secure workholding stronger than PPE alone?', 'They control exposure closer to the hazard', ['They make training optional', 'They permit damaged tools', 'They remove the need to stop'], 'Controls closer to the source reduce reliance on a person reacting perfectly.'],
          ['When should a student reassess risk?', 'When the task, tool, material or conditions change', ['Only after an injury', 'Only at the end of term', 'Never after teacher approval'], 'Risk management is continuous because conditions can change during practical work.'],
          ['What should happen before using an unfamiliar tool?', 'Stop and obtain teacher instruction and authorisation', ['Copy another student', 'Test it on finished work', 'Use extra force carefully'], 'Training, demonstration and authorisation are required before unfamiliar equipment is used.'],
          ['Why is a tidy work area a safety control?', 'It reduces trip, obstruction and uncontrolled-material hazards', ['It makes PPE unnecessary', 'It eliminates every workshop hazard', 'It is only for presentation'], 'Order supports safe movement, stable work and clear access to tools and exits.'],
          ['Which response shows active risk control?', 'Stop, isolate the issue and report it before continuing', ['Work around the issue quickly', 'Hide the fault', 'Ask a classmate to take the risk'], 'Stopping and reporting prevents continued exposure while the hazard is assessed.']
        ]},
        { id: 'materials', video: ['oZkYLVrTYe4', 'How timber behaviour affects material choices', 'Workshop Companion'], items: [
          ['Why compare material samples before deciding?', 'Observed properties support an evidence-based choice', ['Samples guarantee the cheapest option', 'The first sample must be selected', 'Testing removes the brief'], 'Sample investigation connects material properties with the product requirements.'],
          ['Which observation distinguishes solid pine from MDF?', 'Pine shows natural grain while MDF has a manufactured structure', ['MDF always has visible growth rings', 'Pine has no fibre direction', 'Both have identical edges'], 'Solid timber and manufactured board differ in structure, appearance and working behaviour.'],
          ['Why does edge behaviour matter in a Desk Tidy?', 'Edges affect shaping, joining and finish quality', ['Edges determine the user', 'Edges replace dimensions', 'Edges do not affect production'], 'Material edges can respond differently to cutting, sanding and finishing.'],
          ['What is a responsible way to select stock?', 'Match suitable pieces to parts while reducing avoidable waste', ['Use the largest board for every part', 'Ignore defects and grain', 'Discard all offcuts immediately'], 'Thoughtful layout and stock selection conserve material while maintaining quality.'],
          ['Why is durability part of sustainability?', 'A longer-lasting product may need fewer replacements', ['Durability means using more material', 'It removes the need for repair', 'It applies only to colour'], 'Service life, maintenance and repair all affect the resources used over time.']
        ]}
      ]
    },
    'Weeks 3-4': {
      presentation: '../presentations/desk-tidy-weeks-3-4.pptx', folio: '../desk-tidy-folio.html#folio-3', slices: [[0, 3], [3, 8], [8, 12]], sections: [
        { id: 'research-concepts', video: ['BiwmJ4t2KWM', 'Turning ideas into clear design communication', 'Riaan Meeser'], items: [
          ['Why analyse existing organisers without copying them?', 'To identify useful principles and shortcomings for an original response', ['To reproduce the same layout', 'To avoid generating alternatives', 'To replace the design brief'], 'Research should inform decisions while the final concept remains the student\'s own response.'],
          ['What should annotations beside a concept sketch explain?', 'How features respond to the user, criteria and manufacture', ['Only the colour name', 'The final mark', 'Another student\'s opinion'], 'Annotations make the reasoning behind features visible and testable.'],
          ['Why generate four genuinely different concepts?', 'Different arrangements allow meaningful comparison before commitment', ['Four copies prove accuracy', 'It removes teacher approval', 'It fixes exact dimensions'], 'Variation expands the solution space and exposes trade-offs.'],
          ['Which change creates a genuine alternative?', 'Reorganising compartment relationships for a different user priority', ['Redrawing the same form darker', 'Changing only the title', 'Tracing the reference image'], 'A genuine alternative changes how the solution responds to the problem.'],
          ['Why include quick dimensions or proportions in concept development?', 'They help test whether the arrangement is realistic', ['They make working drawings unnecessary', 'They permit scaling from a picture', 'They guarantee material choice'], 'Early proportion checks expose impractical layouts before detailed development.'],
          ['What is the best use of feedback during concept development?', 'Revise a feature and record why the change improves the response', ['Accept every suggestion automatically', 'Erase all earlier evidence', 'Use feedback only after finishing'], 'Feedback is useful when it is evaluated against the brief and documented.'],
          ['Which research note is most useful?', 'This divider improves access but may reduce space for larger items', ['This one is nice', 'Copy this exactly', 'Blue is best'], 'Useful research identifies a feature, benefit and possible trade-off.']
        ]},
        { id: 'compare-concepts', video: ['BiwmJ4t2KWM', 'Presenting and comparing design information', 'Riaan Meeser'], items: [
          ['Why should a decision matrix use the same criteria for every concept?', 'A common basis makes the comparison fair', ['It guarantees the teacher\'s favourite wins', 'It removes the need for judgement', 'It hides trade-offs'], 'Consistent criteria make scores comparable across alternatives.'],
          ['What should a high score in a decision matrix represent?', 'Strong evidence that the concept meets the named criterion', ['The concept drawn first', 'The most colourful page', 'The largest number of features'], 'Scores need evidence and must connect directly to the criterion.'],
          ['Why may the highest total still need discussion?', 'Weighting, evidence quality and serious weaknesses can affect the decision', ['Totals are never useful', 'The matrix should be ignored', 'The lowest score always wins'], 'A matrix supports judgement; it does not replace reasoned interpretation.'],
          ['What is a sound reason to combine features from two concepts?', 'The combined features better satisfy different criteria without creating new conflicts', ['It makes the drawing busier', 'It avoids explaining the choice', 'It copies both concepts unchanged'], 'Development should improve the response while checking new trade-offs.'],
          ['What should be recorded after teacher feedback?', 'The decision, the reason and any approved design change', ['Only the teacher\'s initials', 'A new mark estimate', 'Nothing once a concept is selected'], 'A clear decision trail shows how evidence and feedback shaped the approved design.']
        ]},
        { id: 'respectful-design', video: ['W6zGG6tYGr0', 'Protecting Indigenous Cultural and Intellectual Property rights', 'Australian Government'], items: [
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
        { id: 'working-drawings', video: ['BiwmJ4t2KWM', 'Introduction to orthographic drawing', 'Riaan Meeser'], items: [
          ['Why are several orthographic views needed?', 'Each view communicates different component relationships without perspective', ['One view always shows every hidden detail', 'They replace written dimensions', 'They allow parts to be guessed'], 'Related front, top and side views work together to communicate the approved form.'],
          ['Which information controls production: the apparent picture size or written dimensions?', 'The written millimetre dimensions', ['The screen zoom level', 'The printed image width', 'The sketch border'], 'Written dimensions state the intended size and must be checked across views.'],
          ['What does a 1:10 drawing scale mean?', 'The drawn length is one tenth of the intended size', ['All dimensions are written in centimetres', 'The product must be ten millimetres high', 'The drawing can be measured instead of read'], 'Scale describes the representation; written millimetre dimensions still control production.'],
          ['Why compare matching features across views?', 'A mismatch can produce conflicting production information', ['It improves colour choice', 'It removes the need for labels', 'It changes the brief'], 'Views must agree or the maker cannot know which information is correct.'],
          ['What is the main role of an isometric drawing?', 'To communicate the overall three-dimensional form', ['To replace all orthographic views', 'To supply hidden dimensions automatically', 'To authorise production'], 'Isometric and orthographic drawings serve complementary communication purposes.'],
          ['When is a drawing set ready for production?', 'After it matches the approved design, includes required information and passes teacher checks', ['As soon as one view is sketched', 'When it resembles the reference photo', 'Before dimensions are added'], 'Complete, consistent and approved drawings are a quality gate before material is marked.'],
          ['Why add short notes to a working drawing?', 'They clarify information that geometry and dimensions alone may not show', ['They decorate empty space', 'They replace accurate lines', 'They permit unapproved changes'], 'Notes should resolve ambiguity and support accurate manufacture.']
        ]},
        { id: 'cutting-schedule', video: ['SNaSW5b9aWE', 'Reference faces support reliable production planning', 'Mike Worth'], items: [
          ['What must every cutting-list entry identify?', 'Part, quantity, material and approved dimensions', ['Only a part colour', 'Only the total cost', 'The final evaluation'], 'A cutting list translates the approved drawing into complete part information.'],
          ['Why compare the cutting list back to every drawing view?', 'To find missing parts, wrong quantities or conflicting dimensions', ['To choose a new user', 'To avoid teacher approval', 'To change the scale'], 'Cross-checking prevents planning errors from becoming material waste.'],
          ['What is a milestone in a production schedule?', 'A significant checked point that confirms readiness to continue', ['Any spare lesson', 'A decorative timeline label', 'A guessed completion date'], 'Milestones such as approved drawings or a successful dry fit act as quality gates.'],
          ['Why place dry fitting before assembly?', 'Fit and alignment problems can be corrected before adhesive makes changes difficult', ['Dry fitting applies the finish', 'Assembly must happen first', 'It removes the need for clamps'], 'The sequence protects quality by checking reversible conditions before commitment.'],
          ['What is contingency time for?', 'Realistic delay, correction or extra checking', ['Rushing the first stages', 'Skipping milestones', 'Changing the brief without approval'], 'Contingency makes the plan resilient without lowering quality expectations.'],
          ['Why should shared tools affect a schedule?', 'Access constraints can change when a task can realistically occur', ['They change the approved dimensions', 'They remove safety requirements', 'They decide the preferred concept'], 'A realistic schedule accounts for people, resources and dependencies.'],
          ['When should a student move to the next production stage?', 'When the current quality gate is met and the next stage is approved', ['When the calendar reaches a date regardless of quality', 'When another student moves on', 'As soon as one part is complete'], 'Progress depends on checked readiness, not time alone.']
        ]},
        { id: 'accurate-markout', video: ['SNaSW5b9aWE', 'Face side, face edge and consistent datums', 'Mike Worth'], items: [
          ['Why measure related features from one datum?', 'It reduces accumulated error from inconsistent starting edges', ['It makes the rule longer', 'It changes material properties', 'It removes the waste side'], 'A shared reference keeps positions and component relationships consistent.'],
          ['What is parallax when reading a rule?', 'A viewing-angle error that makes a mark appear aligned with the wrong scale point', ['A joint gap', 'A surface finish fault', 'A scheduling delay'], 'Looking directly above the scale helps prevent parallax error.'],
          ['Why mark the waste side before cutting?', 'To protect the required material from being removed', ['To replace measuring', 'To identify the user', 'To authorise the tool'], 'Waste marking clarifies which side of the line may be removed.'],
          ['Why compare matching components during mark-out?', 'Related parts must agree before irreversible cutting', ['They must have different lengths', 'It improves the finish colour', 'It removes the drawing'], 'Early comparison catches inconsistencies while they are still easy to correct.']
        ]}
      ]
    },
    'Weeks 7-8': {
      presentation: '../presentations/desk-tidy-weeks-7-8.pptx', folio: '../desk-tidy-folio.html#folio-7', slices: [[0, 3], [3, 6], [6, 12]], sections: [
        { id: 'cutting-shaping', video: ['SNaSW5b9aWE', 'Working consistently from reference faces and edges', 'Mike Worth'], items: [
          ['Why cut on the waste side of a line?', 'It preserves material for controlled refinement to the final size', ['It removes the datum', 'It makes checking unnecessary', 'It guarantees a square cut'], 'Leaving the line protects the intended dimension and allows gradual correction.'],
          ['Why secure work in the demonstrated setup?', 'Stable work improves control, accuracy and hand safety', ['It permits unfamiliar tools', 'It changes the drawing scale', 'It replaces teacher supervision'], 'A bench hook or vice supports controlled tool use when demonstrated for the task.'],
          ['What should happen if a saw cut begins to wander?', 'Stop, diagnose the cause and seek guidance before correction', ['Force the saw back immediately', 'Hide the error with finish', 'Continue beyond the line'], 'Early stopping prevents a small deviation becoming an unrecoverable fault.'],
          ['Why check matching parts often while shaping?', 'Small differences can create larger fit and alignment problems later', ['Matching parts should be random', 'Only appearance matters', 'Checks slow production without benefit'], 'Regular comparison supports consistency before assembly.'],
          ['What does controlled refinement mean?', 'Remove small amounts and check progress against the approved information', ['Remove all material in one pass', 'Sand until the mark disappears without measuring', 'Change dimensions to suit the error'], 'Gradual work protects accuracy and reduces the chance of overcutting.'],
          ['When may an unfamiliar correction be attempted?', 'After teacher guidance and approval', ['Whenever a classmate suggests it', 'Only on the finished product', 'Without securing the part'], 'Corrections can introduce new hazards or faults and must be teacher-directed.'],
          ['Which check best supports a square component?', 'Compare the edge with the approved checking tool and drawing', ['Judge it from across the room', 'Use the finish as a guide', 'Count the tool strokes'], 'Quality is confirmed with appropriate tools and reference information.']
        ]},
        { id: 'joint-choices', video: ['gyXL9YCg-rU', 'Understanding the purpose of common wood joints', 'This Old House'], items: [
          ['What is the main alignment limitation of a butt joint?', 'It relies heavily on square edges and secure positioning', ['It always includes a locating recess', 'It uses hidden cylindrical connectors', 'It cannot use adhesive'], 'A butt joint provides little mechanical location unless the parts are accurately prepared and held.'],
          ['How can a rebate assist assembly?', 'Its recess provides a locating seat for the connected part', ['It removes the need for accuracy', 'It guarantees any dimension', 'It is always invisible'], 'A well-formed rebate can improve location and glue area.'],
          ['What must be accurate for a dowel joint to align correctly?', 'Matching hole positions and orientation', ['Only the finish colour', 'The number of sketches', 'The desk location'], 'Misaligned dowel holes can prevent assembly or pull components out of position.'],
          ['Why is the strongest joint not automatically the best choice?', 'Suitability also depends on parts, appearance, skill, tools and approved design', ['Strength never matters', 'All joints behave identically', 'The cheapest joint must win'], 'Joint selection is a trade-off linked to the actual design context.'],
          ['What evidence supports a joint choice?', 'A reasoned link between the joint features and the component relationship', ['A copied label', 'A guess after assembly', 'The joint used by another student'], 'A justified choice explains why the joint suits the design and production conditions.'],
          ['Why test a joint on scrap when directed?', 'It reveals fit and process issues before the project parts are committed', ['It authorises every machine', 'It changes the project dimensions', 'It replaces dry fitting'], 'A test piece provides low-risk evidence before irreversible work.'],
          ['Who determines the approved joint and process for the project?', 'The approved drawing and teacher direction', ['An unrelated online video', 'The nearest student', 'The finished reference image alone'], 'Online learning supports theory but does not override project authority.']
        ]},
        { id: 'dry-fit-glue', video: ['Esvb64fUQ10', 'What timber glue needs to form a useful joint', 'Steve Ramsey'], items: [
          ['What is the purpose of a dry fit?', 'To check fit, order, squareness and clamp access before glue', ['To apply the finish', 'To hide joint gaps', 'To replace drawings'], 'Dry fitting keeps adjustments reversible before adhesive is introduced.'],
          ['Why plan clamp positions before applying glue?', 'The assembly must be held accurately while access and open time are limited', ['Clamps change material type', 'More clamps always fix poor joints', 'Planning removes cleanup'], 'A rehearsed clamp setup supports alignment without rushed decisions.'],
          ['What should happen when a dry fit reveals a gap?', 'Diagnose the cause and seek approval for the correction', ['Use extra glue to fill it', 'Force the parts together', 'Proceed and hide it later'], 'Glue is not a substitute for accurate fit and forcing can damage the work.'],
          ['Why record an assembly checkpoint photograph?', 'It provides evidence of fit, order and workmanship before later stages hide details', ['It replaces the product', 'It grants permission to proceed', 'It is only decorative'], 'Timely evidence shows the process and quality decisions, not only the final appearance.']
        ]}
      ]
    },
    'Weeks 9-10': {
      presentation: '../presentations/desk-tidy-weeks-9-10.pptx', folio: '../desk-tidy-folio.html#folio-9', slices: [[0, 4], [4, 8], [8, 12]], sections: [
        { id: 'clear-finish', video: ['bbiXJd_1l8Y', 'Wood finishing basics', 'Steve Ramsey'], items: [
          ['Why sand through the approved grit sequence?', 'Each stage refines scratches left by the previous stage', ['The coarsest grit creates the final surface', 'Skipping grits improves consistency', 'Grit choice changes the brief'], 'Progressive sanding prepares an even surface without relying on the finish to hide faults.'],
          ['Why inspect under good light before finishing?', 'Roughness, scratches, glue and dust are easier to identify', ['Light cures every finish', 'Inspection replaces sanding', 'It changes the grain direction'], 'A finish can highlight preparation faults, so they should be corrected first.'],
          ['What controls the exact finish application?', 'Teacher demonstration and the product information', ['An unrelated video', 'Another student\'s project', 'A guessed drying time'], 'The approved school process and product information are authoritative.'],
          ['Why should the project remain undisturbed while drying or curing?', 'Handling can mark the surface and affect performance', ['It changes the design criteria', 'It removes the need for ventilation', 'It increases storage capacity'], 'Protection during drying preserves coverage and surface quality.'],
          ['What should a student do after noticing a run or pooled finish?', 'Stop and seek teacher guidance before attempting a correction', ['Wipe it with any material', 'Add more finish immediately', 'Hide it in photographs'], 'Unapproved correction can worsen the fault or introduce safety risks.'],
          ['Why is one approved coat not permission to add more?', 'The authorised finish system controls product use and quality expectations', ['Extra coats always reduce durability', 'Coats have no effect', 'The colour decides the number'], 'Students follow the verified unit requirement rather than improvising product use.']
        ]},
        { id: 'functional-testing', video: ['gyXL9YCg-rU', 'Checking how component relationships affect function', 'This Old House'], items: [
          ['Why test with the intended stationery?', 'The product must work with the real items named in the brief', ['Any objects give identical evidence', 'Empty testing proves capacity', 'Appearance replaces function'], 'Authentic items make capacity and access tests relevant to the user.'],
          ['What separates evidence from opinion?', 'Evidence is observable, measurable or shown clearly', ['Evidence is always positive', 'Opinion includes millimetres', 'Evidence hides faults'], 'A test observation or photograph supports a judgement more strongly than a vague preference.'],
          ['How should stability be tested?', 'On a flat surface while intended items are added and removed', ['By holding the product in the air', 'Before assembly', 'Only by looking at a photograph'], 'The test should reproduce realistic use and allow rocking or tipping to be observed.'],
          ['Why diagnose a fault before proposing an improvement?', 'The change should address the likely cause rather than the symptom alone', ['Every fault needs the same repair', 'Diagnosis removes teacher approval', 'Improvements are only decorative'], 'Cause-and-effect reasoning makes improvement suggestions realistic and relevant.'],
          ['What is a fair way to compare the result with criteria?', 'Use the same defined test conditions and record specific observations', ['Change the criteria after testing', 'Ignore unexpected results', 'Use another student\'s product'], 'Consistent conditions support honest comparison with the original intentions.'],
          ['What should happen before altering a finished product after testing?', 'Discuss the evidence and obtain teacher approval', ['Force the change immediately', 'Remove the test record', 'Copy another solution'], 'Any adjustment may affect safety, quality or assessment evidence and remains teacher-controlled.']
        ]},
        { id: 'evaluation-reflection', video: ['BiwmJ4t2KWM', 'Communicating design evidence clearly', 'Riaan Meeser'], items: [
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
  window.LESSON_CONFIG.storageKey = window.LESSON_CONFIG.storageKey.replace(/-v1$/, '-v2');

  const overview = document.querySelector('main .lesson-overview');
  if (overview) {
    const support = document.createElement('section');
    support.className = 'card module-support-panel screen-only';
    support.innerHTML = `<div><p class="section-kicker">Module learning pack</p><h2>Preview, learn and save evidence</h2><p>Download the eight-slide student presentation, then use the linked folio evidence card when your work is ready.</p></div><div class="button-row"><a class="primary-button" href="${data.presentation}" download>Download presentation</a><a class="secondary-button" href="${data.folio}">Open mapped folio evidence</a></div>`;
    overview.insertAdjacentElement('afterend', support);
  }

  data.sections.forEach(section => {
    const theory = document.getElementById(section.id);
    if (!theory) return;
    const [videoId, title, channel] = section.video;
    const video = document.createElement('aside');
    video.className = 'section-video screen-only';
    const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    video.innerHTML = `<div><p class="section-kicker">Watch, then check</p><h3>${title}</h3><p>This short explanation supports the theory above. The approved drawing, teacher demonstration and school workshop requirements still control practical work.</p><p class="video-source">YouTube · ${channel}</p></div><div class="video-shell" data-video-id="${videoId}"><img class="video-thumbnail" src="${thumbnailUrl}" alt="${title} video thumbnail"><div class="video-overlay"><button type="button" class="video-play" aria-label="Play ${title}"><span aria-hidden="true">▶</span> Play video</button><a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener">Open on YouTube</a></div></div>`;
    theory.append(video);
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

  document.addEventListener('click', event => {
    const button = event.target.closest('.video-play');
    if (!button) return;
    const shell = button.closest('.video-shell');
    const videoId = shell?.dataset.videoId;
    if (!shell || !videoId) return;
    shell.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0" title="Embedded course video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener">Open on YouTube</a>`;
  });
})();
