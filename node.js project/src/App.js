import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Join from "./components/join";
import Chat from "./components/Chat";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
