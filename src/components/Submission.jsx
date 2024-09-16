import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Submission = ({ message, setMessage, onMessageSubmit, setResultArr }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmissionWithQuery = async () => {
    if (!message) return; // Don't submit if the message is empty
    setLoading(true);
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_REACT_APP_RAILWAY
        }/search?query=${encodeURIComponent(message)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          if (data.length === 0) {
            console.warn("No results found for the query.");
            onMessageSubmit([]); // No results, send an empty array to the parent
          } else {
            console.log("Received data from backend:", data);
            onMessageSubmit(data); // Pass the results to the parent component
            setResultArr(data); // Store the results in the state
          }
        } else {
          console.error("Expected JSON response but received:", contentType);
          const errorText = await response.text();
          console.error("Response text:", errorText);
        }
      } else {
        console.error(
          `Error: Received ${response.status} ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Error submitting the message:", error);
    } finally {
      setLoading(false); // Ensure loading is set to false after the request is complete
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-w-full gap-2">
      <input
        type="text"
        placeholder="Type here"
        value={message}
        onChange={(e) => setMessage(e.target.value)} // Allow message to be updated
        className="input border-2 border-gray-200 shadow-lg w-full max-w-2xl"
      />
      <button
        className="border-gray-200 border-2 p-2 rounded-full shadow-md max-h-9 flex justify-center items-center"
        onClick={handleSubmissionWithQuery}
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
