import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AboutPageEffects from "../../components/AboutPageEffects";
import "./about.css";

export const metadata: Metadata = {
  title: {
    absolute: "About TechUpwards | Website & Software Development Company",
  },
  description:
    "Learn about TechUpwards, our mission, expertise, development process, and how we help businesses grow through technology.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About TechUpwards | Website & Software Development Company",
    description:
      "Learn about TechUpwards, our mission, expertise, development process, and how we help businesses grow through technology.",
    url: "https://techupwardss.com/about",
    images: ["/assets/logo.png"],
    type: "website",
  },
};

const founders = [
  {
    name: "Anirban Chattaraj",
    image: "/assets/anirban.jpg",
    role: "CO-FOUNDER",
    tags: ["Strategy", "Growth"],
    expertise: "Focused on business strategy, digital innovation, and scalable growth solutions.",
    linkedin: "https://www.linkedin.com/in/anirban-chattaraj-57a531205/",
    twitter: "#",
  },
  {
    name: "Shuvam Ghosh",
    image: "/assets/shuvam.jpg",
    role: "CO-FOUNDER",
    tags: ["Operations", "Relations"],
    expertise: "Managing operations, client solutions, and business development initiatives.",
    linkedin: "https://www.linkedin.com/in/shuvam-ghosh-4a7b75249/",
    twitter: "#",
  },
  {
    name: "Kushal Ghosh",
    image: "/assets/Kushal.jpg",
    role: "CO-FOUNDER",
    tags: ["Technology", "Execution"],
    expertise: "Leading technology systems, digital execution, and scalable service delivery.",
    linkedin: "https://www.linkedin.com/in/kushal-ghosh-a0808b290/",
    twitter: "https://github.com",
  },
  {
    name: "Tanangshu Dutta",
    image: "/assets/tanangshu.jpg",
    role: "MARKETING HEAD",
    tags: ["Branding", "Marketing"],
    expertise: "Driving digital marketing, branding, audience engagement, and online reach.",
    linkedin: "https://www.linkedin.com/in/tanangshu-dutta-a61565249/",
    twitter: "#",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.92 6.75H2.556l7.73-8.835L1.966 2.25h6.74l4.68 6.182 5.37-6.182zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <div className="scroll-progress" />
      <main className="about-page-main">
        <section className="about-cinema-hero" aria-labelledby="about-hero-title">
          <video
            className="about-cinema-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/about-techupwards-poster.jpg"
            aria-hidden="true"
          >
            <source src="/assets/about-techupwards.mp4" type="video/mp4" />
          </video>
          <div className="about-cinema-overlay" aria-hidden="true" />
          <div className="about-cinema-grid" aria-hidden="true" />
          <div className="about-cinema-content">
            <span className="about-hero-kicker">Strategy · Software · Growth</span>
            <h1 id="about-hero-title">
              We build technology<br />
              <span>businesses can grow with.</span>
            </h1>
            <p>
              TechUpwards turns ambitious ideas into practical websites, software,
              and digital systems built for lasting business impact.
            </p>
            <div className="about-hero-actions">
              <Link href="/#contact" className="about-primary-link">
                Start a conversation <ArrowIcon />
              </Link>
              <a href="#our-story" className="about-secondary-link">
                Meet the founders
              </a>
            </div>
          </div>
          <a className="about-scroll-cue" href="#our-story" aria-label="Scroll to our story">
            <span />
          </a>
        </section>

        <section className="about-story-section about" id="our-story">
          <div className="about-story-ambient" aria-hidden="true" />
          <div className="about-story-wrap">
            <header className="about-content">
              <span className="section-tag">Our Story</span>
              <h2>About TechUpwards</h2>
              <p>A technology company shaped by four complementary perspectives.</p>
            </header>

            <article className="about-founder-letter">
              <span className="about-letter-label">A note from the founding team</span>
              <h3>Built by technologists who believe useful software should move businesses forward.</h3>
              <div className="about-letter-copy">
                <p>
                  TechUpwards was founded by a team of passionate technology professionals with a shared
                  vision of helping businesses scale, innovate, and succeed in the digital era. Combining
                  strong academic backgrounds with expertise in modern technologies, the founders are
                  committed to delivering impactful and scalable technology solutions.
                </p>
                <p>
                  Together, the founders leverage their diverse technical expertise and industry knowledge
                  to empower organizations with cutting-edge digital solutions. At TechUpwards, our mission
                  is to help businesses achieve sustainable growth, improve operational efficiency, and scale
                  confidently through innovation, technology, and strategic digital transformation.
                </p>
              </div>
              <div className="about-letter-signoff">
                <Image src="/assets/logo.png" alt="TechUpwards" width={56} height={56} />
                <div>
                  <strong>TechUpwards Founding Team</strong>
                  <span>Ideas moving upwards.</span>
                </div>
              </div>
            </article>

            <div className="about-founders-heading">
              <span>Four disciplines. One shared mission.</span>
              <h2>The founding team</h2>
            </div>

            <div className="team-container about-founder-grid">
              {founders.map((founder, index) => (
                <article className={`team-card about-founder-card founder-card-${index + 1}`} key={founder.name}>
                  <div className="team-img-wrapper">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      className="team-img"
                      width={360}
                      height={430}
                      sizes="(max-width: 640px) 84vw, (max-width: 1024px) 42vw, 270px"
                    />
                    <span className="team-img-glow" aria-hidden="true" />
                  </div>
                  <div className="about-founder-card-body">
                    <h3>{founder.name}</h3>
                    <span className="member-role">{founder.role}</span>
                    <div className="member-tags">
                      {founder.tags.map((tag) => (
                        <span className="member-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p>{founder.expertise}</p>
                    <div className="about-founder-socials">
                      {founder.linkedin && founder.linkedin !== "#" && (
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="about-founder-social"
                          aria-label={`${founder.name} on LinkedIn`}
                        >
                          <LinkedInIcon />
                        </a>
                      )}
                      {founder.twitter && founder.twitter !== "#" && (
                        <a
                          href={founder.twitter}
                          target="_blank"
                          rel="noreferrer"
                          className="about-founder-social"
                          aria-label={`${founder.name} on X`}
                        >
                          <XIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="about-mission-panel">
              <span>Our mission</span>
              <p>
                Help businesses scale confidently through thoughtful engineering,
                modern technology, and strategic digital transformation.
              </p>
              <Link href="/#contact" className="about-mission-link">
                Build with TechUpwards <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
        <AboutPageEffects />
      </main>
    </>
  );
}
