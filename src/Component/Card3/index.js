import React from "react";
import "./style.css";

function Card3() {
  return (
    <div className="containers">
      <div className="containers1">
        <h1>No client login required</h1>
        <p>
          Through a simple link your clients can access candidate submissions
          right away. No signup or password required.
        </p>
        <img
          src="https://global-uploads.webflow.com/605ad29901132bc543e01d9b/633300b40eeb44179ab9957b_no-client-login.png"
          alt="images"
        />
      </div>
      <div className="containers2">
        <h1>50% faster client feedback</h1>
        <p>
          Let clients request interviews or decline your candidate submissions
          with the click of a button.
        </p>
        <img
          src="https://global-uploads.webflow.com/605ad29901132bc543e01d9b/645c025ee1b4e8b007f55607_instant-client-feedback.png"
          alt="images"
        />
      </div>
    </div>
  );
}

export default Card3;
