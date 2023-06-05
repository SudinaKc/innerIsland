import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import "./login.css";
import { Link } from "react-router-dom";
const Login = ({ loginUser, email, setEmail, password, setPassword }) => {
  
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
                      {/* <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: "185px" }}
                        alt="logo"
                      /> */}
                      <h4 className="mt-1 mb-5 pb-1">innerIsland</h4>
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

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-success btn-rounded button w-100 mb-4  "
                          type="submit"
                        >
                          Log in
                        </button>
                        <a className="text-muted" href="#!">
                          Forgot password?
                        </a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don&apos;t have an account?</p>
                        <Link to={"/register"}>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
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
                    <h4 className="mb-4"></h4>
                    <p className="small mb-0">
                     
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
};
export default Login;
