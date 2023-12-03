/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "../components/Login";
import { loginUserAsync, reset } from "../redux/slice/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { isSuccess, isError, message, user } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    if (isError) {
      console.log(message);
      toast.error(message);
    }
    if (isSuccess) {

      toast.success("Login success", {
        autoClose: 500, // Duration in milliseconds (2 seconds)
      });
      // navigate("/support");
      navigate("/");

    }
    dispatch(reset());
  }, [isError, isSuccess, message, dispatch, navigate, user]);

  const loginUser = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("all fields are required ")
      return new Error("All fields are required ")
    }
    dispatch(loginUserAsync({ email, password, userType ,setLoading}));
  };

  return (
    <>
      <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loginUser={loginUser}
        userType={userType}
        setUserType={setUserType}
        loading={loading}

      />
    </>
  );
};

export default LoginPage;
