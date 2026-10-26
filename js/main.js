(() => {
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  const setHeaderState = () => header?.classList.toggle("is-scrolled", window.scrollY > 12);
  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });
  if (menuButton && nav) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      nav.classList.remove("is-open");
      header?.classList.remove("is-menu-open");
      document.body.classList.remove("nav-open");
    };
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      menuButton.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
      nav.classList.toggle("is-open", !open);
      header?.classList.toggle("is-menu-open", !open);
      document.body.classList.toggle("nav-open", !open);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    window.addEventListener("resize", () => { if (window.innerWidth > 760) closeMenu(); });
    document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reducedMotion && "IntersectionObserver" in window) {
    const targets = document.querySelectorAll(".intro-layout > *, .project-card, .service-detail, .principle, .steps article, .manifesto, .about-copy, .case-story > *, .closing-row, .contact-form, .contact-copy");
    if (targets.length) {
      document.documentElement.classList.add("has-reveal");
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });
      targets.forEach((target, index) => {
        target.setAttribute("data-reveal", "");
        target.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
        observer.observe(target);
      });
    }
  }

  document.querySelectorAll("[data-year]").forEach(node => { node.textContent = new Date().getFullYear(); });
})();