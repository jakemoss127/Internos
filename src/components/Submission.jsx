import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Submission = ({ onMessageSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmission = () => {
    if (!message) return; // Don't submit if message is empty
    setLoading(true);
    setTimeout(() => {
      onMessageSubmit(message); // Pass the message to the parent component (App.jsx)
      setMessage(""); // Clear the input after submission
      setLoading(false);
    }, 500);
  };

  return (
    <div className="flex items-center justify-center w-full min-w-full gap-2">
      <input
        type="text"
        placeholder="Type here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="input border-2 border-gray-200 shadow-lg w-full max-w-2xl"
      />
      <button
        className="border-gray-200 border-2 p-2 rounded-full shadow-md max-h-9 flex justify-center items-center"
        onClick={handleSubmission}
      >
        {loading ? (
          <span className="loading loading-spinner loading-xs text-gray-400"></span>
        ) : (
          <FaArrowUp className="text-gray-400" />
        )}
      </button>
    </div>
  );
};

export default Submission;
