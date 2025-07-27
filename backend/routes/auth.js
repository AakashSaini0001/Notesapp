// import express, { Router, json } from "express";
// const router = Router();
// import { register, login } from "../controllers/authController";
// import { sign } from 'jsonwebtoken';
// import authRoutes from './routes/auth';
// const app = express();

// app.use(json()); // for parsing JSON
// app.use('/api/auth', authRoutes);

// // Sample user payload (usually fetched from DB)
// const user = {
//   id: userFromDB._id,  // MongoDB ID
//   email: userFromDB.email
// };

// // Generate token
// const token = sign(
//   { user: { id: user.id } },           // payload
//   process.env.JWT_SECRET,             // secret key
//   { expiresIn: '1h' }                 // expiry
// );

// res.json({ token });


// router.post("/register", register);
// router.post("/login", login);

// export default router;

import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';


//login code ======================================================
import jwt from 'jsonwebtoken';
const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({ token, user: { id: user._id, name: user.name } });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

//register code======================================================


// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ msg: 'User already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

export default router;
