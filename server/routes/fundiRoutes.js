import express from 'express';
import { getFundis, createFundi } from '../controllers/fundiController.js';

const router = express.Router();

// ✅ Use the controller functions
router.get('/', getFundis);      // fetch fundis from MongoDB
router.post('/', createFundi);   // allow creating new fundi

export default router;
