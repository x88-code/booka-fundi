import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Fundi from '../models/Fundi.js';

const router = express.Router();

// Register
// Register
router.post('/register', async (req, res) => {
  try {
    const { name, phone, password } = req.body;

    const existing = await Fundi.findOne({ phone });
    if (existing) return res.status(400).json({ message: 'Phone already registered' });

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const fundi = await Fundi.create({ name, phone, password: passwordHash }); // 👈 FIXED

    res.status(201).json({ message: 'Fundi registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});


// Login
router.post('/login', async (req, res) => {
  try {
    const { phone, password } = req.body;

    const fundi = await Fundi.findOne({ phone });
    if (!fundi) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, fundi.passwordHash);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: fundi._id }, process.env.JWT_SECRET, { expiresIn: '2h' });

    res.json({ token, fundi: { id: fundi._id, name: fundi.name, phone: fundi.phone } });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
});

export default router;
