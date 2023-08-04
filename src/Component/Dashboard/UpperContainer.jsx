import React from "react";
import {FaRegCircleCheck} from "react-icons/fa6"
import Button from "../../SupportingComponents/Buttons";
import "./style.css"

function UpperContainer() {
  return (
    <div className='main-container'>
        <div className="upperContainer-box" >
      <p>THE CLIENT PORTAL FOR BULLHORN</p>
      <h1>Make <span className="upperContainer-span-background">candidate submissions</span> </h1>
      <h1>your competitive advantage</h1>
      <div className="upperContainer-span-holder">
        <span>
          <FaRegCircleCheck style={{backgroundColor:"white", color:"coral"}} size="1.5em"/>
          <span>50% faster client feedback</span>
        </span>
        <span>
          <FaRegCircleCheck style={{backgroundColor:"white", color:"coral"}} size="1.5em"/>
          <span>Improve fill ratios</span>
        </span>
        <span>
          <FaRegCircleCheck style={{backgroundColor:"white", color:"coral"}} size="1.5em"/>
          <span>Reduce time to submit</span>
          </span>
      </div>
      <p className="upperContainer-para">Submit candidates to clients as a branded link instead of attaching resumes to an email.</p>

      <Button clName={"btn demo"} btnName={"Book a Demo"}/>

      <div className="UpperContainer-image-div">
        <img src="https://global-uploads.webflow.com/605ad29901132bc543e01d9b/62727ac8f4e4d65ee7b28106_1-Hero_profile_new_o.jpg" alt="post" />
      </div>
      <p className="upperContainer-last-para">
      Loved by leading staffing teams around the world
      </p>
       </div>
    </div>
  );
}

export default UpperContainer;
