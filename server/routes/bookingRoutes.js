import express from 'express';
import { createBooking, getFundiBookings } from '../controllers/bookingController.js'; // <-- FIXED LINE

const router = express.Router();

router.post('/', createBooking); 
router.get('/:fundiId', getFundiBookings);

export default router;
