import { useState } from 'react';
import '../index.css';

export default function DiceRoll() {
  const diceImages = [
    "/assets/dice/1.png",
    "/assets/dice/2.png",
    "/assets/dice/3.png",
    "/assets/dice/4.png",
    "/assets/dice/5.png",
    "/assets/dice/6.png",
  ];

  const [image, setNewImage] = useState(diceImages[0]);
  const [image2, setNewImage2] = useState(diceImages[1]);

  const rollDice = () => {
    const randomNum1 = Math.floor(Math.random() * 6);
    const randomNum2 = Math.floor(Math.random() * 6);
    setNewImage(diceImages[randomNum1]);
    setNewImage2(diceImages[randomNum2]);
  };

  return (
    <div className="App">
      <center>
        <div className="container">
          <h1>LET'S GO GAMBLING! 🤑</h1>
          <div style={{ height: '20px'}}></div>
          <img className="square" src={image} alt="dice 1" />
          <div style={{ width: '5px', display: 'inline-block' }}></div>
          <img className="square" src={image2} alt="dice 2" />
        </div>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={rollDice}
        >
          Roll Dice
        </button>
      </center>
    </div>
  );
}
