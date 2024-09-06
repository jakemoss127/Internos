import React, { useState } from "react";
import { FaCubes } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { FaHouse } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const Messages = () => {
  const [preview, setPreview] = useState(true);
  return (
    <div className="flex items-center justify-center w-full">
      {preview && (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gray-400 p-4 rounded-full border-2 border-gray-200 shadow-lg">
            <FaCubes className="text-gray-600" size={30} />
          </div>
          <div className="mt-6 gap-3 text-xs hidden sm:flex">
            <div className="preview-box">
              <RiComputerFill color="#fa93af" size={16} />
              <p>Show me a couple internships in software engineering</p>
            </div>
            <div className="preview-box">
              <FaDollarSign color="#5dc77f" size={16} />
              <p>Guide me to a finance internship for this summer</p>
            </div>
            <div className="preview-box">
              <FaHouse color="#60d4e0" size={16} />
              <p>Find me a few remote internships for this summer</p>
            </div>
            <div className="preview-box">
              <FaShareAlt color="#f57e5d" size={16} />
              <p>I am looking for a marketing internship in Miami, FL</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
