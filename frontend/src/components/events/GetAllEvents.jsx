import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Spinner from "../spinner/spinner"
import EditEvent from "./EditEvent"

const GetAllEvents = ({ submitHandler, formData, reload, setLoading, loading }) => {
    // const [loading, setLoading] = useState(true)
    const [allevents, setAllevents] = useState([])
    const [isedit, setIsedit] = useState(false)
    const [updated, setUpdated] = useState(false)
    async function getAllEvents() {
        setLoading(true)
        try {
            const { data: events } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/get-events`)
            setAllevents(events.events)
        } catch (error) {
            console.log(error)
            setAllevents([])
        }
        setLoading(false)
    }
    async function deleteEvent(id) {
        console.log(typeof id);
        setLoading(true)
        try {
            await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/delete-event`, {
                data: { id }
            });
            toast.success("Event deleted successfully");
            getAllEvents()
        } catch (error) {
            console.error(error);
        }
        setLoading(false)
    }

    useEffect(() => {
        getAllEvents()
        console.log("ge;")
        setUpdated(false)
    }, [reload])


    const toggleEditModal = () => {
        setIsedit(!isedit);
    };

    return (
        <div>
            {
                loading ? (
                    <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ height: "60vh" }}
                    >
                        <Spinner />
                    </div>
                ) : (

                    allevents.length > 0 &&
                    <div className="container mt-4">
                        {allevents.map((event) => (
                            <div className="card mb-3" key={event._id}>
                                <div className="card-body">
                                    <h5 className="card-title">{event.title}</h5>
                                    <p className="card-text">Description: {event.description}</p>
                                    <p className="card-text">Location: {event.location}</p>
                                    <p className="card-text">Date: {event.date}</p>
                                    <p className="card-text">Time: {event.time}</p>

                                    <div className="d-flex flex-row gap-4 mt-3 ">

                                        <p
                                            className="border px-4 py-1 rounded-2 border-success-subtle"
                                            style={{
                                                cursor: "pointer",
                                                transition: "background-color 0.3s, color 0.3s",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = "#14985C";
                                                e.target.style.color = "white";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = "";
                                                e.target.style.color = "";
                                            }}
                                            onClick={() => {
                                                setIsedit(true)
                                            }}
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal2"
                                        >
                                            edit
                                        </p>
                                        {
                                            isedit && (
                                                <EditEvent
                                                    id={event._id}
                                                    title={event.title}
                                                    description={event.description}
                                                    location={event.location}
                                                    date={event.date}
                                                    time={event.time}
                                                    closeModal={toggleEditModal}

                                                    updated={updated}
                                                    setUpdated={setUpdated}
                                                    setIsedit={setIsedit}
                                                    isedit={isedit}
                                                    setLoading={setLoading}
                                                    loading={loading}
                                                />
                                            )
                                        }

                                        <p className="border px-4 py-1 rounded-2 border-danger-subtle" style={{ cursor: "pointer" }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = "rgba(255, 0, 0, 0.3)"
                                                e.target.style.color = "white"
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = ""; // Reset background color on mouse leave
                                                e.target.style.color = ""; // Reset text color on mouse leave
                                            }}
                                            onClick={() => deleteEvent(event._id)}
                                        >delete</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>



                )
            }
            {
                allevents.length == 0 &&
                loading == false &&
                <div>
                    no event found , create  an event
                </div>
            }

        </div>
    )
}

export default GetAllEvents