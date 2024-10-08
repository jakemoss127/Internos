import React, { useState, useEffect } from "react";
import { FaCubes } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { FaHouse } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import InternshipCard from "./InternshipCard";
import responses from "../assets/response.js";

const Messages = ({ messages, onPreviewClick }) => {
  const [preview, setPreview] = useState(true);
  const [selectedResponse, setSelectedResponse] = useState("");

  useEffect(() => {
    if (messages.length > 0) {
      setPreview(false);
      setSelectedResponse(responses[Math.floor(Math.random() * responses.length)]);
    }
  }, [messages]);

  return (
    <div className="flex items-center justify-center w-full mb-4">
      {preview ? (
        <div className="flex flex-col items-center justify-center">
          <span className="badge badge-sm shadow-sm">Internos Beta</span>
          <div className="p-4 mt-4 rounded-full border-2 border-gray-200 shadow-lg">
            <FaCubes size={30} />
          </div>
          <div className="mt-6 gap-3 text-xs hidden sm:flex">
            <div
              className="preview-box"
              onClick={() =>
                onPreviewClick(
                  "Show me a couple internships in software engineering"
                )
              }
            >
              <RiComputerFill color="#fa93af" size={16} />
              <p>Show me a couple internships in software engineering</p>
            </div>
            <div
              className="preview-box"
              onClick={() =>
                onPreviewClick(
                  "Guide me to a finance internship for this summer"
                )
              }
            >
              <FaDollarSign color="#5dc77f" size={16} />
              <p>Guide me to a finance internship for this summer</p>
            </div>
            <div
              className="preview-box"
              onClick={() =>
                onPreviewClick(
                  "Find me a few remote internships for this summer"
                )
              }
            >
              <FaHouse color="#60d4e0" size={16} />
              <p>Find me a few remote internships for this summer</p>
            </div>
            <div
              className="preview-box"
              onClick={() =>
                onPreviewClick(
                  "I am looking for a marketing internship in Miami, FL"
                )
              }
            >
              <FaShareAlt color="#f57e5d" size={16} />
              <p>I am looking for a marketing internship in Miami, FL</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`w-full max-w-2xl ${
            messages.length % 2 === 0 ? "chat-start" : "chat-end"
          }`}
        >
          {messages.length === 0 ? (
            <p>No messages yet</p>
          ) : (
            <div className="space-y-4">
              <div
           className="w-full flex flex-col gap-2 max-w-2xl">
            <div className="chat chat-end chat-bubble">{selectedResponse}</div>
              {messages.map((message, index) => (
                  console.log(message.job_title),
                <InternshipCard key={index} job_city={message.job_city} job_title={message.job_title} employer_name={message.employer_name} employer_logo={message.employer_logo} job_apply_link={message.job_apply_link}/>
              ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Messages;
