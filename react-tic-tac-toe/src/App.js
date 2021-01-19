import { useState } from "react";
import "./App.css";
import circleImg from "./assets/circle.png";
import crossImg from "./assets/cancel.png";
import checkWinner from "./winLogic";

function App() {
  const defaultItemArr = new Array(9).fill(null);
  const [itemArr, setitemArr] = useState(defaultItemArr);
  const [isCross, setisCross] = useState(true);
  const [message, setMessage] = useState("");

  const clickHandler = (index) => {
    if (itemArr[index] !== null) {
      setMessage("Already taken");
    } else {
      setMessage("");
      itemArr[index] = isCross ? "cross" : "circle";
      setitemArr(itemArr);
      setisCross(!isCross);
      setMessage(checkWinner(itemArr));
    }
  };

  const resetHandler = () => {
    setitemArr(itemArr.fill(null, 0, 9));
    console.log("reset");
    setMessage("");
    setisCross(true);
  };

  return (
    <div>
      <div className="container">
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
      <button onClick={resetHandler}>Reset</button>
      <div className="player">
        Player: {`${isCross ? "Cross" : "Circle"} is playing`}
      </div>
      <h5 className="message">{message}</h5>
      <div className="footer">
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}

export default App;
