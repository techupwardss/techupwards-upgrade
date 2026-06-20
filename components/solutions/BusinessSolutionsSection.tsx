"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type IconName =
  | "sparkles"
  | "layers"
  | "users"
  | "chart"
  | "trend"
  | "shield"
  | "pie"
  | "check";

const REVEAL_FROM = {
  opacity: 0,
  x: 0,
  y: 24,
  scale: 1,
  rotate: 0,
  filter: "blur(0px)",
};

const REVEAL_TO = {
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
  rotate: 0,
  filter: "blur(0px)",
};

const solutions = [
  {
    title: "Brand Identity",
    description: "Create a powerful online brand that customers trust and remember.",
    icon: "sparkles" as IconName,
  },
  {
    title: "Scalable Systems",
    description: "Build future-ready digital infrastructure for long-term business growth.",
    icon: "layers" as IconName,
  },
  {
    title: "Client Management",
    description: "Improve communication and customer satisfaction with smart solutions.",
    icon: "users" as IconName,
  },
];

const assistantRows = [
  ["Market Opportunity", "High"],
  ["Process Optimization", "High"],
  ["Customer Retention", "Medium"],
  ["Scalability Potential", "High"],
];

function LineIcon({ name }: { name: IconName }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "sparkles") {
    return <svg {...common}><path d="m12 3-1.6 4.4L6 9l4.4 1.6L12 15l1.6-4.4L18 9l-4.4-1.6L12 3Z"/><path d="m5 16-.8 2.2L2 19l2.2.8L5 22l.8-2.2L8 19l-2.2-.8L5 16Z"/></svg>;
  }
  if (name === "layers") {
    return <svg {...common}><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></svg>;
  }
  if (name === "users") {
    return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
  }
  if (name === "chart") {
    return <svg {...common}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>;
  }
  if (name === "trend") {
    return <svg {...common}><path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg>;
  }
  if (name === "shield") {
    return <svg {...common}><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z"/><path d="m9 12 2 2 4-4"/></svg>;
  }
  if (name === "pie") {
    return <svg {...common}><path d="M21 12a9 9 0 1 1-9-9v9Z"/><path d="M12 3a9 9 0 0 1 9 9h-9Z"/></svg>;
  }
  return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>;
}

function WorldNetwork() {
  return (
    <svg className="business-world-network" viewBox="0 0 1200 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g className="business-world-outline">
        <path d="M76 182 118 135l59-12 41 20 35-5 34 35-22 29-42 3-15 36-31 19-35-26-40-7-28-45Z"/>
        <path d="m211 271 38 20 24 45-11 58-34 68-29-38 7-57-21-45 26-51Z"/>
        <path d="m462 153 44-34 77 8 39 28 53-5 39 21 63-9 73 22 61-4 77 45-35 28-70-13-36 26-45-4-50 31-51-17-39 13-42-27-55 4-34-38-55-12-14-62Z"/>
        <path d="m584 283 52 10 34 52-13 75-47 53-28-61-35-45 18-56 19-28Z"/>
        <path d="m920 347 50-20 54 31-16 43-67 10-38-31 17-33Z"/>
      </g>
      <g className="business-world-links">
        <path d="M121 199 C295 130 388 228 540 191 S785 120 970 212"/>
        <path d="M232 354 C380 278 488 373 625 313 S861 270 1016 362"/>
      </g>
      <g className="business-map-nodes">
        <circle cx="121" cy="199" r="4"/><circle cx="248" cy="176" r="3"/><circle cx="391" cy="219" r="4"/>
        <circle cx="540" cy="191" r="4"/><circle cx="684" cy="161" r="3"/><circle cx="832" cy="170" r="4"/>
        <circle cx="970" cy="212" r="4"/><circle cx="232" cy="354" r="4"/><circle cx="438" cy="335" r="3"/>
        <circle cx="625" cy="313" r="4"/><circle cx="827" cy="301" r="3"/><circle cx="1016" cy="362" r="4"/>
      </g>
    </svg>
  );
}

function BusinessRobot() {
  return (
    <div className="business-robot" aria-hidden="true">
      <span className="business-robot-aura"/>
      <Image
        src="/assets/business-ai-robot.png"
        alt=""
        width={360}
        height={360}
        sizes="(max-width: 768px) 0px, (max-width: 1180px) 240px, 320px"
        loading="eager"
        unoptimized
      />
      <span className="business-robot-platform"/>
    </div>
  );
}

function ModuleCard({ className, label, icon }: { className: string; label: string; icon: IconName }) {
  return (
    <div className={`business-module ${className}`}>
      <LineIcon name={icon}/>
      <span>{label}</span>
    </div>
  );
}

