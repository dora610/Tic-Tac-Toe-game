import React from 'react';
import './Notification.css';

function Notification({ messageTxt }) {
  return (
    <div
      className={
        messageTxt ? 'notification_toast active' : 'notification_toast '
      }
    >
      <p>{messageTxt.toUpperCase()}</p>
    </div>
  );
}

export default Notification;
