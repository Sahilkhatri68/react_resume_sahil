# 🚀 React Resume Website

This is a personal resume website built using **React.js** and styled with **Tailwind CSS**. It includes multiple sections such as About, Projects, Experience, Skills, and Contact, and uses modern React features like props, state, conditional rendering, and dynamic rendering via `.map()`.

## 🔗 Live Demo

🌐 Vercel Link: [yourname.vercel.app](https://yourname.vercel.app)  
🔗 GitHub Repo: [github.com/yourusername/react-resume](https://github.com/yourusername/react-resume)

---

## 📁 Project Structure

```
/components
  ├── Header.jsx
  ├── About.jsx
  ├── Projects.jsx
  ├── Experience.jsx
  ├── Skills.jsx
  └── Contact.jsx
App.jsx
index.js
tailwind.config.js
README.md
```

---

## ✅ Features Implemented

- ⚛️ React app created using `Vite`
- 📦 Code organized into reusable components: `Header`, `About`, `Projects`, `Experience`, `Skills`, `Contact`
- 🧩 Props passed into components like `Projects` and `Skills`
- 🧠 State management with `useState` (e.g., dark mode toggle, sidebar toggle)
- 🎭 Conditional rendering for theme toggling and mobile sidebar
- 🔁 Dynamic rendering with `.map()` for project and skills list
- 🎨 Styled using **Tailwind CSS** (modular utility-first approach)
- 📱 Fully responsive layout with mobile navigation sidebar
- 🌙 Dark mode support with toggle
- 📤 Deployed live on **Vercel**
- 🔍 Smooth scrolling navigation
- 🌐 External links for projects and social profiles (email, LinkedIn)
- 📄 Resume sections include education, skills, experience, and contact info

---

## 📸 Screenshot

![React Resume Screenshot](https://your-screenshot-link.com)

---

## 🧠 Challenges Faced

- **Dark Mode Navigation Visibility**: Initially, the navigation bar wasn’t visible in dark mode. Resolved this by conditionally applying Tailwind classes for background and text color.
- **Responsive Sidebar**: Creating a sidebar that slides in and out with smooth transitions for small screens required managing state and CSS transitions effectively.
- **Skills Display**: Mapping grouped skill categories dynamically to cards for better readability.
- **Deployment**: Ensuring the Tailwind configuration and dark mode worked correctly on Vercel required proper setup of `tailwind.config.js` and Vite production build handling.

---

## 🛠️ Tech Stack

- **React.js**
- **Tailwind CSS**
- **Vite**
- **Vercel**
- **GitHub**

---

## 📬 Contact

- 📧 Email: yourname@email.com
- 🔗 LinkedIn: [linkedin.com/in/yourname](https://linkedin.com/in/yourname)

---

## 💡 Future Enhancements

- Add animations using Framer Motion or AOS
- Fetch projects dynamically from GitHub API
- Add resume PDF download option
- Implement multi-language support

---

> Built with 💻 and ☕ as part of CSDD 2002 – Client-Side Design & Development.
