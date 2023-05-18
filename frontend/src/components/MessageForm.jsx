import { BsSend } from "react-icons/bs";
import "./MessageForm.css";
const MessageForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      <div className="container">
        <div className="col-6">
          <div className="message_output mb-2">{/* message outputs */}</div>
          <form onSubmit={handleSubmit}>
            <div className="row border-2 ">
              <div className="col-11 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter message"
                />
              </div>
              <div className="col-1 ">
                <button className="btn btn-success" type="submit">
                  <BsSend />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MessageForm;
