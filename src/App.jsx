import { useState } from "react";
import "./App.css";
import Submission from "./components/Submission";
import Nav from "./components/Nav";
import Messages from "./components/Messages";

function App() {
  return (
    <>
      <div
        className="w-full min-h-screen flex flex-col justify-between
      p-8"
      >
        <div className="">
          <Nav />
        </div>
        <div>
          <Messages />
        </div>
        <div className="w-full">
          <Submission />
        </div>
      </div>
    </>
  );
}

export default App;
