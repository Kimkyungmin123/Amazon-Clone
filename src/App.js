import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/login/Login";

function App() {
  return (
    <Router>
      <Header/>
      
        
      
        <Routes>
        <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
    </Router>
  );
}

export default App;
