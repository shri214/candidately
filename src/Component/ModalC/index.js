import React from "react";

import {
  FaCode,
  FaMarker,
  FaHeartPulse,
  FaBagShopping,
  FaIndustry,
  FaRocketchat,
  FaBlogger,
  FaStore,
  FaArrowRightLong
} from "react-icons/fa6";

function ModalR() {
  // explore data
  const explore = [
    {
      image: (
        <FaRocketchat
          className="icons"
          size="3em"
          style={{ color: "#1e1d1d" }}
        />
      ),
      heading: "Customer reviews",
      data: "What our clients say about us",
    },
    {
      image: (
        <FaBlogger className="icons" size="3em" style={{ color: "#1e1d1d" }} />
      ),
      heading: "Blog",
      data: "stay up to date",
    },
    {
      image: (
        <FaStore
          className="icons"
          size="3em"
          style={{ color: "#1e1d1d" }}
        />
      ),
      heading: "Bullhorn Marketplace",
      data: "we are official Bullhorn",
    },
    {
      image: (
        <FaArrowRightLong className="icons" size="3em" style={{ color: "#1e1d1d" }} />
      ),
      heading: "What's next user conference",
      data: "Learn more about Candidate.ly's roadmap customer stories and more",
    },
    
  ];
  
  const feature = [
    {
      image: (
        <FaCode className="icons" size="3em" style={{ color: "#1e1d1d" }} />
      ),
      
      heading: "Engineering, Information Technology",
      data: "How developers should be presented",
    },
    {
      image: (
        <FaMarker className="icons" size="3em" style={{ color: "#1e1d1d" }} />
      ),
      
      heading: "Creative",
      data: "How your designers should be presented",
    },
    {
      image: (
        <FaHeartPulse className="icons" size="3em" style={{ color: "#1e1d1d" }} />
      ),
      
      heading: "Health Care",
      data: "How your physicians should be presented",
    },
    {
      image: (
        <FaBagShopping className="icons" size="3em" style={{ color: "#1e1d1d" }} />
        ),
        
        heading: "Legal",
        data: "How paralegals should be presented",
      },
      {
      image: (
        <FaIndustry className="icons" size="3em" style={{ color: "#1e1d1d" }} />
      ),
     
      heading: "Industrial",
      data: "How your designer should be presented",
    },
  ];
  return (
    <div className="modal">
      <div className="explore">
        <h2>Learn</h2>
        <ul>
          {explore.map((val, ind) => {
            return (
              <div className="data-holder">
                <div className="image-part"
                style={{backgroundColor:"lightgreen"}}
                
                >{val.image}</div>
                <div>
                  <h3>{val.heading}</h3>
                  <p>{val.data}</p>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="Feature">
        <h2>Help</h2>
      <ul>
          {feature.map((val,ind) => {
            return (
              <div className="data-holder">
                <div className="image-part"
                 style={{backgroundColor:"yellow"}}
                >{val.image}</div>
                <div>
                  <h3>{val.heading}</h3>
                  <p>{val.data}</p>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="integration">
        <h2>Grow</h2>
        <ul style={{display:"flex", flexFlow:"column"}}>
          {feature.map((val,ind) => {
            return (
              <div className="data-holder">
                <div className="image-part"
                 style={{backgroundColor:"lightpink"}}
                >{val.image}</div>
                <div>
                  <h3>{val.heading}</h3>
                  <p>{val.data}</p>
                </div>
              </div>
            );
          })}
        </ul>
        </div>
    </div>
  );
}

export default ModalR;
