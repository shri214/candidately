import React, { useState } from "react";
import "./style.css";
import Button from "../../SupportingComponents/Buttons";
import Modal from '../Modal';
import ModalP from "../ModalP";
import ModalR from "../ModalC";
import ModalA from "../ModalA";

 const Header=() =>{
 
  
  return (
    <nav className="navigation">
      <div className="logo">
        <img
          src="https://global-uploads.webflow.com/605ad29901132bc543e01d9b/62f390fa01f8f146e3e8ac4f_loggo.svg"
          alt="logo"
        />
      </div>
      <div className="lists">
        <ul>
          <li>
            Product
            <span className="material-icons more">expand_more</span>
            <span className="material-icons less">expand_less</span>
            <div className="m">
                <Modal/>
            </div>
          </li>
          <li  >
            Customers
            <span className="material-icons more">expand_more</span>
            <span className="material-icons less">expand_less</span>
            <div className="m">
                <ModalP/>
            </div>
          </li>
          <li  >
            Resources
            <span className="material-icons more">expand_more</span>
            <span className="material-icons less">expand_less</span>
            <div className="m">
                <ModalR/>
            </div>
          </li>
          <li>Pricing </li>
          <li >
            About
            <span className="material-icons more">expand_more</span>
            <span className="material-icons less">expand_less</span>
            <div className="m">
                <ModalA/>
            </div>
          </li>
        </ul>
      </div>
      <div className="login-btns">
        <p>Login</p>
       <Button clName={"btn red"} btnName={"Sign Up"}/>
       <Button clName={"btn demo"} btnName={"Book fo Demo"}/>
        
      </div>
    </nav>
  );
}
export default Header;