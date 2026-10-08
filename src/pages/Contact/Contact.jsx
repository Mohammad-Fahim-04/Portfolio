import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const serviceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID || "").trim();
  const templateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "").trim();
  const publicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "").trim();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("");

    const missingVariables = [
      ["VITE_EMAILJS_SERVICE_ID", serviceId],
      ["VITE_EMAILJS_TEMPLATE_ID", templateId],
      ["VITE_EMAILJS_PUBLIC_KEY", publicKey],
    ]
      .filter(([, value]) => !value)
      .map(([name]) => name);

    if (missingVariables.length > 0) {
      console.error("Missing EmailJS environment variables:", missingVariables);
      setStatus("Email service is not configured");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        { publicKey: publicKey }
      );
      formRef.current.reset();
      setStatus("Message sent successfully!");
    } catch (error) {
      console.error("EmailJS submission failed:", error.status, error.text);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact" id="contact">

      <div className="title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        {/* LEFT INFO */}

        <div className="contact-info">

          <h3>Get In Touch</h3>

          <p>
            If you want to work together or have any question,
            feel free to contact me.
          </p>

          <div className="info-item">
            <FaEnvelope className="contact-icon"/>
            <span>fahimbavan631@gmail.com</span>
          </div>

          <div className="info-item">
            <FaPhone className="contact-icon"/>
            <span>+91 9016514932</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon"/>
            <span>Ahmedabad, Gujarat</span>
          </div>

        </div>

        {/* RIGHT FORM */}

        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              className={`contact-form-status ${
                status === "Message sent successfully!"
                  ? "contact-form-status--success"
                  : "contact-form-status--error"
              }`}
              role="status"
              aria-live="polite"
            >
              {status}
            </p>
          )}
        </form>

      </div>

    </div>
  );

}

export default Contact;