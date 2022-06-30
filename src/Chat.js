import React from "react";
import classes from "./Chat.module.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Message from "./Message";

function Chat() {
  return (
    <div className={classes.chat}>
      <ChatHeader />

      <div className={classes.chatMessages}>
        <Message/>
        <Message/>
        <Message/>
      </div>

      <div className={classes.chatInput}>
        <AddCircleIcon fontSize="large" />
        <form>
          <input placeholder={"Message #TESTCHANNEL"} />
          <button className={classes.chatInputButton} type="submit">
            Send Message
          </button>
        </form>
        <div className={classes.chatInputIcons}>
          <CardGiftcardIcon fontSize="large"/>
          <GifIcon fontSize="large"/>
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
