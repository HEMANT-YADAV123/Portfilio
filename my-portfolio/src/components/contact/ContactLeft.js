import { contactImg } from "../../assets/index.js";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
const ContactLeft = () => {
  return (
    <div className="w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 lg:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contact"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Hemant Yadav</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Passionate about crafting responsive and user-centric web
          applications, with a strong foundation in MERN Stack. Open to new
          opportunities where I can contribute to impactful projects and further
          develop my skills.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7976540421</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">hy700793@gmail.com</span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            {" "}
            <FaFacebook />
          </span>
          <span className="bannerIcon">
            {" "}
            <FaInstagram />
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/hemant-yadav-88b100258/"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaLinkedin />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
