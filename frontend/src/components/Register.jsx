import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Register = ({
  firstName,
  lastName,
  email,
  password,
  handleChange,
  registerUser,
}) => {
  return (
    <section className="h-100 gradient-form ">
      <div className="container py-5 h-100  ">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6 ">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: "185px" }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                    </div>

                    <form method="POST" onSubmit={registerUser}>
                      <p>Please register account</p>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=" First Name"
                          name="firstName"
                          value={firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=" Last Name"
                          name="lastName"
                          value={lastName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          className="form-control"
                          placeholder=" email address"
                          name="email"
                          value={email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="password"
                          name="password"
                          value={password}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-success btn-rounded button w-100 mb-4  "
                          type="submit"
                        >
                          Register
                        </button>
                        <p className="text-muted" href="#!">
                          Already have an account{" "}
                          <Link to={"/login"}>login</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Register.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
};

export default Register;
