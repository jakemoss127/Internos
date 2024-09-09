import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaCubes } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const InternshipCard = ({ job_title, employer_name, employer_logo, job_apply_link, job_city }) => {

  return (
    <div className="card card-side bg-white border-2 border-gray-200 p-4 shadow-md flex items-center max-w-[28rem] w-full">
      <figure className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full overflow-hidden">
        {employer_logo ? (
          <img
            src={employer_logo}
            alt={`${employer_name} logo`}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.src = "../../public/internos.png"; // Fallback logo
              e.target.alt = "No logo"; // Fallback alt text
            }}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-400">
            <FaCubes size={20}/>
          </div>
        )}
      </figure>
      <div className="ml-3">
        <h2 className="font-semibold text-black text-sm truncate">
          {/* Safeguard against null or undefined job_title */}
          {job_title ? (job_title.length > 20 ? `${job_title.slice(0, 20)}...` : job_title) : "Unknown Title"}
        </h2>
        <p className="text-gray-500 text-xs truncate">{employer_name || "Unknown Company"}</p>
      </div>
      <div className="mr-6 flex-grow">
        <div className="flex justify-center ml-2 gap-1.5 items-center text-gray-500">
          <FaLocationDot size={12} />
          <h4 className="text-xs text-right ">
            {/* Safeguard against null or undefined job_city */}
            {job_city ? (job_city.length > 15 ? `${job_city.slice(0, 15)}...` : job_city) : "Unknown City"}
          </h4>
        </div>
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
