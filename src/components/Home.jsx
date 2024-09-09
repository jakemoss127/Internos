import { useState } from "react";
import "../App.css";
import Submission from "./Submission";
import Nav from "./Nav";
import Messages from "./Messages";
import InternshipCard from "./InternshipCard";

function Home() {
  const [message, setMessage] = useState(""); // Store the input message
  const [messages, setMessages] = useState([]); // Store the list of messages
  const [resultArr, setResultArr] = useState([]); // Store the list of results

  // Function to handle new message submissions
  const handleMessages = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]); // Append the new message to the list
  };

  // Function to handle preview click and update the input message
  const handlePreviewClick = (previewMessage) => {
    setMessage(previewMessage); // Update the message input value in Submission
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-between p-8">
      <Nav />
      <div>
        <Messages messages={resultArr} onPreviewClick={handlePreviewClick} />
      </div>
      <div className="w-full">
        <Submission
          message={message}
          setMessage={setMessage}
          onMessageSubmit={handleMessages}
          setResultArr={setResultArr}
        />
      </div>
    </div>
  );
}

export default Home;
