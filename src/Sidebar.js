import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { Avatar } from "@material-ui/core";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Friends Adda</h3>
        <ExpandMoreIcon></ExpandMoreIcon>
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon></ExpandMoreIcon>
            <h4>Text Channels</h4>
          </div>

          <AddIcon className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelsList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>
      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>
      <div className="sidebar__profile">
          <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_Nhri2_aauOAsAffdB5gEBb7I4RCQueeqphRMi=s83-c-mo"/>
          <div className="sidebar__profileInfo">
              <h3> Aiman</h3>
              <p>#thisIsMyID</p>
          </div>
          <div className="sidebar__profileIcons">
          <MicNoneOutlinedIcon />
          <HeadsetMicOutlinedIcon />
        <SettingsOutlinedIcon />

          </div>
      </div>
    </div>
  );
};

export default Sidebar;
