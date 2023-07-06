import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Dashboard from './Pages/Dashboard';
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import NewsFeedPage from './Pages/NewsFeedPage';
import PsychologistPage from "./Pages/PsychologistPage";
import RegisterPage from "./Pages/RegisterPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./Pages/userprofile";



const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" Component={RegisterPage} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/support" Component={NewsFeedPage} />
          <Route path="/psycho" Component={PsychologistPage} />
          <Route path="/me" Component={Profile}exact/>

        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
  );
};

export default App;
