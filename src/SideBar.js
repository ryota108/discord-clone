import React from "react";
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

function SideBar() {
  return (
    <div className={classes.sideBar}>
      <div className={classes.sideBarTop}>
        <h3>ARAN</h3>
        <ExpandMoreIcon />
      </div>

      <div className={classes.sideBarChannels}>
        <div className={classes.sideBarChannelsHeader}>
          <div className={classes.sideBarHeader}>
            <ExpandMoreIcon />
            <h4>Text channels</h4>
          </div>

          <AddIcon className={classes.sideBarAddChannel} />
        </div>
        <div className={classes.sideBarChannelsList}>
          <SideBarChannel channel="youtube" />
          <SideBarChannel channel="React study" />
          <SideBarChannel channel="random" />
          <SideBarChannel channel="all" />
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
        <Avatar />
        <div className={classes.sideBarProfileInfo}>
          <h3>@ryooota</h3>
          <p>#thisIsMyID</p>
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
