import { useEffect, useState } from "react";
import Register from "../components/Register";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { registerUserAsync, reset } from "../redux/slice/userSlice";
const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, isError, message } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/");
      toast.success("register success");
    }
    dispatch(reset());
  }, [isError, isSuccess, message, dispatch, navigate]);

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
    // prevent default
    e.preventDefault();
    // check field validation
    if (!firstName || !lastName || !email || !password) {
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
    // dispathc
    dispatch(registerUserAsync({ firstName, lastName, email, password }));
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
