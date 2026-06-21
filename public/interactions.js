/* ============================================================
   TECHUPWARDS — PREMIUM INTERACTIONS v3.0
   ============================================================ */

const homeEnhancers = {};

// ── 1. MOBILE MENU ─────────────────────────────────────────
const menuBtn  = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        const open = navLinks.classList.toggle('active');
        menuBtn.setAttribute('aria-expanded', String(open));
    });
}
document.querySelectorAll('.nav-links a').forEach(link =>
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn?.setAttribute('aria-expanded', 'false');
    })
);

// ── 1A. BRANDED OPENING SEQUENCE ──────────────────────────
(function initOpeningSequence() {
    const opener = document.createElement('div');
    opener.className = 'site-opener';
    opener.setAttribute('aria-hidden', 'true');
    opener.innerHTML = `
        <div class="opener-grid"></div>
        <div class="opener-route route-left"><i></i></div>
        <div class="opener-route route-right"><i></i></div>
        <div class="opener-route route-bottom"><i></i></div>
        <div class="opener-node opener-node-left"></div>
        <div class="opener-node opener-node-right"></div>
        <div class="opener-node opener-node-bottom"></div>
        <div class="opener-center">
            <div class="opener-logo-ring"><span></span><img src="/assets/logo.png" alt=""></div>
            <p>Connecting ideas to impact</p>
            <div class="opener-progress"><span></span></div>
        </div>
    `;
    document.body.prepend(opener);
    document.body.classList.add('site-opening');

    const finishOpening = () => {
        window.setTimeout(() => {
            opener.classList.add('is-complete');
            document.body.classList.remove('site-opening');
            window.setTimeout(() => opener.remove(), 850);
        }, 1550);
    };

    if (document.readyState === 'complete') finishOpening();
    else window.addEventListener('load', finishOpening, { once: true });
})();

// ── 1B. RESPONSIVE SIGNATURE VISUALS ─────────────────────
(function replaceLegacyVisuals() {
    homeEnhancers.replaceLegacyVisuals = replaceLegacyVisuals;
    const rocket = document.querySelector('.rocket-launch-header');
    if (rocket) {
        rocket.insertAdjacentHTML('beforebegin', `
            <section class="momentum-bridge" aria-label="TechUpwards digital growth network">
                <div class="momentum-grid"></div>
                <div class="momentum-copy">
                    <span class="momentum-kicker">Strategy. Design. Technology.</span>
                    <h2>Ideas moving <span>upwards</span></h2>
                </div>
                <div class="momentum-stage momentum-video-stage">
                    <video class="momentum-video" autoplay muted loop playsinline preload="metadata" aria-label="TechUpwards digital innovation animation">
                        <source src="/assets/techupwards-hologram.mp4" type="video/mp4">
                    </video>
                    <div class="momentum-orbit momentum-orbit-one"><span></span></div>
                    <div class="momentum-orbit momentum-orbit-two"><span></span></div>
                    <div class="momentum-core">
                        <div class="momentum-core-pulse"></div>
                        <img src="/assets/logo.png" alt="">
                    </div>
                    <div class="momentum-chip chip-strategy">Strategy</div>
                    <div class="momentum-chip chip-design">Design</div>
                    <div class="momentum-chip chip-build">Build</div>
                    <div class="momentum-chip chip-growth">Growth</div>
                </div>
                <div class="momentum-beam"></div>
            </section>
        `);
        rocket.remove();

        const momentumVideo = document.querySelector('.momentum-video');
        if (momentumVideo) {
            momentumVideo.muted = true;
            momentumVideo.defaultMuted = true;
            const playMomentumVideo = () => momentumVideo.play().catch(() => {});
            momentumVideo.addEventListener('canplay', playMomentumVideo, { once: true });
            const videoObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) playMomentumVideo();
                    else momentumVideo.pause();
                });
            }, { threshold: 0.15 });
            videoObserver.observe(momentumVideo);
        }
    }

    const legacyFeatures = document.querySelector('.features-showcase');
    if (legacyFeatures && !legacyFeatures.hasAttribute('data-ai-process-host')) {
        legacyFeatures.insertAdjacentHTML('beforebegin', `
            <section class="impact-flow" id="features">
                <div class="impact-copy">
                    <span class="section-tag">From Idea To Impact</span>
                    <h2>One connected growth engine</h2>
                    <p>We connect strategy, product, launch, and optimization into one clear path built to keep your business moving.</p>
                    <a href="#contact" class="primary-btn mag-btn">Start Your Project</a>
                </div>
                <div class="impact-visual" aria-label="Animated four-step growth process">
                    <div class="impact-path"></div>
                    <article class="impact-node"><span class="impact-index">01</span><div class="impact-icon">+</div><h3>Discover</h3><p>Goals and opportunities</p></article>
                    <article class="impact-node"><span class="impact-index">02</span><div class="impact-icon">◇</div><h3>Design</h3><p>Experience and identity</p></article>
                    <article class="impact-node"><span class="impact-index">03</span><div class="impact-icon">&lt;/&gt;</div><h3>Build</h3><p>Fast scalable systems</p></article>
                    <article class="impact-node"><span class="impact-index">04</span><div class="impact-icon">↗</div><h3>Grow</h3><p>Measure and optimize</p></article>
                    <div class="impact-packet packet-one"></div>
                    <div class="impact-packet packet-two"></div>
                </div>
            </section>
        `);
        legacyFeatures.remove();
    }
})();

// ── 1C. MODERN HERO + PROJECTS SHOWCASE ───────────────────
(function enhanceHomepage() {
    homeEnhancers.enhanceHomepage = enhanceHomepage;
    const heroVisual = document.querySelector('.hero-card');
    if (heroVisual && !heroVisual.querySelector('.hero-product-shell')) {
        heroVisual.innerHTML = `
            <div class="hero-product-shell">
                <div class="hero-product-bar">
                    <span class="hero-window-dots"><i></i><i></i><i></i></span>
                    <span class="hero-product-url">techupwards / growth-console</span>
                    <span class="hero-live-pill">Live</span>
                </div>
                <div class="hero-product-body">
                    <aside class="hero-product-sidebar">
                        <img src="/assets/logo.png" alt="TechUpwards">
                        <span class="active"></span><span></span><span></span><span></span>
                    </aside>
                    <div class="hero-product-main">
                        <div class="hero-product-head">
                            <div><small>Growth overview</small><strong>Digital momentum</strong></div>
                            <div class="hero-team-stack">
                                <img src="/assets/anirban.jpg" alt="">
                                <img src="/assets/shuvam.jpg" alt="">
                                <img src="/assets/Kushal.jpg" alt="">
                            </div>
                        </div>
                        <div class="hero-chart">
                            <div class="hero-chart-value"><strong>+184%</strong><span>Growth this quarter</span></div>
                            <svg viewBox="0 0 420 150" preserveAspectRatio="none" aria-hidden="true">
                                <defs><linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#38bdf8" stop-opacity=".34"/><stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/></linearGradient></defs>
                                <path class="hero-chart-area" d="M0 136 C42 128 58 104 92 108 S145 94 170 72 S220 88 250 55 S300 68 330 35 S378 30 420 8 L420 150 L0 150 Z" fill="url(#heroChartFill)"/>
                                <path class="hero-chart-line" d="M0 136 C42 128 58 104 92 108 S145 94 170 72 S220 88 250 55 S300 68 330 35 S378 30 420 8" fill="none" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <div class="hero-metric-row">
                            <div><span>Conversion</span><strong>12.8%</strong></div>
                            <div><span>Automations</span><strong>24 active</strong></div>
                            <div><span>Performance</span><strong>98 / 100</strong></div>
                        </div>
                    </div>
                </div>
                <div class="hero-scan-line"></div>
            </div>
            <div class="hero-float-card hero-float-growth"><span>↗</span><div><strong>+38%</strong><small>Conversion lift</small></div></div>
            <div class="hero-float-card hero-float-launch"><span>●</span><div><strong>Launch ready</strong><small>All systems healthy</small></div></div>
            <div class="hero-orbit-dot hero-orbit-a"></div>
            <div class="hero-orbit-dot hero-orbit-b"></div>
        `;
    }

    const services = document.querySelector('.services');
    if (services && !document.querySelector('#projects')) {
        services.insertAdjacentHTML('afterend', `
            <section class="projects-section" id="projects">
                <div class="projects-heading">
                    <div><span class="section-tag">Recent Projects</span><h2>Automation built for real operations</h2></div>
                    <p>Industry-focused management systems that connect everyday workflows, teams, customers, and business insights.</p>
                </div>
                <div class="projects-grid">
                    <svg class="projects-connection-map" viewBox="0 0 1200 1100" preserveAspectRatio="none" aria-hidden="true">
                        <defs>
                            <linearGradient id="projectRouteGradient" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stop-color="#f472b6"/>
                                <stop offset="50%" stop-color="#818cf8"/>
                                <stop offset="100%" stop-color="#38bdf8"/>
                            </linearGradient>
                        </defs>
                        <path class="project-route route-a" d="M200 500 V550 H600"/>
                        <path class="project-route route-b" d="M600 500 V600"/>
                        <path class="project-route route-c" d="M1000 500 V550 H600"/>
                        <path class="project-route route-d" d="M200 600 H1000"/>
                        <circle class="project-packet packet-a" r="6"><animateMotion dur="5s" repeatCount="indefinite" path="M200 500 V550 H1000"/></circle>
                        <circle class="project-packet packet-b" r="6"><animateMotion dur="5s" begin="-2.5s" repeatCount="indefinite" path="M1000 500 V550 H200"/></circle>
                    </svg>
                    <div class="project-junction junction-main" aria-hidden="true"><i></i></div>
                    <div class="project-junction junction-lower" aria-hidden="true"><i></i></div>
                    <article class="project-card project-system project-gym">
                        <div class="project-visual"><div class="system-preview"><div class="system-top"><span class="system-mark">GM</span><div><small>Gym operations</small><strong>Member dashboard</strong></div><i></i></div><div class="system-kpis"><span><b>248</b><small>Members</small></span><span><b>18</b><small>Classes</small></span></div><div class="system-activity"><i></i><i></i><i></i><i></i><i></i><i></i></div></div></div>
                        <div class="project-info"><div><span>Management</span><span>Fitness</span></div><h3>Gym Management</h3><p>Membership, billing, attendance, biometric access, workout apps, and reporting dashboards.</p><a href="#contact" aria-label="Discuss a gym management project">Discuss project <b>↗</b></a></div>
                    </article>
                    <article class="project-card project-system project-restaurant">
                        <div class="project-visual"><div class="system-preview"><div class="system-top"><span class="system-mark">RS</span><div><small>Restaurant operations</small><strong>Live order board</strong></div><i></i></div><div class="order-board"><span><b>12</b><small>New</small></span><span><b>08</b><small>Cooking</small></span><span><b>21</b><small>Served</small></span></div><div class="system-progress"><i></i></div></div></div>
                        <div class="project-info"><div><span>QR Ordering</span><span>Billing</span></div><h3>Restaurant Solutions</h3><p>QR ordering, KDS, inventory management, split billing, and real-time order tracking.</p><a href="#contact" aria-label="Discuss a restaurant management project">Discuss project <b>↗</b></a></div>
                    </article>
                    <article class="project-card project-system project-boutique">
                        <div class="project-visual"><div class="system-preview"><div class="system-top"><span class="system-mark">BM</span><div><small>Boutique operations</small><strong>Inventory studio</strong></div><i></i></div><div class="inventory-grid"><span></span><span></span><span></span><span></span></div><div class="system-progress"><i></i></div></div></div>
                        <div class="project-info"><div><span>Inventory</span><span>POS</span></div><h3>Boutique Management</h3><p>Inventory, POS, customer loyalty, tailoring orders, barcode, and stock management.</p><a href="#contact" aria-label="Discuss a boutique management project">Discuss project <b>↗</b></a></div>
                    </article>
                    <article class="project-card project-system project-garage">
                        <div class="project-visual"><div class="system-preview"><div class="system-top"><span class="system-mark">GR</span><div><small>Garage operations</small><strong>Service pipeline</strong></div><i></i></div><div class="service-pipeline"><span><b>04</b><small>Check-in</small></span><em></em><span><b>11</b><small>Service</small></span><em></em><span><b>07</b><small>Ready</small></span></div><div class="system-progress"><i></i></div></div></div>
                        <div class="project-info"><div><span>Service</span><span>CRM</span></div><h3>Garage Management</h3><p>Job cards, service tracking, parts inventory, reminders, and performance analytics.</p><a href="#contact" aria-label="Discuss a garage management project">Discuss project <b>↗</b></a></div>
                    </article>
                    <article class="project-card project-system project-school">
                        <div class="project-visual"><div class="system-preview"><div class="system-top"><span class="system-mark">ED</span><div><small>School operations</small><strong>Campus overview</strong></div><i></i></div><div class="school-stats"><span><b>94%</b><small>Attendance</small></span><span><b>36</b><small>Classes</small></span></div><div class="system-activity"><i></i><i></i><i></i><i></i><i></i><i></i></div></div></div>
                        <div class="project-info"><div><span>Education</span><span>ERP</span></div><h3>School / Playschool</h3><p>Student management, attendance, fees, communications, and parent portals.</p><a href="#contact" aria-label="Discuss a school management project">Discuss project <b>↗</b></a></div>
                    </article>
                    <article class="project-card project-system project-saas">
                        <div class="project-visual"><div class="system-preview"><div class="system-top"><span class="system-mark">SA</span><div><small>Custom platform</small><strong>Multi-tenant workspace</strong></div><i></i></div><div class="saas-workflow"><span>Workspace</span><em></em><span>Automate</span><em></em><span>Scale</span></div><div class="system-progress"><i></i></div></div></div>
                        <div class="project-info"><div><span>SaaS</span><span>Automation</span></div><h3>Custom SaaS Platforms</h3><p>Multi-tenant architectures, dashboards, workflow automation, and business-specific solutions.</p><a href="#contact" aria-label="Discuss a custom SaaS project">Discuss project <b>↗</b></a></div>
                    </article>
                </div>
            </section>
        `);

        const navList = document.querySelector('.nav-links');
        const solutionsLink = navList?.querySelector('a[href="#solutions"]')?.parentElement;
        if (navList && solutionsLink && !navList.querySelector('a[href="#projects"]')) {
            solutionsLink.insertAdjacentHTML('beforebegin', '<li><a href="#projects">Projects</a></li>');
            navList.querySelector('a[href="#projects"]')?.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        }
    }
})();

