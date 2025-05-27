// App.jsx
import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Menu, X } from "lucide-react";
import Skills from "./components/Skill";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.className = darkMode
      ? "bg-gray-900 text-white"
      : "bg-gray-50 text-gray-800";
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="font-sans relative">
      {/* Sidebar for small screens */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 sm:hidden`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={toggleSidebar}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-4 space-y-4">
          <a
            href="#about"
            onClick={toggleSidebar}
            className="block hover:text-blue-500"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={toggleSidebar}
            className="block hover:text-blue-500"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={toggleSidebar}
            className="block hover:text-blue-500"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={toggleSidebar}
            className="block hover:text-blue-500"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Sticky Navigation */}
      <nav
        className={`sticky top-0 z-50 shadow-md py-4 transition-colors duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <div className="font-bold text-xl">My Resume</div>
          <div className="space-x-4 hidden sm:block">
            <a
              href="#about"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
            <button onClick={toggleSidebar} className="sm:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-8 scroll-smooth">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
