import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";
import SEO from "../../components/seo/SEO";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import "../privacy/style.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="legalPage contactPage">
      <SEO
        title="Contact Us"
        description="Get in touch with G-movies. We're here to help with any questions, feedback, or suggestions you may have."
        url="/contact"
      />
      <ContentWrapper>
        <div className="legalContent">
          <h1>Contact Us</h1>
          <p className="lastUpdated">We'd Love to Hear From You</p>

          <section>
            <p>
              Have a question, suggestion, or just want to say hello? We're
              always happy to hear from our users. Fill out the form below or
              use one of our contact methods, and we'll get back to you as soon
              as possible.
            </p>
          </section>

          <div className="contactGrid">
            <div className="contactInfo">
              <h3>Contact Information</h3>

              <div className="infoItem">
                <div className="icon">
                  <FaEnvelope />
                </div>
                <div className="details">
                  <h4>Email</h4>
                  <p>contact@g-movies.com</p>
                </div>
              </div>

              <div className="infoItem">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="details">
                  <h4>Location</h4>
                  <p>Available Worldwide</p>
                </div>
              </div>

              <div className="infoItem">
                <div className="icon">
                  <FaClock />
                </div>
                <div className="details">
                  <h4>Response Time</h4>
                  <p>Within 24-48 hours</p>
                </div>
              </div>

              <div className="infoItem">
                <div className="icon">
                  <FaPhone />
                </div>
                <div className="details">
                  <h4>Support</h4>
                  <p>Email support available</p>
                </div>
              </div>
            </div>

            <div className="contactForm">
              <h3>Send Us a Message</h3>

              {submitted && (
                <div
                  style={{
                    padding: "15px",
                    background: "rgba(46, 204, 113, 0.2)",
                    borderRadius: "10px",
                    marginBottom: "20px",
                    color: "#2ecc71",
                    textAlign: "center",
                  }}
                >
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="formGroup">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    required
                  />
                </div>

                <button type="submit" className="submitBtn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Contact;
