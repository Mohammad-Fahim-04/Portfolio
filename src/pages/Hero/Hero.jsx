import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Mohammad-Fahim-04",
    icon: faGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohammad-fahim-bavan/",
    icon: faLinkedinIn,
  },
  {
    label: "Email",
    href: "mailto:fahimbavan631@gmail.com",
    icon: faEnvelope,
  },
];

/* typing line mein ye words ghoomte rahenge, apne hisaab se badal sakte ho */
const typedWords = [
  "GenAI applications",
  "RAG pipelines",
  "AI agents with LangGraph",
  "full-stack MERN apps",
];

function useTypewriter(words, typeSpeed = 70, deleteSpeed = 35, pause = 1700) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0]);
      return undefined;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[wordIndex];
      charIndex += deleting ? -1 : 1;
      setText(word.slice(0, charIndex));

      let delay = deleting ? deleteSpeed : typeSpeed;

      if (!deleting && charIndex === word.length) {
        deleting = true;
        delay = pause;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
      }

      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 1400);
    return () => clearTimeout(timer);
  }, [words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(typedWords);

  return (
    <section className="hero-redesign" id="hero">
      <div className="hero-redesign__inner">
        <div className="hero-redesign__copy">
          <p className="hero-redesign__eyebrow">HI, I'M</p>
          <h1 className="hero-redesign__name">Fahim</h1>
          <h2 className="hero-redesign__title">GEN AI &amp; MERN Stack Developer</h2>

          <p className="hero-redesign__typing" aria-live="off">
            <span className="hero-redesign__typing-prefix">&gt; building</span>
            <span className="hero-redesign__typing-text">{typed}</span>
            <span className="hero-redesign__caret" aria-hidden="true" />
          </p>

          <p className="hero-redesign__description">
            <span>I build intelligent GenAI applications and modern full-stack</span>
            <span>MERN experiences with clean UI and practical real-world solutions.</span>
          </p>

          <a className="hero-redesign__projects" href="#project">
            <span>VIEW PROJECTS</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
          </a>

          <div className="hero-redesign__socials" aria-label="Social links">
            {socialLinks.map(({ label, href, icon }) => {
              const IconElement = href ? "a" : "span";

              return (
                <IconElement
                  className="hero-redesign__social"
                  href={href || undefined}
                  key={label}
                  aria-label={
                    href
                      ? label
                      : `${label} profile URL placeholder. Add the URL in Hero.jsx.`
                  }
                  title={
                    href
                      ? label
                      : `Add your ${label} profile URL in Hero.jsx`
                  }
                  target={href && href.startsWith("http") ? "_blank" : undefined}
                  rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <FontAwesomeIcon icon={icon} aria-hidden="true" />
                </IconElement>
              );
            })}
          </div>
        </div>

        <div className="hero-redesign__visual">
          <div className="hero-redesign__portrait-frame">
            <img
              className="hero-redesign__portrait"
              src={`${import.meta.env.BASE_URL}img3.png`}
              alt="Anime portrait"
            />
            <span className="hero-redesign__scan" aria-hidden="true" />
          </div>
          <div className="hero-redesign__card hero-redesign__card--role">
            <span className="hero-redesign__card-label">ROLE</span>
            <span className="hero-redesign__card-value">GenAI &amp; MERN Developer</span>
          </div>
          <div className="hero-redesign__card hero-redesign__card--focus">
            <span className="hero-redesign__card-label">FOCUS</span>
            <span className="hero-redesign__card-value">
              Building real-world AI solutions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}