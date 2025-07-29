import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-page" id='contact'>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Whether you have a question, feedback, or partnership inquiry, feel free to reach out.</p>

        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Full Name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Write your message here..." required></textarea>
          </div>
          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
