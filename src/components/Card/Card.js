import React from "react";
import "./Card.scss";
import phones from "../../assets/images/phone.svg";
import chat from "../../assets/images/chat.svg";
import add from "../../assets/images/add.svg";
import video from "../../assets/images/videoCall.svg";
import greenArrowDown from "../../assets/images/greenArrowDown.svg";
import greenArrowUp from "../../assets/images/greenArrowUp.svg";
import redArrowDown from "../../assets/images/redArrowDown.svg";

const Card = (props) => {
  const { item } = props;

  return (
    <div className="Card_container">
      <div className="Card_container__upperdiv">
        <div
          className="Main_container__profileImage__circular--portrait"
          style={{ margin: "auto" }}
        >
          <img
            src={item.image}
            alt="profile_image"
            className="circular--portrait-img"
          />
        </div>

        <div className="Card_container__upperdiv_name">{item.name}</div>
      </div>
      <div className="Card_container_upperMiddlediv">
        <div
          className="Footer_container "
          style={{ position: "inherit", width: "95%" }}
        >
          <div className="Footer_container__chat">
            <img src={chat} alt="phone_Image" className="chat-img" />
          </div>

          <div className="Footer_container__call">
            <img src={phones} alt="phone_Image" className="phone-img" />{" "}
          </div>

          <div className="Footer_container__video">
            <img src={video} alt="phone_Image" className="video-img" />
          </div>
          <div className="Footer_container__add">
            <img src={add} alt="phone_Image" className="add-img" />
          </div>
        </div>
      </div>

      <div className="Card_container_calllogs">
        <div className="Main_container_details box">
          <div className="Main_container_details_name">
            <p>{item.name}</p>
          </div>
          <div className="Main_container_details_callinfo">
            {" "}
            {item.call === 0 ? (
              <img
                src={redArrowDown}
                alt="green arrow"
                className="arrow--down-img"
              />
            ) : item.call === 1 ? (
              <img
                src={greenArrowDown}
                alt="green arrow"
                className="arrow--down-img"
              />
            ) : (
              <img
                src={greenArrowUp}
                alt="green arrow"
                className="arrow--down-img"
              />
            )}
            <p style={{ marginLeft: "6px" }}>{item.Date}</p>
          </div>
        </div>
      </div>
      <div className="Card_container_number box" style={{ width: "97%" }}>
        <div className="Card_container_number_padding">
          {" "}
          <div className="" style={{marginBottom:"8px"}}>Number</div>
          <div className="">{item.number}</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
