import { EventMail } from "../mail/template/EventMail.js";
import Event from "../model/EventModel.js";
import Psychologist from "../model/PsychologistModel.js";
import User from "../model/UserModel.js";
import mailSender from "../utils/mailSender.js";
// create event
export const createEvent = async (req, res) => {
    try {
        const { title, description, date, time, location } = req.body;
        if (!title || !description || !date || !time || !location) {
            return res.json({
                success: false,
                message: "All fields are required"
            })
        }
        const event = await Event.create({
            title,
            description,
            location,
            time,
            date
        })
        const users = await User.find();
        const psychologists = await Psychologist.find();
        users.forEach((ele) => {
            mailSender(ele.email, title, EventMail(ele.firstName, ele.lastName, title, description, location, time, date)).then(() => console.log(`email sent to ${ele?.firstName}`)).catch((error) => console.log(error.message))
        })
        psychologists.forEach((ele) => {
            mailSender(ele.email, title, EventMail(ele.firstName, ele.lastName, title, description, location, time, date)).then(() => console.log(`email sent to ${ele?.firstName}`)).catch((error) => console.log(error.message))
        })
        res.status(200).json({
            success: true,
            message: "event created successfully",
            event
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


// get all events 
export const getEvents = async (req, res) => {
    try {
        const events = await Event.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: "event created successfully",
            events
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
// update event
export const upadteEvent = async (req, res) => {
    try {
        const { id, title, description, date, time, location } = req.body;
        if (!id || !title || !description || !date || !time || !location) {
            return res.json({
                success: false,
                message: "All fields are required"
            })
        }
        const event = await Event.findByIdAndUpdate(id, {
            title,
            description,
            location,
            time,
            date

        }, { new: true })
        const users = await User.find();
        const psychologists = await Psychologist.find();
        users.forEach((ele) => {
            mailSender(ele.email, title, EventMail(ele.firstName, ele.lastName, title, description, location, time, date)).then(() => console.log(`email sent to ${ele?.firstName}`)).catch((error) => console.log(error.message))
        })
        psychologists.forEach((ele) => {
            mailSender(ele.email, title, EventMail(ele.firstName, ele.lastName, title, description, location, time, date)).then(() => console.log(`email sent to ${ele?.firstName}`)).catch((error) => console.log(error.message))
        })
        res.status(200).json({
            success: true,
            message: "event updated successfully",
            event
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// delete an event

export const deleteEvent = async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) {
            return res.json({
                success: false,
                message: "All fields are required"
            })
        }
        await Event.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "event deleted successfully",

        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
