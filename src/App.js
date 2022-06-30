import React from "react";
import "./App.css";
import SideBar from "./SideBar";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      {/* sidebar */}
      <SideBar />
      <Chat/>
      {/* Chat */}
    </div>
  );
}

export default App;
