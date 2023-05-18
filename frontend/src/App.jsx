import { BrowserRouter,Routes,Route } from "react-router-dom"
import "./App.css"
import Home from './Pages/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MessageForm from './components/MessageForm';
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/message" Component={MessageForm}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
  

export default App