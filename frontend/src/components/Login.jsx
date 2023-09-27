import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Logo } from "./LogoSvg";
import "./login.css";
import Loader from "./spinner/Loader";
const Login = ({
  loginUser,
  email,
  setEmail,
  password,
  setPassword,
  userType,
  setUserType,
  loading
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

                      <h4 className="mt-1 mb-5 pb-1">{
                        Logo
                      }</h4>
                    </div>
                    <div className="" style={{ height: "12px" }}>
                      {
                        loading &&
                        <Loader />
                      }
                    </div>

                    <form onSubmit={loginUser}>
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          className="form-control"
                          placeholder=" email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          placeholder="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="d-flex justify-content-between ">
                        <div
                          className="form-check"
                          style={{ cursor: "pointer" }}
                        >
                          <input
                            className=""
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            style={{ cursor: "pointer" }}
                            checked={userType === "user"}
                            value="user"
                            onChange={(e) => setUserType(e.target.value)}
                          />
                          <span> </span>
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                            style={{ cursor: "pointer" }}
                          >
                            user
                          </label>
                        </div>
                        <div
                          className="form-check"
                          style={{ cursor: "pointer" }}
                        >
                          <input
                            className=""
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            style={{ cursor: "pointer" }}
                            value="expert"
                            checked={userType === "expert"}
                            onChange={(e) => setUserType(e.target.value)}
                          />
                          <span> </span>
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                            style={{ cursor: "pointer" }}
                          >
                            Psychologist
                          </label>
                        </div>
                      </div>

                      <br />

                      <div className="text-center pt-1 mb-5 pb-1">

                        <button
                          className="btn btn-success btn-rounded button w-100 mb-4  "
                          type="submit"
                        >
                          Log in
                        </button>
                        {/* <a className="text-muted" href="#!">
                          Forgot password?
                        </a> */}

                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don&apos;t have an account?</p>
                        <Link to={"/register"}>
                          <button
                            type="button"
                            className="btn btn-outline-success"
                          >
                            Create new
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">
                      Discover Your Inner Island of Support
                    </h4>
                    <p className="small mb-0">
                      Welcome to InnerIsland, your oasis of empathy and support
                      on your transformative journey towards mental well-being -
                      find solace, guidance, and renewed hope on your personal
                      inner island
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
Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  userType: PropTypes.string.isRequired,
  setUserType: PropTypes.func.isRequired,
};
export default Login;












