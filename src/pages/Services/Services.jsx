import "./Services.css"
import { FaCode, FaRobot, FaServer } from "react-icons/fa";

function Services(){

  return(
    <div className="services" id="serv">

      <div className="title">
        <h2>What I Do</h2>
      </div>

      <div className="services-container">

       

        <div className="service-card">
          <FaServer className="service-icon"/>
          <h3>Full Stack MERN Apps</h3>
          <p>I create full stack web applications with Node.js, Express.js and MongoDB, including REST APIs and JWT authentication.</p>
        </div>

        <div className="service-card">
          <FaRobot className="service-icon"/>
          <h3>Generative AI Apps</h3>
          <p>I build AI-powered apps using LLMs, RAG, LangChain and LangGraph, such as chatbots and research assistants.</p>
        </div>

      </div>

    </div>
  )

}

export default Services;