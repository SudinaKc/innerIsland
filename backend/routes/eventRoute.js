import express from "express"
import { createEvent, deleteEvent, getEvents, upadteEvent } from "../controllers/EventController.js"
const router=express.Router()

// create event
router.post("/create-event",createEvent)

// update event
router.put("/update-event",upadteEvent)
  
// delete event

router.delete("/delete-event",deleteEvent)

// get events 
router.get("/get-events",getEvents)

export default router;

