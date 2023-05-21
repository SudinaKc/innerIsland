import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        {
          email,
          password,
        },
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
        // Perform any necessary actions, such as setting tokens or redirecting to a new page
        navigate("/");
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
    <>
      <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loginUser={loginUser}
      />
    </>
  );
};

export default LoginPage;
