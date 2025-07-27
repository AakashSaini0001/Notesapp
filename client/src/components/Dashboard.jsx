import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get('/api/notes', {
          headers: {
            'x-auth-token': localStorage.getItem('token'),
          },
        });
        console.log("Notes Response:", res.data); // 👀 log this
        setNotes(Array.isArray(res.data) ? res.data : res.data.notes || []);
      } catch (err) {
        console.error('Failed to load notes', err);
      }
    };

    fetchNotes();
  }, []);


  return (
    <div className="min-h-screen bg-[#0E0F1A] text-white px-6 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Notes</h1>
        <button
          onClick={() => Navigate("/create")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
        >
          + New Note
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.length ? notes.map((note) => (
          <div
            key={note._id}
            onClick={() => Navigate(`/note/${note._id}`)}
            className="bg-[#1C1F2A] p-5 rounded-xl hover:bg-[#252837] cursor-pointer transition"
          >
            <h3 className="text-xl font-semibold">{note.title}</h3>
            <p className="text-gray-400 mt-2 line-clamp-3">{note.content}</p>
          </div>
        )) : (
          <p className="text-gray-500 col-span-full text-center">No notes found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
