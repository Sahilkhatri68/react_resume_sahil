import React from "react";

const About = ({ title }) => (
  <section id="about" className="py-2">
    <p className="text-lg leading-relaxed">
      <h2 className="text-3xl font-semibold mb-4 ">{title}</h2>
      I’m a passionate Full-Stack Developer with 3+ years of experience building
      modern web applications using the MERN stack. I’ve worked in startup
      environments and as a student developer, contributing to educational
      platforms and web utilities.
    </p>
  </section>
);

export default About;
