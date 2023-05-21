import { BrowserRouter,Routes,Route } from "react-router-dom"
import "./App.css"
import Home from './Pages/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MessageForm from './components/MessageForm';
import Login from './Pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/message" Component={MessageForm}/>
      <Route path="/login" Component={Login}/>    
      </Routes>
      <Footer/>
      <ToastContainer />
    </BrowserRouter>
  );
}
  

export default App