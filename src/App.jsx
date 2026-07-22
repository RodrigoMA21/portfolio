import { useEffect, useState } from "react";
import "./App.css";
import JourneyFigure from "./components/JourneyFigure.jsx";
import LaunchScene from "./components/LaunchScene.jsx";

const navLinks = [
  ["Sobre", "sobre"],
  ["Tecnologias", "tecnologias"],
  ["Projetos", "projetos"],
  ["Experiência", "experiencia"],
  ["Contato", "contato"],
];

const projects = [
  {
    title: "Sistema de Biblioteca",
    type: "Full Stack",
    description:
      "Sistema online de gestão de biblioteca, com autenticação, usuários, acervo, e-mails automáticos e visualização de livros em PDF.",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL"],
    code: "https://github.com/RodrigoMA21/biblioteca-java-react",
    demo: "https://biblioteca-java-react-1.onrender.com/",
  },
  {
    title: "BarberFlow",
    type: "Aplicação web",
    description:
      "Projeto de aplicação web para o contexto de barbearias, desenvolvido em JavaScript e estruturado como um produto em evolução.",
    tags: ["JavaScript", "Web App", "GitHub"],
    code: "https://github.com/RodrigoMA21/barberflow",
  },
  {
    title: "Bot de Vagas no WhatsApp",
    type: "Automação",
    description:
      "Automação que pesquisa vagas por API, processa os resultados e envia notificações formatadas diretamente pelo WhatsApp.",
    tags: ["Make", "RapidAPI", "Twilio", "WhatsApp"],
    code: "https://github.com/RodrigoMA21/job-whatsapp-bot",
  },
];

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
    moon: (
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    ),
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
      <path d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6zm16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
        fill="currentColor" opacity="0.04" stroke="currentColor" strokeWidth="0.65" opacity="0.35" strokeLinejoin="round" />
      <rect x="9" y="5" width="10" height="2" rx="0.4" fill="currentColor" opacity="0.15" />
      <rect x="9" y="9" width="10" height="2" rx="0.4" fill="currentColor" opacity="0.15" />
      <rect x="9" y="13" width="6" height="2" rx="0.4" fill="currentColor" opacity="0.15" />
    </svg>
  );
}

function ScissorsIll() {
  return (
    <svg viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="10" rx="4.5" ry="6" stroke="currentColor" strokeWidth="0.7" opacity="0.35" fill="none" />
      <ellipse cx="28" cy="10" rx="4.5" ry="6" stroke="currentColor" strokeWidth="0.7" opacity="0.35" fill="none" />
      <ellipse cx="12" cy="10" rx="2" ry="3" fill="currentColor" opacity="0.04" />
      <ellipse cx="28" cy="10" rx="2" ry="3" fill="currentColor" opacity="0.04" />
      <path d="M 15.5 15 L 20 20" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      <path d="M 24.5 15 L 20 20" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      <path d="M 20 20 L 6 40" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.45" />
      <path d="M 20 20 L 34 40" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.45" />
      <circle cx="20" cy="20" r="2.5" stroke="currentColor" strokeWidth="0.7" opacity="0.4" fill="none" />
      <circle cx="20" cy="20" r="0.9" fill="currentColor" opacity="0.3" />
      <line x1="18" y1="20" x2="22" y2="20" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
    </svg>
  );
}

