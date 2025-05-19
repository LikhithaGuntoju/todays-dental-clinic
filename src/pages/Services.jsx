import React from 'react';
import '../styles/Services.css';

const services = [
  { icon: 'bi bi-heart-pulse', title: 'General Dentistry', desc: 'Cleanings & checkups.' },
  { icon: 'bi-braces', title: 'Orthodontics', desc: 'Braces & aligners.' },
  { icon: 'bi-star', title: 'Cosmetic Dentistry', desc: 'Whitening & veneers.' },
  { icon: 'bi-heart', title: 'Pediatric Dentistry', desc: 'Child-friendly care.' },
  { icon: 'bi-shield-check', title: 'Oral Surgery', desc: 'Extractions & implants.' },
  { icon: 'bi-emoji-smile', title: 'Preventive Care', desc: 'Sealants & fluoride.' },
];

const Services = () => (
  <div className="container services-page">
    <h2>Our Services</h2>
    <div className="row">
      {services.map((service, index) => (
        <div key={index} className="col-md-4 service-card">
          <i className={`bi ${service.icon}`}></i>
          <h5>{service.title}</h5>
          <p>{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
