
const CreateEvent = ({submitHandler,title,handleOnChange,description,location,date,time,showModal}) => {
  return (
    <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Create event</h5>
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
                          value={title}
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
                          value={description}
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
                          value={location}
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
                          value={date}
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
                          value={time}
                          placeholder="Enter event time"
                          onChange={handleOnChange}
                          className="form-control"
                        />
                      </label>
                      <button type="submit" className="btn btn-primary"
                      
                      
                      data-bs-dismiss={`${showModal?"":"modal"}`}
                      >
                        Save
                      </button>
                    </form>
                  </div>
                  
                </div>
              </div>
            </div>
  )
}

export default CreateEvent