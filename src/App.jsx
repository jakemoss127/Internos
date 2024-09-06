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
        <div className="max-w-3/5">
          <Nav />
        </div>
        <div>
          <Messages />
        </div>
        <div className="max-h-max">
          <Submission />
        </div>
      </div>
    </>
  );
}

export default App;
