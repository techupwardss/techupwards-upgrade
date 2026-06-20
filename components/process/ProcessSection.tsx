"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

const steps: ProcessStep[] = [
  { number: "01", title: "Discover", description: "Goals and opportunities" },
  { number: "02", title: "Design", description: "Experience and identity" },
  { number: "03", title: "Build", description: "Fast scalable systems" },
  { number: "04", title: "Grow", description: "Measure and optimize" },
];

const PROCESS_INTRO_STORAGE_KEY = "techupwards:home-process-intro-complete";

const CARD_HIDDEN = {
  opacity: 0,
  x: 0,
  y: 24,
  scale: 1,
  rotate: 0,
  filter: "blur(0px)",
};

const CARD_VISIBLE = {
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
  rotate: 0,
  filter: "blur(0px)",
};

const CARD_HOVER = { opacity: 1, x: 0, y: -8, scale: 1.012, rotate: 0, filter: "blur(0px)" };
const CARD_HOVER_REDUCED = { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" };

const CHIP_PARTICLES = Array.from({ length: 6 }, (_, index) => ({
  id: index,
  animate: {
    x: [0, index % 2 ? 8 : -8, 0],
    y: [0, -12 - index * 1.5, 0],
    opacity: [0.18, 0.9, 0.18],
    scale: [0.75, 1.25, 0.75],
    rotate: [0, 0, 0],
  },
  transition: {
    duration: 3.6 + index * 0.35,
    delay: index * 0.3,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
}));

const desktopRoutes = [
  {
    path: "M600 310 C530 310 500 155 408 155",
    x: [600, 550, 510, 455, 408],
    y: [310, 292, 220, 166, 155],
    node: [408, 155],
  },
  {
    path: "M600 310 C670 310 700 155 792 155",
    x: [600, 650, 690, 745, 792],
    y: [310, 292, 220, 166, 155],
    node: [792, 155],
  },
  {
    path: "M600 310 C530 310 500 465 408 465",
    x: [600, 550, 510, 455, 408],
    y: [310, 328, 400, 454, 465],
    node: [408, 465],
  },
  {
    path: "M600 310 C670 310 700 465 792 465",
    x: [600, 650, 690, 745, 792],
    y: [310, 328, 400, 454, 465],
    node: [792, 465],
  },
];

const mobileRoutes = [
  { path: "M200 500 C200 410 200 250 200 150", x: [200, 200, 200, 200], y: [500, 400, 260, 150], node: [200, 150] },
  { path: "M200 500 C160 430 160 375 200 325", x: [200, 175, 165, 200], y: [500, 430, 375, 325], node: [200, 325] },
  { path: "M200 500 C240 570 240 625 200 675", x: [200, 225, 235, 200], y: [500, 570, 625, 675], node: [200, 675] },
  { path: "M200 500 C200 590 200 750 200 850", x: [200, 200, 200, 200], y: [500, 600, 740, 850], node: [200, 850] },
];

function StepIcon({ index }: { index: number }) {
  if (index === 0) {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>;
  }
  if (index === 1) {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 4 8 8-8 8-8-8 8-8Z" /></svg>;
  }
  if (index === 2) {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 17 17 5M9 5h8v8" /></svg>;
}

function ConnectionLayer({
  activeStep,
  mobile = false,
  reduceMotion,
  introCompleted,
}: {
  activeStep: number | null;
  mobile?: boolean;
  reduceMotion: boolean;
  introCompleted: boolean;
}) {
  const routes = mobile ? mobileRoutes : desktopRoutes;

  return (
    <svg
      className={`ai-connections ${mobile ? "ai-connections-mobile" : "ai-connections-desktop"}`}
      viewBox={mobile ? "0 0 400 1000" : "0 0 1200 620"}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`ai-route-gradient-${mobile ? "mobile" : "desktop"}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00cfff" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <filter id={`ai-line-glow-${mobile ? "mobile" : "desktop"}`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {routes.map((route, index) => {
        const isActive = activeStep === index;
        const baseOpacity = 0.46;
        const baseStrokeWidth = 1.45;
        const gradient = `url(#ai-route-gradient-${mobile ? "mobile" : "desktop"})`;
        return (
          <g key={route.path}>
            <motion.path
              d={route.path}
              fill="none"
              stroke={gradient}
              strokeLinecap="round"
              opacity={baseOpacity}
              strokeWidth={baseStrokeWidth}
              initial={introCompleted || reduceMotion ? false : { pathLength: 0, opacity: baseOpacity, strokeWidth: baseStrokeWidth }}
              whileInView={{ pathLength: 1, opacity: baseOpacity, strokeWidth: baseStrokeWidth }}
              viewport={{ once: true, amount: 0.2 }}
              animate={{ opacity: isActive ? 1 : baseOpacity, strokeWidth: isActive ? 3 : baseStrokeWidth }}
              transition={{ pathLength: { duration: 1.2, delay: index * 0.14 }, opacity: { duration: 0.25 }, strokeWidth: { duration: 0.25 } }}
              filter={isActive ? `url(#ai-line-glow-${mobile ? "mobile" : "desktop"})` : "none"}
            />
            <motion.circle
              cx={route.node[0]}
              cy={route.node[1]}
              r={isActive ? 6 : 4}
              fill={index % 2 ? "#a855f7" : "#00cfff"}
              opacity={0.72}
              style={{ opacity: 0.72, scale: 1 }}
              initial={{ opacity: 0.72, scale: 1 }}
              animate={reduceMotion
                ? { opacity: isActive ? 1 : 0.72, scale: 1 }
                : { opacity: isActive ? [0.75, 1, 0.75] : 0.72, scale: isActive ? [1, 1.45, 1] : 1 }}
              transition={{ duration: 1.5, repeat: isActive && !reduceMotion ? Infinity : 0 }}
              filter={`url(#ai-line-glow-${mobile ? "mobile" : "desktop"})`}
            />
            {!reduceMotion && (
              <motion.circle
                r={isActive ? 5 : 3.5}
                fill={index % 2 ? "#c084fc" : "#67e8f9"}
                filter={`url(#ai-line-glow-${mobile ? "mobile" : "desktop"})`}
                cx={route.x[0]}
                cy={route.y[0]}
                opacity={0}
                initial={{ cx: route.x[0], cy: route.y[0], opacity: 0 }}
                animate={{ cx: route.x, cy: route.y, opacity: [0, 1, 1, 0] }}
                transition={{ duration: isActive ? 1.75 : 4.5, delay: index * 0.58, repeat: Infinity, ease: "linear" }}
              />
            )}
            {isActive && !reduceMotion && (
              <motion.circle
                r="3"
                fill="#ffffff"
                cx={route.x[0]}
                cy={route.y[0]}
                opacity={0}
                initial={{ cx: route.x[0], cy: route.y[0], opacity: 0 }}
                animate={{ cx: route.x, cy: route.y, opacity: [0, 0.9, 0] }}
                transition={{ duration: 1.75, delay: 0.55, repeat: Infinity, ease: "linear" }}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}

function ProcessSection({ introCompleted }: { introCompleted: boolean }) {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const reduceMotion = Boolean(useReducedMotion());
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 65, damping: 20, mass: 0.7 });
  const springY = useSpring(pointerY, { stiffness: 65, damping: 20, mass: 0.7 });

  const haloAnimation = useMemo(
    () => reduceMotion
      ? { scale: 1, opacity: 0.62, x: 0, y: 0, rotate: 0 }
      : {
          scale: [0.92, activeStep !== null ? 1.22 : 1.1, 0.92],
          opacity: [0.35, activeStep !== null ? 0.9 : 0.62, 0.35],
          x: [0, 0, 0],
          y: [0, 0, 0],
          rotate: [0, 0, 0],
        },
    [activeStep, reduceMotion],
  );

  const haloTransition = useMemo(
    () => ({ duration: activeStep !== null ? 1.6 : 3.4, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut" as const }),
    [activeStep, reduceMotion],
  );

  const rotorAnimation = useMemo(
    () => ({ rotate: reduceMotion ? 0 : 360, opacity: 1, scale: 1, x: 0, y: 0 }),
    [reduceMotion],
  );

  const rotorTransition = useMemo(
    () => ({ duration: activeStep !== null ? 18 : 34, repeat: reduceMotion ? 0 : Infinity, ease: "linear" as const }),
    [activeStep, reduceMotion],
  );

  const faceAnimation = useMemo(
    () => reduceMotion
      ? { scale: 1, opacity: 1, x: 0, y: 0, rotate: 0 }
      : { scale: [1, 1.035, 1], opacity: [1, 1, 1], x: [0, 0, 0], y: [0, 0, 0], rotate: [0, 0, 0] },
    [reduceMotion],
  );

  const faceTransition = useMemo(
    () => ({ duration: 2.8, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut" as const }),
    [reduceMotion],
  );

  const markIntroCompleted = useCallback(() => {
    if (introCompleted) return;
    try {
      window.sessionStorage.setItem(PROCESS_INTRO_STORAGE_KEY, "1");
    } catch {
      // The animation remains deterministic when storage is unavailable.
    }
  }, [introCompleted]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 18);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 14);
  };

  const resetParallax = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      className={`ai-process-root${activeStep !== null ? " has-active-step" : ""}`}
      data-ai-process-react
      onPointerMove={handlePointerMove}
      onPointerLeave={resetParallax}
    >
      <div className="ai-process-grid" aria-hidden="true" />
      <motion.div className="ai-process-shell" style={{ x: springX, y: springY }}>
        <header className="ai-process-heading">
          <span className="section-tag">From Idea To Intelligence</span>
          <h2>One connected AI growth architecture</h2>
          <p>Strategy, experience, engineering, and optimization work as one intelligent system—turning business goals into digital momentum.</p>
        </header>

        <div className="ai-architecture" aria-label="TechUpwards four-step connected growth process">
          <ConnectionLayer activeStep={activeStep} reduceMotion={reduceMotion} introCompleted={introCompleted} />
          <ConnectionLayer activeStep={activeStep} mobile reduceMotion={reduceMotion} introCompleted={introCompleted} />

          {steps.map((step, index) => (
            <motion.article
              className={`ai-process-card ai-process-card-${index + 1}`}
              key={step.number}
              tabIndex={0}
              data-process-card={step.title.toLowerCase()}
              onHoverStart={() => setActiveStep(index)}
              onHoverEnd={() => setActiveStep(null)}
              onFocus={() => setActiveStep(index)}
              onBlur={() => setActiveStep(null)}
              style={CARD_VISIBLE}
              initial={introCompleted || reduceMotion ? false : CARD_HIDDEN}
              whileInView={CARD_VISIBLE}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={reduceMotion ? CARD_HOVER_REDUCED : CARD_HOVER}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onAnimationComplete={index === steps.length - 1 ? markIntroCompleted : undefined}
            >
              <span className="ai-card-shine" aria-hidden="true" />
              <div className="ai-card-icon"><StepIcon index={index} /></div>
              <div className="ai-card-copy"><h3>{step.title}</h3><p>{step.description}</p></div>
              <span className="ai-card-index">{step.number}</span>
            </motion.article>
          ))}

          <div className={`central-ai-chip${activeStep !== null ? " is-energized" : ""}`}>
            {!reduceMotion && CHIP_PARTICLES.map((particle) => (
              <motion.i
                key={particle.id}
                className={`chip-particle chip-particle-${particle.id + 1}`}
                style={{ x: 0, y: 0, opacity: 0.18, scale: 0.75, rotate: 0 }}
                initial={{ x: 0, y: 0, opacity: 0.18, scale: 0.75, rotate: 0 }}
                animate={particle.animate}
                transition={particle.transition}
              />
            ))}
            <motion.div
              className="central-ai-halo"
              style={{ scale: 0.92, opacity: 0.35, x: 0, y: 0, rotate: 0 }}
              initial={{ scale: 0.92, opacity: 0.35, x: 0, y: 0, rotate: 0 }}
              animate={haloAnimation}
              transition={haloTransition}
            />
            <motion.div
              className="central-ai-rotor"
              style={{ rotate: 0, opacity: 1, scale: 1, x: 0, y: 0 }}
              initial={{ rotate: 0, opacity: 1, scale: 1, x: 0, y: 0 }}
              animate={rotorAnimation}
              transition={rotorTransition}
            >
              <span /><span /><span /><span />
            </motion.div>
            <motion.div
              className="central-ai-face"
              style={{ scale: 1, opacity: 1, x: 0, y: 0, rotate: 0 }}
              initial={{ scale: 1, opacity: 1, x: 0, y: 0, rotate: 0 }}
              animate={faceAnimation}
              transition={faceTransition}
            >
              <img src="/assets/logo.png" alt="TechUpwards" />
              <small>AI CORE</small>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProcessSectionPortal() {
  const [host, setHost] = useState<HTMLElement | null>(null);
  const [introCompleted, setIntroCompleted] = useState(false);

  useEffect(() => {
    const processHost = document.querySelector<HTMLElement>("[data-ai-process-host]");
    if (!processHost) return;
    processHost.replaceChildren();
    let completed = false;
    try {
      completed = window.sessionStorage.getItem(PROCESS_INTRO_STORAGE_KEY) === "1";
    } catch {
      completed = false;
    }
    const frame = window.requestAnimationFrame(() => {
      setIntroCompleted(completed);
      setHost(processHost);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return host ? createPortal(<ProcessSection introCompleted={introCompleted} />, host) : null;
}