// ── 1D. MODERN LINE ICON SYSTEM ───────────────────────────
(function modernizeIcons() {
    homeEnhancers.modernizeIcons = modernizeIcons;
    const svg = paths => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + paths + '</svg>';
    const icons = {
        code: svg('<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>'),
        network: svg('<rect width="6" height="6" x="9" y="2" rx="1"/><rect width="6" height="6" x="2" y="16" rx="1"/><rect width="6" height="6" x="16" y="16" rx="1"/><path d="M12 8v4M5 16v-2h14v2"/>'),
        trend: svg('<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>'),
        search: svg('<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>'),
        megaphone: svg('<path d="m3 11 18-5v12L3 14v-3Z"/><path d="M11.6 16.8 13 21H7l-1.8-6"/>'),
        workflow: svg('<rect width="8" height="6" x="3" y="3" rx="1"/><rect width="8" height="6" x="13" y="15" rx="1"/><path d="M7 9v3a3 3 0 0 0 3 3h3M17 15v-3a3 3 0 0 0-3-3h-3"/>'),
        sparkles: svg('<path d="m12 3-1.7 4.3L6 9l4.3 1.7L12 15l1.7-4.3L18 9l-4.3-1.7L12 3Z"/><path d="m5 16-.8 2.2L2 19l2.2.8L5 22l.8-2.2L8 19l-2.2-.8L5 16Z"/>'),
        layers: svg('<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>'),
        users: svg('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>'),
        zap: svg('<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>'),
        target: svg('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'),
        shield: svg('<path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z"/><path d="m9 12 2 2 4-4"/>'),
        infinity: svg('<path d="M6 16c-2.2 0-4-1.8-4-4s1.8-4 4-4c4.8 0 7.2 8 12 8 2.2 0 4-1.8 4-4s-1.8-4-4-4c-4.8 0-7.2 8-12 8Z"/>'),
        rocket: svg('<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"/><path d="m9 15-3-3s.5-3 2-4.5C10 5.5 15 3 21.5 2.5 21 9 18.5 14 16.5 16c-1.5 1.5-4.5 2-4.5 2l-3-3Z"/><circle cx="15" cy="9" r="1"/>'),
        briefcase: svg('<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M8 7V4h8v3M2 12h20M10 12v2h4v-2"/>'),
        store: svg('<path d="M3 9 5 3h14l2 6"/><path d="M5 13v8h14v-8M9 21v-6h6v6"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/>'),
        bag: svg('<path d="M6 8h12l1 13H5L6 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>'),
        building: svg('<rect width="16" height="20" x="4" y="2" rx="1"/><path d="M9 22v-4h6v4M8 6h1M15 6h1M8 10h1M15 10h1M8 14h1M15 14h1"/>'),
        user: svg('<circle cx="12" cy="8" r="4"/><path d="M4 22a8 8 0 0 1 16 0"/>')
    };

    const serviceIcons = {
        'Website Development': icons.code,
        'B2B Solutions': icons.network,
        'B2C Growth': icons.trend,
        'SEO Optimization': icons.search,
        'Digital Marketing': icons.megaphone,
        'Business Automation': icons.workflow
    };
    document.querySelectorAll('.service-card').forEach((card, index) => {
        const title = card.querySelector('h3')?.textContent.trim();
        const icon = card.querySelector('.service-icon');
        if (icon && serviceIcons[title]) icon.innerHTML = serviceIcons[title];
        if (!card.querySelector(':scope > .service-index')) {
            card.insertAdjacentHTML('afterbegin', '<span class="service-index">' + String(index + 1).padStart(2, '0') + '</span>');
        }
    });

    const supportingIcons = {
        'Brand Identity': icons.sparkles,
        'Scalable Systems': icons.layers,
        'Client Management': icons.users,
        'Fast Delivery': icons.zap,
        'Result-Oriented': icons.target,
        'Reliable & Transparent': icons.shield,
        'End-to-End Support': icons.infinity
    };
    document.querySelectorAll('.solution-box,.why-card').forEach(card => {
        const title = card.querySelector('h3')?.textContent.trim();
        const icon = card.querySelector('.solution-icon,.why-icon');
        if (icon && supportingIcons[title]) icon.innerHTML = supportingIcons[title];
    });

    const clientIcons = {
        'Startups': icons.rocket,
        'Agencies': icons.briefcase,
        'Local Businesses': icons.store,
        'E-Commerce Brands': icons.bag,
        'Corporate Businesses': icons.building,
        'Personal Brands': icons.user
    };
    document.querySelectorAll('.client-box').forEach(box => {
        const label = box.textContent.replace(/^[^\w]+/, '').trim();
        const match = Object.keys(clientIcons).find(name => label.endsWith(name));
        if (match) box.innerHTML = '<span class="client-line-icon">' + clientIcons[match] + '</span><span>' + match + '</span>';
    });
})();

