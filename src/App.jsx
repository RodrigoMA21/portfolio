import { useEffect, useState } from "react";
import "./App.css";
import JourneyFigure from "./components/JourneyFigure.jsx";
import LaunchScene from "./components/LaunchScene.jsx";
import { useTranslation } from "./i18n.jsx";

const technologies = [
  { name: "Java", icon: "java" },
  { name: "Spring Boot", icon: "spring" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "React", icon: "react" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Docker", icon: "docker" },
  { name: "Figma", icon: "figma" },
  { name: "Python", icon: "python" },
  { name: "Flask", icon: "flask" },
];

function Icon({ name, size = 20 }) {
  const paths = {
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
      </>
    ),
    github: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.54 1.04 1.54 1.04.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.53 9.53 0 0 1 12 6.8c.85 0 1.7.11 2.5.34 1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.35 4.68-4.58 4.93.36.31.68.9.68 1.81v2.68c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
    ),
    linkedin: (
      <>
        <path d="M6 9v10M6 5v.01M10 19v-6a4 4 0 0 1 8 0v6M10 13v6" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    external: (
      <>
        <path d="M14 5h5v5M19 5l-8 8" />
        <path d="M19 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
      </>
    ),
    up: (
      <>
        <path d="M12 19V5m0 0-6 6m6-6 6 6" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </>
    ),
    moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function BooksIll() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m19 1-5 5v11l5-4.5zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6m22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5z"
        fill="currentColor"
        opacity="0.08"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ScissorsIll() {
  return (
    <svg viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse
        cx="12"
        cy="10"
        rx="4.5"
        ry="6"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.35"
        fill="none"
      />
      <ellipse
        cx="28"
        cy="10"
        rx="4.5"
        ry="6"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.35"
        fill="none"
      />
      <ellipse
        cx="12"
        cy="10"
        rx="2"
        ry="3"
        fill="currentColor"
        opacity="0.04"
      />
      <ellipse
        cx="28"
        cy="10"
        rx="2"
        ry="3"
        fill="currentColor"
        opacity="0.04"
      />
      <path
        d="M 15.5 15 L 20 20"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.3"
      />
      <path
        d="M 24.5 15 L 20 20"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.3"
      />
      <path
        d="M 20 20 L 6 40"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M 20 20 L 34 40"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.45"
      />
      <circle
        cx="20"
        cy="20"
        r="2.5"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.4"
        fill="none"
      />
      <circle cx="20" cy="20" r="0.9" fill="currentColor" opacity="0.3" />
      <line
        x1="18"
        y1="20"
        x2="22"
        y2="20"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.2"
      />
    </svg>
  );
}

function RobotIll() {
  return (
    <svg viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="8"
        y="10"
        width="24"
        height="20"
        rx="4"
        fill="currentColor"
        opacity="0.06"
      />
      <rect
        x="8"
        y="10"
        width="24"
        height="20"
        rx="4"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.35"
      />
      <circle cx="16" cy="20" r="4" fill="currentColor" opacity="0.12" />
      <circle cx="16" cy="20" r="2.5" fill="currentColor" opacity="0.35" />
      <circle cx="24" cy="20" r="4" fill="currentColor" opacity="0.12" />
      <circle cx="24" cy="20" r="2.5" fill="currentColor" opacity="0.35" />
      <rect
        x="17"
        y="27"
        width="6"
        height="2"
        rx="0.5"
        fill="currentColor"
        opacity="0.2"
      />
      <line
        x1="20"
        y1="4"
        x2="20"
        y2="10"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.25"
      />
      <circle cx="20" cy="3.5" r="2" fill="currentColor" opacity="0.2" />
      <circle cx="20" cy="3.5" r="1" fill="currentColor" opacity="0.4" />
      <rect
        x="4"
        y="14"
        width="4"
        height="10"
        rx="1"
        fill="currentColor"
        opacity="0.06"
      />
      <rect
        x="4"
        y="14"
        width="4"
        height="10"
        rx="1"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.2"
      />
      <rect
        x="32"
        y="14"
        width="4"
        height="10"
        rx="1"
        fill="currentColor"
        opacity="0.06"
      />
      <rect
        x="32"
        y="14"
        width="4"
        height="10"
        rx="1"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.2"
      />
    </svg>
  );
}

function SearchIll() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="18"
        cy="18"
        r="10"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.35"
        fill="none"
      />
      <circle cx="18" cy="18" r="5" fill="currentColor" opacity="0.08" />
      <circle cx="18" cy="18" r="2.5" fill="currentColor" opacity="0.2" />
      <line
        x1="25"
        y1="25"
        x2="34"
        y2="34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
      <rect
        x="14"
        y="13"
        width="8"
        height="2"
        rx="1"
        fill="currentColor"
        opacity="0.15"
      />
    </svg>
  );
}

