import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Register from "../components/Register";
import { registerUserAsync, reset } from "../redux/slice/userSlice";
const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const { isSuccess, isError, message } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/login");
      toast.success("register success");
    }
    dispatch(reset());
  }, [isError, isSuccess, message, dispatch, navigate]);

  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    age: "",
    address: "",
    gender: "",
  });

  const { firstName, lastName, email, phone, password, age, address, gender } = registerData;

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
    dispatch(registerUserAsync({ firstName, lastName, email, phone, password, age, address, gender,setLoading }));
  };

  return (
    <>
      <Register
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        age={age}
        address={address}
        gender={gender}
        password={password}
        handleChange={handleChange}
        registerUser={registerUser}
        loading={loading}
      />
    </>
  );
};

export default RegisterPage;
