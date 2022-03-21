import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    // 로그인한 사용자 변화 감지
    auth.onAuthStateChanged(authUser=>{
      console.log('사용자는 다음과 같습니다.', authUser);
      if(authUser){
          dispatch({
                type:'SET_USER',
                user:authUser,
          })

      } else{
          dispatch({
                type:'SET_USER',
                user:null,
          })
      }
    })
  },[])

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
