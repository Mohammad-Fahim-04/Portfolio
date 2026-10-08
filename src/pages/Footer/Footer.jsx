import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer(){

  return(

    <footer className="footer">

      <div className="footer-container">

        <p>© 2026 Mohammad Fahim Bavan</p>

        <div className="social-icons">

          <a href="https://github.com/Mohammad-Fahim-04" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/mohammad-fahim-bavan/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
          {/* <a href="#"><FaInstagram/></a> */}

        </div>

      </div>

    </footer>

  )

}

export default Footer;