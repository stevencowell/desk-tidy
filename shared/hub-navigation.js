(function () {
  "use strict";

  const HUB_URL = "https://stevencowell.github.io/Main-Page/";
  const script = document.currentScript;
  const stylesheetUrl = script ? new URL("sister-site.css", script.src).href : "";
  const courseRoot = script ? new URL("../", script.src) : new URL("./", location.href);

  if (stylesheetUrl && !document.querySelector('link[data-sister-site-styles]')) {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = stylesheetUrl;
    stylesheet.dataset.sisterSiteStyles = "";
    document.head.append(stylesheet);
  }

  if (document.querySelector(".course-family-nav")) return;

  const path = location.pathname.toLowerCase();
  const rootPath = courseRoot.pathname.replace(/\/$/, "").toLowerCase();
  const isCourseHome = path === `${rootPath}/` || path === `${rootPath}/index.html`;
  const bar = document.createElement("nav");
  bar.className = "course-family-nav screen-only";
  bar.setAttribute("aria-label", "Desk Tidy course navigation");

  const inner = document.createElement("div");
  inner.className = "course-family-nav__inner";

  const brand = document.createElement("a");
  brand.className = "course-family-nav__brand";
  brand.href = new URL("index.html", courseRoot).href;
  brand.innerHTML = '<span class="course-family-nav__mark" aria-hidden="true">DT</span><span>Desk Tidy</span>';

  const links = document.createElement("div");
  links.className = "course-family-nav__links";
  const items = [
    { label: "Course", href: "index.html", current: isCourseHome },
    { label: "Modules", href: "index.html#course-map-title", current: /\/weeks\d+-\d+\//.test(path) || path.includes("/sections/main-theory/") },
    { label: "Video learning", href: "youtube-library/video-library.html", current: path.includes("/youtube-library/") },
    { label: "Busy Work", href: "https://stevencowell.github.io/busy-worksheets/?library=timber", external: true },
    { label: "My folio", href: "desk-tidy-folio.html", current: path.endsWith("/desk-tidy-folio.html") },
    { label: "Assessment", href: "assessment-pathway-2026.html", current: path.includes("assessment-pathway") || path.includes("/exams/") },
    { label: "Teacher resources", href: "sections/program.html", current: path.endsWith("/sections/program.html") },
    { label: "Main Menu", href: HUB_URL, external: true }
  ];

  items.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.external ? item.href : new URL(item.href, courseRoot).href;
    link.textContent = item.label;
    if (item.current) link.setAttribute("aria-current", "page");
    links.append(link);
  });

  inner.append(brand, links);
  bar.append(inner);
  document.body.prepend(bar);
  document.documentElement.classList.add("has-course-family-nav");
})();
