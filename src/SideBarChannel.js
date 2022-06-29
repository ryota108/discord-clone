import React from "react";
import classes from "./SideBarChannel.module.css";

function SideBarChannel({ id, channel }) {
  return (
    <div className={classes.sideBarChannel}>
      <h4>
        <span className={classes.sideBarChannelHash}>#</span>{channel}
      </h4>
    </div>
  );
}

export default SideBarChannel;
