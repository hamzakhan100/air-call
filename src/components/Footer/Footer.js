import React from "react";
import "./Footer.scss";
import phones from "../../assets/images/phone.svg";
import chat from "../../assets/images/chat.svg";
import add from "../../assets/images/add.svg";
import video from "../../assets/images/videoCall.svg";
const Footer = (props) => {
  const{setIsActivity}=props

  return (
    <div className="Footercontainer">
      <div className="Footer_container ">
        <div className="Footer_container__chat">
          <img src={chat} alt="phone_Image" className="chat-img" />
        </div>

        <div className="Footer_container__call">
          <img src={phones} alt="phone_Image" className="phone-img" /> <hr />
        </div>

        <div className="Footer_container__video">
          <img src={video} alt="phone_Image" className="video-img" />
        </div>

        <div className="Footer_container__add">
          <img
            src={add}
            alt="phone_Image"
            className="add-img"
            onClick={() => {
              setIsActivity(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Footer;
