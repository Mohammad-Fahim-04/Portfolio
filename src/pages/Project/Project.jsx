import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import "./Project.css";

import CampusAI from "../../assets/images/CampusAI.png";
import ResearchMind from "../../assets/images/ResearchMind.png";
import TripAI from "../../assets/images/TripAI.png";

const projects = [
{
title: "ResearchMind",
label: "AI RESEARCH ASSISTANT",
mono: "RM",
img: ResearchMind,
desc: "An AI research assistant that searches the web, extracts relevant information, and generates structured research reports through AI-agent workflows. Writer and critic workflows support the report-generation process.",
skills: [
"React",
"Node.js",
"Express.js",
"Mistral AI",
"LangChain",
"Tavily",
"Web Scraping",
"Qdrant",
"Hugging Face Embeddings",
],
github: "https://github.com/Mohammad-Fahim-04/ResearchMind",
demo: "https://researchmind-frontend.onrender.com",
},
{
title: "CampusAI",
label: "RAG COLLEGE ASSISTANT",
mono: "CA",
img: CampusAI,
desc: "A college assistant that applies Retrieval-Augmented Generation (RAG) to answer academic, fee-related, and general student queries using college documents. Semantic search and vector retrieval help provide context-aware answers.",
skills: [
"React",
"Python",
"FastAPI",
"LangChain",
"LangGraph",
"FAISS",
"Hugging Face Embeddings",
"Groq LLM",
],
github: "https://github.com/Mohammad-Fahim-04/CampusAI",
demo: "https://campusai-xm8p.onrender.com",
},
{
title: "TripAI",
label: "AI TRAVEL PLANNER",
mono: "TA",
img: TripAI,
desc: "An AI-enabled travel planning application for planning trips with recommendations, travel-related API integrations, and automated itinerary generation. It combines a React frontend and Node.js backend with AI services built using FastAPI.",
skills: [
"React",
"Node.js",
"Express.js",
"MongoDB",
"FastAPI",
"Python",
"Gemini AI",
"Redux Toolkit",
"REST APIs",
],
github: "https://github.com/Mohammad-Fahim-04/TripAI",
demo: "https://tripai-986a.onrender.com/",
},
];

export default function Project() {
return ( <section className="project" id="project"> <div className="title"> <h2>Projects</h2> </div>


  <div className="projects-container">
    {projects.map((project, index) => (
      <div className="project-card" key={project.title}>
        <div className="project-media">
          {project.img ? (
            <img src={project.img} alt={`${project.title} project screenshot`} />
          ) : (
            <div className="project-placeholder" aria-hidden="true">
              <span className="project-mono">{project.mono}</span>
              <span className="project-label">{project.label}</span>
            </div>
          )}

          <span className="project-index">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3>{project.title}</h3>
        <p>{project.desc}</p>

        <div className="skills">
          {project.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <div className="btns">
          <a
            href={project.github}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
            <span>GitHub</span>
          </a>

          {project.demo && (
            <a
              href={project.demo}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                aria-hidden="true"
              />
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
