import express from 'express';
import {
    createBookedAppointment,
    deleteBookedAppointment,
    getAllBookedAppointments,
    getBookedAppointmentById,
    getBookedAppointmentsByUserId,
    updateBookedAppointment
} from '../controllers/bookedController.js';
const router = express.Router();

// Create a new booked appointment
router.post('/booked', createBookedAppointment);

// Get all booked appointments
router.get('/booked', getAllBookedAppointments);

// Get a single booked appointment by ID
router.get('/booked/:id', getBookedAppointmentById);

// Update a booked appointment
router.put('/booked/:id', updateBookedAppointment);

// Delete a booked appointment
router.delete('/booked/:id', deleteBookedAppointment);

// GET booked appointments by user ID
router.get('/booked/user/:userId', getBookedAppointmentsByUserId);

export default router;
