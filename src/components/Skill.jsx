export default function Skills() {
  const skillCategories = {
    Languages: ["JavaScript", "TypeScript", "Java", "Php"],
    Frontend: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
    Backend: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    "Tools & Platforms": ["Git", "GitHub", "Vercel", "Netlify"],
    Others: ["Responsive Design", "JSON", "Postman"],
  };

  return (
    <section id="skills" className="py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div
            key={category}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5"
          >
            <h3 className="text-xl font-semibold mb-3 border-b border-gray-300 dark:border-gray-600 pb-1">
              {category}
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {skills.map((skill) => (
                <li key={skill} className="text-gray-800 dark:text-gray-200">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
