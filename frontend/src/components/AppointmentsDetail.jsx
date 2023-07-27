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
  const { psychologistId } = useParams();
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
  }, []);
  return (
    <div className="container mt-5">
      <div style={{ textAlign: "right" }}>
        <button
          className="btn btn-success"
          onClick={() => {
            navigate(`/call/${joinKey}/${user.user.firstName}`);
          }}

        >
          start session
        </button>
      </div>
      {/* for psycologist-- this is list of user history to book with me - for psychologist login */}
      <h3 className="mb-4">Appointment History</h3>
      {user.user.userType === "expert" &&
        appointmentHistory.length > 0 &&
        appointmentHistory
          .filter(
            (element) =>
              element.psychologistId._id === psychologistId &&
              element.userId._id === userId
          )
          .map((element) => (
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
                      <strong>Booked on:</strong>{" "}
                      {new Date(element.updatedAt).toLocaleDateString()}{" "}
                      {new Date(element.updatedAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
                    </p>
                    <p>
                      <strong>patient Name:</strong> {element.userId.firstName}{" "}
                      {element.userId.lastName}
                    </p>
                    <p>
                      <strong>problem :</strong>
                      {element.problem}
                    </p>
                    <p>
                      <strong>Email:</strong> {element.userId.email}
                    </p>

                    <p>
                      <strong>Appointment Date:</strong>{" "}
                      {new Date(element.appointmentDate).toLocaleDateString()}
                    </p>
                    <p>
                      <strong>Appointment Time:</strong>{" "}
                      {element.appointmentTime}
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p>
                      <strong>Address:</strong> {element.userId.address}
                    </p>
                    <p>
                      <strong>Phone:</strong> {element.userId.phone}
                    </p>
                    <p>
                      <strong>Gender:</strong> {element.userId.gender}
                    </p>
                    <p>
                      <strong>Age:</strong> {element.userId.age}
                    </p>
                  </div>
                  <div>prescriptions--------</div>
                </div>
              </div>
            </div>
          ))}




      {/* *********************** */}
      {/* ********************** */}
      {/* ****************************************
           */}
      {/* ********************* */}
      {/* for user page */}

      {user.user.userType === "user" &&
        appointmentHistory.length > 0 &&
        appointmentHistory
          .filter(
            (element) =>
              element.psychologistId._id === psychologistId &&
              element.userId._id === user.user._id
          )
          .map((element) => (
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
                      <strong>Booked on:</strong>{" "}
                      {new Date(element.updatedAt).toLocaleDateString()}{" "}
                      {new Date(element.updatedAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
                    </p>
                    <p>
                      <strong>Psychologist Name:</strong>{" "}
                      {element.psychologistId.firstName}{" "}
                      {element.psychologistId.lastName}
                    </p>
                    <p>
                      <strong>problem :</strong>
                      {element.problem}
                    </p>
                    <p>
                      <strong>Email:</strong> {element.psychologistId.email}
                    </p>

                    <p>
                      <strong>Appointment Date:</strong>{" "}
                      {new Date(element.appointmentDate).toLocaleDateString()}
                    </p>
                    <p>
                      <strong>Appointment Time:</strong>{" "}
                      {element.appointmentTime}
                    </p>
                  </div>
                  <div className="col-sm-6">
                    {/* <p>
                      <strong>Address:</strong> {element.userId.address}
                    </p>
                    <p>
                      <strong>Phone:</strong> {element.userId.phone}
                    </p>
                    <p>
                      <strong>Gender:</strong> {element.userId.gender}
                    </p>
                    <p>
                      <strong>Age:</strong> {element.userId.age}
                    </p> */}
                  </div>
                  <div>prescriptions--------</div>
                </div>
              </div>
            </div>
          ))}
      {appointmentHistory.length < 1 && <div>appointment not found</div>}
    </div>
  );
};

export default AppointmentsDetail;
