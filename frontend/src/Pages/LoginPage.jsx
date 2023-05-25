import { useState,useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginUserAsync, reset } from "../redux/slice/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, message } = useSelector(
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
      navigate("/");
      toast.success("login success");
    }
    dispatch(reset());
  }, [isError, isSuccess, message, dispatch, navigate]);

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
