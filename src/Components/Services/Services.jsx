import React from "react";
import "./Services.css";

const servicesData = [
  {
    title: "Property Listings",
    description:
      "Browse verified houses, apartments, and lodges tailored to your needs.",
    icon: "🏠",
  },
  {
    title: "Agent Support",
    description:
      "Our certified agents guide you from search to inspection with ease.",
    icon: "🤝",
  },
  {
    title: "Virtual Tours",
    description:
      "Take 360° virtual tours of properties before booking a physical visit.",
    icon: "🎥",
  },
  {
    title: "Secure Payment",
    description:
      "Pay safely through our platform with secure transaction tracking.",
    icon: "💳",
  },
  {
    title: "Rent Alerts",
    description:
      "Set alerts and get notified when new listings match your budget.",
    icon: "🔔",
  },
  {
    title: "24/7 Support",
    description:
      "Our customer support team is always available to assist you.",
    icon: "📞",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
