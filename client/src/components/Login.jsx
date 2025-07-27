import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token); // store token
      alert('Logged in');
    } catch (err) {
      alert(err.response?.data?.msg || 'Login failed');
    }
  };


  return (
    <div className="flex h-screen bg-[#0E0F1A] items-center justify-center px-4">
      <form
        onSubmit={handleLogin}
        className="bg-[#1C1F2A] p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label  className="block text-sm text-gray-300 mb-1">Email
          <input
              type="email"
              name="email"
              id="email"
              className="w-full p-3 rounded-lg bg-[#2C2F3F] text-white focus:outline-none"
              onChange={handleChange}
              placeholder="example@mail.com"
              required
              autoComplete="email"
            />
          </label>
        </div>

        <div className="mb-6">
          <label className="block text-sm text-gray-300 mb-1">Password
          <input
            type="password"
            name="password"
            id="password"
            className="w-full p-3 rounded-lg bg-[#2C2F3F] text-white focus:outline-none"
            onChange={handleChange}
            placeholder="••••••••"
            required
            autoComplete="current-password"
          />
          </label>
        </div>

        <button
          type="submit"
          name="login"
          id="login"
          className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg text-white font-medium"
        >
          Login
        </button>

        <p className="text-sm text-gray-400 text-center mt-4">
          Don’t have an account?{" "}
          <NavLink
            to="/register"
            className="text-indigo-500 cursor-pointer hover:underline"
          >
            Sign up
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
