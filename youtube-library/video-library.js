(function () {
  "use strict";

  const data = window.DESK_TIDY_VIDEO_LIBRARY;
  const root = document.getElementById("library-root");
  const jumpRoot = document.getElementById("module-jump-links");
  const dialog = document.getElementById("video-dialog");
  const dialogTitle = document.getElementById("dialog-title");
  const dialogContext = document.getElementById("dialog-context");
  const playerSlot = document.getElementById("player-slot");
  const dialogYoutube = document.getElementById("dialog-youtube");
  const dialogTheory = document.getElementById("dialog-theory");
  let returnFocus = null;

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function moduleAnchor(moduleId) {
    return `module-${moduleId.toLowerCase()}`;
  }

  function theoryHref(section) {
    return `../${section.theoryPath}`;
  }

  function validateLibrary(library) {
    if (!library || !Array.isArray(library.sections)) {
      throw new Error("The Desk Tidy video data is missing.");
    }
    if (library.sections.length !== 15) {
      throw new Error(`Expected 15 named theory sections; found ${library.sections.length}.`);
    }

    const sectionIds = new Set();
    const videoIds = new Set();
    const allowedOutcomes = new Set(["MATCHED", "GAP", "EXCEPTION"]);

    library.sections.forEach((section) => {
      const required = [
        "order", "moduleId", "moduleLabel", "moduleTitle", "sectionId", "sectionTitle",
        "theoryPath", "outcome", "teachingClaim", "reasonToWatch", "watchFor",
        "equivalentPath", "evidenceLink", "sourceBoundary"
      ];
      required.forEach((field) => {
        if (section[field] === undefined || section[field] === "") {
          throw new Error(`${section.sectionId || "Unknown section"} is missing ${field}.`);
        }
      });
      if (!allowedOutcomes.has(section.outcome)) {
        throw new Error(`${section.sectionId} has unsupported outcome ${section.outcome}.`);
      }
      if (sectionIds.has(section.sectionId)) {
        throw new Error(`Duplicate section ID: ${section.sectionId}.`);
      }
      sectionIds.add(section.sectionId);

      if (section.outcome === "MATCHED") {
        const videoRequired = [
          "id", "title", "channel", "durationSeconds", "durationLabel", "segmentStart",
          "segmentEnd", "segmentLabel", "sampledSegment", "sampleEvidence", "intelligibility",
          "thumbnailUrl", "thumbnailWidth", "thumbnailHeight", "watchUrl", "embedUrl"
        ];
        if (!section.video) throw new Error(`${section.sectionId} has no video data.`);
        videoRequired.forEach((field) => {
          if (section.video[field] === undefined || section.video[field] === "") {
            throw new Error(`${section.sectionId} video is missing ${field}.`);
          }
        });
        if (videoIds.has(section.video.id)) {
          throw new Error(`Duplicate mapped video ID: ${section.video.id}.`);
        }
        videoIds.add(section.video.id);
        if (!section.video.embedUrl.startsWith("https://www.youtube-nocookie.com/embed/")) {
          throw new Error(`${section.sectionId} does not use the privacy-enhanced embed host.`);
        }
      }
    });
  }

  function addLabelPair(container, className, label, value) {
    const paragraph = createElement("p", className);
    const strong = createElement("strong", "", label);
    paragraph.append(strong, document.createTextNode(value));
    container.append(paragraph);
    return paragraph;
  }

  function makeActionLink(label, href, primary) {
    const link = createElement("a", `button ${primary ? "button--primary" : "button--secondary"}`, label);
    link.href = href;
    return link;
  }

  function makeEquivalent(section, open) {
    const details = createElement("details", "equivalent");
    details.open = Boolean(open);
    const summary = createElement("summary", "", "Equivalent non-video path");
    const copy = createElement("p", "", section.equivalentPath);
    details.append(summary, copy);
    return details;
  }

  function buildEmbedUrl(section) {
    const url = new URL(section.video.embedUrl);
    url.searchParams.set("autoplay", "1");
    url.searchParams.set("rel", "0");
    url.searchParams.set("modestbranding", "1");
    url.searchParams.set("start", String(section.video.segmentStart));
    if (section.video.segmentEnd > section.video.segmentStart) {
      url.searchParams.set("end", String(section.video.segmentEnd));
    }
    return url.toString();
  }

  function stopPlayer() {
    playerSlot.replaceChildren();
  }

  function closePlayer() {
    stopPlayer();
    if (dialog.open) dialog.close();
  }

  function openPlayer(section, trigger) {
    returnFocus = trigger;
    stopPlayer();

    dialogTitle.textContent = section.video.title;
    dialogContext.textContent = `${section.sectionTitle} · Focused segment ${section.video.segmentLabel} · ${section.video.channel}`;
    dialogYoutube.href = section.video.watchUrl;
    dialogTheory.href = theoryHref(section);

    const iframe = document.createElement("iframe");
    iframe.src = buildEmbedUrl(section);
    iframe.title = `${section.video.title} — focused segment ${section.video.segmentLabel}`;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    playerSlot.append(iframe);

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
      document.getElementById("dialog-close-top").focus();
    } else {
      window.open(section.video.watchUrl, "_blank", "noopener,noreferrer");
      stopPlayer();
      returnFocus = null;
    }
  }

  function makeMatchedCard(section) {
    const article = createElement("article", "video-card video-card--matched");
    article.dataset.sectionId = section.sectionId;
    article.dataset.videoId = section.video.id;

    const thumbButton = createElement("button", "thumbnail-button");
    thumbButton.type = "button";
    thumbButton.setAttribute("aria-label", `Play ${section.video.title}, focused segment ${section.video.segmentLabel}`);
    const image = document.createElement("img");
    image.src = section.video.thumbnailUrl;
    image.alt = "";
    image.width = section.video.thumbnailWidth;
    image.height = section.video.thumbnailHeight;
    image.loading = "lazy";
    image.decoding = "async";
    const playMarker = createElement("span", "play-marker", "▶");
    playMarker.setAttribute("aria-hidden", "true");
    thumbButton.append(image, playMarker);
    thumbButton.addEventListener("click", () => openPlayer(section, thumbButton));

    const body = createElement("div", "card-body");
    const kicker = createElement("div", "card-kicker");
    kicker.append(
      createElement("span", "outcome-badge outcome-badge--matched", "MATCHED"),
      createElement("span", "module-badge", `${section.moduleId} · ${section.moduleLabel}`)
    );

    const heading = createElement("h3", "section-title", section.sectionTitle);
    const meta = createElement("p", "video-meta");
    const title = createElement("span", "video-title", section.video.title);
    meta.append(
      title,
      document.createElement("br"),
      document.createTextNode(`${section.video.channel} · ${section.video.durationLabel} · YouTube ID ${section.video.id}`)
    );

    const reason = createElement("p", "reason", section.reasonToWatch);
    addLabelPair(body, "watch-for", "Watch for", section.watchFor);
    const focused = createElement("p", "boundary", `Focused segment: ${section.video.segmentLabel}. ${section.video.sampleEvidence}`);
    const boundary = createElement("p", "boundary", section.sourceBoundary);
    const equivalent = makeEquivalent(section, false);

    const actions = createElement("div", "card-actions");
    const play = createElement("button", "button button--primary", `Play ${section.video.segmentLabel}`);
    play.type = "button";
    play.addEventListener("click", () => openPlayer(section, play));
    const theory = makeActionLink("Open theory", theoryHref(section), false);
    const youtube = makeActionLink("Open on YouTube", section.video.watchUrl, false);
    youtube.target = "_blank";
    youtube.rel = "noopener noreferrer";
    actions.append(play, theory, youtube);

    body.prepend(kicker, heading, meta, reason);
    body.append(focused, boundary, equivalent, actions);
    article.append(thumbButton, body);
    return article;
  }

  function makeGapCard(section) {
    const article = createElement("article", "video-card video-card--gap");
    article.dataset.sectionId = section.sectionId;
    const body = createElement("div", "card-body");
    const kicker = createElement("div", "card-kicker");
    kicker.append(
      createElement("span", "outcome-badge outcome-badge--gap", "GAP — NO CLIP"),
      createElement("span", "module-badge", `${section.moduleId} · ${section.moduleLabel}`)
    );
    const heading = createElement("h3", "section-title", section.sectionTitle);
    const panel = createElement("div", "gap-panel");
    panel.append(createElement("p", "", section.gapReason));
    const watchFor = createElement("p", "watch-for");
    const strong = createElement("strong", "", "Use instead");
    watchFor.append(strong, document.createTextNode(section.watchFor));
    const boundary = createElement("p", "boundary", section.sourceBoundary);
    const equivalent = makeEquivalent(section, true);
    const actions = createElement("div", "card-actions");
    actions.append(makeActionLink("Open complete theory", theoryHref(section), true));
    body.append(kicker, heading, panel, watchFor, boundary, equivalent, actions);
    article.append(body);
    return article;
  }

  function renderLibrary(library) {
    const matched = library.sections.filter((section) => section.outcome === "MATCHED");
    const gaps = library.sections.filter((section) => section.outcome === "GAP");
    document.getElementById("section-count").textContent = String(library.sections.length);
    document.getElementById("matched-count").textContent = String(matched.length);
    document.getElementById("gap-count").textContent = String(gaps.length);

    const modules = [];
    library.sections.forEach((section) => {
      let module = modules.find((entry) => entry.id === section.moduleId);
      if (!module) {
        module = {
          id: section.moduleId,
          label: section.moduleLabel,
          title: section.moduleTitle,
          sections: []
        };
        modules.push(module);
      }
      module.sections.push(section);
    });

    const fragment = document.createDocumentFragment();
    modules.forEach((module) => {
      const jump = createElement("a", "jump-link", module.id);
      jump.href = `#${moduleAnchor(module.id)}`;
      jumpRoot.append(jump);

      const sectionElement = createElement("section", "module-group");
      sectionElement.id = moduleAnchor(module.id);
      sectionElement.setAttribute("aria-labelledby", `${moduleAnchor(module.id)}-title`);
      const heading = createElement("div", "module-heading");
      heading.append(createElement("span", "module-code", module.id));
      const headingText = createElement("div");
      const title = createElement("h2", "", module.title);
      title.id = `${moduleAnchor(module.id)}-title`;
      headingText.append(title, createElement("p", "", module.label));
      heading.append(headingText);

      const grid = createElement("div", "video-grid");
      module.sections
        .slice()
        .sort((a, b) => a.order - b.order)
        .forEach((courseSection) => {
          grid.append(courseSection.outcome === "MATCHED" ? makeMatchedCard(courseSection) : makeGapCard(courseSection));
        });
      sectionElement.append(heading, grid);
      fragment.append(sectionElement);
    });
    root.append(fragment);
  }

  document.getElementById("dialog-close-top").addEventListener("click", closePlayer);
  document.getElementById("dialog-close-bottom").addEventListener("click", closePlayer);
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closePlayer();
  });
  dialog.addEventListener("close", () => {
    stopPlayer();
    if (returnFocus && returnFocus.isConnected) returnFocus.focus();
    returnFocus = null;
  });
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    const inside = event.clientX >= rect.left && event.clientX <= rect.right &&
      event.clientY >= rect.top && event.clientY <= rect.bottom;
    if (!inside) closePlayer();
  });

  try {
    validateLibrary(data);
    renderLibrary(data);
  } catch (error) {
    root.replaceChildren();
    const alert = createElement("p", "library-error", "The video library could not be loaded. Use the module theory, which remains the complete non-video path.");
    alert.setAttribute("role", "alert");
    root.append(alert);
    console.error(error);
  }
}());
