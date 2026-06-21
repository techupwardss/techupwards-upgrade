"use client";

import { useEffect } from "react";

const HERO_INTRO_STORAGE_KEY = "techupwards:home-hero-intro-complete";
const HERO_COMPLETE_CLASS = "home-hero-animation-complete";
const HERO_INTRO_DURATION_MS = 2800;

export default function HomeAnimationSession() {
  useEffect(() => {
    const root = document.documentElement;
    let introTimer: number | undefined;
    let disposed = false;

    const startIntroState = () => {
      let completed = false;

      try {
        completed = window.sessionStorage.getItem(HERO_INTRO_STORAGE_KEY) === "1";
      } catch {
        completed = false;
      }

      if (completed) {
        root.classList.add(HERO_COMPLETE_CLASS);
        return;
      }

      root.classList.remove(HERO_COMPLETE_CLASS);
      introTimer = window.setTimeout(() => {
        try {
          window.sessionStorage.setItem(HERO_INTRO_STORAGE_KEY, "1");
        } catch {
          // Keep the visual state correct when storage is unavailable.
        }
        root.classList.add(HERO_COMPLETE_CLASS);
      }, HERO_INTRO_DURATION_MS);
    };

    const dispatchMounted = () => {
      if (!disposed) {
        window.dispatchEvent(new Event("techupwards:home-mounted"));
      }
    };

    startIntroState();

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-techupwards-interactions="true"]',
    );

    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        window.requestAnimationFrame(dispatchMounted);
      } else {
        existingScript.addEventListener("load", dispatchMounted, { once: true });
      }
    } else {
      const script = document.createElement("script");
      script.src = "/interactions.js?v=34";
      script.async = true;
      script.dataset.techupwardsInteractions = "true";
      script.addEventListener(
        "load",
        () => {
          script.dataset.loaded = "true";
          dispatchMounted();
        },
        { once: true },
      );
      document.body.appendChild(script);
    }

    return () => {
      disposed = true;
      if (introTimer) window.clearTimeout(introTimer);
      existingScript?.removeEventListener("load", dispatchMounted);
      window.dispatchEvent(new Event("techupwards:home-unmounted"));
    };
  }, []);

  return null;
}
