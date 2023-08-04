import React from "react";
import "./style.css";
import {
  FaShareNodes,
  FaBell,
  FaBolt,
  FaSquareYoutube,
  FaCompass,
  FaCircleUser,
  FaCodeBranch,
  FaBandcamp,
  FaMobile
} from "react-icons/fa6";

function Modal() {
  // explore data
  const explore = [
    {
      image: (
        <FaSquareYoutube
          className="icons"
          size="3em"
          style={{ color: "#1e1d1d" }}
        />
      ),
      heading: "Product demo",
      data: "Watch a recorded demo now",
    },
    {
      image: (
        <FaBolt className="icons" size="3em" style={{ color: "#1e1d1d" }} />
      ),
      heading: "virtual product tour",
      data: "click through and see how it works",
    },
    {
      image: (
        <FaShareNodes
          className="icons"
          size="3em"
          style={{ color: "#1e1d1d" }}
        />
      ),
      heading: "Example Submission Page",
      data: "How your submission could look like",
    },
    {
      image: (
        <FaBell className="icons" size="3em" style={{ color: "#1e1d1d" }} />
      ),
      heading: "what's new?",
      data: "Check out our latest product updates",
    },
    {
      image: (
        <FaCompass className="icons" size="3em" style={{ color: "#1e1d1d" }} />
      ),
      heading: "Product Roadmap",
      data: "See what we are building next for you",
    },
  ];
  
  const feature = [
    {
      image: (
        <FaCircleUser className="icons" size="3em" style={{ color: "#1e1d1d" }} />
      ),
      
      heading: "Candidate Profiles",
      data: "create stunning candidate profiles",
    },
    {
      image: (
        <FaBell className="icons" size="3em" style={{ color: "#1e1d1d" }} />
      ),
      
      heading: "Notification",
      data: "Always know when to act",
    },
    {
      image: (
        <FaBandcamp className="icons" size="3em" style={{ color: "#1e1d1d" }} />
      ),
      
      heading: "Branding",
      data: "showcase your brand",
    },
    {
      image: (
        <FaCodeBranch className="icons" size="3em" style={{ color: "#1e1d1d" }} />
        ),
        
        heading: "Automation",
        data: "Automation your workflows",
      },
      {
      image: (
        <FaMobile className="icons" size="3em" style={{ color: "#1e1d1d" }} />
      ),
     
      heading: "Mobile optimized",
      data: "Candidate presentation 100% mobile",
    },
  ];
  return (
    <div className="modal">
      <div className="explore">
        <h2>Explore</h2>
        <ul>
          {explore.map((val, ind) => {
            return (
              <div className="data-holder">
                <div className="image-part"
                 style={{backgroundColor:ind===0?"lightblue": ind===1?"yellow":ind===3?"lightskyblue":ind===4?"lightpink":"lightgreen"}}
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
        <h2>Feature</h2>
      <ul>
          {feature.map((val, ind) => {
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
          <h3>Bullhorn Integration</h3>
          <p>Candidately Integrates deeply with Bullhorn</p>
        </div>
        <img src="https://global-uploads.webflow.com/605ad29901132bc543e01d9b/63418bbab9d4ce2cb3a1bf32_Header%20Graphic-Product.png" alt="images" className="images"/>
        </div>
    </div>
  );
}

export default Modal;
