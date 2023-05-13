import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      
      className="d-flex flex-column align-items-center color1 footer"
    >
      <div className="col-lg-6 col-md-8 col-12 d-flex flex-column align-items-center pb-4rem pt-6rem "
       >
        <h1 className="fw-semibold display-5 footer_heading text-center" >Subscribe to Newsletter</h1>
        <p className="text-center">
          <small>
            Enter your email address to register to our newsletter subscription!
          </small>
        </p>
        <div 
        className="container-fluid">
          <input
            type="text"
            placeholder="Enter Email"
            className="form-control"
          />
        </div>
        <div className="mt-3">
          <Link to="/services" className="btn btn-success btn-rounded button">
            Send
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
