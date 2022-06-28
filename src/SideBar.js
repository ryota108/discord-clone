import React from "react";
import classes from "./SideBar.module.css";
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SideBar() {
  return (
    <div className={classes.sideBar}>
      <div className={classes.sideBarTop}>
        <h3>Aran</h3>
        <ExpandMoreIcon/>
      </div>

      <div className={classes.sidebarChannels}>
        <div className={classes.sidebarChannelsHeader}>
          <div className={classes.sidebarHeader}>
            <ExpandMoreIcon/>
            <h4>Text channels</h4>
          </div>

          <AddIcon className={classes.sidebarAddChannel}/>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
