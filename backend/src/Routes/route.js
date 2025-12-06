import express from 'express';
import { createBooking,deleteBooking,getBookings,getonebooking,updateBooking } from '../Controller/controllerpath.js';

const router = express.Router();

router.post('/', createBooking);
router.get('/', getBookings);
router.get('/:id', getonebooking)
router.put('/:id', updateBooking);
router.delete('/:id', deleteBooking);

export default router;
