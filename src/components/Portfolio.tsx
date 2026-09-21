import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Check,
  ChevronRight,
  Copy,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Send,
  Terminal,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
const portraitAsset = { url: "/assets/ashutosh-srivastava.jpeg" };
const resumeAsset = { url: "/assets/ashutosh-srivastava-resume.pdf" };
const mitAdtLogo = { url: "/assets/mit-adt-university-logo.png" };
const stDominicLogo = { url: "/assets/st-dominic-savio-college-logo.png" };
const cmsLogo = { url: "/assets/city-montessori-school-logo.png" };

const links = {
  github: "https://github.com/ashutoshsrivastava2407",
  linkedin: "https://www.linkedin.com/in/ashutosh-srivastava-ab0174333",
  leetcode: "https://leetcode.com/u/AshutoshSrivastava123/",
  instagram: "https://www.instagram.com/sr._ashu24/",
};

const projects = [
  {
    id: "01",
    name: "NOVANET",
    label: "Network intelligence",
    description:
      "AI-native network observability and simulation with predictive adaptive routing, live topology state, and congestion forecasting.",
    repo: "https://github.com/ashutoshsrivastava2407/novanet---ai",
    tech: ["React", "FastAPI", "WebSockets", "Linear Regression", "EWMA"],
    facts: ["224 tests", "10,000-node graphs"],
    visual: "network",
  },
  {
    id: "02",
    name: "VERIDEX",
    label: "Knowledge intelligence",
    description:
      "Multi-tenant RAG platform that turns five document formats into grounded answers through hybrid retrieval and verified citations.",
    repo: "https://github.com/ashutoshsrivastava2407/veridex",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "RRF"],
    facts: ["5 document formats", "Cross-encoder reranking"],
    visual: "pipeline",
  },
  {
    id: "03",
    name: "PHARMALOOP",
    label: "Reverse supply chain",
    description:
      "Four-portal system coordinating expired-medicine returns from request through logistics, receipt, and refund.",
    repo: "https://github.com/ashutoshsrivastava2407/pharmaloop",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "Socket.IO"],
    facts: ["4 connected portals", "Real-time status"],
    visual: "supply",
  },
  {
    id: "04",
    name: "AEGIS",
    label: "Decision operating system",
    description:
      "Closed-loop enterprise intelligence spanning streaming data, predictive reasoning, autonomous action, and continuous learning.",
    repo: "https://github.com/ashutoshsrivastava2407/AEGIS",
    tech: ["Python", "Streaming", "Bronze/Silver/Gold", "Alembic"],
    facts: ["19 domain services", "8 platforms · 234 tests · 13 migrations"],
    visual: "loop",
  },
] as const;

const experiences = [
  {
    date: "JUN 2026",
    company: "Clyfar Solutions",
    role: "Full Stack Developer Intern",
    place: "Nashik, India",
    copy: "Built responsive web features in JavaScript, HTML, and CSS; collaborated on UI/UX decisions and cross-team code reviews.",
  },
  {
    date: "DEC 2024 — JAN 2025",
    company: "iNeuron.AI",
    role: "AI-eCommerce Assistant Intern",
    place: "Remote",
    copy: "Prototyped backend and frontend modules, integrating AI catalogue browsing and query handling across two core modules.",
  },
  {
    date: "MAR — APR 2024",
    company: "Oasis Infobyte",
    role: "Web Development Intern",
    place: "Remote",
    copy: "Translated requirements into frontend solutions, resolved technical issues, and refined UI components through iterative testing.",
  },
];

