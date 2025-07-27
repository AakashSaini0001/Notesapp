import express from 'express';
import Note from '../models/Note.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Create Note
router.post('/', auth, async (req, res) => {
  const { title, content } = req.body;
  try {
    const note = new Note({ user: req.user, title, content });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

// Fetch Notes
router.get('/', auth, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching notes' });
  }
});

export default router;
