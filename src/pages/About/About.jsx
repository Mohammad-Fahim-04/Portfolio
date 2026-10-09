import { useState } from "react";
import "./About.css";
import Skills from "./Skills";

function About() {

  const [flip, setFlip] = useState(false);

  return (
    <div className="about" id="about">

      <div className="title">
        <h2>About Me</h2>
      </div>

      <div className="content">

        <div
          className="photo-card"
          onClick={() => setFlip(!flip)}
        >

          <div className={flip ? "photo-inner flip" : "photo-inner"}>

            {/* FRONT IMAGE */}

            <div className="photo-front">
              <img src="img3.png" alt="" />
            </div>

            {/* BACK IMAGE */}

            <div className="photo-back">
              <img src="img4.png" alt="" />
            </div>

          </div>

        </div>

       
<div className="text-about">
  <p>
    Generative AI and MERN Stack enthusiast building scalable web apps with AI-powered features using React, Node.js, Express.js, and MongoDB.
  </p>

  <p>
    I work with LLMs like Mistral and Groq, using LangChain, LangGraph, and MCP (Model Context Protocol) to build intelligent AI workflows and connect AI applications with external tools and services.
  </p>

  <p>
    I have hands-on experience with RAG, FAISS, and FastAPI to build AI systems that provide context-aware answers from real documents. I also work with Tavily for web search, along with Redux Toolkit, JWT, and REST APIs.
  </p>

  <p>
    Always learning and building new things in Generative AI and web development. Open to connect and collaborate.
  </p>
</div>


      </div>

      <Skills />

    </div>
  );
}

export default About;