const skills = [
  ["Languages", "Python", "C++", "Java", "JavaScript", "TypeScript", "SQL"],
  ["Frontend", "React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  ["Backend & APIs", "FastAPI", "Node.js", "Express.js", "REST APIs", "WebSockets", "SSE"],
  ["AI / ML", "Machine Learning", "Generative AI", "LLMs", "RAG", "NLP"],
  ["Data & Search", "PostgreSQL", "MongoDB", "pgvector", "Redis", "Hybrid Search", "Semantic Search"],
  ["Tools", "Docker", "Git", "GitHub", "Playwright", "Linux"],
  ["Spoken", "English", "Hindi", "Marathi"],
];

function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let animation = 0;
    const points = Array.from({ length: 28 }, (_, i) => ({
      x: ((i * 47) % 101) / 100,
      y: ((i * 79) % 97) / 100,
      phase: i * 0.7,
    }));
    const draw = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const box = canvas.getBoundingClientRect();
      canvas.width = box.width * ratio;
      canvas.height = box.height * ratio;
      context.scale(ratio, ratio);
      context.clearRect(0, 0, box.width, box.height);
      points.forEach((point, i) => {
        const x = point.x * box.width;
        const y = point.y * box.height + Math.sin(frame / 70 + point.phase) * 5;
        points.slice(i + 1).forEach((other) => {
          const ox = other.x * box.width;
          const oy = other.y * box.height + Math.sin(frame / 70 + other.phase) * 5;
          const distance = Math.hypot(x - ox, y - oy);
          if (distance < 125) {
            context.strokeStyle = `rgba(84, 214, 174, ${0.16 * (1 - distance / 125)})`;
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(ox, oy);
            context.stroke();
          }
        });
        context.fillStyle = i % 5 === 0 ? "rgba(218,255,89,.8)" : "rgba(84,214,174,.6)";
        context.beginPath();
        context.arc(x, y, i % 5 === 0 ? 2.5 : 1.5, 0, Math.PI * 2);
        context.fill();
      });
      frame += 1;
      if (!reduced) animation = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 size-full" aria-hidden="true" />;
}

