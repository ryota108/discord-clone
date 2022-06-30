import React from "react";
import classes from "./ChatHeader.module.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

function ChatHeader() {
  return (
    <div className={classes.chatHeader}>
      <div className={classes.chatHeaderLeft}>
        <h3>
          <span className={classes.chatHeaderHash}>#</span>Test channel name
        </h3>
      </div>
      <div className={classes.chatHeaderRight}>
        <NotificationsIcon/>
        <EditLocationIcon/>
        <PeopleAltRoundedIcon/>

        <div className={classes.chatHeaderSearch}>
          <input placeholder="search"/>
          <SearchRoundedIcon/>
        </div>
        <SendRoundedIcon/>
        <HelpRoundedIcon/>
      </div>
    </div>
  );
}

export default ChatHeader;
