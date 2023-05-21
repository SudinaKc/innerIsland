import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./login.css"
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginData = {
    email,
    password,
  };
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        loginData,
        {
          withCredentials: true,
        }
      );

      // Handle the response from the backend
      if (response.status === 200) {
        // const responseData = response.data;
        console.log("login successful");
        toast.success("login success !", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 500,
        });
        // history.push("/");
        navigate("/");
        // Perform any necessary actions, such as setting tokens or redirecting to a new page
      } else {
        // Login failed, handle the error response from the backend
        const errorData = response.data;
        console.log("Login failed:", errorData.message);
        // Handle the error, such as displaying an error message to the user
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Invalid login credentials. Please try again.", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000, // Adjust the duration as needed
        });
      } else {
        toast.error("Error occurred during login: " + error.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000, // Adjust the duration as needed
        });
      }
    }
  };

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
                        <button className="btn btn-success btn-rounded button w-100 mb-4  " type="submit">
                          Log in
                        </button>
                        <a className="text-muted" href="#!">
                          Forgot password?
                        </a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don&apos;t have an account?</p>
                        <button type="button" className="btn btn-outline-danger">
                          Create new
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
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

export default Login;
