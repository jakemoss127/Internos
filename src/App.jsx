import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Submission from "./components/Submission";
import Nav from "./components/Nav";
import Messages from "./components/Messages";
import Home from "./components/Home";
import Documentation from "./components/Documentation";
function App() {
  const [messages, setMessages] = useState([]);

  // Function to handle new message submissions
  const handleMessages = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]); // Append the new message to the list
  };

  return (
    <>
      <Router>
        <div className="w-full flex flex-col justify-between">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documentation" element={<Documentation />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