function ProjectVisual({ type }: { type: (typeof projects)[number]["visual"] }) {
  if (type === "network") {
    return (
      <div className="project-map" aria-label="Animated network topology diagram">
        {[[14, 48], [31, 21], [49, 55], [70, 26], [84, 61], [31, 78], [67, 80]].map(
          ([left, top], index) => (
            <span key={index} className={`topology-node node-${index}`} style={{ left: `${left}%`, top: `${top}%` }}>
              {index === 2 ? "AI" : String(index + 1).padStart(2, "0")}
            </span>
          ),
        )}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M14 48L31 21L49 55L70 26L84 61L67 80L49 55L31 78L14 48M31 21L70 26M31 78L67 80" />
        </svg>
        <span className="packet packet-a" />
        <span className="packet packet-b" />
      </div>
    );
  }
  if (type === "pipeline") {
    return (
      <div className="pipeline" aria-label="Document retrieval and verification pipeline">
        {["PDF · DOCX · TXT", "VECTOR + KEYWORD", "RRF", "RERANK", "CITATION ✓"].map((step, index) => (
          <div className="pipeline-step" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>
            {index < 4 && <ChevronRight aria-hidden="true" />}
          </div>
        ))}
      </div>
    );
  }
  if (type === "supply") {
    return (
      <div className="supply-flow" aria-label="Pharmaceutical reverse supply chain flow">
        {["MEDICAL SHOP", "RETURN REQUEST", "LOGISTICS", "PHARMA COMPANY", "REFUND"].map((step, index) => (
          <div className="supply-step" key={step}>
            <span>{index + 1}</span><strong>{step}</strong><small>{index < 4 ? "STATUS SYNCED" : "CLOSED"}</small>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="decision-loop" aria-label="Autonomous enterprise decision loop">
      <div className="loop-core"><Network /><span>AEGIS</span><small>LIVE SYSTEM</small></div>
      {[
        "SENSE", "UNDERSTAND", "PREDICT", "REASON", "DECIDE", "ACT", "LEARN",
      ].map((step, index) => (
        <span className={`loop-node loop-${index}`} key={step}>{step}</span>
      ))}
    </div>
  );
}

function SectionHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <div><p>{label}</p><h2>{title}</h2></div>
    </div>
  );
}

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [copied, setCopied] = useState(false);
  const active = projects[activeProject] ?? projects[0];

  const copyEmail = async () => {
    await navigator.clipboard.writeText("ashutoshsrivastavasoc19@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(form.get("subject") || "Portfolio enquiry"));
    const body = encodeURIComponent(`${String(form.get("message") || "")}\n\nFrom: ${String(form.get("name") || "")}`);
    window.location.href = `mailto:ashutoshsrivastavasoc19@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="portfolio-shell">
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Ashutosh Srivastava, home">AS<span>.</span></a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </nav>
        <div className="header-status"><span /> Available for opportunities</div>
        <Button variant="ghost" size="icon" className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </header>

      <section className="hero" id="top">
        <NetworkCanvas />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span>01</span> ENGINEER · BUILDER · PROBLEM SOLVER</div>
          <h1><span>ASHUTOSH</span><br />SRIVASTAVA</h1>
          <p className="hero-title">B.Tech CSE <i>×</i> AI & Analytics <i>×</i> Full-Stack & AI/ML</p>
          <div className="hero-actions">
            <Button asChild size="lg"><a href="#projects">View projects <ArrowDown /></a></Button>
            <Button asChild size="lg" variant="outline"><a href={resumeAsset.url} target="_blank" rel="noreferrer">Résumé <Download /></a></Button>
            <Button asChild size="lg" variant="ghost"><a href="#contact">Contact <ArrowUpRight /></a></Button>
          </div>
        </div>
        <div className="portrait-stage">
          <div className="portrait-frame">
            <img src={portraitAsset.url} alt="Ashutosh Srivastava in formal attire" />
            <span className="portrait-tag tag-top">PUNE · IN</span>
            <span className="portrait-tag tag-bottom">AI / FULL-STACK</span>
          </div>
        </div>
        <div className="hero-index"><span>PORTFOLIO</span><span>2026</span></div>
      </section>

      <section className="summary-section" id="about">
        <SectionHeading number="01" label="PROFILE" title="Systems that think. Products that work." />
        <blockquote>“B.Tech CSE (AI & Analytics) engineer building full-stack and AI/ML systems, from RAG-based knowledge platforms and network intelligence to enterprise decision automation, using React/Next.js, FastAPI/Node.js, and production data infrastructure.”</blockquote>
        <div className="summary-meta"><span><MapPin /> Pune, Maharashtra, India</span><span><Terminal /> Building at the intersection of product and intelligence</span></div>
      </section>

      <section className="experience-section" id="experience">
        <SectionHeading number="02" label="EXPERIENCE" title="Shipping, learning, refining." />
        <div className="timeline">
          {experiences.map((item, index) => (
            <article className="timeline-item" key={item.company} tabIndex={0}>
              <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-main"><h3>{item.role}</h3><p>{item.company} · {item.place}</p></div>
              <p className="timeline-copy">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <SectionHeading number="03" label="SELECTED PROJECTS" title="Four systems. Built in depth." />
        <div className="project-tabs" role="tablist" aria-label="Project selection">
          {projects.map((project, index) => (
            <Button key={project.name} variant="ghost" role="tab" aria-selected={index === activeProject} className={index === activeProject ? "active" : ""} onClick={() => setActiveProject(index)}>
              <span>{project.id}</span>{project.name}
            </Button>
          ))}
        </div>
        <article className="project-focus" key={active.name}>
          <div className="project-content">
            <div className="project-kicker">{active.id} / {active.label}</div>
            <h3>{active.name}</h3>
            <p>{active.description}</p>
            <div className="project-facts">{active.facts.map((fact) => <strong key={fact}>{fact}</strong>)}</div>
            <div className="tech-list">{active.tech.map((item) => <span key={item}>{item}</span>)}</div>
            <Button asChild variant="outline"><a href={active.repo} target="_blank" rel="noreferrer"><Github /> Explore repository <ArrowUpRight /></a></Button>
          </div>
          <ProjectVisual type={active.visual} />
        </article>
        <div className="project-mobile-list">
          {projects.map((project) => (
            <article key={project.name}>
              <div className="project-kicker">{project.id} / {project.label}</div><h3>{project.name}</h3><p>{project.description}</p>
              <ProjectVisual type={project.visual} />
              <div className="tech-list">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
              <a href={project.repo} target="_blank" rel="noreferrer">Explore repository <ArrowUpRight /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="education-section" id="education">
        <SectionHeading number="04" label="EDUCATION" title="The academic foundation." />
        <div className="education-grid">
          <article className="education-primary">
            <div className="institution-mark"><img src={mitAdtLogo.url} alt="MIT ADT University official logo" width="280" height="280" /></div>
            <div><span>2024 — 2028</span><h3>MIT ADT University</h3><p>B.Tech, Computer Science & Engineering<br />(Artificial Intelligence & Analytics)</p><strong>CGPA 8.0 / 10 · Pune, India</strong></div>
          </article>
          <article><div className="school-mark"><img src={stDominicLogo.url} alt="St. Dominic Savio College official logo" width="426" height="325" /></div><span>CLASS XII</span><h3>St. Dominic Savio College</h3><p>Science with Mathematics · Lucknow</p><strong>84%</strong></article>
          <article><div className="school-mark"><img src={cmsLogo.url} alt="City Montessori School official logo" width="409" height="267" /></div><span>CLASS X</span><h3>City Montessori School</h3><p>Lucknow</p><strong>92%</strong></article>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <SectionHeading number="05" label="CAPABILITIES" title="A connected technical system." />
        <div className="skill-system">
          {skills.map(([group, ...items], index) => (
            <article key={group} className={`skill-cluster cluster-${index}`}>
              <span>{String(index + 1).padStart(2, "0")}</span><h3>{group}</h3>
              <div>{items.map((item) => <button key={item} type="button">{item}</button>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="achievements-section" id="achievements">
        <SectionHeading number="06" label="COMMUNITY" title="Contribution beyond the codebase." />
        <div className="achievement-list">
          <article><span>01</span><Award /><div><h3>GeeksforGeeks Student Chapter</h3><p>Tech Team Member · Built chapter platforms and managed technical setups for events.</p></div></article>
          <article><span>02</span><Github /><div><h3>Open Source Connect India</h3><p>Contributor & Mentor · Fixed bugs and guided new contributors on shared education tools.</p></div></article>
          <a href={links.leetcode} target="_blank" rel="noreferrer"><span>03</span><Terminal /><div><h3>LeetCode</h3><p>Data structures and algorithms problem solving.</p></div><ArrowUpRight /></a>
        </div>
      </section>

      <section className="certifications-section" id="certifications">
        <SectionHeading number="07" label="CERTIFICATIONS" title="Structured learning, applied." />
        <div className="certificate-grid">
          {[ ["Google Cloud Skills Boost", "Introduction to Generative AI"], ["IBM", "Machine Learning with Python"], ["Cisco", "Python Essentials 1 / 2"] ].map(([issuer, title], index) => (
            <article key={title}><span>0{index + 1}</span><div className="certificate-seal"><Check /></div><p>{issuer}</p><h3>{title}</h3></article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <SectionHeading number="08" label="CONTACT" title="Let’s build something useful." />
        <div className="contact-grid">
          <div className="contact-info">
            <p>For internships, engineering opportunities, open-source collaboration, or a thoughtful technical conversation.</p>
            <div className="email-row"><a href="mailto:ashutoshsrivastavasoc19@gmail.com">ashutoshsrivastavasoc19<wbr />@gmail.com</a><Button size="icon" variant="outline" onClick={copyEmail} aria-label="Copy email address">{copied ? <Check /> : <Copy />}</Button></div>
            <a href="tel:+919219656385"><Phone /> +91 92196 56385</a>
            <div className="social-row"><a href={links.github} target="_blank" rel="noreferrer"><Github /> GitHub</a><a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a><a href={links.leetcode} target="_blank" rel="noreferrer"><Terminal /> LeetCode</a><a href={links.instagram} target="_blank" rel="noreferrer"><Instagram /> Instagram</a></div>
          </div>
          <form className="contact-form" onSubmit={sendMessage}>
            <label><span>Your name</span><input required name="name" autoComplete="name" placeholder="Name" /></label>
            <label><span>Subject</span><input required name="subject" placeholder="What would you like to discuss?" /></label>
            <label><span>Message</span><textarea required name="message" rows={5} placeholder="Tell me a little about it." /></label>
            <Button size="lg" type="submit">Open email <Send /></Button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <a className="monogram" href="#top">AS<span>.</span></a>
        <div><strong>ASHUTOSH SRIVASTAVA</strong><span>© 2026 · Pune, Maharashtra, India</span></div>
        <nav><a href={links.github}>GitHub</a><a href={links.linkedin}>LinkedIn</a><a href={links.instagram}>Instagram</a></nav>
      </footer>
    </main>
  );
}