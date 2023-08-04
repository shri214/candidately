import React from 'react'
import "./style.css"
import Button from '../../SupportingComponents/Buttons'

function Card2({flag}) {
  return (
    <>
    {flag ?<div className='container'>
        <div className='details'>
            <h1>Say goodbye to back and forth emails and attachments</h1>
            <p>Say hello to a new era of candidate presentation.</p>
            <p>With Candidately, forward thinking staffing teams create beautifully branded candidate submissions that clients can access anywhere and anytime.</p>
            <Button clName={"btn red"} btnName={"Book a demo"}/>
        </div>

        <img src='https://global-uploads.webflow.com/605ad29901132bc543e01d9b/645c02657f980a6dee0c7ffb_say-goodbye.png' alt='images'/>
    </div>:
    <div className='container2'>
    <img src='https://global-uploads.webflow.com/605ad29901132bc543e01d9b/61b26293f11b658ade9b1a2e_Bullhorn_iFrame%201.png' alt='images'/>
    <div className='details' style={{color:"black"}}>
        <h1>Lightning fast submissions, right from within Bullhorn</h1>
        <p>Give your team back their time on creating candidate submittals. Simply pick a candidate from within Bullhorn and share a link with your clients. As easy as sharing a Dropbox folder or Google document.</p>
       
    </div>

</div>
    
    }
    </>
    
  )
}

export default Card2