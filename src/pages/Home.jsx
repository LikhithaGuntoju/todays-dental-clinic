import React from 'react';
import '../styles/Home.css';

const Home = () => (
  <div className="home-page">
    <section className="hero-section">
      <div className="hero-content container">
        <h1>Welcome to Today's Dental Clinic</h1>
        <p>Gentle and expert dental care for the entire family.</p>
        <a href="/contact" className="hero-btn">Book an Appointment</a>
      </div>
    </section>

    <section className="intro-section container">
      <h2>Why Choose Us?</h2>
      <p>We use state-of-the-art technology and a compassionate approach to care for your smile.</p>
    </section>

    <section className="services-preview container">
      <h2>Our Core Services</h2>
      <div className="row">
        <div className="col-md-4 service-preview-card">
          <i className="bi-emoji-smile"></i>
          <h4>General Dentistry</h4>
          <p>Routine cleanings and checkups.</p>
        </div>
        <div className="col-md-4 service-preview-card">
          <i className="bi bi-star"></i>
          <h4>Cosmetic Care</h4>
          <p>Smile makeovers and whitening.</p>
        </div>
        <div className="col-md-4 service-preview-card">
          <i className="bi bi-braces"></i>
          <h4>Orthodontics</h4>
          <p>Braces and aligners for all ages.</p>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
