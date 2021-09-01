import React, { useEffect, useState } from 'react';
import './Toast.css';
import resetImg from '../../assets/circular-arrow.png';

function Toast({ messageText, clearNotif, reset }) {
  const [showNotif, setShowNotif] = useState(false);

  const hideToast = () => {
    setShowNotif(false);
    clearNotif();
  };

  useEffect(() => {
    if (messageText) {
      setShowNotif(true);
    } else {
      setShowNotif(false);
    }
  }, [messageText]);

  return (
    <div
      className={showNotif ? 'notification_toast' : 'notification_toast hide'}
    >
      <p>{messageText.toUpperCase()}</p>
      {messageText.includes('retry') && (
        <button
          onClick={() => {
            reset();
            hideToast();
          }}
          className="reset"
        >
          <img src={resetImg} alt="reset" className="resetImg" />
        </button>
      )}
      <button onClick={hideToast} className="delete">
        x
      </button>
    </div>
  );
}

export default Toast;
