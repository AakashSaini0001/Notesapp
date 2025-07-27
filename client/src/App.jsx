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
    // <Router>
    //   <div className="flex h-screen">
    //     <Sidebar />

    //     <div className="flex-1 flex flex-col bg-[#12141D] text-white">
    //       <Navbar />
    //       <div className="border-b border-[#2f334d]" />

    //       {/* Page Content Area */}
    //       <div className="flex-1 overflow-y-auto p-6">
    //         <Routes>
    //           <Route path="/" element={<Navigate to="/dashboard" />} />
    //           <Route path="/signup" element={<Signup />} />
    //           <Route path="/trash" element={<Trash />} />
    //           <Route path="/note/:id" element={<ViewNote />} />
    //           <Route path="/settings" element={<Settings />} />
    //           <Route path="/dashboard" element={<Dashboard />} />
    //         </Routes>

    //         {/* Example note and delete button (can move to dashboard or any page) */}
    //         <NoteCard
    //           tag="Clients"
    //           title="Review UX Feedback"
    //           content="In the Review UX Feedback session, we will evaluate the feedback received regarding the user experience (UX)..."
    //           date="Mar 13, 2024"
    //         />
    //         <button
    //           className="bg-red-600 hover:bg-red-700 px-6 py-2 mt-4 rounded-lg text-white font-medium"
    //           onClick={() => setShowModal(true)}
    //         >
    //           Delete Note
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Modal for delete confirmation */}
    //   <DeleteModal
    //     isOpen={showModal}
    //     onClose={() => setShowModal(false)}
    //     onDelete={handleDelete}
    //   />
    // </Router>
  );
}

export default App;
