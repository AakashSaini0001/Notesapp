import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("http://localhost:5000/api/auth/profile", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setUser(res.data);
    };
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-[#0E0F1A] text-white p-6 flex items-center justify-center">
      <div className="bg-[#1C1F2A] p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6">My Profile</h2>
        <p className="text-gray-300 mb-4">
          <strong>Name:</strong> {user.name}
        </p>
        <p className="text-gray-300">
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
};

export default Profile;
