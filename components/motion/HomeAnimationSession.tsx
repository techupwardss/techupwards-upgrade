"use client";

import { useLayoutEffect } from "react";

const HERO_INTRO_STORAGE_KEY = "techupwards:home-hero-intro-complete";
const HERO_COMPLETE_CLASS = "home-hero-animation-complete";
const HERO_INTRO_DURATION_MS = 2800;

export default function HomeAnimationSession() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const mountFrame = window.requestAnimationFrame(() => {
      window.dispatchEvent(new Event("techupwards:home-mounted"));
    });
    let completed = false;

    try {
      completed = window.sessionStorage.getItem(HERO_INTRO_STORAGE_KEY) === "1";
    } catch {
      completed = false;
    }

    if (completed) {
      root.classList.add(HERO_COMPLETE_CLASS);
      return () => {
        window.cancelAnimationFrame(mountFrame);
        window.dispatchEvent(new Event("techupwards:home-unmounted"));
      };
    }

    root.classList.remove(HERO_COMPLETE_CLASS);
    const timer = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem(HERO_INTRO_STORAGE_KEY, "1");
      } catch {
        // Keep the visual state correct when storage is unavailable.
      }
      root.classList.add(HERO_COMPLETE_CLASS);
    }, HERO_INTRO_DURATION_MS);

    return () => {
      window.cancelAnimationFrame(mountFrame);
      window.clearTimeout(timer);
      window.dispatchEvent(new Event("techupwards:home-unmounted"));
    };
  }, []);

  return null;
}
