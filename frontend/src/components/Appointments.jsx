
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Appointments = () => {
  const { user } = useSelector((state) => state.user);
  const [appointmentsList, setAppointmentsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/booked");
        setAppointmentsList(data);
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    };

    fetchBookings();
  }, []);

  const latestAppointmentsMap = {};
  const psychologistAppointmentsMap = {};

  appointmentsList.forEach((appointment) => {
    if (
      appointment.userId &&
      user.user.userType === "expert" &&
      user.user._id === appointment.psychologistId._id
    ) {
      if (!(appointment.userId._id in latestAppointmentsMap)) {
        latestAppointmentsMap[appointment.userId._id] = appointment;
      }
    }

    if (
      appointment.psychologistId &&
      user.user.userType === "user" &&
      user.user._id === appointment.userId._id
    ) {
      if (!(appointment.psychologistId._id in psychologistAppointmentsMap)) {
        psychologistAppointmentsMap[appointment.psychologistId._id] = appointment;
      }
    }
  });

  const latestAppointmentsArray = Object.values(latestAppointmentsMap);
  const psychologistAppointmentsArray = Object.values(psychologistAppointmentsMap);

  return (
    <div className="bg-light" style={{ minHeight: "100vh" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <h3 className="mb-4">Appointments</h3>
            {latestAppointmentsArray.length > 0 && (
              <>
                {latestAppointmentsArray.map((element) => (
                  <div
                    key={element._id}
                    className="row mb-3 bg-white py-3 align-items-center rounded"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="col">
                      <strong>Patient Name:</strong> {element.userId.firstName}{" "}
                      {element.userId.lastName}
                    </div>
                    <div className="col">
                      <strong>Phone:</strong> {element.userId.phone}
                    </div>
                    <div className="col">
                      <strong>Appointment Date:</strong>{" "}
                      {new Date(element.appointmentDate).toLocaleDateString()}
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          navigate(`/appointments/${element.userId._id}/${element._id}/${element.psychologistId._id}`)
                        }
                      >
                        History
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
            {psychologistAppointmentsArray.length > 0 && (
              <>
                {psychologistAppointmentsArray.map((element) => (
                  <div
                    key={element._id}
                    className="row mb-3 bg-white py-3 align-items-center rounded"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="col">
                      <strong>Psychologist Name:</strong>{" "}
                      {element.psychologistId.firstName}{" "}
                      {element.psychologistId.lastName}
                    </div>
                    <div className="col">
                      <strong>Email:</strong> {element.psychologistId.email}
                    </div>
                    <div className="col">
                      <strong>Appointment Date:</strong>{" "}
                      {new Date(element.appointmentDate).toLocaleDateString()}
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          navigate(
                            `/appointments/${element.userId._id}/${element._id}/${element.psychologistId._id}`
                          )
                        }
                      >
                        History
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
            {latestAppointmentsArray.length === 0 && psychologistAppointmentsArray.length === 0 && (
              <div>No appointments found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;


// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// const Appointments = () => {
//   const { user } = useSelector((state) => state.user);
//   const [appointmentsList, setAppointmentsList] = useState([]);
//   const navigate = useNavigate();
//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const { data } = await axios.get("http://localhost:3000/api/booked");

//         setAppointmentsList(data);
//         console.log(appointmentsList);
//         // ***************
//         console.log(data)
 

//       } catch (error) {
//         console.log(error);
//         alert(error.message);
//       }
//     };
//     fetchBookings();
//   }, [appointmentsList]);

//   // ***********************************
//   const latestAppointmentsMap = {};
//   appointmentsList.forEach((appointment) => {
//     console.log(appointment)
 
//     if (!(appointment.userId._id in latestAppointmentsMap)) {
//       latestAppointmentsMap[appointment.userId._id] = appointment;
//     }
//   });

//   const latestAppointmentsArray = Object.values(latestAppointmentsMap);
//   console.log(latestAppointmentsArray);
//   // ********
//   const latestDoctorBook = {};
//   appointmentsList.forEach((appointment) => {
//     if (!(appointment.psychologistId._id in latestDoctorBook)) {
//       latestDoctorBook[appointment.psychologistId._id] = appointment;
//     }
//   });
//   const latestDoctorBookArray = Object.values(latestDoctorBook);

//   console.log(latestDoctorBookArray);

//   return (

//     <div className="bg-light" style={{ minHeight: "100vh" }}>
//       <div className="container py-5">
//         <div className="row">
//           <div className="col">
//             <h3 className="mb-4">Appointments</h3>
//             {latestAppointmentsArray.length > 0 ? (
//               latestAppointmentsArray.map((element) =>
//                 user.user.userType === "expert" &&
//                   user.user._id === element.psychologistId._id ? (
//                   <div
//                     key={element._id}
//                     className="row mb-3 bg-white py-3 align-items-center rounded"
//                     style={{ cursor: "pointer" }}
//                   >
//                     <div className="col">
//                       <strong>Patient Name:</strong> {element.userId.firstName}{" "}
//                       {element.userId.lastName}
//                     </div>
//                     <div className="col">
//                       <strong>Phone:</strong> {element.phone}
//                     </div>
//                     <div className="col">
//                       <strong>Appointment Date:</strong>{" "}
//                       {new Date(element.appointmentDate).toLocaleDateString()}
//                     </div>
//                     <div className="col">
//                       <button
//                         className="btn btn-success"
//                         onClick={() =>
//                           navigate(`/appointments/${element.userId._id}/${element._id}`)
//                         }
//                       >
//                         History
//                       </button>
//                     </div>
//                   </div>
//                 ) : null
//               )
//             ) : (
//               <div>No appointments found</div>
//             )}

//             {/* for user */}

//             {latestDoctorBookArray.length > 0 ? (
//               latestDoctorBookArray.map((element) =>
//                 user.user.userType === "user" &&
//                 user.user._id === element.userId._id ? (
//                   <div
//                     key={element._id}
//                     className="row mb-3 bg-white py-3 align-items-center rounded"
//                     style={{ cursor: "pointer" }}
//                   >
//                     <div className="col">
//                       <strong>Psychologist Name:</strong>{" "}
//                       {element.psychologistId.firstName}{" "}
//                       {element.psychologistId.lastName}
//                     </div>
//                     <div className="col">
//                       <strong>Email:</strong> {element.psychologistId.email}
//                     </div>
//                     <div className="col">
//                       <strong>Appointment Date:</strong>{" "}
//                       {new Date(element.appointmentDate).toLocaleDateString()}
//                     </div>
//                     <div className="col">
//                       <button
//                         className="btn btn-success"
//                         onClick={() =>
//                           // navigate(
//                           //   `/appointments/${element.psychologistId._id}/${element._id}`
//                           // )
//                           navigate(
//                             `/appointments/${element.userId._id}/${element._id}`
//                           )
//                         }
//                       >
//                         History
//                       </button>
//                     </div>
//                   </div>
//                 ) : null
//               )
//             ) : (
//               <div>No appointments found</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Appointments;

// 7/9/2023

{
  /* {
                          
                          appointmentsList.length > 0 ? (
                              appointmentsList.map((element) =>
                                  user.user.userType === "expert"
                                      ? user.user._id === element.psychologistId._id && (
                                          // for psychologist
                                          <div
                                              key={element._id}
                                              className="row mb-3 bg-white py-3 align-items-center rounded"
                                              style={{ cursor: "pointer" }}
                                          >
  
                                              <div className="col">
                                                  {element.userId.firstName} {element.userId.lastName}
                                              </div>
                                              <div className="col">{element.phone}</div>
                                              <div className="col">{element.userId.email}</div>
                                              <div className="col">
                                                  <button
                                                      className="btn btn-success"
                                                      onClick={() =>
                                                          navigate(`/appointments/${element._id}`)
                                                      }
                                                  >
                                                      Details
                                                  </button>
                                              </div>
                                          </div>
                                      )
                                      : user.user._id === element.userId._id && (
                                          // for user
                                          <div
                                              key={element._id}
                                              className="card bg-white p-3 mb-3 rounded"
                                              style={{ cursor: "pointer" }}
                                          >
                                              <div className="row mb-3">
                                                  <div className="col">
                                                      <strong>Appointment Set To:</strong>{" "}
                                                      {element.psychologistId.firstName +
                                                          " " +
                                                          element.psychologistId.lastName}
                                                  </div>
                                              </div>
                                              <div className="row mb-3">
                                                  <div className="col">
                                                      <strong>Email:</strong>{" "}
                                                      {element.psychologistId.email}
                                                  </div>
                                              </div>
                                              <div className="row mb-3">
                                                  <div className="col">
                                                      <strong>Appointment Date:</strong>{" "}
                                                      {new Date(
                                                          element.appointmentDate
                                                      ).toLocaleDateString()}
                                                  </div>
                                              </div>
                                          </div>
                                      )
                              )
                          ) : (
                              <div>no appointment</div>
                          )} */
}

// ui is different
// <div className="bg-light" style={{ minHeight: "100vh" }}>
//   <div className="container py-5">
//     <div className="row">
//       <div className="col">
//         <h3 className="mb-4">Appointments</h3>

//         {user.user.userType === "expert" && (
//           <div className="row mb-3">
//             <div className="col">Patient Name</div>
//             <div className="col">Phone</div>
//             <div className="col">Email</div>
//             <div className="col"></div>
//           </div>
//         )}
//         {/* for psychologist page  */}
//         {latestAppointmentsArray.length > 0 ? (
//           latestAppointmentsArray.map((element) =>
//             user.user.userType === "expert" &&
//             user.user._id === element.psychologistId._id ? (
//               <div
//                 key={element._id}
//                 className="  row mb-3 bg-white py-3 align-items-center rounded"
//                 style={{ cursor: "pointer" }}
//               >
//                 <div className="col">
//                   {element.userId.firstName} {element.userId.lastName}
//                 </div>
//                 <div className="col">{element.phone}</div>
//                 <div className="col">{element.userId.email}</div>
//                 <div className="col">
//                   <button
//                     className="btn btn-success"
//                     onClick={() =>
//                       navigate(`/appointments/${element.userId._id}`)
//                     }
//                   >
//                     Details
//                   </button>
//                 </div>
//               </div>
//             ) : null
//           )
//         ) : (
//           <div>not found</div>
//         )}

//       </div>
//     </div>
//   </div>
// </div>
