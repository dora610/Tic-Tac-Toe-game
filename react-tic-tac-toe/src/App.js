import { useState } from 'react';
import './App.css';
import circleImg from './assets/circle.png';
import crossImg from './assets/cancel.png';

import checkWinner from './winLogic';
import Toast from './Toast';

function App() {
  const nullArray = new Array(9).fill(null);
  const [itemArr, setitemArr] = useState(nullArray);
  const [isCross, setisCross] = useState(true);
  const [winner, setWinner] = useState('');
  const [notif, setNotif] = useState('');
  const [playerSelected, setPlayerSelected] = useState(false);

  const choosePlayer = (e) => {
    const player = e.target.value;
    setisCross(player === 'cross');
  };

  const clickHandler = (index) => {
    if (winner) {
      setNotif(`${winner} won 🥇, retry`);
      return;
    }
    if (itemArr[index]) {
      setNotif('Already taken');
      return;
    }

    setPlayerSelected(true);
    itemArr[index] = isCross ? 'cross' : 'circle';
    setitemArr([...itemArr]);
    setisCross(!isCross);
    setNotif('');
    const isWinner = checkWinner(itemArr);
    if (isWinner) {
      setWinner(isWinner);
      setNotif(`Yeh! ${isWinner} won 🥇🎆`);
    }
  };

  const resetHandler = () => {
    setitemArr(nullArray);
    setNotif('');
    setWinner('');
    setisCross(true);
    setPlayerSelected(false);
  };

  const clearNotif = () => setNotif('');

  return (
    <div className="container">
      <Toast messageText={notif} clearNotif={clearNotif} reset={resetHandler} />
      <h3>a dumb tic-tac-toe game</h3>
      {!playerSelected ? (
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
      ) : (
        <div className="player">
          {isCross ? 'Cross' : 'Circle'} {winner ? ' lost' : ' is playing'}
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
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;
