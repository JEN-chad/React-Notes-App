import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full flex justify-center items-center gap-4 p-4 bg-gray-100 h-28 text-3xl">
      {/* GitHub */}
      <a
        href="https://github.com/JEN-chad/React-Notes-App"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-700 text-2xl"
      >
        <FaGithub />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/jenishj-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 text-2xl"
      >
        <FaLinkedin />
      </a>

      <span className=" text-gray-700 text-xl">By 🔥 Jenish</span>
    </div>
  );
};
