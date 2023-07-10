import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { AppointmentPage } from "./Pages/AppointmentPage";
import AppointmentsDetailPage from "./Pages/AppointmentsDetailPage";
import Dashboard from './Pages/Dashboard';
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import NewsFeedPage from './Pages/NewsFeedPage';
import PsychologistDetailPage from "./Pages/PsychologistDetailPage.jsx";
import PsychologistListPage from "./Pages/PsychologistListPage";
import RegisterPage from "./Pages/RegisterPage";
import VideoCallPage from "./Pages/VideoCallPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import { AppContext } from "./context/AppContext";
const App = () => {
  // const {fetchPsychologists}=useContext(AppContext);
  // useEffect(()=>{
  //     fetchPsychologists;
  // },[])
  
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" Component={RegisterPage} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/support" Component={NewsFeedPage} />
          <Route path="/experts" Component={PsychologistListPage} />
          <Route path="/appointments" Component={AppointmentPage} />
          <Route path="/appointments/:userId/:bookId" Component={AppointmentsDetailPage} />
          <Route path="/expertDetail/:id" Component={PsychologistDetailPage} />
          <Route path="/call/:joinKey" Component={VideoCallPage} />


        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
  );
};

export default App;