// ── 1E. DNA JOURNEY STRUCTURE ─────────────────────────────
(function buildDnaJourney() {
    homeEnhancers.buildDnaJourney = buildDnaJourney;
    const container = document.querySelector('.modern-orbit-container');
    if (!container) return;

    container.classList.add('dna-journey');
    container.innerHTML = `
        <div class="dna-helix" aria-label="Eight-icon Growth DNA with six numbered process stages">
            <span class="dna-label"></span>
            <svg class="dna-backbone" viewBox="0 0 500 840" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                    <linearGradient id="dnaLeftGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#22d3ee"/>
                        <stop offset="52%" stop-color="#6366f1"/>
                        <stop offset="100%" stop-color="#f472b6"/>
                    </linearGradient>
                    <linearGradient id="dnaRightGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#f472b6"/>
                        <stop offset="52%" stop-color="#8b5cf6"/>
                        <stop offset="100%" stop-color="#22d3ee"/>
                    </linearGradient>
                    <linearGradient id="dnaRungGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stop-color="#22d3ee" stop-opacity=".18"/>
                        <stop offset="50%" stop-color="#a78bfa" stop-opacity=".8"/>
                        <stop offset="100%" stop-color="#f472b6" stop-opacity=".18"/>
                    </linearGradient>
                    <filter id="dnaGlow"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                <path class="dna-strand strand-left" d="M250 60 C340 80 340 120 150 160 C70 185 90 240 350 270 C425 290 410 350 125 380 C45 400 85 460 375 490 C455 510 420 570 150 600 C70 625 90 680 350 710 C390 730 340 770 250 790"/>
                <path class="dna-strand strand-right" d="M250 60 C160 80 160 120 350 160 C430 185 410 240 150 270 C75 290 90 350 375 380 C455 400 415 460 125 490 C45 510 80 570 350 600 C430 625 410 680 150 710 C110 730 160 770 250 790"/>
                <line class="laser-line active" x1="150" y1="160" x2="350" y2="160"/>
                <line class="laser-line" x1="150" y1="270" x2="350" y2="270"/>
                <line class="laser-line" x1="125" y1="380" x2="375" y2="380"/>
                <line class="laser-line" x1="125" y1="490" x2="375" y2="490"/>
                <line class="laser-line" x1="150" y1="600" x2="350" y2="600"/>
                <line class="laser-line" x1="150" y1="710" x2="350" y2="710"/>
                <circle class="dna-packet packet-one" r="5"><animateMotion dur="7s" repeatCount="indefinite" path="M250 60 C340 80 340 120 150 160 C70 185 90 240 350 270 C425 290 410 350 125 380 C45 400 85 460 375 490 C455 510 420 570 150 600 C70 625 90 680 350 710 C390 730 340 770 250 790"/></circle>
                <circle class="dna-packet packet-two" r="5"><animateMotion dur="7s" begin="-3.5s" repeatCount="indefinite" path="M250 60 C160 80 160 120 350 160 C430 185 410 240 150 270 C75 290 90 350 375 380 C455 400 415 460 125 490 C45 510 80 570 350 600 C430 625 410 680 150 710 C110 730 160 770 250 790"/></circle>
            </svg>

            <div class="dna-endpoint dna-logo-endpoint" aria-label="TechUpwards logo">
                <span class="dna-endpoint-icon"><img src="/assets/logo.png" alt="TechUpwards"></span>
            </div>

            <button class="orbit-node dna-node active" data-step="1" type="button" aria-label="View Ideate stage">
                <span class="node-ring"></span><span class="node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6M10 22h4"/></svg></span><span class="node-badge">01 / IDEATE</span>
            </button>
            <button class="orbit-node dna-node" data-step="2" type="button" aria-label="View Ignite stage">
                <span class="node-ring"></span><span class="node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2s-4 7-4 11a4 4 0 0 0 8 0c0-4-4-11-4-11z"/></svg></span><span class="node-badge">02 / IGNITE</span>
            </button>
            <button class="orbit-node dna-node" data-step="3" type="button" aria-label="View Build stage">
                <span class="node-ring"></span><span class="node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg></span><span class="node-badge">03 / BUILD</span>
            </button>
            <button class="orbit-node dna-node" data-step="4" type="button" aria-label="View Augment stage">
                <span class="node-ring"></span><span class="node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/></svg></span><span class="node-badge">04 / AUGMENT</span>
            </button>
            <button class="orbit-node dna-node" data-step="5" type="button" aria-label="View Scale stage">
                <span class="node-ring"></span><span class="node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg></span><span class="node-badge">05 / SCALE</span>
            </button>
            <button class="orbit-node dna-node" data-step="6" type="button" aria-label="View Raise stage">
                <span class="node-ring"></span><span class="node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></span><span class="node-badge">06 / RAISE</span>
            </button>

            <div class="dna-endpoint dna-growth-endpoint" aria-label="Business Growth">
                <span class="dna-endpoint-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19V9M10 19V5M16 19v-7M3 19h18"/><path d="m14 7 3-3 3 3M17 4v7"/></svg></span>
                <span class="dna-endpoint-label">BUSINESS GROWTH</span>
            </div>
        </div>

        <div class="orbit-center-board dna-detail-board">
            <div class="ocb-overlay-glow"></div>
            <div class="dna-detail-kicker"><span></span>Selected growth gene</div>
            <div class="ocb-content">
                <div class="ocb-stage-tag">STAGE 1</div>
                <h3 class="ocb-title">Ideate</h3>
                <p class="ocb-desc">Turn business challenges into clear digital opportunities and product ideas.</p>
                <div class="ocb-tags"><span>Problem discovery</span><span>Opportunity mapping</span><span>Idea validation</span></div>
            </div>
            <div class="dna-sequence" aria-hidden="true"><i>A</i><i>T</i><i>G</i><i>C</i><i>T</i><i>A</i></div>
        </div>
    `;
})();

// ── 2. HEADER SCROLL + SCROLL-PROGRESS BAR ─────────────────
const header   = document.querySelector('.header');

window.addEventListener('scroll', () => {
    // Header glassmorphism effect
    if (window.scrollY > 50) {
        header.style.background   = 'rgba(5,8,20,0.94)';
        header.style.boxShadow    = '0 12px 35px rgba(0,0,0,0.28)';
    } else {
        header.style.background   = 'rgba(5,8,20,0.82)';
        header.style.boxShadow    = 'none';
    }
    // Progress bar
    const progress = document.querySelector('.scroll-progress');
    if (progress) {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = (window.scrollY / total * 100) + '%';
    }
}, { passive: true });

