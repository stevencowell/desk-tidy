(function () {
  "use strict";

  window.DESK_TIDY_ACTIVITIES = {
    schemaVersion: "1.0.0",
    bankTitle: "Desk Tidy Applied Learning Activities",
    storagePrefix: "desk-tidy:applied-learning:v1:",
    recordMeaning: "Browser-local formative practice only; not formal assessment, folio submission, teacher-observed evidence or a VET competency decision.",
    modules: [
      { id: "M01", label: "Module 1", title: "Brief, safety and materials", route: "../weeks1-2/index.html" },
      { id: "M02", label: "Module 2", title: "Research and develop ideas", route: "../weeks3-4/index.html" },
      { id: "M03", label: "Module 3", title: "Draw and plan production", route: "../weeks5-6/index.html" },
      { id: "M04", label: "Module 4", title: "Make and assemble", route: "../weeks7-8/index.html" },
      { id: "M05", label: "Module 5", title: "Finish, test and reflect", route: "../weeks9-10/index.html" }
    ],
    activities: [
      {
        id: "brief-to-criteria",
        moduleId: "M01",
        title: "Turn the brief into testable criteria",
        theorySection: "Designing for an organised workspace",
        lessonPlacement: "Period 1: after reading the design-brief theory and before writing the user's need and measurable criteria.",
        sourceAnchor: "../weeks1-2/index.html#design-brief",
        period: "Period 1",
        duration: "8–10 minutes",
        mechanic: "classify",
        mechanicLabel: "Drag, tap or keyboard classification",
        goal: "Practise separating measurable Desk Tidy criteria from vague opinions or copied solutions.",
        instructions: [
          "Move each statement to the category that best describes its usefulness as a design criterion.",
          "On touch or keyboard, select a statement and then choose a category button. Drag-and-drop is optional.",
          "Check your practice, read the feedback and revise any misplaced statement."
        ],
        support: "Ask whether the statement can be checked with the intended user, their items or their desk space. A criterion should describe success without prescribing one copied design.",
        lowTech: "Cut out or number the statements, place them under the three headings, then rewrite one vague statement so it becomes observable and testable.",
        outcomes: ["TE4-PDP-01", "TE4-DES-01"],
        sourceRefs: ["SRC-PROJECT-UNIT-2025", "SRC-PROGRAM-V1.3"],
        categories: [
          { id: "testable", title: "Testable criterion", description: "Observable or measurable against the user's need." },
          { id: "clarify", title: "Needs clearer wording", description: "Relevant idea, but too subjective to test yet." },
          { id: "reject", title: "Reject as a criterion", description: "Copies a solution or avoids the design problem." }
        ],
        items: [
          { id: "criteria-1", text: "Holds the user's selected stationery without blocking access.", correct: "testable", feedback: "This can be checked by placing and removing the user's selected items." },
          { id: "criteria-2", text: "Looks cool.", correct: "clarify", feedback: "Appearance may matter, but 'cool' needs clearer visual qualities or user feedback before it can be checked." },
          { id: "criteria-3", text: "Remains stable as each intended item is removed.", correct: "testable", feedback: "Normal access can be repeated while observing whether the organiser tips or slides." },
          { id: "criteria-4", text: "Must be exactly the same as the reference image.", correct: "reject", feedback: "The reference gives project context; it is not an approved design to copy and does not replace original design decisions." },
          { id: "criteria-5", text: "Fits the user's measured desk area.", correct: "testable", feedback: "The available desk space provides direct evidence for this criterion." },
          { id: "criteria-6", text: "Uses a colour everybody will love.", correct: "clarify", feedback: "The claim is subjective and universal. It needs a defined user and a way to collect evidence." }
        ],
        feedback: {
          success: "You separated measurable success from opinion and copied solutions. Use the same test when writing your own criteria.",
          retry: "Recheck the statements that rely on opinion or prescribe one finished answer. A useful criterion can be tested against the brief."
        }
      },
      {
        id: "hazard-risk-control-chain",
        moduleId: "M01",
        title: "Build a hazard–risk–control chain",
        theorySection: "Hazards, risks and controls in the timber workshop",
        lessonPlacement: "Period 2: after the safety theory and before the scaffolded safety response or teacher-assigned induction work.",
        sourceAnchor: "../weeks1-2/index.html#workshop-safety",
        period: "Period 2",
        duration: "8–10 minutes",
        mechanic: "match",
        mechanicLabel: "Meaning-to-example matching",
        goal: "Practise distinguishing a hazard, the possible harm and the controls that reduce risk.",
        instructions: [
          "Read each statement from the damaged-tool example.",
          "Match it to the safety idea it demonstrates.",
          "Check the complete chain and use the feedback to correct any confused terms."
        ],
        support: "A hazard is the source of possible harm. Risk describes what could happen and how likely or serious it may be. A control changes the situation to reduce risk; PPE is the final layer, not the whole plan.",
        lowTech: "Draw arrows from each example to its safety term, then write one hazard–risk–control chain from a teacher-approved classroom example.",
        outcomes: ["TE4-SAF-01", "TE4-PDP-01"],
        sourceRefs: ["SRC-NESA-SYLLABUS-LOCAL-2025", "SRC-PROGRAM-V1.3"],
        options: [
          { value: "hazard", label: "Hazard" },
          { value: "risk", label: "Risk" },
          { value: "control", label: "Control action" },
          { value: "ppe", label: "PPE's place" },
          { value: "priority", label: "Hierarchy priority" }
        ],
        items: [
          { id: "safety-1", prompt: "A tool is visibly damaged before use.", correct: "hazard", feedback: "The damaged tool is the source of possible harm." },
          { id: "safety-2", prompt: "A hand could be injured if the damaged tool is used.", correct: "risk", feedback: "This describes the possible harm arising from exposure to the hazard." },
          { id: "safety-3", prompt: "Do not use the tool; stop and tell the teacher.", correct: "control", feedback: "Stopping use and reporting the damage changes the situation before work continues." },
          { id: "safety-4", prompt: "Safety glasses add a final layer of protection.", correct: "ppe", feedback: "PPE can reduce exposure but does not remove the hazard by itself." },
          { id: "safety-5", prompt: "Consider removing or substituting a hazard before relying on personal protection.", correct: "priority", feedback: "The hierarchy starts with higher-level controls before the final PPE layer." }
        ],
        feedback: {
          success: "Your chain separates the source of harm, the possible consequence and the controls. Keep following current teacher direction, induction and local workshop requirements.",
          retry: "Read the chain as three questions: what could cause harm, what might happen, and what changes the situation?"
        }
      },
      {
        id: "materials-evidence-sort",
        moduleId: "M01",
        title: "Sort material evidence from unsupported claims",
        theorySection: "Choosing materials responsibly",
        lessonPlacement: "Period 3: after the materials theory and before testing teacher-approved radiata pine and MDF samples.",
        sourceAnchor: "../weeks1-2/index.html#materials",
        period: "Period 3",
        duration: "8–10 minutes",
        mechanic: "classify",
        mechanicLabel: "Evidence classification",
        goal: "Practise using sample observations and responsible material-use actions without claiming that one material is automatically best.",
        instructions: [
          "Sort each statement as sample evidence, a responsible action or an unsupported claim.",
          "Use drag-and-drop, or select a statement and choose its category.",
          "Check your choices before completing the real sample investigation."
        ],
        support: "Evidence records what can be observed or tested. Responsible actions reduce waste or improve sourcing. Words such as 'always' or 'automatically' often signal a claim that the investigation has not proved.",
        lowTech: "Place each numbered statement under Evidence, Responsible action or Unsupported claim. Add one observation from an approved classroom sample.",
        outcomes: ["TE4-MSC-01", "TE4-SDP-01", "TE4-SAF-01"],
        sourceRefs: ["SRC-PROJECT-UNIT-2025", "SRC-PROGRAM-V1.3"],
        categories: [
          { id: "evidence", title: "Sample evidence", description: "Observation or comparison that can be recorded." },
          { id: "action", title: "Responsible action", description: "A practical choice that reduces waste or supports responsible use." },
          { id: "unsupported", title: "Unsupported claim", description: "A conclusion the sample investigation does not prove." }
        ],
        items: [
          { id: "material-1", text: "Radiata pine shows natural grain in the sample.", correct: "evidence", feedback: "Natural grain is an observable feature of the radiata pine sample." },
          { id: "material-2", text: "The MDF sample has a smooth face with no natural grain.", correct: "evidence", feedback: "This is an observable comparison point, not a final design decision." },
          { id: "material-3", text: "Plan the part layout before marking out.", correct: "action", feedback: "Planning the layout can reduce mistakes and material waste." },
          { id: "material-4", text: "Keep larger usable offcuts for later work.", correct: "action", feedback: "Keeping genuinely usable offcuts is a direct waste-reduction action." },
          { id: "material-5", text: "MDF is automatically the best material for every Desk Tidy.", correct: "unsupported", feedback: "Samples provide evidence, but suitability still depends on the approved design and teacher requirements." },
          { id: "material-6", text: "Timber is always sustainable, regardless of sourcing or waste.", correct: "unsupported", feedback: "Responsible sourcing, efficient use and longevity all matter; the absolute claim is not supported." }
        ],
        feedback: {
          success: "You kept observation, action and conclusion separate. Record what the approved samples actually show, then justify suitability against the design.",
          retry: "Check whether each statement is something you can observe, something you can do, or a conclusion that goes beyond the evidence."
        }
      },
      {
        id: "research-to-four-concepts",
        moduleId: "M02",
        title: "Sequence research into four original concepts",
        theorySection: "Researching organisers and generating four concepts",
        lessonPlacement: "Periods 6–7: after researching organiser examples and before drawing four genuinely different annotated concepts.",
        sourceAnchor: "../weeks3-4/index.html#research-concepts",
        period: "Periods 6–7",
        duration: "10–12 minutes",
        mechanic: "sequence",
        mechanicLabel: "Design-process sequencing",
        goal: "Practise moving from an identified user need and ethical research to four distinct, annotated Desk Tidy concepts.",
        instructions: [
          "Arrange the steps into a defensible research-and-concept workflow.",
          "Use the up and down controls; they work with keyboard, mouse and touch.",
          "Check the order, then explain which step prevents copying and which step makes concepts testable."
        ],
        support: "Start with the real user and record where research came from. Research should reveal useful features, roles and constraints; it should not become a design to copy. Concepts come before final selection.",
        lowTech: "Number the workflow cards from first to last. Circle the step that protects source integrity and underline the step that creates measurable design information.",
        outcomes: ["TE4-PDP-01", "TE4-DES-01", "TE4-MSC-01"],
        sourceRefs: ["SRC-NESA-SYLLABUS-LOCAL-2025", "SRC-PROGRAM-V1.3"],
        items: [
          { id: "research-step-1", text: "Clarify the intended user, their items, work habits and available desk space.", feedback: "A clear need gives the research and concepts a purpose." },
          { id: "research-step-2", text: "Record each useful example's creator, source and available reuse guidance.", feedback: "Attribution and reuse checks keep research ethical and legal." },
          { id: "research-step-3", text: "Compare organiser features and infer designer, producer or manufacturer decisions from evidence.", feedback: "Research becomes useful when it identifies evidence-based decisions rather than surfaces to copy." },
          { id: "research-step-4", text: "Sketch four concepts with genuinely different arrangements, forms or ways of storing the user's items.", feedback: "Four concepts should explore different solutions, not colour-only variations." },
          { id: "research-step-5", text: "Annotate function, intended material and approximate sizes so each concept can be discussed and tested.", feedback: "Annotations make design reasoning visible without claiming final approved dimensions." },
          { id: "research-step-6", text: "Gather feedback and prepare the concepts for comparison against the brief and constraints.", feedback: "Feedback and criteria support the later selection and refinement." }
        ],
        initialOrder: ["research-step-3", "research-step-1", "research-step-5", "research-step-2", "research-step-6", "research-step-4"],
        feedback: {
          success: "Your sequence keeps the user, source integrity and divergent thinking visible before a preferred design is selected.",
          retry: "Rebuild the flow from need → accountable research → four different ideas → annotations → feedback and comparison."
        }
      },
      {
        id: "concept-evidence-decisions",
        moduleId: "M02",
        title: "Make evidence-led concept decisions",
        theorySection: "Comparing concepts",
        lessonPlacement: "Period 8: after the comparison theory and before using the decision matrix or testing a teacher-approved prototype, model or sample.",
        sourceAnchor: "../weeks3-4/index.html#compare-concepts",
        period: "Period 8",
        duration: "10 minutes",
        mechanic: "scenario",
        mechanicLabel: "Scenario decisions",
        goal: "Practise using criteria, constraints, feedback and prototype evidence without treating a matrix total as an automatic answer.",
        instructions: [
          "Read each concept-development situation.",
          "Choose the decision that uses the strongest evidence and respects teacher approval.",
          "Check your reasoning and use the feedback to refine any weak choice."
        ],
        support: "A decision matrix organises evidence; it does not replace judgement. A prototype, model or sample should test a named uncertainty and be approved before it is made.",
        lowTech: "Circle one response for each scenario and add a one-sentence justification that names the evidence or constraint you used.",
        outcomes: ["TE4-DES-01", "TE4-SDP-01", "TE4-MSC-01"],
        sourceRefs: ["SRC-NESA-SUPPORT-LOCAL-2025", "SRC-PROGRAM-V1.3"],
        scenarios: [
          {
            id: "concept-scenario-1",
            prompt: "One concept has the highest matrix total but performs poorly against the user's most important access criterion. What is the strongest next step?",
            choices: [
              { id: "a", text: "Select it automatically because the total is highest.", correct: false, feedback: "The total organises evidence but does not cancel an important criterion or the need for judgement." },
              { id: "b", text: "Review the weighting, written reasons and user evidence before deciding whether to refine or reject it.", correct: true, feedback: "This uses the matrix as evidence while keeping the user's need and design reasoning in control." },
              { id: "c", text: "Change the criterion so the concept wins.", correct: false, feedback: "Changing a criterion to protect a favourite concept weakens the integrity of the comparison." }
            ]
          },
          {
            id: "concept-scenario-2",
            prompt: "You are uncertain whether intended items can be reached easily. Which proposed test is most useful?",
            choices: [
              { id: "a", text: "With teacher approval, make a suitable card model or sample and record an access test using the intended items.", correct: true, feedback: "The model has a named purpose, an observable test and a record that can guide refinement." },
              { id: "b", text: "Add decoration to the sketch and decide from appearance.", correct: false, feedback: "Decoration does not test access or fit." },
              { id: "c", text: "Begin final manufacture and see what happens.", correct: false, feedback: "Uncertainty should be tested before final production and only through an approved process." }
            ]
          },
          {
            id: "concept-scenario-3",
            prompt: "Feedback identifies a compartment that is too narrow for its intended item. What should the folio show?",
            choices: [
              { id: "a", text: "Hide the feedback so the first concept looks complete.", correct: false, feedback: "Useful feedback and resulting change are evidence of design development, not failure." },
              { id: "b", text: "Record the feedback, refine the feature and explain how the change improves the criterion.", correct: true, feedback: "This makes the evidence-to-refinement link traceable." },
              { id: "c", text: "Widen every compartment without checking the user or available space.", correct: false, feedback: "A broad change may create new problems; refine the specific feature against the brief and constraints." }
            ]
          }
        ],
        feedback: {
          success: "You used the matrix, prototype evidence and feedback as tools for judgement rather than automatic answers.",
          retry: "Choose the response that names evidence, tests a real uncertainty and records the reason for refinement."
        }
      },
      {
        id: "respectful-design-research",
        moduleId: "M02",
        title: "Check cultural safety in design research",
        theorySection: "Learning respectfully from Aboriginal and Torres Strait Islander design knowledge",
        lessonPlacement: "Period 9: after the cultural-safety theory and before the scaffolded respectful-research response.",
        sourceAnchor: "../weeks3-4/index.html#respectful-design",
        period: "Period 9",
        duration: "8–10 minutes",
        mechanic: "scenario",
        mechanicLabel: "Source-and-permission scenarios",
        goal: "Practise learning from teacher-approved sources with attribution, local context and permission while avoiding copied cultural expression.",
        instructions: [
          "Read each research situation carefully.",
          "Choose the response that is respectful, source-aware and appropriate for an original Desk Tidy design.",
          "Check the decisions and discuss any local guidance with your teacher."
        ],
        support: "Online visibility does not prove authority or permission. Look for the relevant Country, community and context, record attribution, and pause when reuse guidance is unclear.",
        lowTech: "Circle the safest response in each scenario. Beside it, write which evidence, permission or local guidance would be needed before proceeding.",
        outcomes: ["TE4-SDP-01", "TE4-PDP-01"],
        sourceRefs: ["SRC-NESA-SYLLABUS-LOCAL-2025", "SRC-PROGRAM-V1.3"],
        scenarios: [
          {
            id: "culture-scenario-1",
            prompt: "A striking cultural design appears in an image search, but the creator, community and reuse conditions are unclear. What should you do?",
            choices: [
              { id: "a", text: "Copy it because it is visible online.", correct: false, feedback: "Public visibility is not evidence of authority, permission or appropriate reuse." },
              { id: "b", text: "Pause, keep a source note and seek a teacher-approved source or local guidance before using anything from it.", correct: true, feedback: "This keeps the uncertainty visible and avoids unauthorised copying." },
              { id: "c", text: "Change the colours and call it original.", correct: false, feedback: "A superficial change does not resolve cultural authority or permission." }
            ]
          },
          {
            id: "culture-scenario-2",
            prompt: "A teacher-approved source explains careful material use and designing for longevity in a clearly identified context. What is an appropriate application?",
            choices: [
              { id: "a", text: "Copy symbols from the source onto the Desk Tidy.", correct: false, feedback: "Broad design lessons do not provide permission to copy cultural symbols or expression." },
              { id: "b", text: "Apply the broad lesson by reducing waste and planning for a useful life, while keeping the Desk Tidy design original and recording the source.", correct: true, feedback: "This learns from a clearly sourced principle without copying cultural expression." },
              { id: "c", text: "Claim the lesson represents all Aboriginal and Torres Strait Islander communities.", correct: false, feedback: "A source from one context does not authorise a broad claim about diverse peoples and communities." }
            ]
          },
          {
            id: "culture-scenario-3",
            prompt: "Two sources give different guidance about reuse and neither relates clearly to the local context. What is the strongest response?",
            choices: [
              { id: "a", text: "Choose the less restrictive source without recording the conflict.", correct: false, feedback: "Convenience does not resolve conflicting authority or local relevance." },
              { id: "b", text: "Record the uncertainty, avoid reuse and ask for teacher or appropriate local guidance.", correct: true, feedback: "Pausing keeps the research honest when authority and context are unresolved." },
              { id: "c", text: "Blend both designs so neither can be recognised.", correct: false, feedback: "Disguising copied material does not make the use respectful or authorised." }
            ]
          }
        ],
        feedback: {
          success: "You kept authority, attribution, permission and local context visible while protecting original design work.",
          retry: "When authority, permission or context is unclear, the safe design action is to pause, record the gap and seek approved guidance."
        }
      },
      {
        id: "working-drawing-language",
        moduleId: "M03",
        title: "Retrieve the language of working drawings",
        theorySection: "Working drawings",
        lessonPlacement: "Period 11: after the working-drawing theory and before preparing approved 1:10 orthographic views.",
        sourceAnchor: "../weeks5-6/index.html#working-drawings",
        period: "Period 11",
        duration: "7–9 minutes",
        mechanic: "glossary",
        mechanicLabel: "Junior glossary retrieval",
        goal: "Recall the drawing terms needed to communicate an approved Desk Tidy clearly before production.",
        instructions: [
          "Read each clue and type the matching drawing term.",
          "Spelling is checked without regard to capital letters; accepted equivalent forms are included.",
          "Use the feedback to return to any term you cannot yet explain."
        ],
        support: "Think about what each drawing form communicates: aligned flat views, a three-dimensional-looking view, the relationship between drawn and actual size, written sizes and the unit used.",
        lowTech: "Write one drawing term beside each clue. Then sketch a tiny symbol or note that helps you remember what the term communicates.",
        outcomes: ["TE4-DES-01", "TE4-PPM-01"],
        sourceRefs: ["SRC-PROJECT-UNIT-2025", "SRC-PROGRAM-V1.3"],
        clues: [
          { id: "drawing-word-1", clue: "A set of aligned front, top and side views.", answers: ["orthographic", "orthographic drawing", "orthographic drawings"], feedback: "Orthographic drawings communicate aligned flat views of the object." },
          { id: "drawing-word-2", clue: "A drawing that helps the overall three-dimensional form make sense.", answers: ["isometric", "isometric drawing"], feedback: "An isometric drawing shows the overall form in a three-dimensional-looking view." },
          { id: "drawing-word-3", clue: "The relationship in which one unit drawn represents ten units in the product.", answers: ["1:10", "1 to 10", "one to ten", "scale 1:10", "1:10 scale"], feedback: "A 1:10 scale means one unit on the drawing represents ten units in the product." },
          { id: "drawing-word-4", clue: "A written size that controls production even if the page is resized.", answers: ["dimension", "dimensions", "written dimension", "written dimensions"], feedback: "Written dimensions—not measurement from a resized page—control production." },
          { id: "drawing-word-5", clue: "The consistent unit used for the working drawing.", answers: ["millimetre", "millimetres", "millimeter", "millimeters", "mm"], feedback: "The authorised module uses millimetres consistently for the working drawing." }
        ],
        feedback: {
          success: "You retrieved the key language for views, scale, dimensions and units. Use those terms accurately when explaining your drawing set.",
          retry: "Return to the drawing section and connect each term to the information it communicates; do not guess from the page size."
        }
      },
      {
        id: "production-plan-sequence",
        moduleId: "M03",
        title: "Build a workable production sequence",
        theorySection: "Cutting lists and a production schedule",
        lessonPlacement: "Periods 12–13: after the cutting-list and schedule theory and before completing the approved list and production plan.",
        sourceAnchor: "../weeks5-6/index.html#cutting-schedule",
        period: "Periods 12–13",
        duration: "10–12 minutes",
        mechanic: "sequence",
        mechanicLabel: "Dependency sequencing",
        goal: "Practise arranging planning and production stages so dependent work is not started too early.",
        instructions: [
          "Arrange the stages into a safe, logical project sequence.",
          "Look for dependencies: what must be approved, checked or completed before the next stage can begin?",
          "Check the sequence and note where contingency time could prevent rushing."
        ],
        support: "Planning comes before irreversible work. Drawings and the cutting list support marking out; dry fitting and approval come before glue; surface preparation comes before the approved finish and testing.",
        lowTech: "Number the stages from first to last. Add a star beside two approval or quality-check milestones and a triangle beside one sensible place for contingency time.",
        outcomes: ["TE4-PPM-01", "TE4-PDP-01", "TE4-SAF-01"],
        sourceRefs: ["SRC-PROJECT-UNIT-2025", "SRC-PROGRAM-V1.3"],
        items: [
          { id: "plan-step-1", text: "Complete and gain approval for the working drawing.", feedback: "The approved drawing controls the project information used downstream." },
          { id: "plan-step-2", text: "Prepare and check the cutting list against the approved drawing.", feedback: "The cutting list must agree with the approved drawing before stock is marked." },
          { id: "plan-step-3", text: "Plan the production schedule, dependencies, milestones and contingency time.", feedback: "The schedule makes the workflow and checks visible before making begins." },
          { id: "plan-step-4", text: "Mark from approved datums and recheck dimensions and waste sides.", feedback: "Accurate marking protects the wanted dimensions before material is removed." },
          { id: "plan-step-5", text: "Complete only teacher-approved cutting and shaping, checking regularly.", feedback: "Production follows the checked mark-out and current teacher direction." },
          { id: "plan-step-6", text: "Dry fit the full assembly and diagnose gaps, twist or misalignment.", feedback: "Dry fitting finds problems while they can still be corrected without adhesive." },
          { id: "plan-step-7", text: "Gain teacher approval, then assemble with PVA and demonstrated clamping methods.", feedback: "Approval and a clear assembly plan come before glue-up." },
          { id: "plan-step-8", text: "Prepare the surface, apply the approved finish, test and evaluate.", feedback: "Surface preparation supports finishing; testing and evaluation judge the result against the criteria." }
        ],
        initialOrder: ["plan-step-3", "plan-step-1", "plan-step-5", "plan-step-2", "plan-step-7", "plan-step-4", "plan-step-8", "plan-step-6"],
        feedback: {
          success: "Your sequence respects dependencies, teacher approvals and quality checks instead of treating the schedule as a simple to-do list.",
          retry: "Find the irreversible steps—cutting, glue-up and finish—then place their drawings, checks and approvals before them."
        }
      },
      {
        id: "datum-stop-check",
        moduleId: "M03",
        title: "Make the datum stop-or-proceed check",
        theorySection: "Datums and accurate marking out",
        lessonPlacement: "Period 14: after the datum theory and before marking an approved component.",
        sourceAnchor: "../weeks5-6/index.html#accurate-markout",
        period: "Period 14",
        duration: "8–10 minutes",
        mechanic: "classify",
        mechanicLabel: "Stop-or-proceed classification",
        goal: "Practise recognising when marking-out evidence is ready for a teacher or partner check and when work must stop.",
        instructions: [
          "Move each observation to Proceed to the check or Stop and recheck.",
          "Use selection plus category buttons if drag-and-drop is not suitable.",
          "Check the decisions before any teacher-approved cutting begins."
        ],
        support: "Reliable datums, direct viewing, a sharp pencil, square lines, a clear waste side and agreement between related marks support accuracy. Uncertainty is a reason to stop, not guess.",
        lowTech: "Sort the observations into Proceed or Stop. For each Stop item, write the smallest useful action that would resolve the uncertainty.",
        outcomes: ["TE4-PPM-01", "TE4-SAF-01"],
        sourceRefs: ["SRC-PROJECT-UNIT-2025", "SRC-PROGRAM-V1.3"],
        categories: [
          { id: "proceed", title: "Proceed to teacher/partner check", description: "The mark-out evidence is clear enough to be checked." },
          { id: "stop", title: "Stop and recheck", description: "A reference, measurement or orientation is uncertain." }
        ],
        items: [
          { id: "datum-1", text: "The face side and face edge are clearly identified as datums.", correct: "proceed", feedback: "Clear reference surfaces let related measurements come from the same reliable datums." },
          { id: "datum-2", text: "The rule moved and the new mark disagrees with the first mark.", correct: "stop", feedback: "Conflicting marks must be resolved against the approved drawing before proceeding." },
          { id: "datum-3", text: "The rule was viewed directly above and the line was extended square with a sharp pencil.", correct: "proceed", feedback: "Direct viewing and a clear square line reduce parallax and interpretation errors." },
          { id: "datum-4", text: "The waste side is not marked and component orientation is uncertain.", correct: "stop", feedback: "Do not cut while the wanted material or orientation is unclear." },
          { id: "datum-5", text: "Matching components and related measurements agree.", correct: "proceed", feedback: "Comparison gives another check before teacher-approved cutting." },
          { id: "datum-6", text: "The approved drawing cannot be found, so a remembered dimension is used instead.", correct: "stop", feedback: "Memory is not the controlling production source; return to the approved drawing and seek guidance." }
        ],
        feedback: {
          success: "You treated uncertainty as a stop signal and used datums, direct viewing and comparison as evidence for a check.",
          retry: "Anything unclear, conflicting or unsupported by the approved drawing belongs in Stop and recheck."
        }
      },
      {
        id: "controlled-cutting-routine",
        moduleId: "M04",
        title: "Sequence a controlled cut",
        theorySection: "Cutting and shaping accurately",
        lessonPlacement: "Period 16: after the cutting-and-shaping theory and before teacher-approved tools are issued.",
        sourceAnchor: "../weeks7-8/index.html#cutting-shaping",
        period: "Period 16",
        duration: "8–10 minutes",
        mechanic: "sequence",
        mechanicLabel: "Practical routine sequencing",
        goal: "Practise the source-approved control loop for securing, cutting, refining and checking a component.",
        instructions: [
          "Arrange the six routine steps into the taught order.",
          "Use the up and down buttons with touch, mouse or keyboard.",
          "Check the sequence, then rehearse it verbally before practical work."
        ],
        support: "The aim is controlled accuracy, not speed. Secure the work and confirm the waste side before material is removed; check often and stop when an error or unfamiliar condition appears.",
        lowTech: "Number the routine steps. Draw a stop sign beside the step where a wandering cut, binding tool or uncertain correction must be reported.",
        outcomes: ["TE4-SAF-01", "TE4-PPM-01"],
        sourceRefs: ["SRC-PROJECT-UNIT-2025", "SRC-PROGRAM-V1.3"],
        items: [
          { id: "cut-step-1", text: "Secure the work in the demonstrated bench hook or vice setup.", feedback: "Stable work supports tool control and safer hand positioning." },
          { id: "cut-step-2", text: "Confirm the approved mark-out and identify the waste side.", feedback: "The wanted size and waste side must be clear before cutting." },
          { id: "cut-step-3", text: "Cut with controlled strokes on the waste side of the line.", feedback: "Working on the waste side protects the wanted dimension." },
          { id: "cut-step-4", text: "Leave material for careful refinement rather than overcutting.", feedback: "A small allowance can be refined; removed material is harder to replace." },
          { id: "cut-step-5", text: "Check squareness, fit and matching components regularly.", feedback: "Frequent checking prevents small differences becoming larger assembly problems." },
          { id: "cut-step-6", text: "Stop, diagnose the cause and seek guidance if the tool binds or the cut wanders.", feedback: "An error or unfamiliar condition is a reason to stop rather than force the tool." }
        ],
        initialOrder: ["cut-step-2", "cut-step-5", "cut-step-1", "cut-step-4", "cut-step-6", "cut-step-3"],
        feedback: {
          success: "You rebuilt the secure–confirm–cut–refine–check–stop routine. Practical work still follows current teacher demonstration and authorisation.",
          retry: "Secure and confirm before cutting; refine and check after; stop rather than force an error."
        }
      },
      {
        id: "joint-detective",
        moduleId: "M04",
        title: "Match joint evidence to butt, rebate or dowel",
        theorySection: "Butt, rebate and dowel joints",
        lessonPlacement: "Period 18: after the joint-comparison theory and before preparing only the approved joint or drilling process.",
        sourceAnchor: "../weeks7-8/index.html#joint-choices",
        period: "Period 18",
        duration: "9–11 minutes",
        mechanic: "match",
        mechanicLabel: "Joint evidence matching",
        goal: "Practise identifying each joint from its locating behaviour, limitation and dry-fit check without choosing a final project joint.",
        instructions: [
          "Match each evidence statement to butt, rebate or dowel.",
          "Use the dry-fit clues as well as the visible form of the joint.",
          "Check your reasoning; the approved drawing and teacher direction still control the actual project choice."
        ],
        support: "Think about how the parts locate: direct edge-to-edge contact, a step or recess, or concealed cylindrical connectors with matching holes.",
        lowTech: "Write B, R or D beside each clue. Then add one dry-fit check for each joint in your own words.",
        outcomes: ["TE4-MSC-01", "TE4-SAF-01", "TE4-PPM-01"],
        sourceRefs: ["SRC-PROJECT-UNIT-2025", "SRC-PROGRAM-V1.3"],
        options: [
          { value: "butt", label: "Butt joint" },
          { value: "rebate", label: "Rebate joint" },
          { value: "dowel", label: "Dowel joint" }
        ],
        items: [
          { id: "joint-1", prompt: "Simple component relationship, but accurate square edges and alignment are critical.", correct: "butt", feedback: "A butt joint places one end or edge directly against another." },
          { id: "joint-2", prompt: "A step or recess helps locate the connected part and may increase glue area.", correct: "rebate", feedback: "The rebate shoulder provides a seating and locating feature." },
          { id: "joint-3", prompt: "Hidden cylindrical connectors require matching hole positions.", correct: "dowel", feedback: "A dowel joint depends on accurately matched holes and alignment." },
          { id: "joint-4", prompt: "Dry-fit check: square contact with no rocking.", correct: "butt", feedback: "A butt joint relies on accurate mating edges and controlled positioning." },
          { id: "joint-5", prompt: "Dry-fit check: even seating along the recess.", correct: "rebate", feedback: "An uneven or inaccurate rebate can prevent the part seating correctly." },
          { id: "joint-6", prompt: "Dry-fit check: the parts close without offset.", correct: "dowel", feedback: "An offset can show that corresponding dowel positions do not align." }
        ],
        feedback: {
          success: "You matched each joint to its locating behaviour and quality check. This is comparison practice, not approval of a joint for your design.",
          retry: "Use the locating clue: direct contact = butt, step/recess = rebate, matching hidden connectors = dowel."
        }
      },
      {
        id: "dry-fit-to-surface",
        moduleId: "M04",
        title: "Sequence dry fitting, assembly and surface preparation",
        theorySection: "Dry fitting, PVA assembly and surface preparation",
        lessonPlacement: "Periods 19–22: after the dry-fit theory and before glue-up or each later surface-preparation stage.",
        sourceAnchor: "../weeks7-8/index.html#dry-fit-glue",
        period: "Periods 19–22",
        duration: "10–12 minutes",
        mechanic: "sequence",
        mechanicLabel: "Assembly and quality sequencing",
        goal: "Practise the no-rush sequence that finds faults before glue and prepares the surface progressively after assembly.",
        instructions: [
          "Arrange the stages from full dry fit through surface preparation.",
          "Look for the teacher-approval milestone and the point where quality is rechecked after clamping.",
          "Check the sequence before beginning the matching practical stage."
        ],
        support: "Glue must not be used to hide a poor fit. The full dry fit and assembly plan are approved first; after curing and authorisation, sanding follows the named 80, 120 and 240 grit progression unless the teacher directs otherwise.",
        lowTech: "Number the stages. Add STOP beside any stage that cannot proceed without teacher approval, product instructions or a resolved quality problem.",
        outcomes: ["TE4-MSC-01", "TE4-PPM-01", "TE4-SAF-01"],
        sourceRefs: ["SRC-PROJECT-UNIT-2025", "SRC-PROGRAM-V1.3"],
        items: [
          { id: "assembly-step-1", text: "Dry fit all parts and check order, fit, square and stability.", feedback: "The complete dry fit exposes gaps, twist, rocking or misalignment before adhesive is involved." },
          { id: "assembly-step-2", text: "Resolve faults and gain teacher approval for the fit and assembly plan.", feedback: "A poor or unclear dry fit is corrected before PVA is applied." },
          { id: "assembly-step-3", text: "Apply PVA and clamp using the demonstrated method and controlled pressure.", feedback: "The adhesive and clamp arrangement follow teacher and product instructions." },
          { id: "assembly-step-4", text: "Manage squeeze-out and recheck alignment, square and stability.", feedback: "Parts can move during clamping, so quality checks continue after assembly." },
          { id: "assembly-step-5", text: "Record clear photographs of the assembly, clamp arrangement and quality checks.", feedback: "Photos can show the process and the checks completed; they do not replace teacher observation." },
          { id: "assembly-step-6", text: "When cured and authorised, sand 80, then 120, then 240 grit and remove dust as directed.", feedback: "The named progression refines marks step by step; teacher direction controls the actual work." }
        ],
        initialOrder: ["assembly-step-3", "assembly-step-1", "assembly-step-5", "assembly-step-2", "assembly-step-6", "assembly-step-4"],
        feedback: {
          success: "You kept fit diagnosis and approval before PVA, then placed progressive surface preparation after curing and authorisation.",
          retry: "Rebuild the no-rush flow: dry fit → resolve and approve → assemble → recheck → record → prepare the surface."
        }
      },
      {
        id: "finish-readiness-inspection",
        moduleId: "M05",
        title: "Inspect readiness for the clear finish",
        theorySection: "Applying a clear finish",
        lessonPlacement: "Period 23: after the clear-finish theory and before the teacher authorises the specified one coat of water-based clear varnish.",
        sourceAnchor: "../weeks9-10/index.html#clear-finish",
        period: "Period 23",
        duration: "8–10 minutes",
        mechanic: "classify",
        mechanicLabel: "Readiness inspection",
        goal: "Practise separating evidence of a prepared surface from reasons to stop, correct or seek confirmation before finishing.",
        instructions: [
          "Sort each observation into Ready evidence or Stop and correct/confirm.",
          "Use drag-and-drop or the select-then-category alternative.",
          "Check the inspection, remembering that current product instructions and teacher direction control the real process."
        ],
        support: "A clear finish reveals preparation. Look for a smooth, clean, dry, dust-free surface and confirmed instructions. Glue residue, roughness, dust, missing controls or uncertainty are reasons to stop.",
        lowTech: "Sort the observations into Ready or Stop. Write the smallest correction or confirmation needed beside each Stop item.",
        outcomes: ["TE4-SAF-01", "TE4-PPM-01", "TE4-MSC-01"],
        sourceRefs: ["SRC-PROJECT-UNIT-2025", "SRC-PROGRAM-V1.3"],
        categories: [
          { id: "ready", title: "Ready evidence", description: "Preparation and authorisation evidence supports the next check." },
          { id: "stop", title: "Stop and correct/confirm", description: "A surface fault, missing instruction or unresolved control remains." }
        ],
        items: [
          { id: "finish-1", text: "The surface is smooth, clean, dry and dust-free under good light.", correct: "ready", feedback: "This is the preparation condition needed before the approved finish is considered." },
          { id: "finish-2", text: "Glue residue remains beside a joint.", correct: "stop", feedback: "Clear finish can reveal glue residue; correct it only through teacher guidance before finishing." },
          { id: "finish-3", text: "The teacher demonstration, product information and current controls have been confirmed.", correct: "ready", feedback: "The actual finish is applied only under current teacher and product direction." },
          { id: "finish-4", text: "Dust is trapped in an internal corner.", correct: "stop", feedback: "Dust can be trapped by the finish and must be removed using the approved method." },
          { id: "finish-5", text: "A rough area and deep scratch are still visible.", correct: "stop", feedback: "The clear finish will not hide preparation faults; inspect and correct as directed." },
          { id: "finish-6", text: "All approved surfaces have been inspected for runs, pooling and missed-area risks before application begins.", correct: "ready", feedback: "A methodical application plan anticipates the quality checks named in the theory." },
          { id: "finish-7", text: "The finish product or drying instructions are uncertain.", correct: "stop", feedback: "Do not guess. Product instructions and teacher direction must be confirmed before use." }
        ],
        feedback: {
          success: "You recognised that surface evidence, product information and teacher authorisation all matter before finishing.",
          retry: "Anything dirty, rough, unclear or not currently authorised belongs in Stop and correct/confirm."
        }
      },
      {
        id: "functional-test-builder",
        moduleId: "M05",
        title: "Match each criterion to a functional test",
        theorySection: "Functional testing",
        lessonPlacement: "Period 24: after the functional-testing theory and before testing the finished Desk Tidy with the intended stationery.",
        sourceAnchor: "../weeks9-10/index.html#functional-testing",
        period: "Period 24",
        duration: "8–10 minutes",
        mechanic: "match",
        mechanicLabel: "Criterion-to-method matching",
        goal: "Practise choosing an observable method for capacity, access, stability, desk fit and workmanship.",
        instructions: [
          "Match each proposed test method to the criterion it checks most directly.",
          "Use the intended items and real actions rather than opinion.",
          "Check the matches, then use the same criterion–method–evidence pattern in your own test plan."
        ],
        support: "Ask what each test actually observes: whether items fit, can be reached, cause tipping or sliding, fit the intended workspace, or reveal quality of construction and finish.",
        lowTech: "Draw lines from each test method to its criterion. Add one type of evidence—observation, measurement or labelled photo—that could record the result.",
        outcomes: ["TE4-DES-01", "TE4-PPM-01"],
        sourceRefs: ["SRC-PROJECT-UNIT-2025", "SRC-PROGRAM-V1.3"],
        options: [
          { value: "capacity", label: "Capacity" },
          { value: "access", label: "Access" },
          { value: "stability", label: "Stability" },
          { value: "desk-fit", label: "Desk fit" },
          { value: "workmanship", label: "Workmanship" }
        ],
        items: [
          { id: "test-1", prompt: "Place the intended pens, pencils, scissors and paperclips in their planned storage.", correct: "capacity", feedback: "This directly checks whether the planned storage holds the intended items." },
          { id: "test-2", prompt: "Remove and return each intended item during normal use and note any obstruction or snagging.", correct: "access", feedback: "This tests whether the user can reach and replace items as intended." },
          { id: "test-3", prompt: "Observe whether the organiser tips or slides while intended items are accessed.", correct: "stability", feedback: "Tipping or sliding during normal access provides evidence about stability." },
          { id: "test-4", prompt: "Place the organiser in the intended work area and compare it with the available measured space.", correct: "desk-fit", feedback: "This checks the product against the intended desk area rather than a guess." },
          { id: "test-5", prompt: "Inspect fit, visible gaps, surfaces and finish against the approved quality expectations.", correct: "workmanship", feedback: "This gathers observable evidence about the quality of making and finishing." }
        ],
        feedback: {
          success: "You linked each criterion to a method that can produce defensible evidence. Record results rather than simply saying the product works.",
          retry: "Match the verb to the criterion: hold, reach, tip/slide, fit the workspace, or inspect quality."
        }
      },
      {
        id: "evaluation-evidence-check",
        moduleId: "M05",
        title: "Strengthen evaluation, presentation and reflection",
        theorySection: "Evaluation, presentation and reflection",
        lessonPlacement: "Period 25: after the evaluation theory and before writing the scaffolded evaluation or presenting improvements.",
        sourceAnchor: "../weeks9-10/index.html#evaluation-reflection",
        period: "Period 25",
        duration: "10–12 minutes",
        mechanic: "scenario",
        mechanicLabel: "Evidence-quality scenarios",
        goal: "Practise turning general claims into honest judgements supported by criteria, test results, limitations and realistic improvements.",
        instructions: [
          "Choose the strongest response in each evaluation situation.",
          "Look for a direct link between criterion, evidence, judgement and next improvement.",
          "Check your choices, then apply the same structure to your own Desk Tidy evidence."
        ],
        support: "A strong evaluation is specific and traceable. It can include a limitation. Presentation evidence should show the design process, production and test result—not only a polished final image.",
        lowTech: "Circle the strongest response in each scenario. Rewrite one weaker response using criterion → evidence → judgement → improvement.",
        outcomes: ["TE4-DES-01", "TE4-SDP-01", "TE4-PDP-01"],
        sourceRefs: ["SRC-PROJECT-UNIT-2025", "SRC-PROGRAM-V1.3"],
        scenarios: [
          {
            id: "evaluation-scenario-1",
            prompt: "Which statement is the strongest evaluation of access?",
            choices: [
              { id: "a", text: "The Desk Tidy is excellent and works perfectly.", correct: false, feedback: "The claim is broad and gives no criterion or test evidence." },
              { id: "b", text: "The access criterion was met because each intended item was removed and returned repeatedly without obstruction; the labelled test record shows the result.", correct: true, feedback: "This links a named criterion to a repeatable method and recorded evidence." },
              { id: "c", text: "My friend liked it.", correct: false, feedback: "Feedback can help, but this does not identify the access criterion or what was tested." }
            ]
          },
          {
            id: "evaluation-scenario-2",
            prompt: "A stability test shows that the organiser slides during normal access. What should the evaluation do?",
            choices: [
              { id: "a", text: "Delete the result so the product appears successful.", correct: false, feedback: "Removing inconvenient evidence makes the evaluation unreliable." },
              { id: "b", text: "Record the limitation, explain which criterion was not met and propose a realistic design or production improvement.", correct: true, feedback: "An honest limitation and evidence-based improvement show genuine evaluation." },
              { id: "c", text: "Change the original criterion after testing.", correct: false, feedback: "The original criterion is the reference point; it should not be rewritten simply to avoid a failed result." }
            ]
          },
          {
            id: "evaluation-scenario-3",
            prompt: "Which evidence package best supports the final presentation?",
            choices: [
              { id: "a", text: "Only one glamorous finished photograph.", correct: false, feedback: "A final photograph does not make the design decisions, process or testing traceable." },
              { id: "b", text: "Relevant drawings, process evidence, labelled test results and finished photographs.", correct: true, feedback: "This selection shows the development, making and evaluation of the solution." },
              { id: "c", text: "Unrelated workshop images and copied promotional text.", correct: false, feedback: "Evidence must be relevant, authentic and connected to the student's own process." }
            ]
          },
          {
            id: "evaluation-scenario-4",
            prompt: "Which sustainability reflection is most useful?",
            choices: [
              { id: "a", text: "Timber is always sustainable.", correct: false, feedback: "The absolute statement ignores sourcing, waste, finish and useful life." },
              { id: "b", text: "Explain the actual material choice, waste-reduction decisions and the trade-off between using finish and extending useful life.", correct: true, feedback: "This reflects on real decisions and consequences rather than repeating a slogan." },
              { id: "c", text: "Sustainability did not affect any part of the project.", correct: false, feedback: "Material sourcing, efficient layout, offcuts, finish and longevity all create relevant trade-offs." }
            ]
          }
        ],
        feedback: {
          success: "You selected evidence-based judgements that make success, limitation and improvement traceable.",
          retry: "Choose responses that name the criterion, show evidence, admit limitations honestly and propose a realistic next improvement."
        }
      }
    ]
  };
})();
