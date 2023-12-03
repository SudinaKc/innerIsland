// this is for psychologist page psychologist view patient info and send link to join
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
const AppointmentsDetail = () => {
  const { user } = useSelector((state) => state.user);
  const [prescription, setPrescription] = useState("");
  const [appointmentHistory, setAppointmentHistory] = useState([]);
  const [patientDetail, setPatientDetail] = useState({});
  const navigate = useNavigate();
  const { userId } = useParams();
  const [psychoDetail, setPsychoDetail] = useState({});
  const { bookId } = useParams();
  const [edit, setEdit] = useState(false);
  const [displayWrittenPres, setdisplayWrittenPres] = useState("");
  const { psychologistId } = useParams();
  const [clickedOnSavePres, setclickedOnSavePres] = useState(false);
  let joinKey = bookId;
  function redirectToCall() {
    // navigate(`/call/${joinKey}/${user.user.firstName} ${user.user.lastName}`);
    const encodedFirstName = encodeURIComponent(user.user.firstName);
    const encodedLastName = encodeURIComponent(user.user.lastName);
    navigate(`/call/${joinKey}/${encodedFirstName} ${encodedLastName}`);

  }
  console.log("userid " + userId);
  const handleTextAreaChange = (event) => {
    // Calculate the number of rows based on the content and a minimum number of rows
    const minRows = 2; // Adjust this as needed
    const currentRows = event.target.value.split("\n").length;
    const newRows = Math.max(minRows, currentRows);

    // Set the prescription text and rows
    setPrescription(event.target.value);
    event.target.rows = newRows;
  };
  // console.log("appoitment id  " + userId);
  async function savePrescription() {
    console.log(prescription);
    setdisplayWrittenPres(prescription);
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/api/booked/${bookId}`,
        {
          prescription,
        }
      );
      console.log(response);
      setEdit(false);
      setPrescription("");
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const fetchPatientbyId = async (id) => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/users/${id}`
        );
        console.log(data);
        setPatientDetail(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPatientbyId(userId);
  }, []);

  useEffect(() => {
    const fetchBookedAppointmentsByUserId = async (userId) => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/booked/user/${userId}`
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

  // fetch psychologist details
  useEffect(() => {
    async function fetchPsychologistDetail(psychologistId) {
      try {
        const id = psychologistId;
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/psychologist/all/${id}`
        );
        console.log(data);
        setPsychoDetail(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPsychologistDetail(psychologistId);
  }, []);

  return (
    <div className="container mt-5 position-relative">
      {/* for psycologist-- this is list of user history to book with me - for psychologist login */}
      {/* <h3 className="mb-4">Appointment History</h3> */}
      {user.user.userType === "expert" && psychoDetail != null && (
        <div className="container mt-4 mb-5">
          {psychoDetail !== null && (
            <div className="row">
              <div className="col-md-4">
                <img
                  src={patientDetail.image}
                  width={300}
                  height={300}
                  alt={psychoDetail.firstName}
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="col-md-8">
                <h1 className="mb-4 ">Patient Info</h1>
                <h2>
                  {patientDetail.firstName} {patientDetail.lastName}
                </h2>
                <p className="mb-2">
                  <strong>Email:</strong> {patientDetail.email}
                </p>
                <p className="mb-2">
                  <strong>Age:</strong> {patientDetail.age}
                </p>
                <p className="mb-2">
                  <strong>Gender:</strong> {patientDetail.gender}
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong> {patientDetail.phone}
                </p>
                <p className="mb-2">
                  <strong>Address:</strong> {patientDetail.address}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
      <div style={{ textAlign: "right" }}>
        <button className="btn btn-success" onClick={redirectToCall}>
          start session
        </button>
      </div>
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
              {/* <div className="card-header">
                <h5 className="card-title">Appointment Details</h5>
              </div> */}
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6">
                    {/* <p>
                      <strong>Appointment ID:</strong> {element._id}
                    </p> */}
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
                      <strong>Appointment Date:</strong>{" "}
                      {new Date(element.appointmentDate).toLocaleDateString()}
                    </p>
                    <p>
                      <strong>Appointment Time:</strong>{" "}
                      {element.appointmentTime}
                    </p>
                  </div>

                  <p>
                    <strong>issue mentioned :</strong>
                    {element.problem}
                  </p>
                  <div>
                    <span className="fw-bold">prescriptions:</span>
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <pre className="text-success fw-semibold">
                          {
                            // element.prescription||

                            // displayWrittenPres
                            !clickedOnSavePres && element.prescription
                          }
                          {clickedOnSavePres && displayWrittenPres}
                        </pre>
                      </div>
                      <button
                        onClick={() => {
                          setEdit(true), setPrescription(element.prescription);
                        }}
                      >
                        {element?.prescription ? "edit" : "write"}
                      </button>
                    </div>
                  </div>
                  {edit && (
                    <div>
                      write prescriptions
                      {/* <div className="mb-3">
                          <textarea className="form-control" value={prescription} onChange={(event) => setPrescription(event.target.value)} >
                          </textarea>
                        </div> */}
                      <div className="mb-3">
                        <textarea
                          className="form-control"
                          value={prescription}
                          onChange={handleTextAreaChange}
                          rows="2" // Set an initial number of rows
                          placeholder="write prescription"
                        ></textarea>
                      </div>
                      <button
                        onClick={() => {
                          savePrescription();
                          setclickedOnSavePres(true);
                        }}
                      >
                        Save
                      </button>
                    </div>
                  )}
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

      {user.user.userType === "user" && psychoDetail != null && (
        <div className="container mt-1 mb-5">
          <div className="row">
            <div className="col-md-4">
              <img
                src={psychoDetail.image}
                width={300}
                height={300}
                alt={psychoDetail.firstName}
              />
            </div>
            <div className="col-md-8">
              <h1>
                {psychoDetail.firstName} {psychoDetail.lastName}
              </h1>
              <p className="lead">{psychoDetail.specialization}</p>
              <p>
                <strong>Email:</strong> {psychoDetail.email}
              </p>
              <p>
                <strong>Qualification:</strong> {psychoDetail.qualification}
              </p>
            </div>
          </div>
        </div>
      )}

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
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6">
                    <p></p>
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
                      <strong>Appointment Date:</strong>{" "}
                      {new Date(element.appointmentDate).toLocaleDateString()}
                    </p>
                    <p>
                      <strong>Appointment Time:</strong>{" "}
                      {element.appointmentTime}
                    </p>
                  </div>
                  <div className="col-sm-6"></div>
                  <p>
                    <strong>issue mentioned :</strong>
                    {element.problem}
                  </p>
                  <div>
                    <p className="fw-bold">prescriptions:</p>
                    <pre className="text-success fw-semibold ">
                      {element.prescription}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
      {appointmentHistory.length < 1 && <div>appointment not found</div>}
    </div>
  );
};

export default AppointmentsDetail;
