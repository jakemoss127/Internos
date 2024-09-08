import React from "react";
import { FaArrowRight } from "react-icons/fa";

const InternshipCard = ({ internship }) => {
  const { job_title, employer_name, employer_logo, job_apply_link } =
    internship;

  return (
    <div className="card card-side bg-white border-2 border-gray-200 p-2 shadow-md flex items-center max-w-xs w-full">
      <figure className="w-12 h-12">
        {employer_logo ? (
          <img
            src={employer_logo}
            alt={`${employer_name} logo`}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center text-xs text-gray-400">
            No Logo
          </div>
        )}
      </figure>
      <div className="ml-3 flex-grow">
        <h2 className="font-semibold text-sm truncate">{job_title}</h2>
        <p className="text-gray-500 text-xs truncate">{employer_name}</p>
      </div>
      <div className="ml-auto min-h-full">
        <a
          href={job_apply_link}
          target="_blank"
          rel="noopener noreferrer"
          className="border-gray-200 border-2 shadow-sm p-2 rounded-full max-h-9 flex btn-xs justify-center items-center"
        >
          <FaArrowRight className="text-gray-400" />
        </a>
      </div>
    </div>
  );
};

export default InternshipCard;
