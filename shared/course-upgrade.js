(function () {
  'use strict';

  const moduleKey = window.LESSON_CONFIG?.resetLabel || '';
  const moduleData = {
    'Weeks 1-2': {
      presentation: '../presentations/desk-tidy-weeks-1-2.pptx',
      folio: '../desk-tidy-folio.html#folio-1',
      slices: [[0, 3], [3, 7], [7, 12]],
      sections: [
        { id: 'design-brief', feedbackFocus: 'the explanation of how the brief, user evidence and measurable criteria guide an original solution', items: [
          ['Why should a design brief avoid prescribing one finished solution?', 'It leaves room for original responses to the same need', [['It removes the need for criteria', 'A brief and criteria have different jobs: the brief states the need, while criteria make success testable.'], ['It guarantees every product is identical', 'Prescribing an identical product would remove the original decision-making that a design brief is meant to support.'], ['It replaces user research', 'A brief cannot reveal the user\'s actual items, habits or workspace; research is still needed.']], 'A brief defines the problem and intended outcome while students develop and justify their own solutions.'],
          ['Which evidence best reveals a user\'s storage need?', 'A list of the items used and how often they need access', [['A copied organiser image', 'A copied image shows someone else\'s solution, not this user\'s items or access habits.'], ['The price of an unrelated product', 'An unrelated price gives no evidence about what the intended user needs to store or reach.'], ['A favourite colour alone', 'Colour preference may inform appearance, but it does not establish storage capacity, access or desk-space needs.']], 'Real items and work habits reveal the storage, access and space requirements the design must address.'],
          ['What makes “fits the intended desk space” useful as a criterion?', 'It can be checked against the real workspace', [['It describes a personal opinion only', 'Desk fit can be measured or observed in the intended workspace, so it is more than a personal opinion.'], ['It fixes every compartment size', 'The criterion sets an overall space constraint but does not prescribe each compartment dimension.'], ['It avoids testing', 'A desk-fit criterion is useful precisely because the finished design can be tested against it.']], 'A useful criterion can be observed, measured or tested in the intended context.'],
          ['Why should storage capacity and access be separate considerations?', 'An item may fit but still be awkward to remove', [['Capacity automatically proves stability', 'Holding the intended items does not show whether the organiser rocks or tips during use.'], ['Access is only an appearance issue', 'Access is functional: the user must be able to remove and return items efficiently.'], ['Both terms mean colour', 'Capacity and access describe how storage works; neither term describes colour.']], 'A compartment can hold an item without allowing the user to reach it efficiently.'],
          ['Which question best tests whether a feature belongs in the design?', 'How does this feature help the intended user?', [['Can I copy it quickly?', 'Ease of copying does not show that the feature answers the brief or the intended user\'s need.'], ['Does another student have it?', 'Another student\'s choice is not evidence that the feature suits this design context.'], ['Will it make the folio longer?', 'The amount of folio writing does not establish a feature\'s purpose or usefulness.']], 'Every feature should respond to the brief, the user or a measurable criterion.'],
          ['Why record the intended user before selecting a layout?', 'The layout should follow the user\'s items and work habits', [['The user decides workshop rules', 'Workshop rules and practical permissions remain teacher-controlled, not user-selected.'], ['The layout makes drawings unnecessary', 'A chosen layout still needs drawings to communicate and check the approved design.'], ['The user supplies fixed dimensions', 'User evidence supplies needs and constraints; approved dimensions are developed and checked through the design process.']], 'User evidence should guide compartment relationships rather than being added after the design is chosen.'],
          ['Which is the strongest evidence that a criterion has been met?', 'A repeatable test result linked to that criterion', [['A vague claim that it looks good', 'A vague appearance claim gives neither a defined criterion nor observable evidence.'], ['A copied sentence', 'Copied wording does not record what was tested or what happened in this project.'], ['The number of sketches produced', 'Sketch quantity records idea generation, not whether the finished product met a particular criterion.']], 'A judgement is strongest when it names the test, result and criterion.']
        ]},
        { id: 'workshop-safety', feedbackFocus: 'the hazard–risk–control relationship and the requirement to stop, reassess and follow teacher-authorised controls', items: [
          ['What is risk in a workshop context?', 'The likelihood and consequence of harm from a hazard', [['A source with potential to cause harm', 'That describes a hazard, whereas risk considers the chance and seriousness of the resulting harm.'], ['A list of tools', 'A tool list identifies equipment but does not assess exposure, likelihood or consequence.'], ['A finished product fault only', 'A product fault may create a hazard, but risk is the assessed likelihood and consequence of harm.']], 'Risk combines how likely harm is with how serious its consequence could be.'],
          ['Why are guards and secure workholding stronger than PPE alone?', 'They control exposure closer to the hazard', [['They make training optional', 'Physical controls support safe work but never remove the need for instruction and authorisation.'], ['They permit damaged tools', 'Damaged equipment must be isolated and reported; a guard or clamp does not make it serviceable.'], ['They remove the need to stop', 'Students must still stop when conditions change or anything appears unsafe.']], 'Controls closer to the source reduce reliance on a person reacting perfectly.'],
          ['When should a student reassess risk?', 'When the task, tool, material or conditions change', [['Only after an injury', 'Waiting for an injury is reactive; reassessment is meant to prevent harm when conditions change.'], ['Only at the end of term', 'Risk can change during a single task, so a term-end review is far too late.'], ['Never after teacher approval', 'Initial approval does not cover later changes in the task, equipment, material or environment.']], 'Risk management is continuous because conditions can change during practical work.'],
          ['What should happen before using an unfamiliar tool?', 'Stop and obtain teacher instruction and authorisation', [['Copy another student', 'Watching a peer does not provide the required teacher demonstration, competency check or authorisation.'], ['Test it on finished work', 'Trying an unfamiliar tool on project work risks injury and irreversible damage before safe use is established.'], ['Use extra force carefully', 'Extra force can increase loss of control and cannot replace knowledge of the approved setup and technique.']], 'Training, demonstration and authorisation are required before unfamiliar equipment is used.'],
          ['Why is a tidy work area a safety control?', 'It reduces trip, obstruction and uncontrolled-material hazards', [['It makes PPE unnecessary', 'Housekeeping controls some hazards but does not replace required personal protection.'], ['It eliminates every workshop hazard', 'Tidiness reduces specific hazards; tools, dust, processes and materials still require other controls.'], ['It is only for presentation', 'Clear benches and walkways directly support stable work, safe movement and emergency access.']], 'Order supports safe movement, stable work and clear access to tools and exits.'],
          ['Which response shows active risk control?', 'Stop, isolate the issue and report it before continuing', [['Work around the issue quickly', 'Working around a known issue leaves people exposed and can make the situation worse.'], ['Hide the fault', 'Concealing a fault prevents isolation and assessment, allowing the hazard to remain active.'], ['Ask a classmate to take the risk', 'Transferring exposure to another student is not a control and breaches the stop-and-report process.']], 'Stopping and reporting prevents continued exposure while the hazard is assessed.']
        ]},
        { id: 'materials', feedbackFocus: 'the comparison of observed material properties, suitable stock use, waste reduction and product life', items: [
          ['Why compare material samples before deciding?', 'Observed properties support an evidence-based choice', [['Samples guarantee the cheapest option', 'A sample reveals physical properties, not the full cost or which option is cheapest.'], ['The first sample must be selected', 'Investigation supports comparison; examining a sample does not commit the design to using it.'], ['Testing removes the brief', 'Test evidence must be judged against the brief rather than replacing the project need and criteria.']], 'Sample investigation connects material properties with the product requirements.'],
          ['Which observation distinguishes solid pine from MDF?', 'Pine shows natural grain while MDF has a manufactured structure', [['MDF always has visible growth rings', 'Growth rings are a feature of natural timber; MDF is manufactured from fibres.'], ['Pine has no fibre direction', 'Pine\'s natural grain and fibres have direction that affects appearance and working behaviour.'], ['Both have identical edges', 'Solid timber edges show natural structure, while MDF edges expose compressed fibres and behave differently.']], 'Solid timber and manufactured board differ in structure, appearance and working behaviour.'],
          ['Why does edge behaviour matter in a Desk Tidy?', 'Edges affect shaping, joining and finish quality', [['Edges determine the user', 'The intended user is established through the brief and research, not by a material edge.'], ['Edges replace dimensions', 'Edge properties affect production, but approved dimensions still control part size and fit.'], ['Edges do not affect production', 'Different edge structures respond differently to cutting, sanding, joining and finishing.']], 'Material edges can respond differently to cutting, sanding and finishing.'],
          ['What is a responsible way to select stock?', 'Match suitable pieces to parts while reducing avoidable waste', [['Use the largest board for every part', 'Oversized stock for every part can create unnecessary waste without improving suitability.'], ['Ignore defects and grain', 'Defects and grain can affect strength, appearance and safe processing, so they must inform stock selection.'], ['Discard all offcuts immediately', 'Useful offcuts may suit smaller parts or practice work and should be assessed before disposal.']], 'Thoughtful layout and stock selection conserve material while maintaining quality.'],
          ['Why is durability part of sustainability?', 'A longer-lasting product may need fewer replacements', [['Durability means using more material', 'Durability depends on suitable design, material and care; it is not simply extra material.'], ['It removes the need for repair', 'A durable product may still need maintenance or repair to extend its useful life.'], ['It applies only to colour', 'Durability concerns continued function and condition, not colour alone.']], 'Service life, maintenance and repair all affect the resources used over time.']
        ]}
      ]
    },
    'Weeks 3-4': {
      presentation: '../presentations/desk-tidy-weeks-3-4.pptx', folio: '../desk-tidy-folio.html#folio-2', slices: [[0, 3], [3, 8], [8, 12]], sections: [
        { id: 'research-concepts', feedbackFocus: 'the research-to-concept process, including source integrity, production roles, annotations and genuinely different ideas', items: [
          ['What should research reveal about how an organiser was created?', 'How designer, producer and manufacturer decisions shaped the product or system', [['Only its retail price', 'Price is one piece of context but does not explain design decisions, materials, processes or production roles.'], ['Only the final colour', 'Colour alone cannot reveal how the organiser was planned, made or manufactured.'], ['Only the product name', 'A name identifies the product but provides no evidence of the decisions and processes behind it.']], 'Research should connect design decisions with the materials, processes and production roles used to make the product.'],
          ['What should annotations beside a concept sketch explain?', 'How features respond to the user, criteria and manufacture', [['Only the colour name', 'A colour label describes appearance but not why a feature answers the user or can be made.'], ['The final mark', 'An assessment mark does not communicate the design reasoning shown by the concept.'], ['Another student\'s opinion', 'Peer feedback may inform revision, but an annotation must explain the designer\'s evidence-based intention.']], 'Annotations make the reasoning behind features visible and testable.'],
          ['Why generate four genuinely different concepts?', 'Different arrangements allow meaningful comparison before commitment', [['Four copies prove accuracy', 'Repeating one idea may practise drawing but does not explore alternative solutions or trade-offs.'], ['It removes teacher approval', 'Concept variety supports design thinking; production still requires the normal teacher approvals.'], ['It fixes exact dimensions', 'Concepts explore layouts and proportions, while approved working drawings later control exact dimensions.']], 'Variation expands the solution space and exposes trade-offs.'],
          ['Which change creates a genuine alternative?', 'Reorganising compartment relationships for a different user priority', [['Redrawing the same form darker', 'Changing rendering tone does not alter how the concept responds to the design problem.'], ['Changing only the title', 'A new label leaves the form, layout and function unchanged.'], ['Tracing the reference image', 'Tracing copies an existing solution rather than generating an original alternative for the intended user.']], 'A genuine alternative changes how the solution responds to the problem.'],
          ['Why include quick dimensions or proportions in concept development?', 'They help test whether the arrangement is realistic', [['They make working drawings unnecessary', 'Early estimates test feasibility but cannot replace complete, approved production drawings.'], ['They permit scaling from a picture', 'A reference image has no authorised scale and must not be treated as a dimensioned plan.'], ['They guarantee material choice', 'Proportion checks do not determine which material the teacher or project requirements approve.']], 'Early proportion checks expose impractical layouts before detailed development.'],
          ['What is the best use of feedback during concept development?', 'Revise a feature and record why the change improves the response', [['Accept every suggestion automatically', 'Suggestions must be judged against the brief, criteria and constraints rather than accepted without evidence.'], ['Erase all earlier evidence', 'Earlier concepts and feedback show the decision trail and should be retained in the folio.'], ['Use feedback only after finishing', 'Feedback is most useful while changes are still possible, not only after production is complete.']], 'Feedback is useful when it is evaluated against the brief and documented.'],
          ['What is the safest ethical and legal response before reusing an online image, plan or design?', 'Record the source, check copyright or licence conditions and ask when permission is unclear', [['Assume public access means permission', 'Being able to view content online does not grant permission to reproduce or adapt it.'], ['Remove the creator name', 'Removing attribution conceals provenance and does not remove the creator\'s rights.'], ['Reuse it if it looks educational', 'An educational purpose does not automatically override copyright, licence or permission conditions.']], 'Public access is not automatic permission; attribution, copyright, licences and permission must be considered.']
        ]},
        { id: 'compare-concepts', feedbackFocus: 'the fair use of common criteria, evidence, trade-offs, prototypes and an auditable decision trail', items: [
          ['Why should a decision matrix use the same criteria for every concept?', 'A common basis makes the comparison fair', [['It guarantees the teacher\'s favourite wins', 'Common criteria reduce preference bias; they do not predetermine which concept a teacher will favour.'], ['It removes the need for judgement', 'Scores organise evidence, but the designer must still interpret trade-offs and serious weaknesses.'], ['It hides trade-offs', 'Using the same criteria makes differences and trade-offs more visible across concepts.']], 'Consistent criteria make scores comparable across alternatives.'],
          ['What should a high score in a decision matrix represent?', 'Strong evidence that the concept meets the named criterion', [['The concept drawn first', 'Drawing order provides no evidence that a concept meets the criterion well.'], ['The most colourful page', 'Presentation colour is irrelevant unless appearance is a named criterion supported by evidence.'], ['The largest number of features', 'More features can add complexity and do not automatically improve the response to a criterion.']], 'Scores need evidence and must connect directly to the criterion.'],
          ['Why may the highest total still need discussion?', 'Weighting, evidence quality and serious weaknesses can affect the decision', [['Totals are never useful', 'A total is useful as a summary, but it must be interpreted rather than rejected completely.'], ['The matrix should be ignored', 'The matrix remains evidence; discussion checks the quality, weighting and limitations of that evidence.'], ['The lowest score always wins', 'Selecting the lowest total reverses the comparison without addressing any criterion or trade-off.']], 'A matrix supports judgement; it does not replace reasoned interpretation.'],
          ['Why create a prototype, model or sample before final drawings?', 'To test an uncertain feature and refine the concept using evidence', [['To replace all research', 'A prototype tests a focused uncertainty; it does not establish user needs, sources or the broader design context.'], ['To avoid teacher approval', 'Testing and any subsequent production changes remain subject to teacher direction and approval.'], ['To make the final product immediately', 'A prototype or sample is controlled learning evidence, not an instruction to begin the final product.']], 'A focused prototype, model or sample makes an idea testable before final decisions are locked in.'],
          ['What should be recorded after teacher feedback?', 'The decision, the reason and any approved design change', [['Only the teacher\'s initials', 'Initials may confirm review but do not show what decision was made or why.'], ['A new mark estimate', 'A predicted mark does not document the design evidence, reasoning or approved change.'], ['Nothing once a concept is selected', 'Selection is not the end of development; recording refinements preserves the decision trail.']], 'A clear decision trail shows how evidence and feedback shaped the approved design.']
        ]},
        { id: 'respectful-design', feedbackFocus: 'the source, context, authority, permission and original-response checks for culturally safe research', items: [
          ['Why is attribution important when learning from a cultural source?', 'It acknowledges where knowledge or inspiration came from', [['It grants automatic permission to copy', 'Attribution names the source but does not grant cultural authority, copyright permission or consent to reproduce it.'], ['It makes the design traditional', 'Citing a cultural source does not make a student product traditional or culturally authorised.'], ['It replaces consultation', 'Attribution records provenance, while appropriate guidance or consultation addresses different questions of authority and use.']], 'Attribution recognises provenance but does not remove the need for permission and respectful use.'],
          ['What should a student do when cultural permission is unclear?', 'Pause and seek teacher guidance before using the element', [['Assume public images are free to copy', 'Public visibility does not establish ownership, cultural authority or permission to reuse an image.'], ['Change one colour and proceed', 'A cosmetic alteration does not resolve whether the underlying expression may be used.'], ['Remove the source note', 'Removing provenance increases the ethical problem and does nothing to establish permission.']], 'Uncertainty is a reason to stop and clarify, not to guess.'],
          ['Which approach avoids tokenism?', 'Engage with meaning, context and source rather than adding a decorative motif', [['Add any pattern at the end', 'An unexplained decorative pattern treats culture as surface styling rather than knowledge with context.'], ['Copy a symbol without context', 'A symbol cannot be separated safely from its meaning, ownership and conditions of use.'], ['Use culture only as a theme label', 'A theme label without genuine source-based learning reduces culture to a token reference.']], 'Respectful engagement is grounded in meaning and relationships, not surface decoration.'],
          ['Why can a publicly visible image still require care?', 'Visibility does not establish cultural authority or permission to reuse it', [['All online images are public domain', 'Most publicly viewable images remain protected or controlled; online access is not public-domain status.'], ['Credit always grants permission', 'Credit acknowledges a creator but cannot substitute for a required licence, consent or cultural authority.'], ['Schoolwork has no responsibilities', 'Educational work still carries responsibilities for attribution, copyright and respectful cultural use.']], 'Access to an image is not the same as authority to reproduce cultural knowledge.'],
          ['What is the safest design decision if a restricted symbol cannot be verified?', 'Do not use it and develop an original alternative', [['Use it without attribution', 'Omitting attribution compounds the problem and leaves authority to use the symbol unresolved.'], ['Simplify it slightly', 'Minor visual changes do not remove the meaning, ownership or restrictions attached to a symbol.'], ['Ask another student to approve it', 'A classmate cannot grant cultural authority unless they are the recognised custodian with that role.']], 'When authority cannot be established, an original response avoids appropriation.'],
          ['How should cultural research appear in the folio?', 'With source, context, reflection and the resulting design decision', [['As an unlabelled screenshot', 'An unlabelled image hides provenance, context and what the student learned from it.'], ['As copied decoration only', 'Copied decoration provides no respectful explanation or original design response.'], ['As a claim of ownership', 'Research should acknowledge custodianship and influence, not claim another community\'s knowledge as the student\'s own.']], 'A transparent evidence trail shows what was learned and how it affected the design.']
        ]}
      ]
    },
    'Weeks 5-6': {
      presentation: '../presentations/desk-tidy-weeks-5-6.pptx', folio: '../desk-tidy-folio.html#folio-5', slices: [[0, 3], [3, 6], [6, 12]], sections: [
        { id: 'working-drawings', feedbackFocus: 'how aligned views, written dimensions, scale, notes and approval communicate one consistent design', items: [
          ['Why are several orthographic views needed?', 'Each view communicates different component relationships without perspective', [['One view always shows every hidden detail', 'A single flattened view cannot normally show every face, depth relationship or hidden feature clearly.'], ['They replace written dimensions', 'Views show shape and relationship, but written dimensions still control intended production size.'], ['They allow parts to be guessed', 'The purpose of related views is to remove guesswork by communicating consistent information.']], 'Related front, top and side views work together to communicate the approved form.'],
          ['Which information controls production: the apparent picture size or written dimensions?', 'The written millimetre dimensions', [['The screen zoom level', 'Zoom changes only the display size and has no effect on the approved component dimensions.'], ['The printed image width', 'Printer scaling can change the image size, so the printed width cannot override written dimensions.'], ['The sketch border', 'A border organises the sheet but provides no component-size information.']], 'Written dimensions state the intended size and must be checked across views.'],
          ['What does a 1:10 drawing scale mean?', 'The drawn length is one tenth of the intended size', [['All dimensions are written in centimetres', 'Scale changes the drawn representation, not the required millimetre unit for written dimensions.'], ['The product must be ten millimetres high', 'The ratio does not set any product dimension; it states how drawing length relates to intended size.'], ['The drawing can be measured instead of read', 'Written dimensions remain authoritative because printing or display scaling can alter the measured picture.']], 'Scale describes the representation; written millimetre dimensions still control production.'],
          ['Why compare matching features across views?', 'A mismatch can produce conflicting production information', [['It improves colour choice', 'View alignment checks geometry and location, not the product\'s colour scheme.'], ['It removes the need for labels', 'Labels and dimensions may still be needed even when matching features align correctly.'], ['It changes the brief', 'Cross-checking views verifies communication of the approved design; it does not redefine the original need.']], 'Views must agree or the maker cannot know which information is correct.'],
          ['What is the main role of an isometric drawing?', 'To communicate the overall three-dimensional form', [['To replace all orthographic views', 'An isometric overview does not communicate every face and dimension as clearly as aligned orthographic views.'], ['To supply hidden dimensions automatically', 'An isometric view does not generate dimensions; required values must still be stated and checked.'], ['To authorise production', 'A view communicates form, while readiness for production depends on the complete approved drawing set.']], 'Isometric and orthographic drawings serve complementary communication purposes.'],
          ['When is a drawing set ready for production?', 'After it matches the approved design, includes required information and passes teacher checks', [['As soon as one view is sketched', 'One preliminary view cannot communicate the complete approved form, dimensions and production information.'], ['When it resembles the reference photo', 'The reference image is not an approved construction drawing and must not control the student design.'], ['Before dimensions are added', 'Without approved dimensions the maker cannot mark or check parts accurately.']], 'Complete, consistent and approved drawings are a quality gate before material is marked.'],
          ['Why add short notes to a working drawing?', 'They clarify information that geometry and dimensions alone may not show', [['They decorate empty space', 'Working-drawing notes must communicate useful production information rather than fill the page.'], ['They replace accurate lines', 'Notes can clarify a feature but cannot compensate for inaccurate or inconsistent drawing geometry.'], ['They permit unapproved changes', 'A note records approved information; it does not authorise the designer to bypass review.']], 'Notes should resolve ambiguity and support accurate manufacture.']
        ]},
        { id: 'cutting-schedule', feedbackFocus: 'how the cutting list, dependencies, milestones, quality gates and resource constraints turn drawings into a workable plan', items: [
          ['What must every cutting-list entry identify?', 'Part, quantity, material and approved dimensions', [['Only a part colour', 'Colour alone cannot identify which component is needed, how many to prepare or its approved size.'], ['Only the total cost', 'A project total does not provide the part-by-part material and dimension information needed for production.'], ['The final evaluation', 'Evaluation judges the completed outcome; it does not define the components to prepare.']], 'A cutting list translates the approved drawing into complete part information.'],
          ['Why compare the cutting list back to every drawing view?', 'To find missing parts, wrong quantities or conflicting dimensions', [['To choose a new user', 'The intended user comes from the brief and research, not from checking production documents.'], ['To avoid teacher approval', 'Cross-checking improves accuracy but does not replace the required approval gate.'], ['To change the scale', 'The task is to reconcile part information, not alter the approved drawing representation.']], 'Cross-checking prevents planning errors from becoming material waste.'],
          ['What is a milestone in a production schedule?', 'A significant checked point that confirms readiness to continue', [['Any spare lesson', 'Unallocated time is not automatically a meaningful checked achievement in the production sequence.'], ['A decorative timeline label', 'A milestone must represent verified progress, not simply decorate the schedule.'], ['A guessed completion date', 'An unsupported date does not prove that required work or a quality gate has been completed.']], 'Milestones such as approved drawings or a successful dry fit act as quality gates.'],
          ['Why place dry fitting before assembly?', 'Fit and alignment problems can be corrected before adhesive makes changes difficult', [['Dry fitting applies the finish', 'Dry fitting checks component relationships without adhesive or finish.'], ['Assembly must happen first', 'Permanent assembly before checking would make fit and alignment faults harder to correct.'], ['It removes the need for clamps', 'Dry fitting helps plan clamp access; the approved glue-up may still require clamps.']], 'The sequence protects quality by checking reversible conditions before commitment.'],
          ['What is contingency time for?', 'Realistic delay, correction or extra checking', [['Rushing the first stages', 'Contingency protects the schedule from disruption; it is not permission to reduce care earlier.'], ['Skipping milestones', 'Quality gates remain necessary even when time is limited or a delay occurs.'], ['Changing the brief without approval', 'Contingency adjusts time for authorised work, not the project need or design authority.']], 'Contingency makes the plan resilient without lowering quality expectations.'],
          ['Why should shared tools affect a schedule?', 'Access constraints can change when a task can realistically occur', [['They change the approved dimensions', 'Tool availability affects timing, not the dimensions controlled by the approved drawing.'], ['They remove safety requirements', 'Waiting for shared equipment never reduces the need for instruction, controls and authorisation.'], ['They decide the preferred concept', 'Tool access is a constraint considered in planning, but evidence against the brief controls concept selection.']], 'A realistic schedule accounts for people, resources and dependencies.'],
          ['When should a student move to the next production stage?', 'When the current quality gate is met and the next stage is approved', [['When the calendar reaches a date regardless of quality', 'A date cannot override an incomplete check, unresolved fault or missing approval.'], ['When another student moves on', 'A peer\'s progress does not prove this student\'s components are ready.'], ['As soon as one part is complete', 'One completed component may not satisfy the stage\'s full set of parts, checks and dependencies.']], 'Progress depends on checked readiness, not time alone.']
        ]},
        { id: 'accurate-markout', feedbackFocus: 'the datum, direct viewing, waste-side marking and pre-cut comparison checks that protect accuracy', items: [
          ['Why measure related features from one datum?', 'It reduces accumulated error from inconsistent starting edges', [['It makes the rule longer', 'A datum changes the reference used for measuring, not the physical length of the rule.'], ['It changes material properties', 'Marking from a reference edge affects positional accuracy, not the timber\'s properties.'], ['It removes the waste side', 'A datum establishes consistent measurement; waste still needs to be identified separately.']], 'A shared reference keeps positions and component relationships consistent.'],
          ['What is parallax when reading a rule?', 'A viewing-angle error that makes a mark appear aligned with the wrong scale point', [['A joint gap', 'A gap is a fit problem, whereas parallax occurs while viewing a scale from an angle.'], ['A surface finish fault', 'Finish faults concern surface preparation or application, not line-of-sight measurement error.'], ['A scheduling delay', 'A delay affects timing; parallax affects the apparent alignment of a mark and scale.']], 'Looking directly above the scale helps prevent parallax error.'],
          ['Why mark the waste side before cutting?', 'To protect the required material from being removed', [['To replace measuring', 'Waste marking identifies the removal side only after the required position has been measured accurately.'], ['To identify the user', 'User identity comes from the brief and has no role in identifying saw waste.'], ['To authorise the tool', 'A waste mark guides the cut location; teacher instruction and approval authorise tool use.']], 'Waste marking clarifies which side of the line may be removed.'],
          ['Why compare matching components during mark-out?', 'Related parts must agree before irreversible cutting', [['They must have different lengths', 'Matching components should agree where the approved design requires the same dimension or relationship.'], ['It improves the finish colour', 'Mark-out comparison checks size and alignment, not the later appearance of a finish.'], ['It removes the drawing', 'The approved drawing remains the controlling reference used during comparison.']], 'Early comparison catches inconsistencies while they are still easy to correct.']
        ]}
      ]
    },
    'Weeks 7-8': {
      presentation: '../presentations/desk-tidy-weeks-7-8.pptx', folio: '../desk-tidy-folio.html#folio-8', slices: [[0, 3], [3, 6], [6, 12]], sections: [
        { id: 'cutting-shaping', feedbackFocus: 'the secure, waste-side, stop–diagnose–check routine for controlled and teacher-authorised cutting and shaping', items: [
          ['Why cut on the waste side of a line?', 'It preserves material for controlled refinement to the final size', [['It removes the datum', 'The datum remains the measurement reference; choosing the waste side protects the required material.'], ['It makes checking unnecessary', 'The part must still be checked during and after cutting because the line alone cannot guarantee accuracy.'], ['It guarantees a square cut', 'Waste-side placement protects size but squareness depends on setup, technique and checking.']], 'Leaving the line protects the intended dimension and allows gradual correction.'],
          ['Why secure work in the demonstrated setup?', 'Stable work improves control, accuracy and hand safety', [['It permits unfamiliar tools', 'Secure workholding does not authorise a tool that has not been demonstrated and approved.'], ['It changes the drawing scale', 'Workholding affects stability during production, not the representation used in the drawing.'], ['It replaces teacher supervision', 'A clamp, vice or bench hook supports control but does not replace teacher direction and supervision.']], 'A bench hook or vice supports controlled tool use when demonstrated for the task.'],
          ['What should happen if a saw cut begins to wander?', 'Stop, diagnose the cause and seek guidance before correction', [['Force the saw back immediately', 'Forcing a wandering saw can widen the error, bind the blade or reduce control.'], ['Hide the error with finish', 'Finish cannot restore removed material or correct an inaccurate component edge.'], ['Continue beyond the line', 'Continuing makes a small deviation harder or impossible to correct.']], 'Early stopping prevents a small deviation becoming an unrecoverable fault.'],
          ['Why check matching parts often while shaping?', 'Small differences can create larger fit and alignment problems later', [['Matching parts should be random', 'Where the design requires matching parts, uncontrolled variation creates assembly and alignment faults.'], ['Only appearance matters', 'Matching dimensions and edges affect fit, function and stability as well as appearance.'], ['Checks slow production without benefit', 'Frequent checks catch small errors before more material is removed or assembly magnifies them.']], 'Regular comparison supports consistency before assembly.'],
          ['What does controlled refinement mean?', 'Remove small amounts and check progress against the approved information', [['Remove all material in one pass', 'One large removal leaves little opportunity to stop before the approved size is exceeded.'], ['Sand until the mark disappears without measuring', 'Removing a line without checking can produce an undersized or uneven part.'], ['Change dimensions to suit the error', 'An error does not authorise changing the approved design; the cause and correction must be assessed.']], 'Gradual work protects accuracy and reduces the chance of overcutting.'],
          ['When may an unfamiliar correction be attempted?', 'After teacher guidance and approval', [['Whenever a classmate suggests it', 'A peer suggestion is not evidence that a correction is safe, suitable or authorised.'], ['Only on the finished product', 'Waiting until completion can make the fault harder to correct and still does not provide approval.'], ['Without securing the part', 'An unsecured component reduces control and can introduce a new hazard during correction.']], 'Corrections can introduce new hazards or faults and must be teacher-directed.'],
          ['Which check best supports a square component?', 'Compare the edge with the approved checking tool and drawing', [['Judge it from across the room', 'A distant visual judgement cannot reliably detect small angular errors.'], ['Use the finish as a guide', 'Finish appearance does not provide a square reference or approved dimension.'], ['Count the tool strokes', 'The number of strokes does not measure the resulting angle or confirm agreement with the drawing.']], 'Quality is confirmed with appropriate tools and reference information.']
        ]},
        { id: 'joint-choices', feedbackFocus: 'the locating behaviour, accuracy needs and design-context evidence for butt, rebate and dowel joints', items: [
          ['What is the main alignment limitation of a butt joint?', 'It relies heavily on square edges and secure positioning', [['It always includes a locating recess', 'A locating recess describes a rebate, not the plain end-to-face contact of a butt joint.'], ['It uses hidden cylindrical connectors', 'Hidden cylindrical connectors describe dowels rather than a basic butt joint.'], ['It cannot use adhesive', 'A butt joint may use approved adhesive; its limitation is weak mechanical location during alignment.']], 'A butt joint provides little mechanical location unless the parts are accurately prepared and held.'],
          ['How can a rebate assist assembly?', 'Its recess provides a locating seat for the connected part', [['It removes the need for accuracy', 'The rebate and mating piece must still be marked, cut and fitted accurately.'], ['It guarantees any dimension', 'A recess locates a part but cannot correct an incorrect approved dimension.'], ['It is always invisible', 'Whether a rebate is visible depends on the component relationship and design; invisibility is not its defining function.']], 'A well-formed rebate can improve location and glue area.'],
          ['What must be accurate for a dowel joint to align correctly?', 'Matching hole positions and orientation', [['Only the finish colour', 'Finish colour has no effect on whether corresponding holes and dowels line up.'], ['The number of sketches', 'Sketch quantity does not control the transferred hole positions in the actual parts.'], ['The desk location', 'Where the product will sit does not align the joint\'s matching holes.']], 'Misaligned dowel holes can prevent assembly or pull components out of position.'],
          ['Why is the strongest joint not automatically the best choice?', 'Suitability also depends on parts, appearance, skill, tools and approved design', [['Strength never matters', 'Strength is important, but it must be considered alongside the actual component relationship and constraints.'], ['All joints behave identically', 'Butt, rebate and dowel joints locate parts, require accuracy and present differently.'], ['The cheapest joint must win', 'Cost alone cannot establish fit, manufacturability, appearance or approval for the design.']], 'Joint selection is a trade-off linked to the actual design context.'],
          ['What evidence supports a joint choice?', 'A reasoned link between the joint features and the component relationship', [['A copied label', 'Naming a joint without explaining its behaviour provides no justification for this component relationship.'], ['A guess after assembly', 'A late guess does not show that joint selection informed planning and approved production.'], ['The joint used by another student', 'Another project may have different parts, tools, skill demands and approved design conditions.']], 'A justified choice explains why the joint suits the design and production conditions.'],
          ['Why test a joint on scrap when directed?', 'It reveals fit and process issues before the project parts are committed', [['It authorises every machine', 'A successful sample does not grant permission to use unrelated or unauthorised equipment.'], ['It changes the project dimensions', 'A test piece investigates process and fit; the approved drawing still controls project dimensions.'], ['It replaces dry fitting', 'A scrap test checks the joint-making process, while the full project still needs a dry-fit assembly check.']], 'A test piece provides low-risk evidence before irreversible work.'],
          ['Who determines the approved joint and process for the project?', 'The approved drawing and teacher direction', [['An unrelated online video', 'A video may explain a principle but cannot authorise this school project\'s joint or workshop process.'], ['The nearest student', 'A classmate does not control the approved design, risk controls or practical permissions.'], ['The finished reference image alone', 'The image provides context but does not reveal an authorised internal joint plan or construction specification.']], 'Online learning supports theory but does not override project authority.']
        ]},
        { id: 'dry-fit-glue', feedbackFocus: 'the reversible dry-fit checks, planned clamping, fault diagnosis and timely process evidence required before glue', items: [
          ['What is the purpose of a dry fit?', 'To check fit, order, squareness and clamp access before glue', [['To apply the finish', 'A dry fit uses no finish; it checks component relationships before permanent assembly.'], ['To hide joint gaps', 'The check is meant to reveal gaps so their cause can be addressed, not conceal them.'], ['To replace drawings', 'The dry fit verifies parts against the approved design and does not replace its drawings.']], 'Dry fitting keeps adjustments reversible before adhesive is introduced.'],
          ['Why plan clamp positions before applying glue?', 'The assembly must be held accurately while access and open time are limited', [['Clamps change material type', 'Clamps apply holding pressure but do not alter whether a part is pine, MDF or another approved material.'], ['More clamps always fix poor joints', 'Extra pressure cannot correct inaccurate surfaces or misaligned parts and may damage the work.'], ['Planning removes cleanup', 'A clamp rehearsal reduces rushing but approved glue cleanup is still required.']], 'A rehearsed clamp setup supports alignment without rushed decisions.'],
          ['What should happen when a dry fit reveals a gap?', 'Diagnose the cause and seek approval for the correction', [['Use extra glue to fill it', 'Adhesive is not a structural substitute for correcting inaccurate contact surfaces or alignment.'], ['Force the parts together', 'Force can distort or damage components without resolving the source of the mismatch.'], ['Proceed and hide it later', 'Continuing converts a visible, reversible fault into a permanent quality problem.']], 'Glue is not a substitute for accurate fit and forcing can damage the work.'],
          ['Why record an assembly checkpoint photograph?', 'It provides evidence of fit, order and workmanship before later stages hide details', [['It replaces the product', 'A photograph documents evidence but cannot substitute for the actual designed and made outcome.'], ['It grants permission to proceed', 'Evidence of a checkpoint does not replace the teacher\'s approval decision.'], ['It is only decorative', 'A well-timed, labelled photograph records process and quality details that may later be hidden.']], 'Timely evidence shows the process and quality decisions, not only the final appearance.']
        ]}
      ]
    },
    'Weeks 9-10': {
      presentation: '../presentations/desk-tidy-weeks-9-10.pptx', folio: '../desk-tidy-folio.html#folio-11', slices: [[0, 4], [4, 8], [8, 12]], sections: [
        { id: 'clear-finish', feedbackFocus: 'the approved sanding sequence, pre-finish inspection and teacher/product-information controls for safe finish application and curing', items: [
          ['Why sand through the approved grit sequence?', 'Each stage refines scratches left by the previous stage', [['The coarsest grit creates the final surface', 'Coarse abrasive removes faults quickly but leaves scratches that finer approved stages must refine.'], ['Skipping grits improves consistency', 'Skipping a stage can leave scratches too deep for the final fine abrasive to remove evenly.'], ['Grit choice changes the brief', 'Abrasive selection affects surface preparation, not the user need or intended outcome in the brief.']], 'Progressive sanding prepares an even surface without relying on the finish to hide faults.'],
          ['Why inspect under good light before finishing?', 'Roughness, scratches, glue and dust are easier to identify', [['Light cures every finish', 'Lighting helps inspection; curing depends on the authorised product and conditions.'], ['Inspection replaces sanding', 'Inspection identifies faults, while approved preparation is still needed to correct them.'], ['It changes the grain direction', 'Viewing conditions reveal the existing grain and surface; they do not alter timber structure.']], 'A finish can highlight preparation faults, so they should be corrected first.'],
          ['What controls the exact finish application?', 'Teacher demonstration and the product information', [['An unrelated video', 'A generic clip may use a different product or method and cannot override local instructions.'], ['Another student\'s project', 'A peer\'s earlier process may involve different instructions, conditions or approval.'], ['A guessed drying time', 'Drying and curing times must come from the approved product information and teacher direction, not estimation.']], 'The approved school process and product information are authoritative.'],
          ['Why should the project remain undisturbed while drying or curing?', 'Handling can mark the surface and affect performance', [['It changes the design criteria', 'Drying protects the applied finish but does not alter the criteria set earlier in the design process.'], ['It removes the need for ventilation', 'Leaving work untouched does not replace the authorised ventilation and area controls.'], ['It increases storage capacity', 'Curing affects finish quality, not the organiser\'s compartment capacity.']], 'Protection during drying preserves coverage and surface quality.'],
          ['What should a student do after noticing a run or pooled finish?', 'Stop and seek teacher guidance before attempting a correction', [['Wipe it with any material', 'An unsuitable cloth or wiping method can spread finish, contaminate the surface or create a safety issue.'], ['Add more finish immediately', 'More product can increase pooling and does not diagnose the cause of the fault.'], ['Hide it in photographs', 'Concealing evidence avoids the quality problem rather than correcting it safely.']], 'Unapproved correction can worsen the fault or introduce safety risks.'],
          ['Why is one approved coat not permission to add more?', 'The authorised finish system controls product use and quality expectations', [['Extra coats always reduce durability', 'Additional coats do not always reduce durability; the issue is that they are outside the verified process.'], ['Coats have no effect', 'Coat number can affect coverage, curing, appearance and product use.'], ['The colour decides the number', 'The approved product system and instructions control application, not colour preference.']], 'Students follow the verified unit requirement rather than improvising product use.']
        ]},
        { id: 'functional-testing', feedbackFocus: 'the authentic, repeatable tests and recorded observations that compare function with the original criteria before approved improvement', items: [
          ['Why test with the intended stationery?', 'The product must work with the real items named in the brief', [['Any objects give identical evidence', 'Objects with different size, mass and access needs do not test the intended use in the same way.'], ['Empty testing proves capacity', 'An empty compartment cannot show whether the named items fit, remain accessible or affect stability.'], ['Appearance replaces function', 'Looking suitable does not demonstrate storage capacity, access, stability or desk fit.']], 'Authentic items make capacity and access tests relevant to the user.'],
          ['What separates evidence from opinion?', 'Evidence is observable, measurable or shown clearly', [['Evidence is always positive', 'Valid evidence can reveal a fault or unmet criterion as well as a success.'], ['Opinion includes millimetres', 'Using a unit does not make a claim evidence unless an actual observation or measurement supports it.'], ['Evidence hides faults', 'Honest evidence records limitations and unexpected results instead of concealing them.']], 'A test observation or photograph supports a judgement more strongly than a vague preference.'],
          ['How should stability be tested?', 'On a flat surface while intended items are added and removed', [['By holding the product in the air', 'Supporting the product by hand prevents the test from revealing rocking, sliding or tipping on a desk.'], ['Before assembly', 'Loose components cannot represent the stability of the completed organiser during realistic use.'], ['Only by looking at a photograph', 'A still image cannot reproduce the forces and movement involved as items are added or removed.']], 'The test should reproduce realistic use and allow rocking or tipping to be observed.'],
          ['Why diagnose a fault before proposing an improvement?', 'The change should address the likely cause rather than the symptom alone', [['Every fault needs the same repair', 'Different causes require different responses; one generic repair may be ineffective or unsafe.'], ['Diagnosis removes teacher approval', 'Understanding the cause informs discussion but does not authorise a production change.'], ['Improvements are only decorative', 'A useful improvement may address function, fit, stability, workmanship or production as well as appearance.']], 'Cause-and-effect reasoning makes improvement suggestions realistic and relevant.'],
          ['What is a fair way to compare the result with criteria?', 'Use the same defined test conditions and record specific observations', [['Change the criteria after testing', 'Changing the success measure after seeing the result prevents an honest comparison with the original intention.'], ['Ignore unexpected results', 'Unexpected evidence may reveal an important limitation and must be recorded and interpreted.'], ['Use another student\'s product', 'Another design is not the agreed criterion for judging this user\'s Desk Tidy.']], 'Consistent conditions support honest comparison with the original intentions.'],
          ['What should happen before altering a finished product after testing?', 'Discuss the evidence and obtain teacher approval', [['Force the change immediately', 'An unplanned alteration can introduce damage or safety risk before the cause and method are assessed.'], ['Remove the test record', 'Deleting evidence destroys the basis for the improvement decision and weakens the evaluation.'], ['Copy another solution', 'Another product may not address this fault, user or approved design and does not provide authorisation.']], 'Any adjustment may affect safety, quality or assessment evidence and remains teacher-controlled.']
        ]},
        { id: 'evaluation-reflection', feedbackFocus: 'the criterion–evidence–judgement–improvement chain and the honest design-journey evidence used for evaluation and reflection', items: [
          ['What structure creates a strong evaluation statement?', 'Criterion, evidence, judgement and improvement', [['Opinion, colour and mark', 'A preference, colour and grade prediction do not link the intended criterion to observed performance.'], ['Photo without explanation', 'An image becomes useful evidence only when its relevant feature and meaning are explained.'], ['Copied conclusion', 'Copied wording cannot judge this student\'s test results or identify a suitable improvement.']], 'A strong evaluation traces the intended result to evidence and a reasoned judgement.'],
          ['Why identify both successes and faults?', 'Balanced evidence shows accurate judgement and useful learning', [['Faults must be hidden', 'Concealing faults makes the evaluation less credible and prevents useful improvement.'], ['Only success affects criteria', 'A failed or partly met criterion is still important evidence about product performance.'], ['Evaluation is advertising', 'Evaluation judges an outcome honestly; it is not promotion that presents only positives.']], 'Honest evaluation is more credible and supports realistic improvement.'],
          ['What makes an improvement realistic?', 'It responds to evidence and considers time, materials, skill and approval', [['It promises a perfect result', 'A promise of perfection gives no feasible action, constraint or evidence-based target.'], ['It changes every feature', 'Changing everything is rarely necessary or achievable when evidence identifies a specific issue.'], ['It ignores the cause', 'A suggestion that does not address the diagnosed cause may leave the original fault unchanged.']], 'A useful improvement is specific, feasible and connected to the diagnosed issue.'],
          ['Why justify material and process choices in the evaluation?', 'They shaped performance, appearance, waste and manufacture', [['They are unrelated to the product', 'Materials and processes directly influence how the product was made and how it performs.'], ['They replace testing', 'A justification explains decisions, while testing supplies evidence of their actual result.'], ['They determine the user automatically', 'The brief identifies the user; material and process choices respond to that need rather than defining it.']], 'Design decisions create trade-offs that should be judged against evidence.'],
          ['What should a presentation of the design journey include?', 'Selected evidence arranged to explain decisions, making and testing', [['Every photo without labels', 'Unselected, unlabelled images create volume but do not explain the sequence or significance of evidence.'], ['Only the finished product', 'A final image omits the research, decisions, production checks and testing that explain development.'], ['Another student\'s drawings', 'Someone else\'s work is neither authentic evidence of this journey nor appropriate to claim.']], 'A logical evidence sequence communicates how the outcome developed and why.'],
          ['What is the purpose of reflection?', 'To identify learning, challenge, response and next-step growth', [['To rewrite the brief', 'Reflection examines the student\'s learning; it does not retrospectively change the original need.'], ['To claim there were no problems', 'Avoiding challenges removes the opportunity to explain adaptation and growth.'], ['To predict a mark', 'A mark prediction does not identify what was learned or how future work could improve.']], 'Reflection focuses on how the student\'s understanding and skills changed.']
        ]}
      ]
    }
  };

  const learningPackageByModule = {
    'Weeks 1-2': {
      preview: {
        file: '../assets/presentations/desk-tidy-weeks-1-2-preview.webp',
        alt: 'Opening slide of the Desk Tidy Weeks 1–2 presentation introducing the design brief, workshop safety and material choices.',
        caption: 'Preview the opening slide, then download the full Weeks 1–2 presentation for the complete lesson sequence.'
      },
      orientation: {
        prior: 'This is the starting module; no earlier course module is required.',
        next: 'Begin with Designing for an organised workspace, then work through its activity, checks and capstone.'
      },
      capstones: [
        { sectionId: 'design-brief', writtenIndices: [0], label: 'Capstone 1 of 4' },
        { sectionId: 'workshop-safety', writtenIndices: [1], label: 'Capstone 2 of 4' },
        { sectionId: 'materials', writtenIndices: [2, 3], label: 'Connected capstones 3 and 4 of 4' }
      ]
    },
    'Weeks 3-4': {
      preview: {
        file: '../assets/presentations/desk-tidy-weeks-3-4-preview.webp',
        alt: 'Opening slide of the Desk Tidy Weeks 3–4 presentation introducing research, concept development and respectful design.',
        caption: 'Preview the opening slide, then download the full Weeks 3–4 presentation for the complete lesson sequence.'
      },
      orientation: {
        prior: 'Bring the brief, safety decisions and material evidence developed in Module 1.',
        next: 'Begin with Researching organisers and generating four concepts, then work through its activity, checks and capstone.'
      },
      capstones: [
        { sectionId: 'research-concepts', writtenIndices: [0], label: 'Capstone 1 of 4' },
        { sectionId: 'compare-concepts', writtenIndices: [1, 2], label: 'Connected capstones 2 and 3 of 4' },
        { sectionId: 'respectful-design', writtenIndices: [3], label: 'Capstone 4 of 4' }
      ]
    },
    'Weeks 5-6': {
      preview: {
        file: '../assets/presentations/desk-tidy-weeks-5-6-preview.webp',
        alt: 'Opening slide of the Desk Tidy Weeks 5–6 presentation introducing working drawings, production planning and accurate marking out.',
        caption: 'Preview the opening slide, then download the full Weeks 5–6 presentation for the complete lesson sequence.'
      },
      orientation: {
        prior: 'Bring the researched concepts and justified preferred direction developed in Module 2.',
        next: 'Begin with Communicating the selected design with working drawings, then work through its activity, checks and capstone.'
      },
      capstones: [
        { sectionId: 'working-drawings', writtenIndices: [0], label: 'Capstone 1 of 4' },
        { sectionId: 'cutting-schedule', writtenIndices: [1, 2], label: 'Connected capstones 2 and 3 of 4' },
        { sectionId: 'accurate-markout', writtenIndices: [3], label: 'Capstone 4 of 4' }
      ]
    },
    'Weeks 7-8': {
      preview: {
        file: '../assets/presentations/desk-tidy-weeks-7-8-preview.webp',
        alt: 'Opening slide of the Desk Tidy Weeks 7–8 presentation introducing controlled cutting, joint choices, dry fitting and assembly.',
        caption: 'Preview the opening slide, then download the full Weeks 7–8 presentation for the complete lesson sequence.'
      },
      orientation: {
        prior: 'Bring the approved drawings, cutting list, production schedule and datum marking decisions from Module 3.',
        next: 'Begin with Cutting and shaping components accurately, then work through its activity, checks and capstone.'
      },
      capstones: [
        { sectionId: 'cutting-shaping', writtenIndices: [0], label: 'Capstone 1 of 4' },
        { sectionId: 'joint-choices', writtenIndices: [1], label: 'Capstone 2 of 4' },
        { sectionId: 'dry-fit-glue', writtenIndices: [2, 3], label: 'Connected capstones 3 and 4 of 4' }
      ]
    },
    'Weeks 9-10': {
      preview: {
        file: '../assets/presentations/desk-tidy-weeks-9-10-preview.webp',
        alt: 'Opening slide of the Desk Tidy Weeks 9–10 presentation introducing clear finishing, functional testing, evaluation and reflection.',
        caption: 'Preview the opening slide, then download the full Weeks 9–10 presentation for the complete lesson sequence.'
      },
      orientation: {
        prior: 'Bring the made, dry-fitted and assembled project evidence developed in Module 4.',
        next: 'Begin with Applying a clear finish safely and evenly, then work through its activity, checks and capstone.'
      },
      capstones: [
        { sectionId: 'clear-finish', writtenIndices: [0], label: 'Capstone 1 of 4' },
        { sectionId: 'functional-testing', writtenIndices: [1], label: 'Capstone 2 of 4' },
        { sectionId: 'evaluation-reflection', writtenIndices: [2, 3], label: 'Connected capstones 3 and 4 of 4' }
      ]
    }
  };

  const data = moduleData[moduleKey];
  if (!data || !Array.isArray(window.MC_QUESTIONS)) return;
  const learningPackage = learningPackageByModule[moduleKey] || null;
  if (learningPackage) {
    const mappedIndices = learningPackage.capstones.flatMap(entry => entry.writtenIndices);
    const expectedIndices = (window.WRITTEN_QUESTIONS || []).map((_, index) => index);
    if (JSON.stringify(mappedIndices.slice().sort((a, b) => a - b)) !== JSON.stringify(expectedIndices)) {
      throw new Error(`${moduleKey} must map every written capstone exactly once by its original index.`);
    }
    window.DESK_TIDY_LEARNING_PACKAGE = {
      moduleKey,
      capstones: learningPackage.capstones.map(entry => ({
        sectionId: entry.sectionId,
        writtenIndices: entry.writtenIndices.slice(),
        label: entry.label
      }))
    };
  }

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
    'workshop-safety': ['hazard-risk-control-chain', 'Build a hazard–risk–control chain'],
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

  function questionFromTuple(tuple, section, index) {
    const [question, correctText, distractors, why] = tuple;
    const sectionId = section.id;
    const sectionTitle = document.getElementById(sectionId)?.querySelector('h2')?.textContent || sectionId;
    if (!section.feedbackFocus || !Array.isArray(distractors) || distractors.length !== 3) {
      throw new Error(`${moduleKey} ${sectionId} has an invalid feedback schema for “${question}”.`);
    }
    const optionRecords = distractors.map(distractor => {
      if (!Array.isArray(distractor) || distractor.length !== 2 || !distractor.every(value => String(value).trim())) {
        throw new Error(`${moduleKey} ${sectionId} has incomplete distractor feedback for “${question}”.`);
      }
      const [text, misconception] = distractor;
      return {
        text,
        feedback: `${misconception} Revisit “${sectionTitle}” and review ${section.feedbackFocus} before choosing again.`
      };
    });
    const rotation = index % 4;
    optionRecords.splice(rotation, 0, { text: correctText, feedback: why });
    return {
      question,
      options: optionRecords.map(option => option.text),
      correct: rotation,
      hint: `Return to the precise theory section “${sectionTitle}” and identify the decision being explained.`,
      strongHint: why,
      feedback: optionRecords.map(option => option.feedback)
    };
  }

  const original = window.MC_QUESTIONS.slice();
  const expanded = [];
  data.sections.forEach((section, sectionIndex) => {
    const [start, end] = data.slices[sectionIndex];
    const existing = original.slice(start, end);
    const additions = section.items.map((item, index) => questionFromTuple(item, section, index));
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

    if (learningPackage?.preview) {
      const preview = document.createElement('figure');
      preview.className = 'module-slide-preview screen-only';
      preview.innerHTML = `<a class="module-slide-preview__image" href="${escapeMarkup(learningPackage.preview.file)}" target="_blank" rel="noopener"><img src="${escapeMarkup(learningPackage.preview.file)}" alt="${escapeMarkup(learningPackage.preview.alt)}" loading="lazy"></a><figcaption>${escapeMarkup(learningPackage.preview.caption)} <a class="open-larger" href="${escapeMarkup(learningPackage.preview.file)}" target="_blank" rel="noopener">Open preview</a></figcaption>`;
      overview.append(preview);
    }

    if (learningPackage?.orientation) {
      const orientation = document.createElement('section');
      orientation.className = 'module-orientation screen-only';
      orientation.setAttribute('aria-label', `${moduleKey} module orientation`);
      orientation.innerHTML = `<div><span>Prior learning</span><p>${escapeMarkup(learningPackage.orientation.prior)}</p></div><div><span>Next step</span><p>${escapeMarkup(learningPackage.orientation.next)}</p></div>`;
      overview.insertAdjacentElement('afterend', orientation);
    }
  }

  if (location.pathname.includes('/weeks9-10/')) {
    const finalNext = document.querySelector('.completion-card .week-switcher .next');
    if (finalNext) {
      finalNext.href = '../index.html#course-map-title';
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
    panel.className = 'section-activity-embed screen-only';
    panel.dataset.activitySection = section.id;
    panel.dataset.activityId = activityId;
    panel.innerHTML = `<details><summary><span><span class="section-kicker">Applied learning activity</span><strong>${escapeMarkup(activityTitle)}</strong><small>Open here — answers and feedback save in the same browser record as the full activity.</small></span><span class="activity-expand-label" aria-hidden="true">Expand</span></summary><div class="activity-embed-body"><div class="activity-route-links"><a href="../activities/activity.html?id=${encodeURIComponent(activityId)}">Open full-page activity</a><a href="../activities/print.html?id=${encodeURIComponent(activityId)}" target="_blank" rel="noopener">Printable / low-tech version</a></div><iframe loading="lazy" title="${escapeMarkup(activityTitle)} interactive activity" data-activity-id="${escapeMarkup(activityId)}" data-src="../activities/activity.html?id=${encodeURIComponent(activityId)}&amp;embed=1"></iframe></div></details>`;
    theory.insertAdjacentElement('afterend', panel);

    const details = panel.querySelector('details');
    details.addEventListener('toggle', () => {
      const frame = details.querySelector('iframe');
      const label = details.querySelector('.activity-expand-label');
      if (label) label.textContent = details.open ? 'Collapse' : 'Expand';
      if (details.open && frame && !frame.getAttribute('src')) frame.src = frame.dataset.src;
    });
  });

  window.addEventListener('message', event => {
    if (event.origin !== window.location.origin || event.data?.type !== 'desk-tidy-activity-resize') return;
    const frame = Array.from(document.querySelectorAll('.section-activity-embed iframe'))
      .find(candidate => candidate.contentWindow === event.source && candidate.dataset.activityId === event.data.activityId);
    if (!frame) return;
    const height = Number(event.data.height);
    if (!Number.isFinite(height)) return;
    frame.style.height = `${Math.max(520, Math.min(4000, Math.ceil(height)))}px`;
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
