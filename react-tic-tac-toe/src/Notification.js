import React from 'react';
import './Notification.css';

function Notification({ messageTxt }) {
  return (
    <div
      className={
        messageTxt ? 'notification_toast active' : 'notification_toast '
      }
    >
      <p>
        {messageTxt.toUpperCase()} <span></span>
      </p>
      {/* <div className="message">
        {winner && (
          <div className="success-message">
            <h4>{message}</h4>
            <button onClick={resetHandler}>
              <span>Try again</span>
              <img src={resetImg} alt="reset-img" className="resetImg" />
            </button>
          </div>
        )}
      </div> */}
    </div>
  );
}

export default Notification;
