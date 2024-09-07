import { useState } from "react";
import "../App.css";
import Submission from "./Submission";
import Nav from "./Nav";
import Messages from "./Messages";

function Home() {
  const [messages, setMessages] = useState([]);

  // Function to handle new message submissions
  const handleMessages = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]); // Append the new message to the list
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-between p-8">
        <Nav />
        <div>
          <Messages messages={messages} /> {/* Pass messages state as a prop */}
        </div>
        <div className="w-full">
          <Submission onMessageSubmit={handleMessages} /> {/* Pass the handler to Submission */}
        </div>
      </div>
    </>
  );
}

export default Home;
