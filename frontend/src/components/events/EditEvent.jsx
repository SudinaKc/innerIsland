import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const EditEvent = ({ id, title, description, location, date, time, updated, setUpdated, setIsedit, isedit,setLoading,loading }) => {

    const [formData, setFormData] = useState({
        id: id,
        title: title,
        description: description,
        location: location,
        date: date,
        time: time
    })
    async function submitHandler(e) {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/update-event`, {
                id: formData.id,
                title: formData.title,
                description: formData.description,
                location: formData.location,
                date: formData.date,
                time: formData.time,
            });
            console.log(response)
            toast.success("updated successfully")
            setIsedit(false)
            setUpdated(true)
            setShowModal(false);
        } catch (error) {
            console.log(error)

        }
        setLoading(false)

    }
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    const [showModal, setShowModal] = useState(false); // Add modal state

    return (
        <div 
        className="modal fade " 
        id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" 

        >
            <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">update event</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body ">
                        <form
                            className="d-flex flex-column gap-3"
                            onSubmit={submitHandler}
                            style={{ width: "450px" }}
                        >
                            <label className="d-flex flex-column gap-0">
                                <span className="form-label">
                                    Title <sup>*</sup>
                                </span>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    placeholder="Enter event title"
                                    onChange={handleOnChange}
                                    className="form-control"
                                />
                            </label>
                            <label className="d-flex flex-column gap-0">
                                <span className="form-label">
                                    Description <sup>*</sup>
                                </span>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    placeholder="Enter event description"
                                    onChange={handleOnChange}
                                    className="form-control"
                                />
                            </label>
                            <label className="d-flex flex-column gap-0">
                                <span className="form-label">
                                    Location <sup>*</sup>
                                </span>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    placeholder="Enter event location"
                                    onChange={handleOnChange}
                                    className="form-control"
                                />
                            </label>
                            <label className="d-flex flex-column gap-0">
                                <span className="form-label">
                                    Date <sup>*</sup>
                                </span>
                                <input
                                    type="text"
                                    name="date"
                                    value={formData.date}
                                    placeholder="Enter event date"
                                    onChange={handleOnChange}
                                    className="form-control"
                                />
                            </label>
                            <label className="d-flex flex-column gap-0">
                                <span className="form-label">
                                    Time <sup>*</sup>
                                </span>
                                <input
                                    type="text"
                                    name="time"
                                    value={formData.time}
                                    placeholder="Enter event time"
                                    onChange={handleOnChange}
                                    className="form-control"
                                />
                            </label>
                            <button type="submit" className="btn btn-success" 
                            //  data-bs-dismiss="modal"
                             data-bs-dismiss={`${showModal?"":"modal"}`}

                             >
                                update
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditEvent