import React from 'react';
import '../styles/About.css';
import FAQ from '../components/FAQ'; // ✅ Import FAQ component

const About = () => (
  <div className="about-section container">
    <h2>About Us</h2>
    <p>We offer advanced dental care with a personal touch.</p>

    <h4>Meet Dr. Smith</h4>
    <p>15+ years experience, specializing in cosmetic and family dentistry.</p>

    <h4>Our Philosophy</h4>
    <p>Compassion, prevention, and excellence in care.</p>

    {/* ✅ Add FAQ at the end */}
    <FAQ />
  </div>
);

export default About;
