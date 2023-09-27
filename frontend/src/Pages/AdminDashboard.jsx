import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import AllUsers from "../components/AllUsers";
import CreateEvent from "../components/events/CreateEvent";
import GetAllEvents from "../components/events/GetAllEvents";

const AdminDashboard = () => {
  // Define state variables for form fields
  // const [showClickedPage, setShowClickedPage] = useState(false)
  const [currentTab, setCurrentTab] = useState("event");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    time: "",
  });
  const { title, description, location, date, time } = formData;
  const [reload, setReload] = useState(false);
  // Handle form input changes
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false); // Add modal state

  // Handle form submission (you can add your submission logic here)
  const submitHandler = async (e) => {
    setReload(false);
    e.preventDefault();
    setLoading(true);
    try {
      if (!title || !description || !location || !date || !time) {
        toast.error("all fields are required");
        throw new Error("All fields are required");
      }
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/create-event`,
        {
          title,
          description,
          location,
          date,
          time,
        }
      );
      console.log(response);
      setFormData({
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
      });
      toast.success("event created successfully");
      setReload(true);
      setLoading(false);
      setShowModal(false);
    } catch (error) {
      console.log(error.message);
      setFormData({
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
      });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <nav
          id="sidebar"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar pt-4"
          style={{ height: "95vh" }}
        >
          <div className="position-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() => setCurrentTab("event")}
                >
                  <span
                    className={`${
                      currentTab == "event"
                        ? " bg-body-secondary px-4 py-2 rounded-3"
                        : ""
                    } text-success`}
                  >
                    {" "}
                    Events Detail
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() => setCurrentTab("register")}
                >
                  <span
                    className={`${
                      currentTab == "register"
                        ? " bg-body-secondary px-4 py-2 rounded-3"
                        : ""
                    } text-success`}
                  >
                    {" "}
                    Users list
                  </span>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() => setCurrentTab("psycho")}
                >
                  <span
                    className={`${
                      currentTab == "psycho"
                        ? " bg-body-secondary px-4 py-2 rounded-3"
                        : ""
                    } text-success`}
                  >
                    {" "}
                    Psychologists list
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() => setCurrentTab("book")}
                >
                  <span
                    className={`${
                      currentTab == "book"
                        ? " bg-body-secondary px-4 py-2 rounded-3"
                        : ""
                    } text-success`}
                  >
                    {" "}
                    Appointments list
                  </span>
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>

        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {/* event pages data */}
          {currentTab == "event" && (
            <div>
              <button
                type="button"
                className="btn btn-success mt-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                create event
              </button>
              <CreateEvent
                submitHandler={submitHandler}
                title={title}
                handleOnChange={handleOnChange}
                description={description}
                location={location}
                date={date}
                time={time}
                showModal={showModal}
              />
            </div>
          )}
          {currentTab == "event" && (
            <div className="mt-5">
              <h2>All events</h2>
              <GetAllEvents
                formData={formData}
                submitHandler={submitHandler}
                reload={reload}
                loading={loading}
                setLoading={setLoading}
              />
            </div>
          )}
          {currentTab == "register" && (
            <div>
              <AllUsers loading={loading} 
              setLoading={setLoading}
              />

            </div>
          )}
          {/* {currentTab == "psycho" && <div>registered psychologists</div>}
          {currentTab == "book" && <div>Booked Appointments</div>} */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
