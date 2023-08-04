import React from "react";

import {
  FaBell,
  FaCode,
  FaMarker,
  FaHeartPulse,
  FaBagShopping,
  FaIndustry
} from "react-icons/fa6";

function ModalP() {
  // explore data
  const explore = [
    {
      image: (
        <FaBell
          className="icons"
          size="3em"
          style={{ color: "#1e1d1d" }}
        />
      ),
      heading: "NFS Fircroft",
      data: "Learn more about how Nfs Fircroft uses Candidately",
    },
    {
      image: (
        <FaBell className="icons" size="3em" style={{ color: "#1e1d1d" }} />
      ),
      heading: "TriStar",
      data: "Learn more about how TriStar uses Candidately",
    },
    {
      image: (
        <FaBell
          className="icons"
          size="3em"
          style={{ color: "#1e1d1d" }}
        />
      ),
      heading: "Convent Technology",
      data: "Learn more about how Convent Technology uses Candidately",
    },
    {
      image: (
        <FaBell className="icons" size="3em" style={{ color: "#1e1d1d" }} />
      ),
      heading: "J. Patrick & Association",
      data: "Learn more about how J.Patrick & Association uses Candidately",
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
        <h2>Success stories</h2>
        <ul>
          {explore.map((val, ind) => {
            return (
              <div className="data-holder">
                <div className="image-part"
                style={{backgroundColor:ind===0?"lightgreen": ind===1?"lightskyblue":ind===3?"lightpink":"green"}}
                
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
        <h2>Examples by Industry</h2>
      <ul>
          {feature.map((val,ind) => {
            return (
              <div className="data-holder">
                <div className="image-part"
                 style={{backgroundColor:ind===0?"lightgray": ind===1?"lightskyblue":ind===3?"lightpink":ind===4?"yellow":"lightgreen"}}
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
        <h2>Integration</h2>
        <div>
          <h3>Bullhorn invests in Candidate.ly</h3>
          <p>We are very excited to announce today that Candidately has received a strategic investment from Bullhorn Ventures.</p>
        </div>
        <img src="https://global-uploads.webflow.com/605ad29901132bc543e01d9b/630ce6e6a841eef421bbde85_Header%20Graphic-Use%20Cases-min.png" alt="images" className="images"/>
        </div>
    </div>
  );
}

export default ModalP;
