import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaRobot,
  FaBrain,
  FaDatabase
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiJsonwebtokens,
  SiTailwindcss,
  SiPython,
  SiFastapi,
  SiLangchain,
  SiHuggingface,
  SiPostman,
  SiVercel
} from "react-icons/si";

function Skills() {
  return (
    <div className="skills">
      <h3>Skills</h3>
      <div className="skills-slider">
        <div className="skills-track">

          {/* Frontend */}
          <FaHtml5 title="HTML5" />
          <FaCss3Alt title="CSS3" />
          <FaJs title="JavaScript" />
          <FaReact title="React.js" />
          <SiRedux title="Redux Toolkit" />
          <SiTailwindcss title="Tailwind CSS" />

          {/* Backend (MERN) */}
          <FaNodeJs title="Node.js" />
          <SiExpress title="Express.js" />
          <SiMongodb title="MongoDB" />
          <SiJsonwebtokens title="JWT" />

          {/* Gen AI */}
          <SiPython title="Python" />
          <SiFastapi title="FastAPI" />
          <SiLangchain title="LangChain / LangGraph" />
          <FaRobot title="LLMs & AI Agents" />
          <FaBrain title="Prompt Engineering" />
          <FaDatabase title="RAG & Embeddings (FAISS)" />
          <SiHuggingface title="Hugging Face" />

          {/* Tools */}
          <FaGitAlt title="Git" />
          <FaGithub title="GitHub" />
          <SiPostman title="Postman" />
          <SiVercel title="Vercel" />

        </div>
      </div>
    </div>
  );
}

export default Skills;