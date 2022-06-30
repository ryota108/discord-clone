import React from "react";
import classes from "./Login.module.css";
import {auth,provider} from "./firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider)
    .catch((error) =>alert(error.message))
  };
  return (
    <div className={classes.login}>
      <div className={classes.loginLogo}>
        <img
          src="https://www.dospara.co.jp/5info/img/str_gamepc_discord/str_gamepc_discord001.png"
          alt=""
        />
      </div>

      <button onClick={signIn}>Sign in</button>
    </div>
  );
}

export default Login;
