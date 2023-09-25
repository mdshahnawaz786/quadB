import "./App.css";
import { Routes, Route } from "react-router-dom";
import Searchpage from "./Components/SearchPage/Searchpage";
import Jobcard from "./Components/JobCard/Jobcard";
import { useEffect, useState } from "react";
import { jobList } from "./Function/details";
import { useDispatch, useSelector } from "react-redux";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Apply from "./Components/Apply/Apply";
import Success from "./Components/Success/Success";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./Components/Nav/Nav";

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const dispatch = useDispatch()
  const allJobs = useSelector((storeData) => {
    return storeData.allJobs;
  });

  console.log(allJobs);

  useEffect(() => {
    // localStorage.setItem("isLogin" , JSON.stringify(false))
    setIsLogin(JSON.parse(localStorage.getItem("isLogin")))
      dispatch({
        type:"allJobs",
        payload: jobList
      })
    
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={isLogin? <><Nav/><Searchpage /></>:<><Login/></>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/apply'element={isLogin? <><Nav/><Apply/></>:<><Register/></>}/>
        <Route path='/success' element={isLogin? <><Nav/><Success/></>:<><Register/></>}/>
      </Routes>
    </div>
  );
}

export default App;
