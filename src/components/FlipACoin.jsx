import React, { useRef, useState } from 'react';
import headsImage from '../assets/heads.jpg';
import tailsImage from '../assets/tails.jpg';
import audio from '../assets/coin-flip.mp3';

function FlipACoin() {
	const [result, setResult] = useState(null);
	const [coinType, setCoinType] = useState('Heads/Tails');
	const [isFlipping, setIsFlipping] = useState(false);
	const [currentImage, setCurrentImage] = useState(headsImage);
	const [customOptions, setCustomOptions] = useState([]);
	const [newOption, setNewOption] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [soundEnabled, setSoundEnabled] = useState(true);
	const [flipDuration] = useState(120);
	const [flips, setFlips] = useState(0);
	const imgRef = useRef(null);

	const coinOptions = {
		'Heads/Tails': ['Heads', 'Tails'],
		'Yes/No': ['Yes', 'No'],
		Custom: customOptions,
	};

	const flipSound = new Audio(audio);

	const flipCoin = () => {
		const outcomes = coinOptions[coinType];

		imgRef.current = document.getElementById('img')
		console.log(imgRef.current);
		setTimeout(function () {
			imgRef.current?.scrollIntoView({
					behavior: "smooth",
					block: "start",
			});
		}, 100);

		if (isFlipping) return;

		if (coinType === 'Custom' && customOptions.length < 2) {
			setErrorMessage('Please add at least 2 custom options.');
			return;
		}

		if (outcomes.length === 0) {
			setErrorMessage('Please add options before flipping the coin.');
			return;
		}

		setErrorMessage('');

		const count = Math.floor(Math.random() * 10) + 6;
		setFlips(count);
		setIsFlipping(true);

		if (soundEnabled) {
			flipSound.currentTime = 0;
			flipSound.play().catch((error) => {
				console.error('Error playing the coin flip sound:', error);
			});
		}

		let flipCount = 0;
		const singleMs = Math.min(Math.max(flipDuration, 100), 300);
		const flipInterval = setInterval(() => {
			setCurrentImage(prev => prev === headsImage ? tailsImage : headsImage);
			flipCount++;
			if (flipCount >= count) {
				clearInterval(flipInterval);
				const randomIndex = Math.floor(Math.random() * outcomes.length);
				const finalResult = outcomes[randomIndex];
				setResult(finalResult);
				setCurrentImage(finalResult === 'Heads' ? headsImage : tailsImage);
				setIsFlipping(false);
				setTimeout(function () {
					console.log(document.getElementById('result'))
					let item = document.getElementById('result')
					let offset = item.offsetTop-window.scrollY-400
					window.scrollBy({top: offset, left: 0, behavior: 'smooth'})
				}, 100);
			}
		}, singleMs);
	};

	const addCustomOption = () => {
		if (newOption.trim() === '') {
			setErrorMessage('Option cannot be empty.');
			return;
		}

		if (customOptions.includes(newOption.trim())) {
			setErrorMessage('Option already exists.');
			return;
		}

		setCustomOptions([...customOptions, newOption.trim()]);
		setNewOption('');
		setErrorMessage('');
	};

	const removeCustomOption = (index) => {
		setCustomOptions(customOptions.filter((_, i) => i !== index));
	};

	return (
		<main className="max-w-4xl mx-auto mt-12 px-4">
			<div className="bg-base-100 shadow-lg rounded-2xl p-8 transition-shadow hover:shadow-xl">
				<h2 className="text-4xl font-bold mb-6 text-center text-base-content">
					Flip a Coin
				</h2>
				<p className="text-base-content/70 text-lg text-center mb-8">
					Select a coin type, flip it, and let fate decide!
				</p>

				<div className="flex flex-col items-center gap-6 mb-8">
					<select
						value={coinType}
						onChange={(e) => setCoinType(e.target.value)}
						className="p-4 border-2 border-blue-500 rounded-lg text-base-content text-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
						aria-label="Select Coin Type"
					>
						<option value="Heads/Tails">Heads/Tails</option>
						<option value="Yes/No">Yes/No</option>
						<option value="Custom">Custom</option>
					</select>
					<button
						onClick={() => setSoundEnabled(!soundEnabled)}
						className={`px-6 py-3 rounded-lg text-white text-lg font-semibold ${
							soundEnabled ? 'bg-green-500' : 'bg-gray-500'
						} hover:bg-green-600 transition`}
						aria-label="Toggle Sound"
					>
						{soundEnabled ? '🔊 Sound On' : '🔇 Sound Off'}
					</button>
				</div>

				{coinType === 'Custom' && (
					<div className="w-full mb-8">
						<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
							Customize Your Options
						</h3>
						<div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
							<input
								type="text"
								value={newOption}
								onChange={(e) => setNewOption(e.target.value)}
								placeholder="Add a new option"
								className="p-3 border rounded dark:bg-gray-700 dark:text-white flex-grow text-lg"
								aria-label="Add Custom Option"
							/>
							<button
								onClick={addCustomOption}
								className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-lg"
								aria-label="Add Option"
							>
								Add
							</button>
						</div>
						{errorMessage && (
							<p className="text-red-500 text-sm mb-4">{errorMessage}</p>
						)}
						<ul className="text-left">
							{customOptions.map((option, index) => (
								<li
									key={index}
									className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-3 rounded mb-2"
								>
									<span className="text-gray-800 dark:text-gray-100 text-lg">{option}</span>
									<button
										onClick={() => removeCustomOption(index)}
										className="text-red-500 hover:text-red-700 text-lg"
										aria-label={`Remove Option ${option}`}
									>
										Remove
									</button>
								</li>
							))}
						</ul>
					</div>
				)}

				<div className="flex flex-col items-center gap-6 mt-8">
					<button
						onClick={flipCoin}
						disabled={isFlipping}
						className={`bg-blue-600 text-white px-8 py-4 rounded-lg text-2xl font-bold hover:bg-blue-700 transition ${
							isFlipping ? 'opacity-50 cursor-not-allowed' : ''
						}`}
						aria-label="Flip the Coin"
					>
						{isFlipping ? (
							<div className="flex items-center justify-center gap-2">
								<span>Flipping...</span>
								<div className="spinner border-t-4 border-white rounded-full w-6 h-6 animate-spin"></div>
							</div>
						) : (
							'Flip the Coin'
						)}
					</button>

					<div className="relative" style={{width:15+'rem'}}>
						<img
							id='img'
							src={currentImage}
							alt={result || 'Coin'}
							className="w-full h-full object-cover rounded-full shadow-lg"
							style={{
								animation: isFlipping
									? `flip ${flipDuration}ms ease-in-out ${flips}`
									: 'none'
							}}
						/>
					</div>
				</div>

				{result && !isFlipping && (
					<div
						className="mt-8 bg-base-100 p-6 rounded shadow-lg text-center"
						aria-live="polite"
						id='result'
					>
						<h3 className="text-2xl font-bold text-base-content">
							Result: {result}
						</h3>
						<p className="text-base-content/70 text-lg">
							You flipped a {coinType} coin.
						</p>
					</div>
				)}
			</div>
		</main>
	);
}

export default FlipACoin;