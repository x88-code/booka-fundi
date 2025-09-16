import Fundi from '../models/Fundi.js';

// @desc    Get all fundis
export const getFundis = async (req, res) => {
  try {
    const fundis = await Fundi.find().sort({ createdAt: -1 });
    res.json(fundis);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create a new fundi
export const createFundi = async (req, res) => {
  const { name, service, phone, location } = req.body;

  try {
    const fundi = new Fundi({ name, service, phone, location });
    const saved = await fundi.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
