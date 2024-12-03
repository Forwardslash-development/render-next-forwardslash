// pages/index.tsx
'use client';

import React from 'react';

// Type for the Service Card
interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => (
  <div className="service-card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="fade-in-text">Forwardslash Development</h1>
          <h2>Your Partner in Custom Web Applications</h2>
          <p>We build marketing-driven solutions that help your business grow and succeed online.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>
            At Forwardslash Development, we specialize in creating custom web applications tailored to the unique
            needs of startups and small businesses. Our solutions help you drive growth through powerful, marketing-driven
            web tools.
          </p>
        </div>
      </section>

      {/* Key Services */}
      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <ServiceCard
            title="Custom Web Applications"
            description="Tailored to your business needs, from simple tools to complex systems."
          />
          <ServiceCard
            title="Marketing-Focused Solutions"
            description="Apps that integrate directly with your marketing strategy (e.g., landing pages, lead generation tools)."
          />
          <ServiceCard
            title="Consultation for Startups"
            description="Helping startups define their digital needs and create scalable solutions."
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <p>
            We understand the challenges startups and small businesses face, and we’re dedicated to providing high-performance,
            scalable solutions that fit your needs. With a focus on marketing-driven development, we help you achieve your
            business goals.
          </p>
          <ul>
            <li>Expertise in marketing-driven development</li>
            <li>Custom-built solutions for each client</li>
            <li>A collaborative approach focused on your success</li>
          </ul>
        </div>
      </section>

      {/* Testimonials (Optional) */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <blockquote>
            &apos; Forwardslash Development helped us launch our custom web application, and the results have been fantastic. We&rsquo;ve
            seen a 30% increase in leads &rsquo; — <strong>Client Name, Business</strong>
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Let’s Build Something Great Together!</h2>
          <a href="#contact" className="cta-button">Contact Us Today</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>Forwardslash Development | <a href="mailto:contact@forwardslashdev.com">contact@forwardslashdev.com</a></p>
          <div>
            <a href="#" target="_blank">LinkedIn</a> | <a href="#" target="_blank">Twitter</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .container {
          width: 80%;
          margin: 0 auto;
        }
        .hero {
          background-image: url('tK7_V3nT.jpg');
          background-size: cover;
          background-position: center;
          color: white;
          padding: 100px 0;
          text-align: center;
        }
          .fade-in-text {
          opacity: 0;
          animation: fadeIn 2s ease-out forwards;
          font-size: 64px; /* Adjust as needed */
          font-weight: bold;
          color: #ff; /* Customize your text color */
          }
          /* Keyframes for fade-in effect */
          @keyframes fadeIn {
          0% {
          opacity: 0;
          transform: translateY(20px); /* Start with slight downward movement */
          }
          100% {
          opacity: 1;
          transform: translateY(0); /* End with the text in its normal position */
          }
        }
        .cta-button {
          background-color: #e60000;
          color: white;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 5px;
        }
        .about, .services, .why-choose-us, .testimonials, .cta {
          padding: 40px 0;
        }
        .services .service-card {
          margin: 20px;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
        .why-choose-us ul {
          list-style-type: none;
          padding: 0;
        }
        .why-choose-us li {
          margin: 10px 0;
        }
        footer {
          background: #f1f1f1;
          padding: 20px 0;
          text-align: center;
        }
        footer a {
          color: #0070f3;
        }
      `}</style>
    </div>
  );
};

export default Home;
