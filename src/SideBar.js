import React, { useState, useEffect } from "react";
import classes from "./SideBar.module.css";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SideBarChannel from "./SideBarChannel";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallIcon from "@mui/icons-material/Call";
import { Avatar } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import HeadsetIcon from "@mui/icons-material/Headset";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import db from "./firebase";

function SideBar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
    });
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");

    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };
  return (
    <div className={classes.sideBar}>
      <div className={classes.sideBarTop}>
        <h3>Wasecord</h3>
        <ExpandMoreIcon />
      </div>

      <div className={classes.sideBarChannels}>
        <div className={classes.sideBarChannelsHeader}>
          <div className={classes.sideBarHeader}>
            <ExpandMoreIcon />
            <h4>Text channels</h4>
          </div>

          <AddIcon
            onClick={handleAddChannel}
            className={classes.sideBarAddChannel}
          />
        </div>
        <div className={classes.sideBarChannelsList}>
          {channels.map(({id,channel}) => (
            <SideBarChannel key={id} id={id} channel={channel.channelName} />
          ))}
        </div>
      </div>

      <div className={classes.sideBarVoice}>
        <SignalCellularAltIcon
          className={classes.sideBarVoiceIcon}
          fontsize="large"
        />
        <div className={classes.sideBarVoiceInfo}>
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className={classes.sideBarVoiceIcons}>
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>
      <div className={classes.sideBarProfile}>
        <Avatar
          onClick={() => {
            auth.signOut();
          }}
          src={user.photo}
        />
        <div className={classes.sideBarProfileInfo}>
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>
        <div className={classes.sidebarProfileIcons}>
          <MicIcon className={classes.sidebarProfileIcon} />
          <HeadsetIcon className={classes.sidebarProfileIcon} />
          <SettingsIcon className={classes.sidebarProfileIcon} />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
