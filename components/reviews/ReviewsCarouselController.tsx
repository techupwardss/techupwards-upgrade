"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const AUTOPLAY_DELAY = 5000;

export default function ReviewsCarouselController() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: true,
    skipSnaps: false,
  });

  useEffect(() => {
    const viewport = document.querySelector<HTMLElement>("[data-reviews-viewport]");
    if (!viewport) return;
    emblaRef(viewport);
    return () => emblaRef(null);
  }, [emblaRef]);

  useEffect(() => {
    if (!emblaApi) return;

    const root = document.querySelector<HTMLElement>("[data-reviews-carousel]");
    if (!root) return;

    const viewport = root.querySelector<HTMLElement>("[data-reviews-viewport]");
    const previous = root.querySelector<HTMLButtonElement>("[data-review-prev]");
    const next = root.querySelector<HTMLButtonElement>("[data-review-next]");
    const dots = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-review-dot]"));
    const slides = Array.from(root.querySelectorAll<HTMLElement>("[data-review-slide]"));
    const indicator = root.querySelector<HTMLElement>("[data-review-indicator]");
    const progress = root.querySelector<HTMLElement>("[data-review-progress]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let timer: number | undefined;
    let paused = false;

    const resetProgress = (animate: boolean) => {
      if (!progress) return;
      progress.style.transition = "none";
      progress.style.transform = "scaleX(0)";
      if (!animate || reducedMotion.matches) return;
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          progress.style.transition = `transform ${AUTOPLAY_DELAY}ms linear`;
          progress.style.transform = "scaleX(1)";
        });
      });
    };

    const clearAutoplay = () => {
      if (timer) window.clearTimeout(timer);
      timer = undefined;
      resetProgress(false);
    };

    const scheduleAutoplay = () => {
      clearAutoplay();
      if (paused || reducedMotion.matches || document.hidden) return;
      resetProgress(true);
      timer = window.setTimeout(() => emblaApi.scrollNext(), AUTOPLAY_DELAY);
    };

    const pauseAutoplay = () => {
      paused = true;
      clearAutoplay();
    };

    const resumeAutoplay = () => {
      const pointerIsInside = root.matches(":hover");
      const focusIsInside = root.contains(document.activeElement);
      paused = pointerIsInside || focusIsInside || document.hidden;
      scheduleAutoplay();
    };

    const slidesPerView = () => {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
      return 1;
    };

    const syncSelectedState = () => {
      const selected = emblaApi.selectedScrollSnap();
      const emphasisOffset = slidesPerView() === 3 ? 1 : 0;
      const activeSlide = (selected + emphasisOffset) % slides.length;

      slides.forEach((slide, index) => {
        const active = index === activeSlide;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", String(!emblaApi.slidesInView().includes(index)));
      });

      dots.forEach((dot, index) => {
        const active = index === selected;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-current", active ? "true" : "false");
      });

      if (indicator) indicator.textContent = `Review ${selected + 1} of ${dots.length}`;
      previous?.toggleAttribute("disabled", !emblaApi.canScrollPrev());
      next?.toggleAttribute("disabled", !emblaApi.canScrollNext());
    };

    const onSelect = () => {
      syncSelectedState();
      scheduleAutoplay();
    };
    const onPrevious = () => emblaApi.scrollPrev();
    const onNext = () => emblaApi.scrollNext();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        emblaApi.scrollPrev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        emblaApi.scrollNext();
      }
    };
    const onFocusOut = (event: FocusEvent) => {
      if (!root.contains(event.relatedTarget as Node | null)) resumeAutoplay();
    };
    const onVisibilityChange = () => {
      if (document.hidden) pauseAutoplay();
      else resumeAutoplay();
    };
    const onReducedMotionChange = () => {
      if (reducedMotion.matches) clearAutoplay();
      else scheduleAutoplay();
    };

    const dotHandlers = dots.map((dot, index) => {
      const handler = () => emblaApi.scrollTo(index);
      dot.addEventListener("click", handler);
      return handler;
    });

    previous?.addEventListener("click", onPrevious);
    next?.addEventListener("click", onNext);
    viewport?.addEventListener("keydown", onKeyDown);
    root.addEventListener("mouseenter", pauseAutoplay);
    root.addEventListener("mouseleave", resumeAutoplay);
    root.addEventListener("focusin", pauseAutoplay);
    root.addEventListener("focusout", onFocusOut);
    document.addEventListener("visibilitychange", onVisibilityChange);
    reducedMotion.addEventListener("change", onReducedMotionChange);

    emblaApi.on("select", onSelect);
    emblaApi.on("pointerDown", pauseAutoplay);
    emblaApi.on("settle", resumeAutoplay);
    emblaApi.on("reInit", syncSelectedState);

    syncSelectedState();
    scheduleAutoplay();

    return () => {
      clearAutoplay();
      previous?.removeEventListener("click", onPrevious);
      next?.removeEventListener("click", onNext);
      dots.forEach((dot, index) => dot.removeEventListener("click", dotHandlers[index]));
      viewport?.removeEventListener("keydown", onKeyDown);
      root.removeEventListener("mouseenter", pauseAutoplay);
      root.removeEventListener("mouseleave", resumeAutoplay);
      root.removeEventListener("focusin", pauseAutoplay);
      root.removeEventListener("focusout", onFocusOut);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      reducedMotion.removeEventListener("change", onReducedMotionChange);
      emblaApi.off("select", onSelect);
      emblaApi.off("pointerDown", pauseAutoplay);
      emblaApi.off("settle", resumeAutoplay);
      emblaApi.off("reInit", syncSelectedState);
    };
  }, [emblaApi]);

  return null;
}