function HubStage() {
  return (
    <div className="business-hub-stage" aria-hidden="true">
      <svg className="business-hub-connectors" viewBox="0 0 520 450" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hubConnectorGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#38bdf8"/><stop offset=".55" stopColor="#2563eb"/><stop offset="1" stopColor="#818cf8"/>
          </linearGradient>
        </defs>
        <path d="M260 222 C205 192 178 129 112 100"/>
        <path d="M260 222 C322 182 344 124 414 98"/>
        <path d="M260 222 C203 258 181 320 112 351"/>
        <path d="M260 222 C323 262 349 319 414 348"/>
        <circle className="hub-data-packet hub-data-packet-1" r="4"><animateMotion dur="4.8s" repeatCount="indefinite" path="M260 222 C205 192 178 129 112 100"/></circle>
        <circle className="hub-data-packet hub-data-packet-2" r="4"><animateMotion dur="5.2s" begin="-2.4s" repeatCount="indefinite" path="M260 222 C322 182 344 124 414 98"/></circle>
        <circle className="hub-data-packet hub-data-packet-3" r="4"><animateMotion dur="5s" begin="-1.6s" repeatCount="indefinite" path="M260 222 C203 258 181 320 112 351"/></circle>
        <circle className="hub-data-packet hub-data-packet-4" r="4"><animateMotion dur="5.4s" begin="-3.2s" repeatCount="indefinite" path="M260 222 C323 262 349 319 414 348"/></circle>
      </svg>
      <ModuleCard className="module-growth" label="Growth" icon="chart"/>
      <ModuleCard className="module-performance" label="Performance" icon="trend"/>
      <ModuleCard className="module-security" label="Security" icon="shield"/>
      <ModuleCard className="module-insights" label="Insights" icon="pie"/>
      <div className="business-hub">
        <span className="business-hud-ring ring-one"/><span className="business-hud-ring ring-two"/><span className="business-hud-ring ring-three"/>
        <div className="business-hub-core"><LineIcon name="users"/></div>
        <span className="business-hub-node node-one"/><span className="business-hub-node node-two"/><span className="business-hub-node node-three"/>
      </div>
      <div className="business-hub-platform"><span/><i/></div>
    </div>
  );
}

function StrategyPanel() {
  return (
    <aside className="strategy-assistant-panel" aria-label="AI Strategy Assistant analysis">
      <p className="strategy-panel-title">AI STRATEGY ASSISTANT</p>
      <p className="strategy-panel-description">I&apos;ve analyzed your business data and identified opportunities for growth and efficiency.</p>
      <ul>
        {assistantRows.map(([label, value]) => (
          <li key={label}>
            <span><LineIcon name="check"/>{label}</span>
            <strong>{value}</strong>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function BusinessSolutionsSection() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <div className="business-solutions-section" data-business-solutions-react>
      <WorldNetwork/>
      <div className="business-solutions-vignette" aria-hidden="true"/>
      <div className="business-solutions-inner">
        <motion.header
          className="business-solutions-heading"
          style={REVEAL_TO}
          initial={reduceMotion ? false : REVEAL_FROM}
          whileInView={REVEAL_TO}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="business-solutions-badge">How We Help</span>
          <h2>Business Solutions</h2>
          <p>Helping businesses adapt, scale, and dominate digitally.</p>
        </motion.header>

        <motion.div
          className="business-solutions-visual"
          style={REVEAL_TO}
          initial={reduceMotion ? false : REVEAL_FROM}
          whileInView={REVEAL_TO}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <BusinessRobot/>
          <HubStage/>
          <StrategyPanel/>
        </motion.div>

        <div className="business-solution-cards">
          {solutions.map((solution, index) => (
            <motion.article
              key={solution.title}
              className={`business-solution-card business-solution-card-${index + 1}`}
              style={REVEAL_TO}
              initial={reduceMotion ? false : REVEAL_FROM}
              whileInView={REVEAL_TO}
              whileHover={reduceMotion ? REVEAL_TO : { ...REVEAL_TO, y: -7 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="business-solution-icon"><LineIcon name={solution.icon}/></span>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BusinessSolutionsPortal() {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const sectionHost = document.querySelector<HTMLElement>("[data-business-solutions-host]");
    if (!sectionHost) return;
    sectionHost.replaceChildren();
    const frame = window.requestAnimationFrame(() => setHost(sectionHost));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return host ? createPortal(<BusinessSolutionsSection/>, host) : null;
}
