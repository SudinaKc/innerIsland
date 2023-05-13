import { BrowserRouter,Routes,Route } from "react-router-dom"
// import Meditation from './screens/Meditation';
import "./App.css"
import HomeScreen from './screens/HomeScreen';
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path="/" Component={HomeScreen}/>
        {/* <Route path="/meditation" Component={Meditation}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
  

export default App