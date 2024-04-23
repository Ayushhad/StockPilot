// NewPage.jsx

import React from 'react';
import './NewPage.css'; // Import your CSS file
import { Link } from 'react-router-dom';

function NewPage() {
  return (
    <div className="NewPage">
      <div className="left-section">
        <Link to="/"><button className="new-chat-btn">New Chat</button></Link>
      </div>
      <div className="chat-section">
        {/* Fancy text */}
        {/* Chat history section */}
        <div className="chat-history">
          {/* Chat messages will be rendered here */}
          {/* Example: */}
          {/* <div className="message">Message content goes here</div> */}
        </div>
        {/* Text input box */}
        <div className="fancy-text">
          Hello, How can I help you today?
        </div>
        <div className="text-input">
          <input type="text" placeholder="Type your message..." />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default NewPage;
