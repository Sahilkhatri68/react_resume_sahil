import React from "react";

const projects = [
  {
    title: "School Portal",
    description:
      "A complete school data management portal, which has multiple screens according to user's role.",
    link: "https://schoolportal-frontend.vercel.app/login",
  },
  {
    title: "Youtube video downloader",
    description:
      "A website to download youtube videos by pasting the url of video",
    link: "https://youtubevideodownloader-seven.vercel.app/",
  },
];

const Projects = () => (
  <section id="projects" className="py-2">
    <h2 className="text-3xl font-semibold mb-4">Projects</h2>
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project, index) => (
        <div
          key={index}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow border dark:border-gray-700"
        >
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            {project.description}
          </p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              View Project ↗
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
