// this is for psychologist page psychologist view patient info and send link to join
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
const AppointmentsDetail = () => {
  const { user } = useSelector((state) => state.user);

  const [appointmentHistory, setAppointmentHistory] = useState([]);
  const navigate = useNavigate();
  const { userId } = useParams();
  const { bookId } = useParams();
  let joinKey = bookId;
  console.log("userid " + userId);
  // console.log("appoitment id  " + userId);

  useEffect(() => {
    const fetchBookedAppointmentsByUserId = async (userId) => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/booked/user/${userId}`
        );
        setAppointmentHistory(data);
        console.log(data);
        console.log(appointmentHistory);
        //   return data;
      } catch (error) {
        console.error("Error fetching booked appointments:", error);
        throw error;
      }
    };
    fetchBookedAppointmentsByUserId(userId);
  },[appointmentHistory]);
  return (
    <div className="container mt-5">
      <div>
        <button
          className="btn btn-success"
          onClick={() => {
            navigate(`/call/${joinKey}`);
          }}
        >
          start session
        </button>
      </div>
      {/* for psycologist-- this is list of user history to book with me */}

      <h3 className="mb-4">Appointment History</h3>
      {
        user.user.userType === "expert" ?
        (
          appointmentHistory.length > 0 &&
          appointmentHistory.map((element) => (
            <div key={element._id} className="card mb-5">
              <div className="card-header">
                <h5 className="card-title">Appointment Details</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6">
                    <p>
                      <strong>Appointment ID:</strong> {element._id}
                    </p>
                    <p>
                      <strong>patient Name:</strong> {element.userId.firstName}{" "}
                      {element.userId.lastName}
                    </p>
                    <p>
                      <strong>Email:</strong> {element.userId.email}
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p>
                      <strong>Address:</strong> {element.address}
                    </p>
                    <p>
                      <strong>Phone:</strong> {element.phone}
                    </p>
                    <p>
                      <strong>Appointment Date:</strong>{" "}
                      {new Date(element.appointmentDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )
        : (
          <div>
            appointment not found
          </div>



        )


      }
      {/* for uer page */}
      {/* not working */}
      {
        user.user.userType === "user" ?
        (
          appointmentHistory.length > 0 &&
          appointmentHistory.map((element) => (
            <div key={element._id} className="card mb-5">
              <div className="card-header">
                <h5 className="card-title">Appointment Details</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6">
                    <p>
                      <strong>Appointment ID:</strong> {element._id}
                    </p>
                    <p>
                      <strong>Psychologist Name:</strong> {element.psychologistId.firstName}{" "}
                      {element.psychologistId.lastName}
                    </p>
                    <p>
                      <strong>Email:</strong> {element.psychologistId.email}
                    </p>
                  </div>
                  <div className="col-sm-6">
                    {/* <p>
                      <strong>Address:</strong> {element.address}
                    </p>
                    <p>
                      <strong>Phone:</strong> {element.phone}
                    </p> */}
                    <p>
                      <strong>Appointment Date:</strong>{" "}
                      {new Date(element.appointmentDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )
        : (
          <div>
            appointment not found
          </div>



        )

      }



    </div>
  );
};

export default AppointmentsDetail;