function InventoryIll() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="28" height="28" rx="3" stroke="currentColor" strokeWidth="0.8" opacity="0.3" fill="none" />
      <rect x="6" y="6" width="28" height="10" rx="3" fill="currentColor" opacity="0.06" />
      <rect x="6" y="6" width="28" height="10" rx="3" stroke="currentColor" strokeWidth="0.7" opacity="0.25" fill="none" />
      <rect x="10" y="8" width="8" height="6" rx="1" fill="currentColor" opacity="0.12" />
      <rect x="22" y="8" width="8" height="6" rx="1" fill="currentColor" opacity="0.12" />
      <rect x="10" y="18" width="8" height="6" rx="1" fill="currentColor" opacity="0.1" />
      <rect x="22" y="18" width="8" height="6" rx="1" fill="currentColor" opacity="0.1" />
      <rect x="10" y="27" width="8" height="6" rx="1" fill="currentColor" opacity="0.08" />
      <rect x="22" y="27" width="8" height="6" rx="1" fill="currentColor" opacity="0.08" />
    </svg>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const { t, locale, setLocale, data } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );
  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const maxScroll = Math.max(
            document.documentElement.scrollHeight - window.innerHeight,
            1,
          );
          document.documentElement.style.setProperty("--scroll-y", scrollY);
          document.documentElement.style.setProperty(
            "--scroll-pct",
            scrollY / maxScroll,
          );
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateBackToTop = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", updateBackToTop, { passive: true });
    updateBackToTop();
    return () => window.removeEventListener("scroll", updateBackToTop);
  }, []);

  const locales = [
    { code: 'pt-BR', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
  ];

  return (
    <main data-theme={theme}>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={
          theme === "dark" ? t("themeToggle.light") : t("themeToggle.dark")
        }
      >
        <Icon name={theme === "dark" ? "moon" : "sun"} size={20} />
      </button>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label={t("header.brandLabel")}>
          R<span>.</span>
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={t("header.menuLabel")}
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
        <nav
          className={menuOpen ? "open" : ""}
          aria-label={t("header.navLabel")}
        >
          {data.navLinks.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <div className="lang-switcher-mobile">
            {locales.map((l) => (
              <button
                key={l.code}
                className={`lang-btn${locale === l.code ? " active" : ""}`}
                onClick={() => setLocale(l.code)}
              >
                {l.label}
              </button>
            ))}
          </div>
        </nav>
        <div className="lang-switcher">
          {locales.map((l) => (
            <button
              key={l.code}
              className={`lang-btn${locale === l.code ? " active" : ""}`}
              onClick={() => setLocale(l.code)}
            >
              {l.label}
            </button>
          ))}
        </div>
        <a className="header-cta" href="#contato">
          {t("header.cta")} <Icon name="arrow" size={17} />
        </a>
      </header>

      <div className="shooting-stars" aria-hidden="true">
        <div className="shooting-star" />
        <div className="shooting-star" />
        <div className="shooting-star" />
        <div className="shooting-star" />
        <div className="shooting-star" />
        <div className="shooting-star" />
        <div className="shooting-star" />
        <div className="shooting-star" />
      </div>
      <section id="inicio" className="hero-section">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">{t("hero.eyebrow")}</p>
          <h1>
            {t("hero.greeting")}
            <br />
            <em>Rodrigo Mayer Alves</em>
          </h1>

          <p className="hero-description">
            {t("hero.description")}
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projetos">
              {t("hero.cta.work")} <Icon name="arrow" size={18} />
            </a>
            <a
              className="button ghost"
              href="/Rodrigo_Mayer_Alves_Curriculo_TI.pdf"
              download
            >
              <Icon name="download" size={18} /> {t("hero.cta.resume")}
            </a>
          </div>
        </div>
        <aside className="hero-card" aria-label={t("hero.card.ariaLabel")}>
          <div className="orb orb-one" />
          <div className="orb orb-two" />

          <img
            src="/profile.jpg.png"
            alt={t("hero.imgAlt")}
            className="profile-photo"
          />

          <h3 className="profile-name">Rodrigo Mayer Alves</h3>

          <p className="profile-role">
            {t("hero.card.role1")}
            <br />
            {t("hero.card.role2")}
          </p>

          <div className="availability">
            <span />
            {t("hero.card.availability")}
          </div>
        </aside>
      </section>

      <section id="sobre" className="about section reveal">
        <SectionTitle
          eyebrow={t("about.eyebrow")}
          title={t("about.title")}
        />
        <div className="about-text">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <div className="about-languages">
            <h4>{t("about.languages")}</h4>
            <ul>
              {data.aboutLanguages.map((lang, i) => (
                <li key={i}>{lang.flag} {lang.name} — {lang.level}</li>
              ))}
            </ul>
          </div>
          <a className="text-link" href="#contato">
            {t("about.cta")} <Icon name="arrow" size={17} />
          </a>
        </div>
      </section>

      <section id="tecnologias" className="section tech-section reveal">
        <SectionTitle
          eyebrow={t("tech.eyebrow")}
          title={t("tech.title")}
          text={t("tech.text")}
        />
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div className="tech-item" key={tech.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <img
                src={`https://skillicons.dev/icons?i=${tech.icon}&theme=dark`}
                alt={t("tech.imgAlt").replace("{tech}", tech.name)}
                loading="lazy"
              />
              <strong>{tech.name}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="projetos" className="section projects-section reveal">
        <SectionTitle
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title")}
          text={t("projects.text")}
        />
        <div className="project-list">
          {data.projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className={`project-art art-${index + 1}`}>
                <span>{project.type}</span>
                <strong>0{index + 1}</strong>
                <div className="project-illustration">
                  {index === 0 && <BooksIll />}
                  {index === 1 && <ScissorsIll />}
                  {index === 2 && <RobotIll />}
                  {index === 3 && <SearchIll />}
                  {index === 4 && <InventoryIll />}
                </div>
              </div>
              <div className="project-content">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={t("projects.codeAria").replace("{name}", project.title)}
                    >
                      {t("projects.code")} <Icon name="github" size={17} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={t("projects.demoAria").replace("{name}", project.title)}
                    >
                      {t("projects.view")} <Icon name="external" size={17} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="projects-footer">
          <a
            className="button ghost"
            href="https://github.com/RodrigoMA21"
            target="_blank"
            rel="noreferrer"
            aria-label={t("projects.footerAria")}
          >
            <Icon name="github" size={18} /> {t("projects.footer")}
          </a>
        </div>
      </section>

      <section id="experiencia" className="section experience reveal">
        <SectionTitle
          eyebrow={t("experience.eyebrow")}
          title={t("experience.title")}
        />
        <div className="timeline">
          {data.timeline.map((item, index) => (
            <article key={index}>
              <span>{item.label}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="certificados" className="section certificate reveal">
        <div>
          <p className="eyebrow">{t("certificates.eyebrow")}</p>
          <h2>{t("certificates.title")}</h2>
          <p>{t("certificates.text")}</p>
          <a
            className="button ghost certificate-download"
            href="/Rodrigo_Mayer_Alves_Curriculo_TI.pdf"
            download
          >
            <Icon name="download" size={18} /> {t("certificates.downloadResume")}
          </a>
        </div>
        <article className="certificate-card" aria-label={t("certificates.certAria")}>
          <div className="certificate-seal">
            <img
              src="https://skillicons.dev/icons?i=java&theme=dark"
              alt={t("certificates.javaAlt")}
            />
          </div>
          <div>
            <span>{t("certificates.complement")}</span>
            <h3>{t("certificates.certTitle")}</h3>
            <p>{t("certificates.certDesc")}</p>
            <a
              className="certificate-link"
              href="/certificado-java-rodrigo-mayer-alves.pdf"
              download
            >
              <Icon name="download" size={16} /> {t("certificates.downloadCert")}
            </a>
          </div>
        </article>
      </section>

      <section id="contato" className="contact reveal">
        <p className="eyebrow">{t("contact.eyebrow")}</p>
        <h2>
          {t("contact.title1")}
          <br />
          <em>{t("contact.title2")}</em>
        </h2>
        <a className="contact-email" href="mailto:rodxlr@gmail.com">
          <span className="contact-label">{t("contact.email")}</span> rodxlr@gmail.com
        </a>
        <a
          className="contact-whatsapp"
          href="https://wa.me/5554984479052"
          target="_blank"
          rel="noreferrer"
          aria-label={t("contact.whatsappAria")}
        >
          <img
            src="/WhatsApp_Logo_PNG_Sem_Fundo_Transparente.png"
            alt={t("contact.whatsappImgAlt")}
            className="whatsapp-icon"
          />{" "}
          {t("contact.whatsapp")}
        </a>
      </section>

      <footer>
        <a className="brand" href="#inicio">
          R<span>.</span>
        </a>
        <p>{t("footer.text")} · {new Date().getFullYear()}</p>
        <div>
          <a
            href="https://github.com/RodrigoMA21"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Icon name="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/rodrigo-mayer-alves-a9255675"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Icon name="linkedin" />
          </a>
          <a href="mailto:rodxlr@gmail.com" aria-label="E-mail">
            <Icon name="mail" />
          </a>
        </div>
      </footer>
      <LaunchScene />
      <JourneyFigure />
      <button
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={t("aria.backToTop")}
      >
        <Icon name="up" size={20} />
      </button>
    </main>
  );
}

export default App;
