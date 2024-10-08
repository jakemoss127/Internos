import React from "react";
import { FaCubes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="navbar bg-base-100 border-2 border-gray-200 rounded-xl shadow-lg">
      <div className="navbar-start gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] border-2 border-gray-200 mt-4 w-52 p-2 shadow-md"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/documentation">Documentation</Link>
            </li>
            <li>
              <a target="blank" href="https://github.com/jakemoss127/Internos">
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <label className="scale-75 hidden sm:flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="dark"
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl flex items-center">
          Internos
          <FaCubes />
        </Link>
      </div>
      <div className="navbar-end">
        <button className="p-2 rounded-full shadow-md max-h-9 flex justify-center items-center mr-2">
          {/* Add the user's google prof picture here if logged in, instead of the Icon  */}
          <FaUser/>
        </button>
      </div>
    </div>
  );
};

export default Nav;
