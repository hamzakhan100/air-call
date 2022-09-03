import React, { useState, useEffect } from "react";
import "./Activity.scss";
import Card from "../Card/Card";
import addArrow from "../../assets/images/add.svg";
import greenArrowDown from "../../assets/images/greenArrowDown.svg";
import greenArrowUp from "../../assets/images/greenArrowUp.svg";
import redArrowDown from "../../assets/images/redArrowDown.svg";
import phones from "../../assets/images/phone.svg";
import dummyData from "../../data.json";
import Footer from "../Footer/Footer";
import{toastSuccessMessage } from "../../util/Utilfunction"
import Archived from "../Archived/Archived"

const Activity = () => {
  const [isShow, setIshow] = useState(false);
  const [isActivity, setIsActivity] = useState(false);
  const [jsonData, setJsonData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setJsonData(dummyData);
  }, [jsonData]);

  const handleClick = (obj) => {
    setIshow(true);
    setData(obj);
  };
  const handleArcvhived = (event) => {
    const deletedata = delete jsonData[event.id - 1];
    setJsonData(data, deletedata);
    toastSuccessMessage("Archive successfully");
  };
  return (
    <div className="Activity_container">
   {!isActivity?   !isShow ? (
        jsonData.map((item, index) => (
          <div
            className="Main_container mt"
            key={index}
            onClick={() => handleClick(item)}
          >
            <div className="Main_container__profileImage">
              <div className="Main_container__profileImage__circular--portrait">
                <img
                  src={item.image}
                  alt="profile_image"
                  className="circular--portrait-img"
                />
              </div>
              <div className="circle">
                <p style={{ marginLeft: "6px", marginTop: "4px" }}>
                  {item.Notification}
                </p>
              </div>
            </div>

            <div className="Main_container_details">
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
            <div className="Main_container_phone">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <img
                  src={addArrow}
                  alt="Add_Image"
                  className="Add-img"
                  onClick={() => {
                    handleArcvhived(item);
                  }}
                />
               
              </div>
        
              <img src={phones} alt="phone_Image" className="phone-img" />
            </div>
          </div>
        ))
      ) : (
        <Card item={data} />
      ) :(<Archived data={jsonData }/>)}

      <Footer setIsActivity={setIsActivity}/>
    </div>
  );
};
export default Activity;
