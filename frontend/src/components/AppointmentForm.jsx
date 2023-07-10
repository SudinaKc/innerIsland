import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const AppointmentForm = () => {
    const { user } = useSelector(
        (state) => state.user
    );
    const userId = user.user._id;
    const { id } = useParams();
    const psychologistId = id

    const [appointmentData, setAppointmentData] = useState({
        appointmentDate: "",
        address: "",
        age: ""
    });

    const {  appointmentDate, address, age } = appointmentData;

    function changeHandler(e) {
        const { name, value } = e.target;
        setAppointmentData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
        const fetchdata = async () => {
            try {
                const response = await axios.post('http://localhost:3000/api/booked',
                    {
                        userId,
                        psychologistId,
                        ...appointmentData

                    }
                );
                // Show success toast
                toast.success("Appointment booked successfully");
                console.log(response.data); // Handle the response as needed

            } catch (error) {
                console.error(error);
            }
        };

        fetchdata();
    }
    return (
        <div className="container" style={{ width: "600px" }} >
            <h5>pricing:2000 per session</h5>
            <h1>Book session now </h1>
            {/* <button className="btn btn-success btn-rounded button">Book session</button> */}
            <br />
            {/* booking form  */}
            <form onSubmit={submitHandler}>
           
                firstName:
                <input className="form-control bg-light" readOnly value={user.user.firstName} />
                <br />
                lastName: <input className="form-control bg-light" readOnly value={user.user.lastName} />
                <br />
                email :<input className="form-control bg-light" readOnly value={user.user.email} />
                <br />
                phone : <input className="form-control bg-light" readOnly value={user.user.phone}  />
                <br />
                appointmentDate: <input className="form-control" type="date" onChange={changeHandler} name="appointmentDate" value={appointmentDate} />
                {/* <br />
                appointmentTime: <input className="form-control" type="time" onChange={changeHandler} name="appointmentDate" value={appointmentDate} />
                <br /> */}
                address:<input className="form-control" type="text " onChange={changeHandler} name="address" value={address} />
                <br />
                age:<input className="form-control" type="text" onChange={changeHandler} name="age" value={age} />
                <br />
                <button className="btn btn-success btn-rounded button">Book session</button>
            </form>


        </div>
    )
}

export default AppointmentForm