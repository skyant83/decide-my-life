import { useState } from 'react';
import { Slider } from 'rsuite'

import dice1 from "../assets/dice/1.svg";
import dice2 from "../assets/dice/2.svg";
import dice3 from "../assets/dice/3.svg";
import dice4 from "../assets/dice/4.svg";
import dice5 from "../assets/dice/5.svg";
import dice6 from "../assets/dice/6.svg";
import '../index.css';
import 'rsuite/Slider/styles/index.css';

export default function DiceRoll() {
  const diceImages = [
    dice1,
    dice2,
    dice3,
    dice4,
    dice5,
    dice6,
  ];

  const [image, setNewImage] = useState(diceImages[0]);
  const [image2, setNewImage2] = useState(diceImages[1]);
	const [seconds, setSeconds] = useState(5);

  const rollDice = () => {
		let count = 0;
		const interval = setInterval(() => {
			const tempNum1 = Math.floor(Math.random() * 6);
			const tempNum2 = Math.floor(Math.random() * 6);
			setNewImage(diceImages[tempNum1]);
			setNewImage2(diceImages[tempNum2]);
			count++;
			if (count >= seconds*10) { // number of cycles
				clearInterval(interval);
				const finalNum1 = Math.floor(Math.random() * 6);
				const finalNum2 = Math.floor(Math.random() * 6);
				setNewImage(diceImages[finalNum1]);
				setNewImage2(diceImages[finalNum2]);
			}
			console.log('count: '+count);
			console.log('seconds: '+seconds*10);
		}, 100); // 100ms between frames
	};

  return (
    <div className="App">
      <center>
        <div className="container">
          <h1>LET'S GO GAMBLING! 🤑</h1>
						<br/>
					<div className='items-center' style={{marginInline:20+'rem'}}>
						<Slider
							progress
							defaultValue={seconds}
							min={1}
							step={1}
							onChange={value => {
								setSeconds(value)
								console.log(value);
						}}
						/>
					</div>
          <div style={{ height: '20px'}}></div>
          <img className="square" src={image} alt="dice 1" />
          <div style={{ width: '5px', display: 'inline-block' }}></div>
          <img className="square" src={image2} alt="dice 2" />
					<br/>
					<button
						type="button"
						className="btn btn-outline-primary"
						onClick={rollDice}
					>
						Roll Dice
					</button>
        </div>
      </center>
    </div>
  );
}
