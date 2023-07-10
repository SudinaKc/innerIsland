import Booked from './../model/BookedModel.js';


// Create a new booked appointment
export const createBookedAppointment = async (req, res) => {
  try {
    const { userId, psychologistId, appointmentDate, phone, address, age } = req.body;

    const newAppointment = new Booked({
      userId,
      psychologistId,
      appointmentDate,
      phone,
      address,
      age,
    });

    const savedAppointment = await newAppointment.save();

    res.status(201).json(savedAppointment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create booked appointment' });
  }
};


// Get all booked appointments
export const getAllBookedAppointments = async (req, res) => {
  try {
    const appointments = await Booked.find().populate("userId", "firstName lastName email").populate("psychologistId", "firstName lastName image email").sort({ updatedAt: -1 })

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch booked appointments' });
  }
};



// Get a single booked appointment by ID
export const getBookedAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;

    const appointment = await Booked.findById(id);

    if (!appointment) {
      res.status(404).json({ error: 'Booked appointment not found' });
      return;
    }

    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch booked appointment' });
  }
};



// Update a booked appointment
export const updateBookedAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { appointmentDate, phone, address, age } = req.body;

    const updatedAppointment = await Booked.findByIdAndUpdate(
      id,
      { appointmentDate, phone, address, age },
      { new: true }
    );

    if (!updatedAppointment) {
      res.status(404).json({ error: 'Booked appointment not found' });
      return;
    }

    res.status(200).json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update booked appointment' });
  }
};









// Delete a booked appointment
export const deleteBookedAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAppointment = await Booked.findByIdAndDelete(id);

    if (!deletedAppointment) {
      res.status(404).json({ error: 'Booked appointment not found' });
      return;
    }

    res.status(200).json(deletedAppointment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete booked appointment' });
  }
};

// Get booked appointments by user ID
export const getBookedAppointmentsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    const appointments = await Booked.find({ userId }).populate("userId", "firstName lastName email").populate("psychologistId", "firstName lastName image email").sort({ updatedAt: -1 });

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch booked appointments by user ID' });
  }
};


