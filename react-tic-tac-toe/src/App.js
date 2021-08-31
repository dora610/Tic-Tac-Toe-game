import { useState } from 'react';
import './App.css';
import circleImg from './assets/circle.png';
import crossImg from './assets/cancel.png';
import resetImg from './assets/circular-arrow.png';
import checkWinner from './winLogic';
import Notification from './Notification';

function App() {
  const nullArray = new Array(9).fill(null);
  const [itemArr, setitemArr] = useState(nullArray);
  const [isCross, setisCross] = useState(true);
  const [winner, setWinner] = useState('');
  const [message, setMessage] = useState('');
  const [playerSelected, setPlayerSelected] = useState(false);

  const choosePlayer = (e) => {
    const player = e.target.value;
    setisCross(player === 'cross');
  };

  const clickHandler = (index) => {
    if (message.includes('won')) {
      alert('Click on Try Again for a new game');
      return;
    }
    if (itemArr[index]) {
      setMessage('Already taken');
      return;
    }
    setPlayerSelected(true);
    itemArr[index] = isCross ? 'cross' : 'circle';
    setitemArr([...itemArr]);
    setisCross(!isCross);
    const winner = checkWinner(itemArr);
    if (winner) {
      setWinner(winner);
      setMessage(`${winner} won`);
    } else {
      setMessage('');
    }
  };

  const resetHandler = () => {
    setitemArr(nullArray);
    setMessage('');
    setWinner('');
    setisCross(true);
    setPlayerSelected(false);
  };

  return (
    <div className="container">
      <Notification messageTxt={message} />
      <h2>a dumb tic-tac-toe game</h2>
      {!playerSelected && (
        <div className="radio_palyer">
          <input
            type="radio"
            name="firstPlayer"
            id="circle"
            value="cross"
            checked={isCross}
            onChange={choosePlayer}
          />
          <label htmlFor="circle">Cross</label>
          <input
            type="radio"
            name="firstPlayer"
            id="cross"
            value="circle"
            checked={!isCross}
            onChange={choosePlayer}
          />
          <label htmlFor="circle">Circle</label>
        </div>
      )}

      <div className="matrix">
        {itemArr.map((item, index) => (
          <div key={index} className="cell" onClick={() => clickHandler(index)}>
            {item &&
              (item === 'cross' ? (
                <img src={crossImg} alt="cross" />
              ) : (
                <img src={circleImg} alt="circle" />
              ))}
          </div>
        ))}
      </div>

      <div className="message">
        {winner ? (
          <div className="success-message">
            <h4>{message}</h4>
            <button onClick={resetHandler}>
              <span>Try again</span>
              <img src={resetImg} alt="reset-img" className="resetImg" />
            </button>
          </div>
        ) : (
          <>
            {/* <div className="promt-message">
              <h5>{message}</h5>
            </div> */}

            <div className="player">
              {`${isCross ? 'Cross' : 'Circle'} is playing`}
            </div>
            <button onClick={resetHandler}>Reset</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
