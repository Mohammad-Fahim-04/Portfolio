import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "./Project.css";

/*
  Screenshot lagana ho to:
  1. image ko src/assets/images/ mein rakho
  2. upar import karo:  import researchImg from "../../assets/images/researchmind.png";
  3. neeche us project mein  img: researchImg  likh do
  Jab tak img null hai, ek clean placeholder dikhega.
*/

const projects = [
  {
    title: "ResearchMind",
    label: "AI RESEARCH ASSISTANT",
    mono: "RM",
    img: null,
    desc: "AI-powered web research assistant. It searches the web, gathers information and delivers structured research results.",
    skills: ["React", "Mistral AI", "LangChain", "Tavily"],
    github: "https://github.com/Mohammad-Fahim-04/ResearchMind",
    demo: "https://research-mind-psi-blond.vercel.app"
  },

  {
    title: "CampusAI",
    label: "RAG COLLEGE ASSISTANT",
    mono: "CA",
    img: null,
    desc: "GenAI college assistant that answers academic, fee-related and general student queries from college documents using RAG.",
    skills: ["React", "FastAPI", "LangGraph", "FAISS", "Groq"],
    github: "https://github.com/Mohammad-Fahim-04/CampusAI",
    demo: null
  }
];

export default function Project() {

  return (

    <section className="project" id="project">

      <div className="title">
        <h2>Projects</h2>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={project.title}>

            <div className="project-media">
              {project.img ? (
                <img src={project.img} alt={project.title} />
              ) : (
                <div className="project-placeholder" aria-hidden="true">
                  <span className="project-mono">{project.mono}</span>
                  <span className="project-label">{project.label}</span>
                </div>
              )}
              <span className="project-index">0{index + 1}</span>
            </div>

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="skills">
              {project.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <div className="btns">

              <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
                <span>GitHub</span>
              </a>

              {project.demo && (
                <a href={project.demo} className="btn" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
                  <span>Live Demo</span>
                </a>
              )}

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}