"use client";

import { useEffect } from "react";

export default function AboutPageEffects() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".about-page-main .team-card"));
    const content = document.querySelector<HTMLElement>(".about-page-main .about-content");

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("show");
          cardObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    cards.forEach((card, index) => {
      card.classList.add("hidden");
      card.style.transitionDelay = `${index * 0.1}s`;
      if (prefersReducedMotion) card.classList.add("show");
      else cardObserver.observe(card);
    });

    let contentObserver: IntersectionObserver | undefined;
    if (content) {
      const children = content.querySelectorAll<HTMLElement>(".section-tag,h1,h2,p");
      children.forEach((child, index) => {
        child.classList.add("motion-reveal");
        child.style.setProperty("--motion-delay", `${Math.min(index * 90, 450)}ms`);
      });

      if (prefersReducedMotion) content.classList.add("motion-visible");
      else {
        contentObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              content.classList.add("motion-visible");
              contentObserver?.disconnect();
            });
          },
          { threshold: 0.2 },
        );
        contentObserver.observe(content);
      }
    }

    return () => {
      cardObserver.disconnect();
      contentObserver?.disconnect();
    };
  }, []);

  return null;
}
