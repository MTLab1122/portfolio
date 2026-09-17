const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

if (!reduceMotion) {
  const initMotion = async () => {
    const [{ gsap }, { ScrollTrigger }] = await Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]);

    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll<HTMLElement>(".story-title").forEach((heading) => {
      const words = heading.textContent?.trim().split(/\s+/) ?? [];
      heading.innerHTML = words.map((word) => `<span class="story-word">${word}</span>`).join(" ");
      gsap.fromTo(heading.querySelectorAll(".story-word"), { y: 18, autoAlpha: 0, filter: "blur(5px)" }, {
        y: 0,
        autoAlpha: 1,
        filter: "blur(0px)",
        stagger: 0.045,
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: { trigger: heading, start: "top 86%", once: true },
      });
    });

    const intro = document.querySelector<HTMLElement>("[data-intro-veil]");
    const introWasSeen = sessionStorage.getItem("portfolio-intro-seen");
    if (intro && !introWasSeen) {
      sessionStorage.setItem("portfolio-intro-seen", "true");
      const introTimeline = gsap.timeline({ defaults: { ease: "power4.out" } });
      document.querySelector("[data-skip-intro]")?.addEventListener("click", () => introTimeline.kill());
      introTimeline
        .set(intro, { autoAlpha: 1 })
        .from(".intro-mark span", { yPercent: 120, rotate: 3, stagger: 0.12, duration: 0.9 }, 0.1)
        .fromTo(".intro-caption", { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55 }, 0.85)
        .to(intro, { clipPath: "inset(0 0 100% 0)", duration: 0.9, delay: 0.55, ease: "power3.inOut", onComplete: () => intro.classList.add("is-dismissed") });
    }

    const heroCopy = document.querySelector<HTMLElement>(".hero-copy");
    const hero = document.querySelector<HTMLElement>("#top");
    if (heroCopy && hero) {
      gsap.to(heroCopy, {
        y: -90,
        scale: 0.97,
        ease: "none",
        scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.7 },
      });
    }

    document.querySelectorAll<HTMLElement>(".project-card").forEach((card) => {
      gsap.fromTo(card, { "--scroll-angle": "1.8deg", "--scroll-scale": 0.96 }, {
        "--scroll-angle": "0deg",
        "--scroll-scale": 1,
        ease: "none",
        scrollTrigger: { trigger: card, start: "top 90%", end: "center 58%", scrub: 0.7 },
      });
    });

    const cursorOrb = document.querySelector<HTMLElement>(".cursor-orb");
    if (!coarsePointer && cursorOrb) {
      let x = window.innerWidth / 2;
      let y = window.innerHeight / 2;
      let targetX = x;
      let targetY = y;
      let cursorFrame = 0;
      const renderCursor = () => {
        x += (targetX - x) * 0.12;
        y += (targetY - y) * 0.12;
        cursorOrb.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        if (Math.abs(targetX - x) > 0.1 || Math.abs(targetY - y) > 0.1) {
          cursorFrame = requestAnimationFrame(renderCursor);
        } else {
          cursorFrame = 0;
        }
      };
      window.addEventListener("pointermove", (event) => {
        targetX = event.clientX;
        targetY = event.clientY;
        if (!cursorFrame) cursorFrame = requestAnimationFrame(renderCursor);
      }, { passive: true });
    }

    if (!coarsePointer) {
      document.querySelectorAll<HTMLElement>(".project-card, .hero-cta").forEach((element) => {
        element.addEventListener("pointermove", (event) => {
          const bounds = element.getBoundingClientRect();
          const tiltX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -4;
          const tiltY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 5;
          element.style.setProperty("--tilt-x", `${tiltX}deg`);
          element.style.setProperty("--tilt-y", `${tiltY}deg`);
        }, { passive: true });
        element.addEventListener("pointerleave", () => {
          element.style.setProperty("--tilt-x", "0deg");
          element.style.setProperty("--tilt-y", "0deg");
        });
      });
    }

    const sections = [...document.querySelectorAll<HTMLElement>("main section[id]")];
    const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')];
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    }, { rootMargin: "-35% 0px -55%" });
    sections.forEach((section) => sectionObserver.observe(section));
  };

  void initMotion();
}
