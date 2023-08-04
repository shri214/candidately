import React from "react";

import { FaHandshakeAngle, FaRegLightbulb, FaUserLarge } from "react-icons/fa6";

function ModalA() {
  // explore data
  const explore = [
    {
      image: (
        <FaUserLarge
          className="icons"
          size="3em"
          style={{ color: "#1e1d1d" }}
        />
      ),
      heading: "About us",
      data: "Accelerating the digital client experience for staffing teams globally",
    },
  ];

  const feature = [
    {
      image: (
        <FaHandshakeAngle
          className="icons"
          size="3em"
          style={{ color: "#1e1d1d" }}
        />
      ),

      heading: "partners",
      data: "Together we are building the future of staffing technology",
    },
  ];
  const why = [
    {
      image: (
        <FaRegLightbulb
          className="icons"
          size="3em"
          style={{ color: "#1e1d1d" }}
        />
      ),

      heading: "Why Candidately",
      data: "Client Experience. The key to future success for your staffing business",
    },
  ];
  return (
    <div className="modal">
      <div className="explore">
        <h2>About us</h2>
        <ul>
          {explore.map((val, ind) => {
            return (
              <div className="data-holder">
                <div
                  className="image-part"
                  style={{ backgroundColor: "lightpink" }}
                >
                  {val.image}
                </div>
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
        <h2>Partners</h2>
        <ul>
          {feature.map((val, ind) => {
            return (
              <div className="data-holder">
                <div
                  className="image-part"
                  style={{ backgroundColor: "lightpink" }}
                >
                  {val.image}
                </div>
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
        <h2>Why Candidate.ly</h2>
        <ul style={{ display: "flex", flexFlow: "column" }}>
          {why.map((val, ind) => {
            return (
              <div className="data-holder">
                <div
                  className="image-part"
                  style={{ backgroundColor: "lightpink" }}
                >
                  {val.image}
                </div>
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

export default ModalA;
