import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <div className="flex gap-10">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/vivek-kumar-2k23/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-blue-500 transition"
        >
          <FaLinkedin size={50} />
          <span className="mt-2">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Vivek210404"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-gray-400 transition"
        >
          <FaGithub size={50} />
          <span className="mt-2">GitHub</span>
        </a>

        {/* Email */}
        <a
          href="mailto:vivek210404@gmail.com"
          className="flex flex-col items-center hover:text-red-500 transition"
        >
          <FaEnvelope size={50} />
          <span className="mt-2">Email</span>
        </a>
      </div>
    </div>
  );
}
