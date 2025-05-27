// Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="py-10">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="mb-4">
        Feel free to reach out to me through the following platforms:
      </p>

      <div className="space-y-2">
        <a
          href="mailto:sahil21@loyalistcollege.com"
          className="text-blue-600 hover:underline block"
          target="_blank"
          rel="noopener noreferrer"
        >
          📧 sahil21@loyalistcollege.com
        </a>

        <a
          href="https://www.linkedin.com/in/sahil-khatri-519aa3222/"
          className="text-blue-600 hover:underline block"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 LinkedIn Profile
        </a>
      </div>
    </section>
  );
}
