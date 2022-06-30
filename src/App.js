import React, { useEffect } from "react";
import "./App.css";
import SideBar from "./SideBar";
import Chat from "./Chat";
import {useDispatch, useSelector} from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  // const user = true;

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log("user is", authUser)
      if(authUser) {

      }else {

      }
    })
  },[])
  return (
    <div className="app">
      {user? (    
      <>
      <SideBar />
      <Chat/>
      </>):(
        <Login/>
      )}
    </div>
  );
}

export default App;
