const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

if (!reduceMotion) {
  // 1. Animated Stat Counters
  const initCounters = () => {
    const counterElements = document.querySelectorAll<HTMLElement>(".stat-counter");
    if (!counterElements.length) return;

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        counterObserver.unobserve(el);

        const targetRaw = el.getAttribute("data-target") ?? el.textContent ?? "0";
        const hasPlus = targetRaw.includes("+");
        const hasPercent = targetRaw.includes("%");
        const isDecimal = targetRaw.includes(".");
        const targetNum = parseFloat(targetRaw.replace(/[^0-9.]/g, ""));

        if (isNaN(targetNum)) return;

        const duration = 1400; // ms
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic: 1 - pow(1 - x, 3)
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const current = targetNum * easeOut;

          let display = isDecimal ? current.toFixed(2) : Math.round(current).toString();
          if (hasPlus) display += "+";
          if (hasPercent) display += "%";

          el.textContent = display;

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            el.textContent = targetRaw;
          }
        };

        requestAnimationFrame(animate);
      });
    }, { threshold: 0.3 });

    counterElements.forEach((el) => counterObserver.observe(el));
  };

  // 2. Active Section Spy for Desktop IconRail & Mobile Menu
  const initActiveSectionSpy = () => {
    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    const navLinks = document.querySelectorAll<HTMLAnchorElement>("[data-target-id]");

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const sectionId = entry.target.id;

        navLinks.forEach((link) => {
          const target = link.getAttribute("data-target-id");
          if (target === sectionId) {
            link.classList.add("is-active-nav");
          } else {
            link.classList.remove("is-active-nav");
          }
        });
      });
    }, { rootMargin: "-25% 0px -55% 0px" });

    sections.forEach((section) => observer.observe(section));
  };

  // 3. Interactive 3D Card Tilt with Glare Tracking
  const initCardTilt = () => {
    if (coarsePointer) return;

    const cards = document.querySelectorAll<HTMLElement>(".project-card, .card-3d");

    cards.forEach((card) => {
      let isHovered = false;
      let frame = 0;
      let targetTiltX = 0;
      let targetTiltY = 0;
      let mouseXPercent = 50;
      let mouseYPercent = 50;

      const onPointerMove = (e: PointerEvent) => {
        const bounds = card.getBoundingClientRect();
        const clientX = e.clientX - bounds.left;
        const clientY = e.clientY - bounds.top;

        mouseXPercent = (clientX / bounds.width) * 100;
        mouseYPercent = (clientY / bounds.height) * 100;

        // Subtle tilt range (-4deg to +4deg)
        targetTiltX = ((clientY / bounds.height) - 0.5) * -7;
        targetTiltY = ((clientX / bounds.width) - 0.5) * 7;

        if (!frame) {
          frame = requestAnimationFrame(() => {
            card.style.setProperty("--tilt-x", `${targetTiltX.toFixed(2)}deg`);
            card.style.setProperty("--tilt-y", `${targetTiltY.toFixed(2)}deg`);
            card.style.setProperty("--mouse-x", `${mouseXPercent.toFixed(1)}%`);
            card.style.setProperty("--mouse-y", `${mouseYPercent.toFixed(1)}%`);
            frame = 0;
          });
        }
      };

      const onPointerLeave = () => {
        isHovered = false;
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
      };

      card.addEventListener("pointermove", onPointerMove, { passive: true });
      card.addEventListener("pointerleave", onPointerLeave);
    });
  };

  // Initialize all features once DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initCounters();
      initActiveSectionSpy();
      initCardTilt();
    });
  } else {
    initCounters();
    initActiveSectionSpy();
    initCardTilt();
  }
}
