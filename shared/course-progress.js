(function () {
  "use strict";

  const COURSE_ID = "desk-tidy";
  const BACKUP_SCHEMA = "tas-course-backup";
  const BACKUP_VERSION = 4;
  const FOLIO_KEY = "desk_tidy_folio_v1";
  const FOLIO_PROJECT = "Stage 4 Timber Desk Tidy Project Folio";
  const ACTIVITY_PREFIX = "desk-tidy:applied-learning:v1:";
  const ACTIVITY_SCHEMA = "1.0.0";
  const READING_PREFIX = "desk-tidy:active-reading:v1:";
  const READING_SCHEMA = "1.0";
  const MAX_BACKUP_BYTES = 50 * 1024 * 1024;

  const MODULES = [
    {
      key: "desk-tidy-weeks1-2-guided-v2",
      number: 1,
      route: "weeks1-2/index.html",
      sections: [
        { id: "design-brief", label: "Design brief" },
        { id: "workshop-safety", label: "Workshop safety" },
        { id: "materials", label: "Materials" }
      ]
    },
    {
      key: "desk-tidy-weeks3-4-guided-v3",
      number: 2,
      route: "weeks3-4/index.html",
      sections: [
        { id: "research-concepts", label: "Research and concepts" },
        { id: "compare-concepts", label: "Compare concepts" },
        { id: "respectful-design", label: "Respectful design" }
      ]
    },
    {
      key: "desk-tidy-weeks5-6-guided-v2",
      number: 3,
      route: "weeks5-6/index.html",
      sections: [
        { id: "working-drawings", label: "Working drawings" },
        { id: "cutting-schedule", label: "Cutting list and schedule" },
        { id: "accurate-markout", label: "Accurate mark-out" }
      ]
    },
    {
      key: "desk-tidy-weeks7-8-guided-v2",
      number: 4,
      route: "weeks7-8/index.html",
      sections: [
        { id: "cutting-shaping", label: "Cutting and shaping" },
        { id: "joint-choices", label: "Joint choices" },
        { id: "dry-fit-glue", label: "Dry fit and assembly" }
      ]
    },
    {
      key: "desk-tidy-weeks9-10-guided-v2",
      number: 5,
      route: "weeks9-10/index.html",
      sections: [
        { id: "clear-finish", label: "Clear finish" },
        { id: "functional-testing", label: "Functional testing" },
        { id: "evaluation-reflection", label: "Evaluation and reflection" }
      ]
    }
  ];

  const ACTIVITIES = [
    { id: "brief-to-criteria", title: "Turn the brief into testable criteria" },
    { id: "hazard-risk-control-chain", title: "Build a hazard–risk–control chain" },
    { id: "materials-evidence-sort", title: "Sort material evidence from unsupported claims" },
    { id: "research-to-four-concepts", title: "Sequence research into four original concepts" },
    { id: "concept-evidence-decisions", title: "Make evidence-led concept decisions" },
    { id: "respectful-design-research", title: "Check cultural safety in design research" },
    { id: "working-drawing-language", title: "Retrieve the language of working drawings" },
    { id: "production-plan-sequence", title: "Build a workable production sequence" },
    { id: "datum-stop-check", title: "Make the datum stop-or-proceed check" },
    { id: "controlled-cutting-routine", title: "Sequence a controlled cut" },
    { id: "joint-detective", title: "Match joint evidence to butt, rebate or dowel" },
    { id: "dry-fit-to-surface", title: "Sequence dry fitting, assembly and surface preparation" },
    { id: "finish-readiness-inspection", title: "Inspect readiness for the clear finish" },
    { id: "functional-test-builder", title: "Match each criterion to a functional test" },
    { id: "evaluation-evidence-check", title: "Strengthen evaluation, presentation and reflection" }
  ];

  const FOLIO_CARDS = [
    { key: "brief", title: "Project brief, user and criteria" },
    { key: "concepts", title: "Research and four concepts" },
    { key: "selection", title: "Concept comparison and approval" },
    { key: "culture", title: "Respectful design research" },
    { key: "drawings", title: "Working drawings" },
    { key: "schedule", title: "Cutting list and schedule" },
    { key: "whs", title: "Work health and safety" },
    { key: "markout", title: "Datums and accurate mark-out" },
    { key: "joinery", title: "Joint selection and production" },
    { key: "assembly", title: "Dry fit, PVA and clamping" },
    { key: "finish", title: "Surface preparation and finish" },
    { key: "evaluation", title: "Functional testing and evaluation" }
  ];

  const MODULE_KEYS = MODULES.map((module) => module.key);
  const ACTIVITY_KEYS = ACTIVITIES.map((activity) => ACTIVITY_PREFIX + activity.id);
  const ORIGINAL_READINGS = MODULES.flatMap((module) => module.sections.map((section) => ({
    id: `read-${section.id}`,
    title: section.label,
    route: module.route
  })));
  const BONUS_READINGS = [
    { id: "read-testable-criteria", title: "Can you test 'it looks good'?", module: "M01", placement: "bank" },
    { id: "read-stronger-controls", title: "Which control is stronger?", module: "M01", placement: "bank" },
    { id: "read-clear-workspace", title: "Why does a clear bench matter?", module: "M01", placement: "bank" },
    { id: "read-reduce-timber-waste", title: "How could you waste less timber?", module: "M01", placement: "bank" },
    { id: "read-research-notes", title: "What makes a useful research note?", module: "M02", placement: "bank" },
    { id: "read-prototype-evidence", title: "What should a prototype test?", module: "M02", placement: "bank" },
    { id: "read-general-design-principles", title: "How can your own design show learning?", module: "M02", placement: "bank" },
    { id: "read-working-drawings-complementary-views", title: "Can one 3D drawing do both jobs?", module: "M03", placement: "bank" },
    { id: "read-cutting-schedule-delays", title: "Why leave room for delays?", module: "M03", placement: "bank" },
    { id: "read-accurate-markout-waste-check", title: "What does ‘measure twice’ really check?", module: "M03", placement: "bank" },
    { id: "read-cutting-shaping-regular-checks", title: "Why check parts as you go?", module: "M04", placement: "bank" },
    { id: "read-joint-choices-dowel-alignment", title: "Do hidden dowels need accuracy?", module: "M04", placement: "bank" },
    { id: "read-dry-fit-glue-clamp-check", title: "Are clamps the final check?", module: "M04", placement: "bank" },
    { id: "read-clear-finish-surface-check", title: "Will varnish cover poor preparation?", module: "M05", placement: "bank" },
    { id: "read-functional-testing-evidence", title: "What proves the organiser is stable?", module: "M05", placement: "bank" },
    { id: "read-evaluation-reflection-learning", title: "Is a list of steps a reflection?", module: "M05", placement: "bank" }
  ];
  const READINGS = ORIGINAL_READINGS.concat(BONUS_READINGS);
  const ORIGINAL_READING_KEYS = ORIGINAL_READINGS.map((reading) => READING_PREFIX + reading.id);
  // Version 3 is the fixed 19-reading format, even as the current bank grows.
  const V3_READING_KEYS = Object.freeze([
    "read-design-brief", "read-workshop-safety", "read-materials",
    "read-research-concepts", "read-compare-concepts", "read-respectful-design",
    "read-working-drawings", "read-cutting-schedule", "read-accurate-markout",
    "read-cutting-shaping", "read-joint-choices", "read-dry-fit-glue",
    "read-clear-finish", "read-functional-testing", "read-evaluation-reflection",
    "read-testable-criteria", "read-stronger-controls", "read-clear-workspace", "read-reduce-timber-waste"
  ].map((id) => READING_PREFIX + id));
  const READING_KEYS = READINGS.map((reading) => READING_PREFIX + reading.id);
  const LEGACY_KEYS = MODULE_KEYS.concat(ACTIVITY_KEYS, FOLIO_KEY);
  const V2_KEYS = LEGACY_KEYS.concat(ORIGINAL_READING_KEYS);
  const V3_KEYS = LEGACY_KEYS.concat(V3_READING_KEYS);
  const EXPECTED_KEYS = LEGACY_KEYS.concat(READING_KEYS);

  function isPlainObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function parseRecord(raw) {
    if (typeof raw !== "string") return null;
    try {
      const parsed = JSON.parse(raw);
      return isPlainObject(parsed) ? parsed : null;
    } catch (_error) {
      return null;
    }
  }

  function readRaw(key) {
    try {
      return localStorage.getItem(key);
    } catch (_error) {
      return null;
    }
  }

  function readRawForBackup(key) {
    try {
      return localStorage.getItem(key);
    } catch (_error) {
      throw new Error("Browser storage is unavailable. No course backup or restore was performed.");
    }
  }

  function countTrueEntries(record, property, total) {
    const values = isPlainObject(record?.[property]) ? record[property] : {};
    let count = 0;
    for (let index = 0; index < total; index += 1) {
      const entry = values[index];
      if (property === "mc" && entry?.mastered === true) count += 1;
      if (property === "written") {
        const words = String(entry?.response || "").trim().split(/\s+/).filter(Boolean).length;
        if (entry?.checked === true && words >= 15) count += 1;
      }
    }
    return count;
  }

  function moduleStatus(module) {
    const raw = readRaw(module.key);
    const record = parseRecord(raw);
    const mcMastered = countTrueEntries(record, "mc", 30);
    const writtenReviewed = countTrueEntries(record, "written", 4);
    const complete = mcMastered === 30 && writtenReviewed === 4;
    let nextSection = null;

    for (let sectionIndex = 0; sectionIndex < module.sections.length; sectionIndex += 1) {
      const mc = isPlainObject(record?.mc) ? record.mc : {};
      let sectionMastered = 0;
      for (let questionIndex = sectionIndex * 10; questionIndex < (sectionIndex + 1) * 10; questionIndex += 1) {
        if (mc[questionIndex]?.mastered === true) sectionMastered += 1;
      }
      if (sectionMastered < 10) {
        nextSection = module.sections[sectionIndex];
        break;
      }
    }

    if (!nextSection && writtenReviewed < 4) {
      nextSection = { id: "written-application", label: "Written responses" };
    }

    return {
      module,
      hasRecord: raw !== null,
      mcMastered,
      writtenReviewed,
      complete,
      nextSection
    };
  }

  function activityStatus(activity) {
    const key = ACTIVITY_PREFIX + activity.id;
    const record = parseRecord(readRaw(key));
    return {
      activity,
      complete: record?.schemaVersion === ACTIVITY_SCHEMA && record?.activityId === activity.id && record?.complete === true
    };
  }

  function readingStatus(reading) {
    const key = READING_PREFIX + reading.id;
    const record = parseRecord(readRaw(key));
    try {
      validateReadingRecord(record, key);
      return { reading, started: Boolean(record.answer.trim() || record.evidence.trim()), complete: record.reviewed };
    } catch (_error) {
      return { reading, started: false, complete: false };
    }
  }

  function folioStatus() {
    const record = parseRecord(readRaw(FOLIO_KEY));
    const recognisedRecord = record?.version === 1 && record?.project === FOLIO_PROJECT ? record : null;
    const responses = isPlainObject(recognisedRecord?.responses) ? recognisedRecord.responses : {};
    const notes = isPlainObject(recognisedRecord?.notes) ? recognisedRecord.notes : {};
    const done = isPlainObject(recognisedRecord?.done) ? recognisedRecord.done : {};
    const completedKeys = FOLIO_CARDS.filter((card) => {
      const response = typeof responses[card.key] === "string" ? responses[card.key].trim() : "";
      const note = typeof notes[card.key] === "string" ? notes[card.key].trim() : "";
      return done[card.key] === true || Boolean(response && note);
    }).map((card) => card.key);
    const nextIndex = FOLIO_CARDS.findIndex((card) => !completedKeys.includes(card.key));
    return {
      complete: completedKeys.length === FOLIO_CARDS.length,
      completed: completedKeys.length,
      nextIndex,
      nextCard: nextIndex >= 0 ? FOLIO_CARDS[nextIndex] : null
    };
  }

  function moduleAction(statuses) {
    const next = statuses.find((status) => !status.complete);
    if (!next) return { href: "weeks9-10/index.html#evaluation-reflection", label: "Review completed modules" };
    const anchor = next.nextSection?.id || next.module.sections[0].id;
    const href = `${next.module.route}#${anchor}`;
    if (!next.hasRecord && next.module.number === 1) return { href, label: "Start Module 1" };
    if (!next.hasRecord) return { href, label: `Start Module ${next.module.number}` };
    return { href, label: `Resume Module ${next.module.number}: ${next.nextSection?.label || "review"}` };
  }

  function activityAction(statuses) {
    const next = statuses.find((status) => !status.complete);
    if (!next) return { href: "activities/index.html", label: "Review completed practice" };
    const completed = statuses.filter((status) => status.complete).length;
    return {
      href: `activities/activity.html?id=${encodeURIComponent(next.activity.id)}`,
      label: completed === 0 ? "Start first practice activity" : `Continue practice: ${next.activity.title}`
    };
  }

  function folioAction(status) {
    if (status.complete) return { href: "desk-tidy-folio.html#folio-1", label: "Review folio evidence" };
    return {
      href: `desk-tidy-folio.html#folio-${status.nextIndex + 1}`,
      label: status.completed === 0 ? "Start folio evidence" : `Continue folio: ${status.nextCard.title}`
    };
  }

  function readingAction(statuses) {
    const next = statuses.find((status) => status.started && !status.complete)
      || statuses.find((status) => !status.complete);
    if (!next) return { href: "activities/reading.html", label: "Review reading challenges" };
    return {
      href: `activities/reading.html?id=${encodeURIComponent(next.reading.id)}${next.reading.placement === "bank" && next.reading.module ? `&module=${encodeURIComponent(next.reading.module)}` : ""}`,
      label: next.started ? `Continue reading: ${next.reading.title}` : `Try reading: ${next.reading.title}`
    };
  }

  function getSummary() {
    const modules = MODULES.map(moduleStatus);
    const activities = ACTIVITIES.map(activityStatus);
    const readings = READINGS.map(readingStatus);
    const folio = folioStatus();
    const moduleResume = moduleAction(modules);
    const activityResume = activityAction(activities);
    const folioResume = folioAction(folio);
    const readingResume = readingAction(readings);
    const modulesComplete = modules.filter((status) => status.complete).length;
    const activitiesComplete = activities.filter((status) => status.complete).length;
    const readingsComplete = readings.filter((status) => status.complete).length;
    const totalMcMastered = modules.reduce((sum, status) => sum + status.mcMastered, 0);
    const totalWrittenReviewed = modules.reduce((sum, status) => sum + status.writtenReviewed, 0);
    const primaryResume = modulesComplete < MODULES.length
      ? moduleResume
      : activitiesComplete < ACTIVITIES.length
        ? activityResume
        : folio.completed < FOLIO_CARDS.length
          ? folioResume
          : { href: "desk-tidy-folio.html", label: "Review completed course evidence" };

    return {
      modules,
      activities,
      readings,
      folio,
      modulesComplete,
      activitiesComplete,
      readingsComplete,
      totalMcMastered,
      totalWrittenReviewed,
      moduleResume,
      activityResume,
      folioResume,
      readingResume,
      primaryResume
    };
  }

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  }

  function setAction(selector, action) {
    document.querySelectorAll(selector).forEach((element) => {
      element.href = action.href;
      element.textContent = action.label;
    });
  }

  function render() {
    const summary = getSummary();
    setText("[data-course-module-count]", `${summary.modulesComplete} of ${MODULES.length}`);
    setText("[data-course-activity-count]", `${summary.activitiesComplete} of ${ACTIVITIES.length}`);
    setText("[data-course-reading-count]", `${summary.readingsComplete} of ${READINGS.length}`);
    setText("[data-course-folio-count]", `${summary.folio.completed} of ${FOLIO_CARDS.length}`);
    setText(
      "[data-course-module-detail]",
      `A module completes at 30 mastered checks and 4 reviewed written responses of at least 15 words each. Across the course: ${summary.totalMcMastered} of 150 checks and ${summary.totalWrittenReviewed} of 20 responses.`
    );
    setText(
      "[data-course-folio-practice-text]",
      `${summary.modulesComplete} of ${MODULES.length} guided modules complete · ${summary.activitiesComplete} of ${ACTIVITIES.length} activities complete. This browser-local formative practice is not submitted work.`
    );
    setAction("[data-course-primary-resume]", summary.primaryResume);
    setAction("[data-course-hero-resume]", summary.primaryResume);
    setAction("[data-course-module-resume]", summary.moduleResume);
    setAction("[data-course-activity-resume]", summary.activityResume);
    setAction("[data-course-reading-resume]", summary.readingResume);
    setAction("[data-course-folio-resume]", summary.folioResume);
    return summary;
  }

  function arraysMatch(actual, expected) {
    return Array.isArray(actual)
      && actual.length === expected.length
      && actual.every((value, index) => value === expected[index]);
  }

  function validateModuleRecord(record, key) {
    if (!isPlainObject(record) || !isPlainObject(record.mc) || !isPlainObject(record.written)) {
      throw new Error(`The module record ${key} is malformed.`);
    }
  }

  function validateActivityRecord(record, key) {
    const activityId = key.slice(ACTIVITY_PREFIX.length);
    if (!isPlainObject(record)
      || record.schemaVersion !== ACTIVITY_SCHEMA
      || record.activityId !== activityId
      || typeof record.complete !== "boolean") {
      throw new Error(`The activity record ${key} is malformed.`);
    }
  }

  function validateReadingRecord(record, key) {
    const fields = ["schemaVersion", "activityId", "answer", "evidence", "feedbackOpen", "reviewed", "updatedAt"];
    if (!isPlainObject(record)
      || !arraysMatch(Object.keys(record).sort(), fields.slice().sort())
      || record.schemaVersion !== READING_SCHEMA
      || record.activityId !== key.slice(READING_PREFIX.length)
      || typeof record.answer !== "string"
      || typeof record.evidence !== "string"
      || typeof record.feedbackOpen !== "boolean"
      || typeof record.reviewed !== "boolean"
      || (record.updatedAt !== null && (typeof record.updatedAt !== "string"
        || !Number.isFinite(Date.parse(record.updatedAt))
        || new Date(record.updatedAt).toISOString() !== record.updatedAt))
      || (record.feedbackOpen && (!record.answer.trim() || !record.evidence.trim()))
      || (record.reviewed && !record.feedbackOpen)) {
      throw new Error(`The active-reading record ${key} is malformed.`);
    }
  }

  function validateFolioRecord(record) {
    if (!isPlainObject(record)
      || record.version !== 1
      || record.project !== FOLIO_PROJECT
      || !isPlainObject(record.responses)
      || !isPlainObject(record.notes)
      || !isPlainObject(record.done)
      || !isPlainObject(record.photos)) {
      throw new Error("The Desk Tidy folio record is malformed.");
    }
    Object.values(record.photos).forEach((photo) => {
      if (!isPlainObject(photo)
        || typeof photo.name !== "string"
        || typeof photo.data !== "string"
        || !photo.data.startsWith("data:image/")) {
        throw new Error("A photo in the Desk Tidy folio record is malformed.");
      }
    });
  }

  function validateStoredRecord(key, raw) {
    if (raw === null) return;
    if (typeof raw !== "string") throw new Error(`The record ${key} is not stored correctly.`);
    const record = parseRecord(raw);
    if (!record) throw new Error(`The record ${key} is not valid JSON data.`);
    if (MODULE_KEYS.includes(key)) validateModuleRecord(record, key);
    else if (ACTIVITY_KEYS.includes(key)) validateActivityRecord(record, key);
    else if (READING_KEYS.includes(key)) validateReadingRecord(record, key);
    else if (key === FOLIO_KEY) validateFolioRecord(record);
  }

  function createBackup() {
    const records = {};
    EXPECTED_KEYS.forEach((key) => {
      const raw = readRawForBackup(key);
      validateStoredRecord(key, raw);
      records[key] = raw;
    });
    const summary = getSummary();
    return {
      schema: BACKUP_SCHEMA,
      version: BACKUP_VERSION,
      courseId: COURSE_ID,
      exportedAt: new Date().toISOString(),
      recordManifest: {
        moduleKeys: MODULE_KEYS.slice(),
        activityKeys: ACTIVITY_KEYS.slice(),
        folioKey: FOLIO_KEY,
        readingKeys: READING_KEYS.slice()
      },
      progressSnapshot: {
        modulesComplete: summary.modulesComplete,
        activitiesComplete: summary.activitiesComplete,
        readingsComplete: summary.readingsComplete,
        folioCardsComplete: summary.folio.completed
      },
      records
    };
  }

  function validateBackup(candidate) {
    if (!isPlainObject(candidate)
      || candidate.schema !== BACKUP_SCHEMA
      || ![1, 2, 3, BACKUP_VERSION].includes(candidate.version)) {
      throw new Error("That file is not a supported TAS course backup.");
    }
    if (candidate.courseId !== COURSE_ID) {
      throw new Error("That backup belongs to a different course. No Desk Tidy work was changed.");
    }
    if (!isPlainObject(candidate.recordManifest)
      || !arraysMatch(Object.keys(candidate.recordManifest).sort(), (candidate.version === 1
        ? ["moduleKeys", "activityKeys", "folioKey"]
        : ["moduleKeys", "activityKeys", "folioKey", "readingKeys"]).sort())
      || !arraysMatch(candidate.recordManifest.moduleKeys, MODULE_KEYS)
      || !arraysMatch(candidate.recordManifest.activityKeys, ACTIVITY_KEYS)
      || candidate.recordManifest.folioKey !== FOLIO_KEY
      || (candidate.version === 2 && !arraysMatch(candidate.recordManifest.readingKeys, ORIGINAL_READING_KEYS))
      || (candidate.version === 3 && !arraysMatch(candidate.recordManifest.readingKeys, V3_READING_KEYS))
      || (candidate.version === 4 && !arraysMatch(candidate.recordManifest.readingKeys, READING_KEYS))
      || (candidate.version === 1 && Object.prototype.hasOwnProperty.call(candidate.recordManifest, "readingKeys"))) {
      throw new Error("That Desk Tidy backup has the wrong record manifest.");
    }
    if (!isPlainObject(candidate.records)) {
      throw new Error("That Desk Tidy backup does not contain course records.");
    }
    const actualKeys = Object.keys(candidate.records).sort();
    const keys = backupKeys(candidate.version);
    const expectedKeys = keys.slice().sort();
    if (!arraysMatch(actualKeys, expectedKeys)) {
      throw new Error("That Desk Tidy backup is missing records or contains unexpected record keys.");
    }
    keys.forEach((key) => validateStoredRecord(key, candidate.records[key]));
    return candidate.records;
  }

  function backupKeys(version) {
    return version === 1 ? LEGACY_KEYS : version === 2 ? V2_KEYS : version === 3 ? V3_KEYS : EXPECTED_KEYS;
  }

  function setBackupStatus(message) {
    setText("[data-course-backup-status]", message);
  }

  function downloadBackup() {
    try {
      const backup = createBackup();
      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
      const link = document.createElement("a");
      const date = backup.exportedAt.slice(0, 10);
      link.href = URL.createObjectURL(blob);
      link.download = `desk-tidy-course-backup-${date}.json`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(link.href), 1200);
      const present = EXPECTED_KEYS.filter((key) => backup.records[key] !== null).length;
      setBackupStatus(`Course backup downloaded with ${present} saved records and ${EXPECTED_KEYS.length - present} empty record slots.`);
    } catch (error) {
      setBackupStatus(error?.message || "The course backup could not be created.");
    }
  }

  function restoreRecords(records) {
    if (!isPlainObject(records)) throw new Error("That Desk Tidy backup does not contain course records.");
    const actualKeys = Object.keys(records).sort();
    const keys = [LEGACY_KEYS, V2_KEYS, V3_KEYS, EXPECTED_KEYS].find((supportedKeys) => arraysMatch(actualKeys, supportedKeys.slice().sort()));
    if (!keys) {
      throw new Error("That Desk Tidy backup is missing records or contains unexpected record keys.");
    }
    keys.forEach((key) => validateStoredRecord(key, records[key]));
    const before = {};
    keys.forEach((key) => {
      before[key] = readRawForBackup(key);
    });
    try {
      keys.forEach((key) => {
        if (records[key] === null) localStorage.removeItem(key);
        else localStorage.setItem(key, records[key]);
      });
    } catch (error) {
      try {
        keys.forEach((key) => {
          if (before[key] === null) localStorage.removeItem(key);
          else localStorage.setItem(key, before[key]);
        });
      } catch (_rollbackError) {
        throw new Error("Restore failed and browser storage could not be rolled back completely. Reload this page before continuing.");
      }
      throw new Error("Restore failed, so the previous Desk Tidy records were put back.");
    }
  }

  async function restoreBackup(file) {
    if (!file) return;
    if (file.size > MAX_BACKUP_BYTES) {
      setBackupStatus("That backup is larger than 50 MB and was not opened.");
      return;
    }
    try {
      let candidate;
      try {
        candidate = JSON.parse(await file.text());
      } catch (_parseError) {
        throw new Error("That file is not valid JSON. No Desk Tidy work was changed.");
      }
      const records = validateBackup(candidate);
      const keys = backupKeys(candidate.version);
      const existingCount = keys.filter((key) => readRawForBackup(key) !== null).length;
      const incomingCount = keys.filter((key) => records[key] !== null).length;
      const readingNotice = candidate.version === 1
        ? "This older backup contains no active-reading responses. All current active-reading responses will be kept."
        : candidate.version === 2
          ? "The original 15 active-reading responses will be overwritten or removed to match this backup. The four extra Module 1 and 12 extra Module 2–5 challenge responses will be kept."
          : candidate.version === 3
            ? "The 19 active-reading responses in this backup will be overwritten or removed to match it. The 12 extra Module 2–5 challenge responses will be kept."
            : "This includes all 31 active-reading responses: they will be overwritten or removed to match the backup.";
      const confirmed = window.confirm(
        `Restore this Desk Tidy course backup?\n\nThis will overwrite or remove ${keys.length} Desk Tidy record slots on this device. ${existingCount} currently contain saved data; the selected backup contains ${incomingCount}.\n\n${readingNotice}\n\nDownload a current backup first if you may need to undo this restore.`
      );
      if (!confirmed) {
        setBackupStatus("Restore cancelled. Existing Desk Tidy work was not changed.");
        return;
      }
      restoreRecords(records);
      render();
      const restoredNotice = candidate.version === 1
        ? " Current active-reading responses were kept."
        : candidate.version === 2
          ? " The original 15 active-reading responses now match the backup. The four extra Module 1 and 12 extra Module 2–5 challenge responses were kept."
          : candidate.version === 3
            ? " The 19 active-reading responses in the backup now match it. The 12 extra Module 2–5 challenge responses were kept."
            : " All 31 active-reading responses now match the backup.";
      setBackupStatus(`Course backup restored with ${incomingCount} saved records.${restoredNotice}`);
    } catch (error) {
      setBackupStatus(error?.message || "That backup could not be read. No Desk Tidy work was changed.");
    }
  }

  function init() {
    if (!document.querySelector("[data-course-progress-home], [data-course-progress-folio], [data-course-hero-resume], [data-course-reading-count], [data-course-reading-resume]")) return;
    render();

    const downloadButton = document.querySelector("[data-course-backup-download]");
    const restoreButton = document.querySelector("[data-course-backup-restore]");
    const restoreInput = document.querySelector("[data-course-backup-input]");
    if (downloadButton) downloadButton.addEventListener("click", downloadBackup);
    if (restoreButton && restoreInput) restoreButton.addEventListener("click", () => restoreInput.click());
    if (restoreInput) {
      restoreInput.addEventListener("change", async () => {
        const file = restoreInput.files?.[0];
        restoreInput.value = "";
        await restoreBackup(file);
      });
    }

    window.addEventListener("storage", (event) => {
      if (EXPECTED_KEYS.includes(event.key)) render();
    });
    document.addEventListener("desk-tidy-reading-updated", render);

    if (document.querySelector("[data-course-progress-folio]")) {
      let refreshTimer = null;
      const scheduleRender = (delay) => {
        window.clearTimeout(refreshTimer);
        refreshTimer = window.setTimeout(render, delay);
      };
      document.addEventListener("input", () => scheduleRender(250));
      document.addEventListener("change", (event) => scheduleRender(event.target.matches("[data-photo]") ? 1800 : 250));
    }
  }

  window.DeskTidyCourseProgress = Object.freeze({
    courseId: COURSE_ID,
    storageKeys: Object.freeze(EXPECTED_KEYS.slice()),
    moduleKeys: Object.freeze(MODULE_KEYS.slice()),
    activityKeys: Object.freeze(ACTIVITY_KEYS.slice()),
    readingKeys: Object.freeze(READING_KEYS.slice()),
    folioKey: FOLIO_KEY,
    getSummary,
    createBackup,
    validateBackup,
    restoreRecords,
    restoreBackup,
    render
  });

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
}());
