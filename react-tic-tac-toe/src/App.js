import { useState } from "react";
import "./App.css";
import circleImg from "./assets/circle.png";
import crossImg from "./assets/cancel.png";
import resetImg from "./assets/circular-arrow.png";
import checkWinner from "./winLogic";

function App() {
  const defaultItemArr = new Array(9).fill(null);
  const [itemArr, setitemArr] = useState(defaultItemArr);
  const [isCross, setisCross] = useState(true);
  const [winner, setWinner] = useState("");
  const [message, setMessage] = useState("");

  const clickHandler = (index) => {
    if(message.includes('won')){
      alert("Click on Try Again for a new game");
      return;
    }
    if(itemArr[index]){
      setMessage("Already taken");
      return;
    }
    itemArr[index] = isCross ? "cross" : "circle";
    setitemArr(itemArr);
    setisCross(!isCross);
    const winner = checkWinner(itemArr)
    if(winner){
      setWinner(winner)
      setMessage(`${winner} won`);
    }else{
      setMessage("")
    }
  };

  const resetHandler = () => {
    setitemArr(itemArr.fill(null, 0, 9));
    setMessage("");
    setWinner("");
    setisCross(true);
  };

  return (
    <div className="container">
      <h2>a dumb tic-tac-toe game</h2>
      <div className="matrix">
        {itemArr.map((item, index) => (
          <div key={index} className="cell" onClick={() => clickHandler(index)}>
            {item != null &&
              (item === "cross" ? (
                <img src={crossImg} alt="cross" />
              ) : (
                <img src={circleImg} alt="circle" />
              ))}
          </div>
        ))}
      </div>


      <div className="message">
      {winner? (
        <div className="success-message">
          <h3>{message}</h3>
          <button onClick={resetHandler}>
          <span>
            Try again
          </span>
            <img src={resetImg} alt="reset-img" className="resetImg"/>
          </button>

        </div>
      ):(
        <>
        <h5 className="promt-message">{message}</h5>
        <div className="player">
          {`${isCross ? "Cross" : "Circle"} is playing`}
        </div>
        <button onClick={resetHandler}>Reset</button>
        </>
      )}
      </div>
    </div>
  );
}

export default App;
