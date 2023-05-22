import { useState } from "react";
import Register from "../components/Register";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = registerData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const registerUser = async (e) => {
    e.preventDefault();
    // Logic for registering user
    try {
      if (!firstName || !lastName || !email || !password) {
        // throw new Error("Please fill in all the fields");
        throw new Error(
          toast.error(
            "please fill in all the field",

            {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 500,
            }
          )
        );
      }
      const response = await axios.post(
        "http://localhost:3000/users/register",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );

      if (response.status === 200) {
        console.log("register success");
        // Perform any additional actions after successful registration
        navigate("/")
      }
    } catch (error) {
      console.log(error.message);
      // Handle error case, e.g., display error message to the user
    }
  };

  return (
    <>
      <Register
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        handleChange={handleChange}
        registerUser={registerUser}
      />
    </>
  );
};

export default RegisterPage;
