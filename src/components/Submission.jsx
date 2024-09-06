import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Submission = () => {
  const handleSubmission = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const [loading, setLoading] = useState(false);
  return (
    <div className="flex items-center justify-center w-full min-w-full gap-2">
      <input
        type="text"
        placeholder="Type here"
        className="input border-2 border-gray-200 shadow-lg w-full max-w-2xl"
      />
      <button className="border-gay-200 border-2 p-2 rounded-full shadow-md max-h-9 flex justify-center items-center" onClick={handleSubmission}>
        {loading ? <span className="loading loading-spinner loading-xs text-gray-400"></span> : <FaArrowUp className="text-gray-400"/>}
      </button>
    </div>
  );
};

export default Submission;
