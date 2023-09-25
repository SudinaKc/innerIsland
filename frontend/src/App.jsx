import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./Pages/About";
import { AppointmentPage } from "./Pages/AppointmentPage";
import AppointmentsDetailPage from "./Pages/AppointmentsDetailPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import PsychologistDetailPage from "./Pages/PsychologistDetailPage";
import PsychologistListPage from "./Pages/PsychologistListPage";
import RegisterPage from "./Pages/RegisterPage";
import VideoCallPage from "./Pages/VideoCallPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PaymentSuccess from "./components/PaymentSuccess";
import PrivateRoute from "./private/PrivateRoute";

const App = () => {
  const { user } = useSelector((state) => state.user);

  // Check if the current pathname is "/about"
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/experts" element={<PsychologistListPage />} />

        <Route path="/appointments" element={<PrivateRoute user={user}><AppointmentPage /></PrivateRoute>} />

        {/* <Route element={<PrivateRoute user={user} />}>
          <Route path="/appointments" element={<AppointmentPage />} />
          
        </Route> */}
        <Route
          path="/appointments/:userId/:bookId/:psychologistId"
          element={
            <PrivateRoute user={user}>
              <AppointmentsDetailPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/expertDetail/:id"
          element={
            // <PrivateRoute user={user}>
              <PsychologistDetailPage />
            // </PrivateRoute>
          }
        />
        <Route
          path="/call/:joinKey/:userName"
          element={
            <PrivateRoute user={user}>
              <VideoCallPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/paymentsuccess"
          element={
            <PrivateRoute user={user}>
              <PaymentSuccess />
            </PrivateRoute>
          }
        />
        <Route path="/profile" element={
          <PrivateRoute user={user}>
            <ProfilePage />
          </PrivateRoute>
        } />
      </Routes>
      {

      }
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;


