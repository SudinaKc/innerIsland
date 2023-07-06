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
  const {  isSuccess, isError, message,user } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isError) {
      console.log(message);
      toast.error(message);
    }
    if (isSuccess) {
      // console.log(user.user._id)
      navigate(`/support/${user.user._id}`);
      // console.log(user)
      toast.success("login success");  
      navigate("/support")
    }
    dispatch(reset());
  }, [isError, isSuccess, message, dispatch, navigate,user]);

  const loginUser = async (e) => {
    e.preventDefault();
    dispatch(loginUserAsync({ email, password }));
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
