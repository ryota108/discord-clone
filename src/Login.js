import React from "react";
import classes from "./Login.module.css";
import {auth,provider} from "./firebase";
import logo from "../src/Images/Wasecord.png";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider)
    .catch((error) =>alert(error.message))
  };
  return (
    <div className={classes.login}>
      <div className={classes.loginLogo}>
        <img
          src={logo}
          alt=""
        />
      </div>

      <button onClick={signIn}>Sign in</button>
    </div>
  );
}

export default Login;
