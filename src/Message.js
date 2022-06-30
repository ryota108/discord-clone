import React from "react";
import classes from "./Message.module.css";
import { Avatar } from "@mui/material";

function Message() {
  return (
    <div className={classes.message}>
      <Avatar />
      <div className={classes.messageInfo}>
        <h4>
          Arannnnnn
          <span className={classes.messageTimestamp}>This is a timestamp</span>
        </h4>

        <p>This is a message</p>
      </div>
    </div>
  );
}

export default Message;
