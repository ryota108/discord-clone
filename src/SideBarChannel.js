import React from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "./features/appSlice";
import classes from "./SideBarChannel.module.css";

function SideBarChannel({ id, channel }) {
  const dispatch = useDispatch();
  return (
    <div
      className={classes.sideBarChannel}
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channel,
          })
        )
      }
    >
      <h4>
        <span className={classes.sideBarChannelHash}>#</span>
        {channel}
      </h4>
    </div>
  );
}

export default SideBarChannel;
