import { FcAddImage } from "react-icons/fc";

const Dashboard = () => {
  return (
    <div className="container">
      {/* post section */}
      <div className="d-flex justify-content-center">
        <div style={{ width: "582px" }}>
          <div className="form-floating">
            <input
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
            />
            <label htmlFor="floatingTextarea">What&apos;s on your mind?</label>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <FcAddImage />
            <button type="button" className="btn btn-success">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
