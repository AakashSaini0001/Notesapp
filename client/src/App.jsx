import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import NoteCard from "./components/NoteCard.jsx";
import DeleteModal from "./components/Modal.jsx";
import CreateNote from "./components/CreateNote";
import ViewNote from "./components/ViewNote";
import Settings from "./components/Settings.jsx";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup.jsx";
import Trash from "./components/Trash.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import Register from "./components/Register.jsx";

function App() {

  return (

    <>
    <div className="flex h-full w-fullce">
      <Sidebar className="w-full" />
      <div className="w-full">
      <Navbar className="w-full"/>
      <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/create-note" element={<CreateNote />} />
          <Route path="/view-notes" element={<ViewNote />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
