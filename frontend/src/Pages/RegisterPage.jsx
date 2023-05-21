import { useState } from "react";
import Register from "../components/Register";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate=useNavigate()
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
        console.log("registrer success");
        toast.success("register success",{
            position: toast.POSITION.TOP_CENTER,
            autoClose:500
        })
        navigate("/")
      }
    
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data,{
        position: toast.POSITION.TOP_CENTER,
        autoClose:500
    })
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