function RobotIll() {
  return (
    <svg viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="10" width="24" height="20" rx="4" fill="currentColor" opacity="0.06" />
      <rect x="8" y="10" width="24" height="20" rx="4" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <circle cx="16" cy="20" r="4" fill="currentColor" opacity="0.12" />
      <circle cx="16" cy="20" r="2.5" fill="currentColor" opacity="0.35" />
      <circle cx="24" cy="20" r="4" fill="currentColor" opacity="0.12" />
      <circle cx="24" cy="20" r="2.5" fill="currentColor" opacity="0.35" />
      <rect x="17" y="27" width="6" height="2" rx="0.5" fill="currentColor" opacity="0.2" />
      <line x1="20" y1="4" x2="20" y2="10" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
      <circle cx="20" cy="3.5" r="2" fill="currentColor" opacity="0.2" />
      <circle cx="20" cy="3.5" r="1" fill="currentColor" opacity="0.4" />
      <rect x="4" y="14" width="4" height="10" rx="1" fill="currentColor" opacity="0.06" />
      <rect x="4" y="14" width="4" height="10" rx="1" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />
      <rect x="32" y="14" width="4" height="10" rx="1" fill="currentColor" opacity="0.06" />
      <rect x="32" y="14" width="4" height="10" rx="1" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
          document.documentElement.style.setProperty('--scroll-y', scrollY);
          document.documentElement.style.setProperty('--scroll-pct', scrollY / maxScroll);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateBackToTop = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", updateBackToTop, { passive: true });
    updateBackToTop();
    return () => window.removeEventListener("scroll", updateBackToTop);
  }, []);

  return (
    <main data-theme={theme}>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
      >
        <Icon name={theme === 'dark' ? 'moon' : 'sun'} size={20} />
      </button>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Início">
          R<span>.</span>
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
        <nav
          className={menuOpen ? "open" : ""}
          aria-label="Navegação principal"
        >
          {navLinks.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contato">
          Vamos conversar <Icon name="arrow" size={17} />
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
          <p className="eyebrow">Disponível para novos desafios</p>
          <h1>
            Olá, eu sou
            <br />
            <em>Rodrigo Mayer Alves</em>
          </h1>

          <p className="hero-description">
            Desenvolvedor Full Stack com foco em Java, React e Spring Boot,
            criando aplicações web modernas, escaláveis e intuitivas.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projetos">
              Conheça meu trabalho <Icon name="arrow" size={18} />
            </a>
            <a
              className="button ghost"
              href="/Rodrigo_Mayer_Alves_Curriculo_TI.pdf"
              download
            >
              <Icon name="download" size={18} /> Baixar currículo
            </a>
          </div>
        </div>
        <aside className="hero-card" aria-label="Perfil profissional">
          <div className="orb orb-one" />
          <div className="orb orb-two" />

          <img
            src="/profile.jpg.png"
            alt="Rodrigo Mayer Alves"
            className="profile-photo"
          />

          <h3 className="profile-name">Rodrigo Mayer Alves</h3>

          <p className="profile-role">
            Full Stack
            <br />
            Developer
          </p>

          <div className="availability">
            <span />
            Disponível para oportunidades
          </div>
        </aside>
      </section>

      <section id="sobre" className="about section reveal">
        <SectionTitle
          eyebrow="01 / SOBRE MIM"
          title="Tecnologia com olhar para pessoas."
        />
        <div className="about-text">
          <p>
            Gosto de transformar problemas reais em soluções simples, bonitas e
            úteis. Trabalho do planejamento à entrega, unindo código limpo,
            atenção aos detalhes e uma boa experiência para quem usa o produto.
          </p>
          <p>
            Minha jornada é guiada por curiosidade e evolução contínua — sempre
            explorando ferramentas, padrões e ideias que tornam a web melhor.
          </p>
          <a className="text-link" href="#contato">
            Vamos criar algo juntos <Icon name="arrow" size={17} />
          </a>
        </div>
      </section>

      <section id="tecnologias" className="section tech-section reveal">
        <SectionTitle
          eyebrow="02 / TECNOLOGIAS"
          title="Ferramentas que dão vida às ideias."
          text="Tecnologias que utilizo no desenvolvimento de APIs, aplicações web e experiências digitais."
        />
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div className="tech-item" key={tech.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <img
                src={`https://skillicons.dev/icons?i=${tech.icon}&theme=dark`}
                alt={`Ícone ${tech.name}`}
                loading="lazy"
              />
              <strong>{tech.name}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="projetos" className="section projects-section reveal">
        <SectionTitle
          eyebrow="03 / PROJETOS"
          title="Seleção de trabalhos."
          text="Projetos que refletem estudo, prática e vontade de resolver problemas de verdade."
        />
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className={`project-art art-${index + 1}`}>
                <span>{project.type}</span>
                <strong>0{index + 1}</strong>
                <div className="project-illustration">
                  {index === 0 && <BooksIll />}
                  {index === 1 && <ScissorsIll />}
                  {index === 2 && <RobotIll />}
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
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Abrir código do projeto ${project.title}`}
                  >
                    Código <Icon name="github" size={17} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Abrir demonstração do projeto ${project.title}`}
                    >
                      Ver projeto <Icon name="external" size={17} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experiencia" className="section experience reveal">
        <SectionTitle
          eyebrow="04 / TRAJETÓRIA"
          title="Evoluir faz parte do processo."
        />
        <div className="timeline">
          <article>
            <span>Experiência</span>
            <div>
              <h3>Quality Assurance (QA)</h3>
              <p>
                Atuação com qualidade de software, realizando testes,
                identificando falhas e contribuindo para experiências mais
                confiáveis para os usuários.
              </p>
            </div>
          </article>
          <article>
            <span>Hoje</span>
            <div>
              <h3>Desenvolvedor Full Stack</h3>
              <p>
                Construindo projetos pessoais e ampliando repertório em
                desenvolvimento web, automação e boas práticas de engenharia.
              </p>
            </div>
          </article>
          <article>
            <span>Em evolução</span>
            <div>
              <h3>Estudos e especialização</h3>
              <p>
                Aprofundando conhecimentos em React, Node.js, bancos de dados e
                testes automatizados.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="certificados" className="section certificate reveal">
        <div>
          <p className="eyebrow">05 / CERTIFICADOS</p>
          <h2>Aprendizado que vira entrega.</h2>
          <p>
            Estudos em Java que fortalecem minha atuação no desenvolvimento de
            APIs, regras de negócio e aplicações Full Stack.
          </p>
          <a
            className="button ghost certificate-download"
            href="/Rodrigo_Mayer_Alves_Curriculo_TI.pdf"
            download
          >
            <Icon name="download" size={18} /> Baixar currículo
          </a>
        </div>
        <article className="certificate-card" aria-label="Certificado de Java">
          <div className="certificate-seal">
            <img
              src="https://skillicons.dev/icons?i=java&theme=dark"
              alt="Símbolo Java"
            />
          </div>
          <div>
            <span>FORMAÇÃO COMPLEMENTAR</span>
            <h3>Certificado Java</h3>
            <p>Fundamentos e desenvolvimento de aplicações com Java.</p>
            <a
              className="certificate-link"
              href="/certificado-java-rodrigo-mayer-alves.pdf"
              download
            >
              <Icon name="download" size={16} /> Baixar certificado
            </a>
          </div>
        </article>
      </section>

      <section id="contato" className="contact reveal">
        <p className="eyebrow">06 / CONTATO</p>
        <h2>
          Tem uma ideia em mente?
          <br />
          <em>Vamos conversar.</em>
        </h2>
        <a className="contact-email" href="mailto:rodxlr@gmail.com">
          <span className="contact-label">Email:</span> rodxlr@gmail.com
        </a>
        <a
          className="contact-whatsapp"
          href="https://wa.me/5554984479052"
          target="_blank"
          rel="noreferrer"
          aria-label="Fale comigo pelo WhatsApp"
        >
          <img src="/WhatsApp_Logo_PNG_Sem_Fundo_Transparente.png" alt="WhatsApp" className="whatsapp-icon" /> WhatsApp
        </a>
      </section>

      <footer>
        <a className="brand" href="#inicio">
          R<span>.</span>
        </a>
        <p>Desenvolvido por Rodrigo Mayer Alves · {new Date().getFullYear()}</p>
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
        aria-label="Voltar ao topo"
      >
        <Icon name="up" size={20} />
      </button>
    </main>
  );
}

export default App;
