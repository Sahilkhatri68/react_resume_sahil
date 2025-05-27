import React from "react";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Motilearn Private Limited",
    duration: "Sep 2023 - Mar 2024",
    details:
      "Developed features and dashboards using MERN stack in a team setting.",
  },
  {
    role: "Full-Stack Developer",
    company: "Teleconference Analysis Management Services",
    duration: "Jun 2022 - Jul 2023",
    details:
      "Built internal tools with React and Node.js, improved UI performance.",
  },
  {
    role: "Full-Stack Intern",
    company: "ThinkNEXT Technologies",
    duration: "Dec 2021 - May 2022",
    details: "Created small projects using HTML, CSS, JavaScript, and PHP.",
  },
];

const Experience = () => (
  <section id="experience" className="py-2">
    <h2 className="text-3xl font-semibold mb-4">Experience</h2>
    <ul className="space-y-6">
      {experiences.map((exp, index) => (
        <li key={index} className="p-6 bg-white rounded-xl shadow border">
          <h3 className="text-xl font-bold">
            {exp.role} @ {exp.company}
          </h3>
          <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
          <p>{exp.details}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Experience;
