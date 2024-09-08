import React from "react";
import { FaCubes } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <footer className="  absolute bottom-0 footer p-8 items-center">
        <aside className="grid-flow-col items-center">
          <FaCubes className="scale-75 sm:scale-100" size={36} />
          <p className="sm:ml-2 ml-0 sm:scale-100">
            Internos Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </aside>
        <nav className="gap-4 hidden md:visible md:flex md:place-self-center md:justify-self-end">
          <a>
            <FaTiktok size={22}/>
          </a>
          <a>
            <FaLinkedin size={24} />
          </a>
          <a>
            <FaGithub size={24} />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
