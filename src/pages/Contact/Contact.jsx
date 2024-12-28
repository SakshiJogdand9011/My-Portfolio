import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_29ohdlp', // Replace with your EmailJS service ID
        'template_56yajnc', // Replace with your EmailJS template ID
        {
          from_name: formData.fullname,
          from_email: formData.email,
          message: formData.message,
        },
        'cK7xKQyoDYSeJbhDC' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message sent successfully!');
          setFormData({ fullname: '', email: '', message: '' }); // Clear the form
        },
        (err) => {
          console.error('FAILED...', err);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0388080153024!2d73.85674237474369!3d18.520430208151837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c063b8d787fb%3A0x6536e07e89f3e3df!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
            width="400"
            height="300"
            loading="lazy"
            title="Google Map"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" data-form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              value={formData.fullname}
              onChange={handleChange}
              required
              data-form-input
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            data-form-input
          ></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>

        {status && <p className="form-status">{status}</p>}
      </section>
    </section>
  );
};

export default Contact;
