import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PatientProfile from "../components/PatientProfile";
import PsychologistProfile from "../components/PsychologistProfile";
import Spinner from "../components/spinner/Spinner";
const ProfilePage = () => {

    const { user } = useSelector((state) => state.user);
    const [allevents, setAllevents] = useState([])
    const [loading, setLoading] = useState(true)
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
useEffect(()=>{
    getAllEvents()
},[])
    return (
        <div style={{ height: "100vh" }}>
            {
                user.user.userType == "expert" ? (

                    <PsychologistProfile user={user} />

                ) : (

                    <PatientProfile user={user} />
                )
            }

            {/*  */}
            <div>
                <h1 style={{textAlign:"center"}} className="mt-5">events</h1>
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
                                    </div>
                                </div>
                            ))}

                        </div>



                    )
                }
                {
                    allevents.length == 0 &&
                    <div>
                        no event found
                    </div>
                }

            </div>

        </div>
    )
}

export default ProfilePage