// ── 3. CANVAS PARTICLE CONSTELLATION ──────────────────────
(function initCanvas() {
    homeEnhancers.initCanvas = initCanvas;
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    window.__techupwardsCanvasCleanup?.();
    const ctx = canvas.getContext('2d');
    let W, H, particles = [], mouse = { x: -999, y: -999 };
    let animationFrame = 0;

    const PARTICLE_COUNT = 55;
    const CONNECTION_DIST = 140;
    const COLORS = ['rgba(37,99,235,', 'rgba(139,92,246,', 'rgba(14,165,233,'];

    function resize() {
        W = canvas.width  = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
    }

    function createParticles() {
        particles = [];
        let seed = ((W * 73856093) ^ (H * 19349663) ^ 0x9e3779b9) >>> 0;
        const stableRandom = () => {
            seed = (seed + 0x6d2b79f5) >>> 0;
            let value = seed;
            value = Math.imul(value ^ (value >>> 15), value | 1);
            value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
            return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
        };
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const c = COLORS[Math.floor(stableRandom() * COLORS.length)];
            particles.push({
                x: stableRandom() * W,
                y: stableRandom() * H,
                vx: (stableRandom() - 0.5) * 0.45,
                vy: (stableRandom() - 0.5) * 0.45,
                r: stableRandom() * 2.5 + 1,
                color: c,
                alpha: stableRandom() * 0.5 + 0.2
            });
        }
    }

    function draw() {
        if (!canvas.isConnected) return;
        ctx.clearRect(0, 0, W, H);
        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CONNECTION_DIST) {
                    const alpha = (1 - dist / CONNECTION_DIST) * 0.18;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(99,102,241,${alpha})`;
                    ctx.lineWidth   = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
            // Mouse attraction
            const dx = particles[i].x - mouse.x;
            const dy = particles[i].y - mouse.y;
            const md = Math.sqrt(dx * dx + dy * dy);
            if (md < 120) {
                ctx.beginPath();
                const a = (1 - md / 120) * 0.35;
                ctx.strokeStyle = `rgba(37,99,235,${a})`;
                ctx.lineWidth   = 1.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        }
        // Draw particles
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.color + p.alpha + ')';
            ctx.fill();
            // Move
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > W) p.vx *= -1;
            if (p.y < 0 || p.y > H) p.vy *= -1;
        });
        animationFrame = requestAnimationFrame(draw);
    }

    canvas.addEventListener('mousemove', e => {
        const r = canvas.getBoundingClientRect();
        mouse.x = e.clientX - r.left;
        mouse.y = e.clientY - r.top;
    }, { passive: true });
    canvas.addEventListener('mouseleave', () => { mouse.x = -999; mouse.y = -999; });

    const handleResize = () => { resize(); createParticles(); };
    resize(); createParticles(); draw();
    window.addEventListener('resize', handleResize);
    window.__techupwardsCanvasCleanup = () => {
        window.cancelAnimationFrame(animationFrame);
        window.removeEventListener('resize', handleResize);
        window.__techupwardsCanvasCleanup = null;
    };
})();

// ── 4. HERO BLOB MOUSE PARALLAX ───────────────────────────
(function initParallax() {
    homeEnhancers.initParallax = initParallax;
    const hero  = document.querySelector('.hero');
    const blob1 = document.querySelector('.hero-blob-1');
    const blob2 = document.querySelector('.hero-blob-2');
    if (!hero || (!blob1 && !blob2)) return;

    hero.addEventListener('mousemove', e => {
        const { width, height } = hero.getBoundingClientRect();
        const mx = (e.clientX / width  - 0.5);
        const my = (e.clientY / height - 0.5);
        if (blob1) blob1.style.transform = `translate(${mx * 50}px, ${my * 50}px)`;
        if (blob2) blob2.style.transform = `translate(${mx * -35}px, ${my * -35}px)`;
    }, { passive: true });
})();

// ── 5. STAGGERED SCROLL REVEAL ────────────────────────────
(function initReveal() {
    homeEnhancers.initReveal = initReveal;
    const cards = document.querySelectorAll(
        '.service-card,.solution-box,.team-card,.client-box,.card,.why-card,.journey-step-card,.tech-logo-card,.value-card'
    );
    const GRIDS = ['service-container','solutions-container','why-grid','team-container','client-grid','tech-logos-grid','value-grid'];

    const obs = new IntersectionObserver(entries => {
        const seen = new Map();
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el     = entry.target;
            const parent = el.parentElement;
            const key    = parent ? parent.className : '';
            if (GRIDS.some(g => key.includes(g))) {
                let idx = seen.get(parent) || 0;
                el.style.transitionDelay = `${idx * 0.1}s`;
                seen.set(parent, idx + 1);
            }
            el.classList.add('show');
            obs.unobserve(el);
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    cards.forEach(c => { c.classList.add('hidden'); obs.observe(c); });
})();

// ── 5B. SECTION COMPOSITION REVEALS ─────────────────────
(function initCompositionReveal() {
    homeEnhancers.initCompositionReveal = initCompositionReveal;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const groups = [
        ['.section-heading', '.section-tag,.reveal-heading,p'],
        ['.about-content', '.section-tag,h1,h2,p'],
        ['.contact-container', '.section-tag,h2,p,.form-group,button'],
        ['.tech-switcher-container', '.tech-categories-list,.tech-preview-board'],
        ['.footer-container', '.footer-box']
    ];

    groups.forEach(([rootSelector, childSelector]) => {
        document.querySelectorAll(rootSelector).forEach(root => {
            const children = root.querySelectorAll(childSelector);
            children.forEach((child, index) => {
                child.classList.add('motion-reveal');
                child.style.setProperty('--motion-delay', `${Math.min(index * 90, 450)}ms`);
            });

            if (prefersReducedMotion) {
                root.classList.add('motion-visible');
                return;
            }

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('motion-visible');
                    observer.unobserve(entry.target);
                });
            }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });

            observer.observe(root);
        });
    });
})();

// ── 6. REVEAL HEADING UNDERLINE DRAW ──────────────────────
(function initHeadingReveal() {
    homeEnhancers.initHeadingReveal = initHeadingReveal;
    const headings = document.querySelectorAll('.reveal-heading');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('heading-visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.4 });
    headings.forEach(h => obs.observe(h));
})();

// ── 7. ANIMATED COUNTER ───────────────────────────────────
(function initCounters() {
    homeEnhancers.initCounters = initCounters;
    const els = document.querySelectorAll('[data-count]');

    const easeOutExpo = t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const animateCount = (el, target, suffix) => {
        const duration = 1800;
        const start    = performance.now();
        const tick = now => {
            const t = Math.min((now - start) / duration, 1);
            el.textContent = Math.round(easeOutExpo(t) * target) + suffix;
            if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting && !e.target.dataset.done) {
                e.target.dataset.done = '1';
                animateCount(e.target, +e.target.dataset.count, e.target.dataset.suffix || '');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.5 });

    els.forEach(el => obs.observe(el));
})();

// ── 8. 3D CARD TILT ───────────────────────────────────────
(function initTilt() {
    homeEnhancers.initTilt = initTilt;
    document.querySelectorAll('.service-card,.why-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r  = card.getBoundingClientRect();
            const dx = (e.clientX - r.left - r.width  / 2) / (r.width  / 2);
            const dy = (e.clientY - r.top  - r.height / 2) / (r.height / 2);
            card.style.transform   = `translateY(-10px) rotateX(${-dy*7}deg) rotateY(${dx*7}deg) scale(1.03)`;
            card.style.transition  = 'transform 0.08s ease-out';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform  = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
            card.style.transition = 'transform 0.55s cubic-bezier(0.16,1,0.3,1)';
        });
    });
})();

// ── 9. MAGNETIC BUTTONS ───────────────────────────────────
(function initMagnetic() {
    homeEnhancers.initMagnetic = initMagnetic;
    document.querySelectorAll('.mag-btn').forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const r  = btn.getBoundingClientRect();
            const dx = (e.clientX - r.left - r.width  / 2) * 0.35;
            const dy = (e.clientY - r.top  - r.height / 2) * 0.35;
            btn.style.transform  = `translate(${dx}px,${dy}px) scale(1.04)`;
            btn.style.transition = 'transform 0.12s ease-out';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform  = 'translate(0,0) scale(1)';
            btn.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)';
        });
    });
})();

// ── 10. TECH TAB SWITCHER ────────────────────────────────
(function initTechTabs() {
    homeEnhancers.initTechTabs = initTechTabs;
    const tabs   = document.querySelectorAll('.tech-category-item');
    const panels = document.querySelectorAll('.tech-panel');
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    tabs.forEach(tab => {
        const activate = () => {
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            const target = document.getElementById(tab.dataset.target);
            if (target) {
                target.classList.add('active');
                target.classList.remove('tech-panel-enter');
                void target.offsetWidth;
                target.classList.add('tech-panel-enter');
            }
        };
        tab.addEventListener('click', activate);
        if (canHover) tab.addEventListener('mouseenter', activate);
    });
})();

// ── 11. FEATURES SHOWCASE TABS ───────────────────────────
(function initFeatureTabs() {
    homeEnhancers.initFeatureTabs = initFeatureTabs;
    const tabs   = document.querySelectorAll('.feature-tab-card');
    const panels = document.querySelectorAll('.feature-visual-panel');
    tabs.forEach(tab => {
        const activate = () => {
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            const panel = document.getElementById('fv-' + tab.dataset.feature);
            if (panel) panel.classList.add('active');
        };
        tab.addEventListener('click', activate);
        tab.addEventListener('mouseenter', activate);
    });
})();

// ── 12. INTERACTIVE ORBIT JOURNEY ────────────────────────
(function initOrbitJourney() {
    homeEnhancers.initOrbitJourney = initOrbitJourney;
    const nodes = document.querySelectorAll('.orbit-node');
    const lasers = document.querySelectorAll('.laser-line');
    const boardContent = document.querySelector('.orbit-center-board .ocb-content');
    if (!nodes.length || !boardContent) return;

    const stagesInfo = {
        '1': {
            stage: 'STAGE 1',
            title: 'Ideate',
            desc: 'Turn business challenges into clear digital opportunities and product ideas.',
            tags: ['Problem discovery', 'Opportunity mapping', 'Idea validation']
        },
        '2': {
            stage: 'STAGE 2',
            title: 'Ignite',
            desc: 'Define the product direction, essential features, and launch roadmap.',
            tags: ['Feature planning', 'Value proposition', 'Launch roadmap']
        },
        '3': {
            stage: 'STAGE 3',
            title: 'Build',
            desc: 'Design and develop a reliable, responsive, and scalable solution.',
            tags: ['Experience design', 'Development', 'Quality assurance']
        },
        '4': {
            stage: 'STAGE 4',
            title: 'Augment',
            desc: 'Add integrations, automation, analytics, and smarter user experiences.',
            tags: ['Integrations', 'Automation', 'Analytics']
        },
        '5': {
            stage: 'STAGE 5',
            title: 'Scale',
            desc: 'Improve performance, infrastructure, reach, and operational capacity.',
            tags: ['Performance', 'Infrastructure', 'Reach']
        },
        '6': {
            stage: 'STAGE 6',
            title: 'Raise',
            desc: 'Prepare the product for wider adoption, partnerships, and business growth.',
            tags: ['Adoption', 'Partnerships', 'Growth readiness']
        }
    };

    function updateActiveStage(stepId) {
        const data = stagesInfo[stepId];
        if (!data) return;

        // Update active class on nodes
        nodes.forEach(node => {
            node.classList.toggle('active', node.dataset.step === stepId);
        });

        // Update active class on lasers
        lasers.forEach((laser, idx) => {
            laser.classList.toggle('active', (idx + 1).toString() === stepId);
        });

        // Update the center content board with fade-in-up re-trigger
        boardContent.style.opacity = '0';
        setTimeout(() => {
            // Re-render contents
            boardContent.innerHTML = `
                <div class="ocb-stage-tag">${data.stage}</div>
                <h3 class="ocb-title">${data.title}</h3>
                <p class="ocb-desc">${data.desc}</p>
                <div class="ocb-tags">
                    ${data.tags.map(t => `<span>${t}</span>`).join('')}
                </div>
            `;
            boardContent.style.opacity = '1';
        }, 150);
    }

    nodes.forEach(node => {
        const stepId = node.dataset.step;
        node.addEventListener('mouseenter', () => updateActiveStage(stepId));
        node.addEventListener('click', () => updateActiveStage(stepId));
        node.addEventListener('focus', () => updateActiveStage(stepId));
        node.addEventListener('keydown', event => {
            const currentIndex = Array.from(nodes).indexOf(node);
            let nextIndex = currentIndex;
            if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = Math.min(nodes.length - 1, currentIndex + 1);
            if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = Math.max(0, currentIndex - 1);
            if (event.key === 'Home') nextIndex = 0;
            if (event.key === 'End') nextIndex = nodes.length - 1;
            if (nextIndex !== currentIndex) {
                event.preventDefault();
                nodes[nextIndex].focus();
            }
        });
    });

    const compactMobile = window.matchMedia('(max-width: 920px)');
    if (compactMobile.matches && 'IntersectionObserver' in window) {
        const mobileObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) updateActiveStage(entry.target.dataset.step);
            });
        }, { threshold: 0.72, rootMargin: '-24% 0px -34% 0px' });
        nodes.forEach(node => mobileObserver.observe(node));
    }

    const dnaJourney = document.querySelector('.dna-journey');
    const dnaSvg = dnaJourney?.querySelector('.dna-backbone');
    if (dnaJourney && 'IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver(([entry]) => {
            dnaJourney.classList.toggle('is-in-view', entry.isIntersecting);
            if (entry.isIntersecting) dnaSvg?.unpauseAnimations?.();
            else dnaSvg?.pauseAnimations?.();
        }, { threshold: 0.08 });
        animationObserver.observe(dnaJourney);
    }

    // Set initial active stage laser
    updateActiveStage('1');
})();


// ── 13. CONTACT FORM + SUCCESS MODAL ─────────────────────
(function initForm() {
    homeEnhancers.initForm = initForm;
    const form      = document.getElementById('contactForm');
    const modal     = document.getElementById('successModal');
    const closeBtn  = document.getElementById('closeModalBtn');
    if (!form || !modal) return;

    form.addEventListener('submit', e => {
        e.preventDefault();
        modal.classList.add('active');
        form.reset();
    });

    const close = () => modal.classList.remove('active');
    if (closeBtn) closeBtn.addEventListener('click', close);
    modal.addEventListener('click', e => { if (e.target === modal) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();

// ── 14. PAUSE MARQUEE ON HOVER ───────────────────────────
document.querySelectorAll('.marquee-inner').forEach(track => {
    track.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
    track.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
});

/* ================= CUSTOMER HELP CHAT ================= */
(() => {
    if (document.querySelector('.support-chat')) return;

    const widget = document.createElement('div');
    widget.className = 'support-chat';
    widget.innerHTML = `
        <section class="support-chat-panel" id="supportChatPanel" aria-label="Customer support chat" aria-hidden="true">
            <header class="support-chat-header">
                <div class="support-chat-avatar" aria-hidden="true"><span>✦</span></div>
                <div><strong>Upward AI</strong><span><i></i> Your digital growth assistant</span></div>
                <button class="support-chat-close" type="button" aria-label="Close customer support chat">×</button>
            </header>
            <div class="support-chat-messages" aria-live="polite">
                <div class="support-message bot"><b>Hi, I’m Upward AI 👋</b><br>I can help you explore services, estimate a project, or connect you with our team.</div>
            </div>
            <div class="support-chat-actions" aria-label="Common questions">
                <button type="button" data-chat-answer="services">✨ What can you build?</button>
                <button type="button" data-chat-answer="pricing">💰 Estimate my project</button>
                <button type="button" data-chat-answer="timeline">⏱ Delivery timeline</button>
                <button type="button" data-chat-answer="contact">👤 Talk to a human</button>
            </div>
            <form class="support-chat-form">
                <label class="sr-only" for="supportChatInput">Ask a question</label>
                <textarea id="supportChatInput" maxlength="300" rows="1" placeholder="Message Upward AI…" autocomplete="off"></textarea>
                <button type="submit" aria-label="Send question"><svg viewBox="0 0 24 24"><path d="m4 4 17 8-17 8 3-8-3-8Z"/><path d="M7 12h14"/></svg></button>
            </form>
        </section>
        <button class="support-chat-launcher" type="button" aria-label="Open customer support chat" aria-expanded="false">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.8 9.8 0 0 1-4-.9L3 21l1.5-4.4A8.1 8.1 0 0 1 3 11.5 8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5Z"/><path d="M8 11.5h.01M12 11.5h.01M16 11.5h.01"/></svg>
            <span>Ask Upward AI</span>
        </button>`;
    document.body.appendChild(widget);

    const panel = widget.querySelector('.support-chat-panel');
    const launcher = widget.querySelector('.support-chat-launcher');
    const closeButton = widget.querySelector('.support-chat-close');
    const messages = widget.querySelector('.support-chat-messages');
    const form = widget.querySelector('.support-chat-form');
    const input = widget.querySelector('#supportChatInput');
    const answers = {
        services: 'We build high-converting websites, custom SaaS products, business automation systems, brand identities, SEO strategies, and digital marketing campaigns. What kind of business are you building for?',
        pricing: 'I can help narrow that down. A quote depends on the project type, features, integrations, and timeline. Tell me what you want to build and I’ll suggest the right next step.',
        timeline: 'A focused business website usually takes 2–6 weeks. Custom automation or SaaS products are delivered in planned milestones. Your exact schedule is confirmed after a short discovery call.',
        contact: 'Absolutely. Call +91 70762 66296, email hello@techupwardss.com, or use the website contact form. The team typically responds within 24 hours.'
    };

    const addMessage = (text, type) => {
        const bubble = document.createElement('div');
        bubble.className = `support-message ${type}`;
        bubble.textContent = text;
        messages.appendChild(bubble);
        messages.scrollTop = messages.scrollHeight;
    };
    const showTyping = () => {
        const typing = document.createElement('div');
        typing.className = 'support-message bot support-typing';
        typing.setAttribute('aria-label', 'Upward AI is typing');
        typing.innerHTML = '<i></i><i></i><i></i>';
        messages.appendChild(typing);
        messages.scrollTop = messages.scrollHeight;
        return typing;
    };
    const answerAfterTyping = (answer) => {
        const typing = showTyping();
        setTimeout(() => { typing.remove(); addMessage(answer, 'bot'); }, 650);
    };
    const replyTo = (question) => {
        const value = question.toLowerCase();
        if (/hello|hi|hey|good morning|good evening/.test(value)) return 'Hello! Great to meet you. Tell me about your business or the digital product you want to create.';
        if (/price|cost|budget|quote|estimate/.test(value)) return answers.pricing;
        if (/time|long|deliver|timeline|week/.test(value)) return answers.timeline;
        if (/website|web design|landing/.test(value)) return 'We create fast, responsive business websites and landing pages designed for trust, SEO, and conversion. Do you need a new site or a redesign?';
        if (/seo|rank|google|traffic/.test(value)) return 'Our SEO work covers technical audits, on-page optimization, content strategy, local SEO, and performance tracking. What industry and location are you targeting?';
        if (/automation|saas|software|app|dashboard/.test(value)) return 'We build custom dashboards, workflow automation, management systems, and scalable SaaS platforms. Tell me the manual process you want to simplify.';
        if (/marketing|social|campaign|lead/.test(value)) return 'We can support digital campaigns, content strategy, lead generation, analytics, and conversion optimization—all tied to measurable business goals.';
        if (/service|brand|build|offer/.test(value)) return answers.services;
        if (/contact|call|email|human|person|team/.test(value)) return answers.contact;
        if (/thanks|thank you/.test(value)) return 'You’re very welcome! Is there anything else you’d like to explore?';
        return 'I can help with websites, SaaS, automation, SEO, marketing, pricing, and delivery timelines. Could you share a little more about your goal?';
    };
    const setOpen = (open) => {
        widget.classList.toggle('is-open', open);
        panel.setAttribute('aria-hidden', String(!open));
        launcher.setAttribute('aria-expanded', String(open));
        launcher.setAttribute('aria-label', open ? 'Close customer support chat' : 'Open customer support chat');
        if (open) setTimeout(() => input.focus(), 200);
    };

    launcher.addEventListener('click', () => setOpen(!widget.classList.contains('is-open')));
    closeButton.addEventListener('click', () => setOpen(false));
    widget.querySelectorAll('[data-chat-answer]').forEach(button => button.addEventListener('click', () => {
        addMessage(button.textContent, 'user');
        answerAfterTyping(answers[button.dataset.chatAnswer]);
    }));
    form.addEventListener('submit', event => {
        event.preventDefault();
        const question = input.value.trim();
        if (!question) return;
        addMessage(question, 'user');
        input.value = '';
        answerAfterTyping(replyTo(question));
    });
    input.addEventListener('input', () => {
        input.style.height = 'auto';
        input.style.height = `${Math.min(input.scrollHeight, 96)}px`;
    });
    input.addEventListener('keydown', event => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            form.requestSubmit();
        }
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && widget.classList.contains('is-open')) setOpen(false);
    });
})();

/* ================= CUSTOMER HELP CHAT V2 ================= */
(() => {
    document.querySelector('.support-chat')?.remove();
    document.getElementById('tu-chat-styles')?.remove();

    const style = document.createElement('style');
    style.id = 'tu-chat-styles';
    style.textContent = `
      .tu-chat,.tu-chat *{box-sizing:border-box;writing-mode:horizontal-tb;word-break:normal}.tu-chat{position:fixed;right:24px;bottom:24px;z-index:99999;font-family:Inter,Poppins,system-ui,sans-serif;font-size:14px;line-height:1.45}
      .tu-chat__toggle{width:56px;height:56px;padding:0!important;display:grid;place-items:center;border:0;border-radius:18px;color:#fff;background:linear-gradient(135deg,#3b82f6,#7c3aed 60%,#ec4899);box-shadow:0 12px 32px #312e8166;cursor:pointer;transition:.2s ease}
      .tu-chat__toggle:hover{transform:translateY(-2px)}.tu-chat__toggle svg{width:25px;height:25px;fill:none;stroke:currentColor;stroke-width:1.8}
      .tu-chat__panel{position:absolute;right:0;bottom:68px;z-index:99999;width:400px;min-width:380px;max-width:min(400px,calc(100vw - 32px));height:580px;max-height:calc(100dvh - 112px);padding:0!important;margin:0!important;display:flex;flex-direction:column;overflow:hidden;overflow-x:hidden;border:1px solid #dbe3ef;border-radius:22px;background:#fff;box-shadow:0 28px 80px #02061766;opacity:0;visibility:hidden;transition:opacity .18s ease,visibility .18s ease}
      .tu-chat.is-open .tu-chat__panel{opacity:1;visibility:visible}
      .tu-chat__header{position:relative;z-index:2;width:100%;height:68px;min-height:68px;display:flex;flex:0 0 68px;align-items:center;gap:11px;padding:12px 16px;overflow:hidden;border-bottom:1px solid #e8edf4;background:#fff}
      .tu-chat__avatar{width:42px;height:42px;display:grid;place-items:center;border-radius:13px;color:#fff;background:linear-gradient(135deg,#38bdf8,#6366f1 55%,#ec4899);font-size:17px;box-shadow:0 7px 18px #6366f144}
      .tu-chat__identity{min-width:0;display:flex;flex:1 1 auto;flex-direction:column;overflow:hidden;white-space:normal}.tu-chat__identity strong{color:#14213d;font-size:15px;line-height:1.3;white-space:nowrap}.tu-chat__identity span{display:flex;align-items:center;gap:6px;color:#64748b;font-size:11px;white-space:nowrap}.tu-chat__identity i{width:7px;height:7px;flex:0 0 7px;border-radius:50%;background:#22c55e}
      .tu-chat__close{width:36px;height:36px;padding:0!important;border:0;border-radius:10px;color:#64748b;background:#f1f5f9;box-shadow:none!important;font-size:22px;line-height:1;cursor:pointer}.tu-chat__close:hover{color:#0f172a;background:#e2e8f0;transform:none}
      .tu-chat__body{width:100%;min-width:0;min-height:0;flex:1 1 auto;display:flex;flex-direction:column;align-items:stretch;gap:11px;overflow-x:hidden;overflow-y:auto;padding:16px;background:#f7f9fc}
      .tu-chat__bubble{width:fit-content;min-width:120px;max-width:min(85%,320px);flex:0 0 auto;padding:10px 12px;overflow-wrap:break-word;word-break:normal;white-space:normal;border-radius:14px;color:#334155;background:#fff;border:1px solid #e5eaf1;font-size:12px;line-height:1.55;box-shadow:0 3px 10px #0f172a0a}.tu-chat__bubble.bot{align-self:flex-start;min-width:240px;border-bottom-left-radius:4px}.tu-chat__bubble.user{align-self:flex-end;border:0;border-bottom-right-radius:4px;color:#fff;background:#4f46e5}.tu-chat__bubble strong{display:block;margin-bottom:2px;color:#172554;font-size:12px;white-space:normal}
      .tu-chat__typing{width:50px;min-width:50px!important;display:flex;gap:4px}.tu-chat__typing i{width:6px;height:6px;border-radius:50%;background:#94a3b8;animation:tuDot 1s infinite}.tu-chat__typing i:nth-child(2){animation-delay:.12s}.tu-chat__typing i:nth-child(3){animation-delay:.24s}@keyframes tuDot{50%{transform:translateY(-3px);background:#4f46e5}}
      .tu-chat__quick{width:100%;display:flex;flex:0 0 auto;flex-flow:row wrap;gap:8px;padding:10px 12px;overflow-x:hidden;border-top:1px solid #e8edf4;background:#fff}.tu-chat__quick button{min-width:0;min-height:38px;height:auto;flex:1 1 calc(50% - 4px);padding:8px 10px!important;overflow:hidden;border:1px solid #dbe3ef;border-radius:10px;color:#475569;background:#f8fafc;box-shadow:none!important;text-align:center;overflow-wrap:break-word;word-break:normal;white-space:normal;font:600 11px/1.25 system-ui,sans-serif;cursor:pointer}.tu-chat__quick button:hover{border-color:#a5b4fc;color:#4338ca;background:#eef2ff;transform:none}
      .tu-chat__form{position:relative;z-index:2;width:100%;min-width:0;display:flex!important;flex:0 0 auto;flex-flow:row nowrap!important;align-items:flex-end;gap:10px;padding:12px!important;overflow:hidden;border-top:1px solid #e8edf4;background:#fff}.tu-chat__input{width:0!important;height:48px!important;min-width:0!important;min-height:48px!important;max-height:120px!important;flex:1 1 auto;padding:13px 14px!important;resize:none!important;overflow-x:hidden!important;border:1px solid #dbe3ef!important;border-radius:14px!important;outline:0!important;color:#1e293b!important;background:#f8fafc!important;box-shadow:none!important;font:13px/1.45 system-ui,sans-serif!important;white-space:normal!important;word-break:normal!important}.tu-chat__input:focus{border-color:#818cf8!important;box-shadow:0 0 0 3px #6366f11f!important}.tu-chat__send{width:48px!important;height:48px!important;min-width:48px!important;padding:0!important;display:grid!important;place-items:center;flex:0 0 48px;border:0!important;border-radius:14px!important;color:#fff;background:#4f46e5!important;box-shadow:none!important;cursor:pointer}.tu-chat__send:hover{background:#4338ca!important;transform:none}.tu-chat__send svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
      @media(max-width:480px){.tu-chat{right:16px;bottom:16px}.tu-chat__panel{position:absolute;right:0;bottom:64px;width:calc(100vw - 32px);min-width:0;max-width:400px;height:min(520px,calc(100dvh - 96px));max-height:none;border-radius:18px}.tu-chat__header{height:62px;min-height:62px;flex-basis:62px;padding:10px 12px}.tu-chat__avatar{width:38px;height:38px}.tu-chat__body{padding:14px 12px}.tu-chat__quick{padding:9px 10px}.tu-chat__form{padding:9px 10px max(9px,env(safe-area-inset-bottom))!important}.tu-chat__input{height:44px!important;min-height:44px!important}.tu-chat__send{width:44px!important;height:44px!important;min-width:44px!important;flex-basis:44px}}
    `;
    document.head.appendChild(style);

    const root = document.createElement('div');
    root.className = 'tu-chat';
    root.innerHTML = `
      <section class="tu-chat__panel" aria-label="TechUpwards customer assistant" aria-hidden="true">
        <header class="tu-chat__header">
          <div class="tu-chat__avatar" aria-hidden="true">✦</div>
          <div class="tu-chat__identity"><strong>Upward Assistant</strong><span><i></i>Online • replies instantly</span></div>
          <button class="tu-chat__close" type="button" aria-label="Close chat">×</button>
        </header>
        <div class="tu-chat__body" aria-live="polite"><div class="tu-chat__bubble bot"><strong>Hello! How can we help?</strong>Ask about websites, apps, software, pricing, or delivery. বাংলা ও हिंदी-তেও প্রশ্ন করতে পারেন।</div></div>
        <div class="tu-chat__quick">
          <button type="button" data-topic="pricing">Website Pricing</button><button type="button" data-topic="ecommerce">E-commerce Website</button>
          <button type="button" data-topic="custom">Custom Software</button><button type="button" data-topic="restaurant">Restaurant KOT</button>
          <button type="button" data-topic="gym">Gym Management</button><button type="button" data-topic="contact">Contact Team</button>
        </div>
        <form class="tu-chat__form"><label class="sr-only" for="tuChatInput">Type your message</label><textarea class="tu-chat__input" id="tuChatInput" rows="1" maxlength="300" placeholder="Type your message…"></textarea><button class="tu-chat__send" type="submit" aria-label="Send message"><svg viewBox="0 0 24 24"><path d="m4 4 17 8-17 8 3-8-3-8Z"/><path d="M7 12h14"/></svg></button></form>
      </section>
      <button class="tu-chat__toggle" type="button" aria-label="Open customer support chat" aria-expanded="false"><svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.8 9.8 0 0 1-4-.9L3 21l1.5-4.4A8.1 8.1 0 0 1 3 11.5 8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5Z"/><path d="M8 11.5h.01M12 11.5h.01M16 11.5h.01"/></svg></button>`;
    document.body.appendChild(root);

    const panel = root.querySelector('.tu-chat__panel'), toggle = root.querySelector('.tu-chat__toggle'), close = root.querySelector('.tu-chat__close');
    const body = root.querySelector('.tu-chat__body'), form = root.querySelector('.tu-chat__form'), input = root.querySelector('.tu-chat__input');
    const knowledge = {
      en: {
        services: 'TechUpwards builds business and portfolio websites, e-commerce stores, custom web apps, billing/POS software, automation, dashboards, cloud/DevOps systems, and industry solutions for restaurants, gyms, boutiques, and schools.',
        pricing: 'Package prices: basic landing page from ₹7,000, growth multi-page website from ₹10,000, professional custom web app from ₹16,000, and e-commerce from ₹35,000. Final price depends on features and customization.',
        timeline: 'A basic website usually takes 3–7 days, a multi-page website 7–15 days, and custom web apps or e-commerce projects 15–45 days depending on features.',
        ecommerce: 'Yes. We build complete e-commerce websites with products, cart, checkout, payment gateway, order management, admin panel, and inventory.',
        restaurant: 'Yes. We build restaurant QR ordering, KOT, billing, inventory, table management, and live order-tracking systems.',
        gym: 'Yes. We build gym management systems with members, attendance, billing, membership expiry, reports, and optional QR or biometric access.',
        maintenance: 'Yes. We provide maintenance, bug fixes, updates, hosting support, performance optimization, and feature upgrades.',
        hosting: 'Yes. We help with domain, hosting, deployment, SSL, and business email setup.',
        custom: 'Yes. TechUpwards builds custom software around your business workflow. Share your business type and the features you need.',
        pos: 'Yes. We build billing and POS software with invoices, inventory, sales reports, customer records, and role-based access.',
        school: 'Yes. We build school management systems for students, attendance, fees, reports, communication, and admin workflows.',
        boutique: 'Yes. We build boutique systems for inventory, POS, customer records, tailoring orders, barcodes, and stock management.',
        contact: 'Call or WhatsApp TechUpwards at +91 70762 66296, email hello@techupwardss.com, or visit techupwardss.com.',
        lead: ['What type of business do you have?', 'Do you need a website, app, or software?', 'Which features do you need?', 'What is your expected timeline?', 'What is your expected budget?', 'Please share your phone number, or contact TechUpwards at +91 70762 66296.'],
        leadThanks: 'Thank you! The TechUpwards team can review your requirements and guide you clearly. Please contact TechUpwards team at +91 70762 66296.',
        fallback: 'I can help with website, app, software, pricing, timeline, and TechUpwards services. For detailed discussion, please contact TechUpwards team at +91 70762 66296.'
      },
      bn: {
        services: 'TechUpwards বিজনেস ও পোর্টফোলিও ওয়েবসাইট, ই-কমার্স স্টোর, কাস্টম ওয়েব অ্যাপ, বিলিং/POS সফটওয়্যার, অটোমেশন, ড্যাশবোর্ড, ক্লাউড/DevOps এবং রেস্টুরেন্ট, জিম, বুটিক ও স্কুল ম্যানেজমেন্ট সিস্টেম তৈরি করে।',
        pricing: 'প্যাকেজ মূল্য: বেসিক ল্যান্ডিং পেজ ₹৭,০০০ থেকে, গ্রোথ মাল্টি-পেজ ওয়েবসাইট ₹১০,০০০ থেকে, কাস্টম ওয়েব অ্যাপ ₹১৬,০০০ থেকে এবং ই-কমার্স ₹৩৫,০০০ থেকে। ফিচার ও কাস্টমাইজেশন অনুযায়ী চূড়ান্ত মূল্য নির্ধারিত হবে।',
        timeline: 'বেসিক ওয়েবসাইট সাধারণত ৩–৭ দিন, মাল্টি-পেজ ওয়েবসাইট ৭–১৫ দিন এবং কাস্টম ওয়েব অ্যাপ বা ই-কমার্স ১৫–৪৫ দিন সময় নেয়।',
        ecommerce: 'হ্যাঁ। আমরা প্রোডাক্ট লিস্টিং, কার্ট, চেকআউট, পেমেন্ট গেটওয়ে, অর্ডার ম্যানেজমেন্ট, অ্যাডমিন প্যানেল ও ইনভেন্টরিসহ সম্পূর্ণ ই-কমার্স ওয়েবসাইট তৈরি করি।',
        restaurant: 'হ্যাঁ। আমরা রেস্টুরেন্টের জন্য QR অর্ডারিং, KOT, বিলিং, ইনভেন্টরি, টেবিল ম্যানেজমেন্ট ও অর্ডার ট্র্যাকিং সিস্টেম তৈরি করি।',
        gym: 'হ্যাঁ। আমরা মেম্বার, অ্যাটেনডেন্স, বিলিং, মেম্বারশিপ এক্সপায়ারি, রিপোর্ট এবং ঐচ্ছিক QR/বায়োমেট্রিক অ্যাক্সেসসহ জিম ম্যানেজমেন্ট সিস্টেম তৈরি করি।',
        maintenance: 'হ্যাঁ। আমরা মেইনটেন্যান্স, বাগ ফিক্স, আপডেট, হোস্টিং সাপোর্ট, পারফরম্যান্স অপ্টিমাইজেশন ও নতুন ফিচার আপগ্রেড দিই।',
        hosting: 'হ্যাঁ। ডোমেইন, হোস্টিং, ডিপ্লয়মেন্ট, SSL এবং বিজনেস ইমেইল সেটআপে আমরা সাহায্য করি।',
        custom: 'হ্যাঁ। TechUpwards আপনার ব্যবসার কাজের ধরন অনুযায়ী কাস্টম সফটওয়্যার তৈরি করে। আপনার ব্যবসার ধরন ও প্রয়োজনীয় ফিচার জানান।',
        pos: 'হ্যাঁ। আমরা ইনভয়েস, ইনভেন্টরি, সেলস রিপোর্ট, কাস্টমার রেকর্ড ও রোল-ভিত্তিক অ্যাক্সেসসহ বিলিং/POS সফটওয়্যার তৈরি করি।',
        school: 'হ্যাঁ। আমরা স্টুডেন্ট, অ্যাটেনডেন্স, ফি, রিপোর্ট, কমিউনিকেশন ও অ্যাডমিন কাজের জন্য স্কুল ম্যানেজমেন্ট সিস্টেম তৈরি করি।',
        boutique: 'হ্যাঁ। আমরা ইনভেন্টরি, POS, কাস্টমার রেকর্ড, টেইলারিং অর্ডার, বারকোড ও স্টক ম্যানেজমেন্টসহ বুটিক সফটওয়্যার তৈরি করি।',
        contact: 'TechUpwards-কে +91 70762 66296 নম্বরে কল/WhatsApp করুন, অথবা hello@techupwardss.com-এ ইমেইল করুন।',
        lead: ['আপনার ব্যবসার ধরন কী?', 'আপনার ওয়েবসাইট, অ্যাপ নাকি সফটওয়্যার দরকার?', 'কোন কোন ফিচার দরকার?', 'কত দিনের মধ্যে প্রজেক্টটি চান?', 'আপনার আনুমানিক বাজেট কত?', 'আপনার ফোন নম্বর দিন, অথবা +91 70762 66296 নম্বরে TechUpwards-এর সঙ্গে যোগাযোগ করুন।'],
        leadThanks: 'ধন্যবাদ! TechUpwards টিম আপনার প্রয়োজন দেখে সঠিক পরামর্শ দেবে। বিস্তারিত জানতে +91 70762 66296 নম্বরে যোগাযোগ করুন।',
        fallback: 'আমি ওয়েবসাইট, অ্যাপ, সফটওয়্যার, মূল্য, সময়সীমা এবং TechUpwards-এর পরিষেবা সম্পর্কে সাহায্য করতে পারি। বিস্তারিত আলোচনার জন্য +91 70762 66296 নম্বরে TechUpwards টিমের সঙ্গে যোগাযোগ করুন।'
      },
      hi: {
        services: 'TechUpwards बिज़नेस और पोर्टफोलियो वेबसाइट, ई-कॉमर्स स्टोर, कस्टम वेब ऐप, बिलिंग/POS सॉफ्टवेयर, ऑटोमेशन, डैशबोर्ड, क्लाउड/DevOps और रेस्टोरेंट, जिम, बुटीक व स्कूल मैनेजमेंट सिस्टम बनाता है।',
        pricing: 'पैकेज कीमतें: बेसिक लैंडिंग पेज ₹7,000 से, ग्रोथ मल्टी-पेज वेबसाइट ₹10,000 से, कस्टम वेब ऐप ₹16,000 से और ई-कॉमर्स ₹35,000 से। अंतिम कीमत फीचर्स और कस्टमाइजेशन पर निर्भर करेगी।',
        timeline: 'बेसिक वेबसाइट आमतौर पर 3–7 दिन, मल्टी-पेज वेबसाइट 7–15 दिन और कस्टम वेब ऐप या ई-कॉमर्स प्रोजेक्ट 15–45 दिन लेते हैं।',
        ecommerce: 'हाँ। हम प्रोडक्ट लिस्टिंग, कार्ट, चेकआउट, पेमेंट गेटवे, ऑर्डर मैनेजमेंट, एडमिन पैनल और इन्वेंटरी के साथ पूरी ई-कॉमर्स वेबसाइट बनाते हैं।',
        restaurant: 'हाँ। हम रेस्टोरेंट के लिए QR ऑर्डरिंग, KOT, बिलिंग, इन्वेंटरी, टेबल मैनेजमेंट और ऑर्डर ट्रैकिंग सिस्टम बनाते हैं।',
        gym: 'हाँ। हम मेंबर, अटेंडेंस, बिलिंग, मेंबरशिप एक्सपायरी, रिपोर्ट और वैकल्पिक QR/बायोमेट्रिक एक्सेस के साथ जिम मैनेजमेंट सिस्टम बनाते हैं।',
        maintenance: 'हाँ। हम मेंटेनेंस, बग फिक्स, अपडेट, होस्टिंग सपोर्ट, परफॉर्मेंस ऑप्टिमाइजेशन और फीचर अपग्रेड देते हैं।',
        hosting: 'हाँ। हम डोमेन, होस्टिंग, डिप्लॉयमेंट, SSL और बिज़नेस ईमेल सेटअप में मदद करते हैं।',
        custom: 'हाँ। TechUpwards आपके बिज़नेस वर्कफ्लो के अनुसार कस्टम सॉफ्टवेयर बनाता है। अपना बिज़नेस प्रकार और जरूरी फीचर्स बताइए।',
        pos: 'हाँ। हम इनवॉइस, इन्वेंटरी, सेल्स रिपोर्ट, कस्टमर रिकॉर्ड और रोल-आधारित एक्सेस के साथ बिलिंग/POS सॉफ्टवेयर बनाते हैं।',
        school: 'हाँ। हम स्टूडेंट, अटेंडेंस, फीस, रिपोर्ट, कम्युनिकेशन और एडमिन वर्कफ्लो के लिए स्कूल मैनेजमेंट सिस्टम बनाते हैं।',
        boutique: 'हाँ। हम इन्वेंटरी, POS, कस्टमर रिकॉर्ड, टेलरिंग ऑर्डर, बारकोड और स्टॉक मैनेजमेंट वाला बुटीक सॉफ्टवेयर बनाते हैं।',
        contact: 'TechUpwards को +91 70762 66296 पर कॉल/WhatsApp करें या hello@techupwardss.com पर ईमेल करें।',
        lead: ['आपका बिज़नेस किस प्रकार का है?', 'आपको वेबसाइट, ऐप या सॉफ्टवेयर चाहिए?', 'आपको कौन-कौन से फीचर्स चाहिए?', 'आपकी अपेक्षित टाइमलाइन क्या है?', 'आपका अनुमानित बजट कितना है?', 'अपना फोन नंबर साझा करें, या +91 70762 66296 पर TechUpwards से संपर्क करें।'],
        leadThanks: 'धन्यवाद! TechUpwards टीम आपकी जरूरतों को देखकर सही मार्गदर्शन देगी। अधिक जानकारी के लिए +91 70762 66296 पर संपर्क करें।',
        fallback: 'मैं वेबसाइट, ऐप, सॉफ्टवेयर, कीमत, टाइमलाइन और TechUpwards की सेवाओं में मदद कर सकता हूँ। विस्तृत चर्चा के लिए +91 70762 66296 पर TechUpwards टीम से संपर्क करें।'
      }
    };
    let currentLanguage = 'en';
    let leadStep = -1;
    let leadLanguage = 'en';
    const detectLanguage = text => {
      if (/[\u0980-\u09ff]/.test(text)) return 'bn';
      if (/[\u0900-\u097f]/.test(text)) return 'hi';
      if (/\b(koto|banan|banate|chai|dorkar|somoy|jogajog|websait)\b/i.test(text)) return 'bn';
      if (/\b(kya|kitna|banwana|chahiye|samay|kaise|website bana)\b/i.test(text)) return 'hi';
      return 'en';
    };
    const startLead = lang => { leadLanguage=lang; leadStep=0; return knowledge[lang].lead[0] };
    const continueLead = text => {
      const lang=leadLanguage;
      if (/(?:\+?91[\s-]?)?[6-9]\d{9}/.test(text.replace(/[\s-]/g,''))) { leadStep=-1; return knowledge[lang].leadThanks }
      leadStep += 1;
      if (leadStep < knowledge[lang].lead.length) return knowledge[lang].lead[leadStep];
      leadStep=-1;
      return knowledge[lang].leadThanks;
    };
    const answer = text => {
      const lang=detectLanguage(text); currentLanguage=lang;
      if (leadStep >= 0) return continueLead(text);
      const v=text.toLowerCase();
      if (/quote|quotation|estimate|proposal|কোট|দরপত্র|कोटेशन|अनुमान/.test(v)) return startLead(lang);
      if (/price|pricing|cost|how much|package|budget|দাম|মূল্য|খরচ|কত টাকা|कीमत|कितना|खर्च|पैकेज/.test(v)) return knowledge[lang].pricing;
      if (/\b(i need|i want|want to build|want to create|start a project|hire|looking for)\b|চাই|দরকার|বানাতে চাই|তৈরি করতে চাই|बनवाना|बनाना चाहता|चाहिए/.test(v)) return startLead(lang);
      if (/time|timeline|how long|deliver|days|week|সময়|কত দিন|ডেলিভারি|समय|कितने दिन|डिलीवरी/.test(v)) return knowledge[lang].timeline;
      if (/e[ -]?commerce|online store|ই[ -]?কমার্স|অনলাইন স্টোর|ई[ -]?कॉमर्स|ऑनलाइन स्टोर/.test(v)) return knowledge[lang].ecommerce;
      if (/restaurant|\bkot\b|qr order|রেস্টুরেন্ট|রেস্তোরাঁ|केओटी|रेस्टोरेंट/.test(v)) return knowledge[lang].restaurant;
      if (/\bgym\b|জিম|जिम/.test(v)) return knowledge[lang].gym;
      if (/maintenance|bug fix|update|support|মেইনটেন্যান্স|বাগ|আপডেট|मेंटेनेंस|बग|अपडेट/.test(v)) return knowledge[lang].maintenance;
      if (/domain|hosting|deployment|ssl|business email|ডোমেইন|হোস্টিং|ডিপ্লয়|होस्टिंग|डोमेन|डिप्लॉय/.test(v)) return knowledge[lang].hosting;
      if (/custom (app|software|web app)|কাস্টম (অ্যাপ|সফটওয়্যার)|कस्टम (ऐप|सॉफ्टवेयर)/.test(v)) return knowledge[lang].custom;
      if (/\bpos\b|billing software|বিলিং|বিক্রয়|बिलिंग/.test(v)) return knowledge[lang].pos;
      if (/school|স্কুল|विद्यालय|स्कूल/.test(v)) return knowledge[lang].school;
      if (/boutique|বুটিক|बुटीक/.test(v)) return knowledge[lang].boutique;
      if (/contact|phone|whatsapp|email|call|human|team|যোগাযোগ|ফোন|কল|ইমেইল|संपर्क|फोन|कॉल|ईमेल/.test(v)) return knowledge[lang].contact;
      if (/service|what do you (do|provide)|website|portfolio|automation|dashboard|cloud|devops|পরিষেবা|ওয়েবসাইট|অটোমেশন|সেবা|वेबसाइट|सेवा|ऑटोमेशन/.test(v)) return knowledge[lang].services;
      return knowledge[lang].fallback;
    };
    const topicAnswer = topic => {
      const lang=currentLanguage;
      if (topic === 'custom') return `${knowledge[lang].custom} ${startLead(lang)}`;
      return knowledge[lang][topic] || knowledge[lang].fallback;
    };
    const message = (text,type) => { const el=document.createElement('div');el.className=`tu-chat__bubble ${type}`;el.textContent=text;body.appendChild(el);body.scrollTop=body.scrollHeight };
    const respond = text => { const typing=document.createElement('div');typing.className='tu-chat__bubble bot tu-chat__typing';typing.innerHTML='<i></i><i></i><i></i>';body.appendChild(typing);body.scrollTop=body.scrollHeight;setTimeout(()=>{typing.remove();message(text,'bot')},500) };
    const setOpen = open => {root.classList.toggle('is-open',open);panel.setAttribute('aria-hidden',String(!open));toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close customer support chat':'Open customer support chat');if(open)setTimeout(()=>input.focus(),180)};
    toggle.addEventListener('click',()=>setOpen(!root.classList.contains('is-open')));close.addEventListener('click',()=>setOpen(false));
    root.querySelectorAll('[data-topic]').forEach(btn=>btn.addEventListener('click',()=>{message(btn.textContent.trim(),'user');respond(topicAnswer(btn.dataset.topic))}));
    form.addEventListener('submit',event=>{event.preventDefault();const text=input.value.trim();if(!text)return;message(text,'user');input.value='';input.style.height='';respond(answer(text))});
    input.addEventListener('input',()=>{input.style.height='';input.style.height=`${Math.min(input.scrollHeight,120)}px`});
    input.addEventListener('keydown',event=>{if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();form.requestSubmit()}});
    document.addEventListener('keydown',event=>{if(event.key==='Escape')setOpen(false)});
})();

// ── 15. VISION PANEL LINE-DRAW RE-TRIGGER ────────────────
(function initVisionPanel() {
    homeEnhancers.initVisionPanel = initVisionPanel;
    const tabs = document.querySelectorAll('.feature-tab-card');
    const fv1  = document.getElementById('fv-1');
    const fv2  = document.getElementById('fv-2');
    if (!fv1) return;
    const resetPanel = el => { el.classList.remove('active'); void el.offsetWidth; el.classList.add('active'); };
    tabs.forEach(tab => {
        const handler = () => {
            const feat = tab.dataset.feature;
            if (feat === '1' && fv1) resetPanel(fv1);
            if (feat === '2' && fv2) resetPanel(fv2);
        };
        tab.addEventListener('click', handler);
        tab.addEventListener('mouseenter', handler);
    });
})();

// ── 16. PLUGIN PANEL — TRAVELING DOTS ────────────────────
(function initPluginDots() {
    homeEnhancers.initPluginDots = initPluginDots;
    window.__techupwardsPluginDotsCleanup?.();
    const svg = document.querySelector('.plugin-lines-svg');
    if (!svg) return;
    const routes = [
        { dot: '.pdot-1', x1:200,y1:150, x2:80, y2:60,  speed:3.2, t:0.0  },
        { dot: '.pdot-2', x1:200,y1:150, x2:330,y2:60,  speed:3.8, t:0.33 },
        { dot: '.pdot-3', x1:200,y1:150, x2:80, y2:240, speed:2.8, t:0.66 },
        { dot: '.pdot-4', x1:200,y1:150, x2:330,y2:240, speed:3.5, t:0.15 },
    ];
    const dots = routes.map(r => ({ ...r, el: svg.querySelector(r.dot) })).filter(r => r.el);
    let last = null;
    let animationFrame = 0;
    function tick(ts) {
        if (!svg.isConnected) return;
        const dt = last ? (ts - last) / 1000 : 0;
        last = ts;
        dots.forEach(r => {
            r.t = (r.t + dt / r.speed) % 1;
            const ease = r.t < 0.5 ? 2*r.t*r.t : -1+(4-2*r.t)*r.t;
            r.el.setAttribute('cx', r.x1 + (r.x2 - r.x1) * ease);
            r.el.setAttribute('cy', r.y1 + (r.y2 - r.y1) * ease);
        });
        animationFrame = requestAnimationFrame(tick);
    }
    animationFrame = requestAnimationFrame(tick);
    window.__techupwardsPluginDotsCleanup = () => {
        window.cancelAnimationFrame(animationFrame);
        window.__techupwardsPluginDotsCleanup = null;
    };
})();

// ── 17. SCROLL-LINKED ROCKET FLY ANIMATION ───────────────
(function initRocketScroll() {
    const rocketContainer = document.querySelector('.rocket-container');
    const rocketSection   = document.querySelector('.rocket-launch-header');
    if (!rocketContainer || !rocketSection) return;

    // Increase flame intensity as rocket lifts
    const rocketFireOuter = rocketContainer.querySelector('.rocket-fire-outer');
    const rocketSmoke     = rocketContainer.querySelectorAll('.smoke-p');

    let ticking = false;

    const updateRocket = () => {
        const rect    = rocketSection.getBoundingClientRect();
        const vh      = window.innerHeight;

        // Rocket launches smoothly between:
        // - Start Point: Section enters the bottom fully (rect.top = vh - 150px, matching 1st Image)
        // - End Point: Section top reaches bottom of navbar (rect.top = 80px, matching 2nd Image)
        const startPoint = vh - 150;
        const endPoint   = 80;

        let progress = 0;
        if (rect.top < startPoint) {
            progress = Math.max(0, Math.min(1, (startPoint - rect.top) / (startPoint - endPoint)));
        }

        // Lift is set to -340px so that the rocket and its fire completely disappear behind navbar/overflow at progress = 1.0 (2nd Image point)
        const liftY = progress * -340;

        // Slight tilt for realism
        const tilt  = progress * 2.5;

        rocketContainer.style.transform = `translateY(${liftY}px) rotate(${tilt}deg)`;

        // Scale up flames as it lifts
        const flameScale = 1 + progress * 0.8;
        if (rocketFireOuter) {
            rocketFireOuter.style.transform = `scaleY(${flameScale})`;
            rocketFireOuter.style.opacity   = (0.35 + progress * 0.5).toString();
        }

        // Fade out smoke as rocket rises
        rocketSmoke.forEach(s => {
            s.style.opacity = (1 - progress).toString();
        });

        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateRocket);
            ticking = true;
        }
    }, { passive: true });

    // Initial call
    updateRocket();
})();

// ── 18. SECTION HEADING COUNTER-GLOW ON SCROLL ───────────
(function initSectionGlow() {
    homeEnhancers.initSectionGlow = initSectionGlow;
    const tags = document.querySelectorAll('.section-tag');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.style.animation = 'tagReveal 0.6s cubic-bezier(0.16,1,0.3,1) both';
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.5 });
    tags.forEach(t => obs.observe(t));
})();

function remountHomeEnhancements() {
    const homeIsAlreadyEnhanced =
        document.querySelector('.hero-product-shell') &&
        document.querySelector('.momentum-bridge') &&
        document.querySelector('#projects') &&
        document.querySelector('.dna-journey') &&
        !document.querySelector('.rocket-launch-header');
    if (homeIsAlreadyEnhanced) {
        homeEnhancers.initCanvas?.();
        homeEnhancers.initPluginDots?.();
        return;
    }

    const sequence = [
        'replaceLegacyVisuals',
        'enhanceHomepage',
        'modernizeIcons',
        'buildDnaJourney',
        'initCanvas',
        'initParallax',
        'initReveal',
        'initCompositionReveal',
        'initHeadingReveal',
        'initCounters',
        'initTilt',
        'initMagnetic',
        'initTechTabs',
        'initFeatureTabs',
        'initOrbitJourney',
        'initForm',
        'initVisionPanel',
        'initPluginDots',
        'initSectionGlow'
    ];

    window.requestAnimationFrame(() => {
        sequence.forEach(name => homeEnhancers[name]?.());
    });
}

window.addEventListener('techupwards:home-mounted', remountHomeEnhancements);
window.addEventListener('techupwards:home-unmounted', () => {
    window.__techupwardsCanvasCleanup?.();
    window.__techupwardsPluginDotsCleanup?.();
});


// ── PERMANENT NEW-DESIGN LOCK ────────────────────────────
(function lockNewHomepageDesign() {
    let repairing = false;
    let repairFrame = 0;

    const needsRepair = () => Boolean(
        document.querySelector('.rocket-launch-header') ||
        (document.querySelector('.features-showcase:not([data-ai-process-host])')) ||
        (document.querySelector('.modern-orbit-container:not(.dna-journey)')) ||
        (!document.querySelector('.momentum-bridge') && document.querySelector('main')) ||
        (!document.querySelector('#projects') && document.querySelector('.services'))
    );

    const repair = () => {
        if (repairing) return;
        repairing = true;
        window.cancelAnimationFrame(repairFrame);
        repairFrame = window.requestAnimationFrame(() => {
            remountHomeEnhancements();
            window.requestAnimationFrame(() => {
                remountHomeEnhancements();
                repairing = false;
            });
        });
    };

    // A double click must never expose the legacy DOM/design.
    document.addEventListener('dblclick', event => {
        event.preventDefault();
        repair();
    }, true);

    // If React/Next restores any legacy node, replace it immediately.
    const observer = new MutationObserver(() => {
        if (needsRepair()) repair();
    });

    const start = () => {
        if (!document.body) return;
        observer.observe(document.body, { childList: true, subtree: true });
        if (needsRepair()) repair();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start, { once: true });
    } else {
        start();
    }
})();
