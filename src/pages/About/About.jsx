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
    I am an aspiring AI Engineer building practical AI applications and full-stack web experiences. I use Python for AI development and React, Node.js, Express.js, and MongoDB to build web applications.
  </p>

  <p>
    My AI experience includes working with LLMs such as Mistral and Groq, and using LangChain, LangGraph, and MCP (Model Context Protocol) to build intelligent workflows and connect applications with external tools and services.
  </p>

  <p>
    I have hands-on experience with Retrieval-Augmented Generation (RAG), embeddings, FAISS, and FastAPI for context-aware systems grounded in documents. I also work with Tavily for web search, alongside Redux Toolkit, JWT, and REST APIs.
  </p>

  <p>
    I am continually learning across AI engineering and full-stack development, and I am open to connecting and collaborating.
  </p>
</div>


      </div>

      <Skills />

    </div>
  );
}

export default About;