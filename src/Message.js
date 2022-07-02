import React from "react";
import classes from "./Message.module.css";
import { Avatar } from "@mui/material";

function Message({ timestamp, user, message }) {
  const utcDate = new Date(timestamp?.toDate()).toUTCString();
  function changeJSTDate(date) {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    const dayOfWeek = "日月火水木金土".charAt(newDate.getDay());

    const hour = (`0` + newDate.getHours()).slice(-2);
    const minute = (`0` + newDate.getMinutes()).slice(-2);
    return `${year}/${month}/${day} (${dayOfWeek}) ${hour}:${minute}`;
  }
  return (
    <div className={classes.message}>
      <Avatar src={user.photo} />
      <div className={classes.messageInfo}>
        <h4>
          {user.displayName}
          <span className={classes.messageTimestamp}>
            {changeJSTDate(utcDate)}
          </span>
        </h4>

        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
