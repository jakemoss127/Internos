import { useState } from "react";
import "../App.css";
import Submission from "./Submission";
import Nav from "./Nav";
import Messages from "./Messages";
import InternshipCard from "./InternshipCard";

function Home() {
  const [message, setMessage] = useState(""); // Store the input message
  const [messages, setMessages] = useState([]); // Store the list of messages

  const internships = [
    {
      id: 8691,
      employer_name: "Veolia North America",
      employer_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzGCe4Swr6zgscD5UuEgHjBJnBkHu2SDrGeFaE&s=0",
      job_title: "Finance Intern",
      job_apply_link:
        "https://www.lgbtconnect.com/job/finance-intern-690327?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      job_is_remote: false,
    },
    // Add more internships here
  ];

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
        <Messages messages={messages} onPreviewClick={handlePreviewClick} />
      </div>
      <div className="w-full">
        <Submission
          message={message}
          setMessage={setMessage}
          onMessageSubmit={handleMessages}
        />
      </div>
    </div>
  );
}

export default Home;
