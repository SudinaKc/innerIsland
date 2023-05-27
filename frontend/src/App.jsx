import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ChatPage from "./Pages/ChatPage";
import { useState } from "react";
import { AppContext, Socket } from "./context/appContext";
const App = () => {
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState([]);
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [privateMemberMsg, setPrivateMemberMsg] = useState({});
  const [newMessages, setNewMessages] = useState({});
  return (
    <AppContext.Provider
      value={{
        Socket,
        rooms,
        setRooms,
        currentRoom,
        setCurrentRoom,
        members,
        setMembers,
        privateMemberMsg,
        setPrivateMemberMsg,
        newMessages,
        setNewMessages,
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/chat" Component={ChatPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" Component={RegisterPage} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
