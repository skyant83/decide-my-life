import React, { useState } from 'react';

function FlipACoin() {
  const [result, setResult] = useState(null);
  const [coinType, setCoinType] = useState('Heads/Tails');
  const [isFlipping, setIsFlipping] = useState(false);
  const [currentImage, setCurrentImage] = useState('/assets/heads.jpg');
  const [customOptions, setCustomOptions] = useState(['Option 1', 'Option 2']);
  const [newOption, setNewOption] = useState('');

  const coinOptions = {
    'Heads/Tails': ['Heads', 'Tails'],
    'Yes/No': ['Yes', 'No'],
    Custom: customOptions,
  };

  const flipSound = new Audio('/assets/coin-flip.mp3');

  const flipCoin = () => {
    const outcomes = coinOptions[coinType];
    const flips = Math.floor(Math.random() * 10) + 6; // Randomize number of flips from 6 to 16 flips
    setIsFlipping(true);

    // SFX
    flipSound.currentTime = 0; 
    flipSound.play().catch((error) => {
      console.error('Error playing the coin flip sound:', error);
    });

    let flipCount = 0;
    const flipInterval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === '/assets/heads.jpg' ? '/assets/tails.jpg' : '/assets/heads.jpg'
      );
      flipCount++;
      if (flipCount >= flips) {
        clearInterval(flipInterval);
        const randomIndex = Math.floor(Math.random() * outcomes.length);
        const finalResult = outcomes[randomIndex];
        setResult(finalResult);
        setCurrentImage(finalResult === 'Heads' ? '/assets/heads.jpg' : '/assets/tails.jpg');
        setIsFlipping(false);
      }
    }, Math.floor(Math.random() * 100) + 120); 
  };

  const addCustomOption = () => {
    if (customOptions.length >= 2) {
      alert('You can only add up to 2 custom options.');
      return;
    }
  
    if (newOption.trim() !== '' && !customOptions.includes(newOption.trim())) {
      setCustomOptions([...customOptions, newOption.trim()]);
      setNewOption('');
    }
  };

  const removeCustomOption = (index) => {
    setCustomOptions(customOptions.filter((_, i) => i !== index));
  };

  return (
    <main className="max-w-3xl mx-auto mt-12 px-4 text-center">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 transition-shadow hover:shadow-xl">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Flip a Coin
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
          Select a coin type, flip it, and let fate decide!
        </p>

        <select
          value={coinType}
          onChange={(e) => setCoinType(e.target.value)}
          className="mb-4 p-2 border rounded dark:bg-gray-700 dark:text-white"
        >
          <option value="Heads/Tails">Heads/Tails</option>
          <option value="Yes/No">Yes/No</option>
          <option value="Custom">Custom</option>
        </select>

        {/* Custom options input */}
        {coinType === 'Custom' && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Customize Your Options
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={newOption}
                onChange={(e) => setNewOption(e.target.value)}
                placeholder="Add a new option"
                className="p-2 border rounded dark:bg-gray-700 dark:text-white flex-grow"
              />
              <button
                onClick={addCustomOption}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Add
              </button>
            </div>
            <ul className="text-left">
              {customOptions.map((option, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-2 rounded mb-2"
                >
                  <span className="text-gray-800 dark:text-gray-100">{option}</span>
                  <button
                    onClick={() => removeCustomOption(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={flipCoin}
          disabled={isFlipping}
          className={`bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition ${
            isFlipping ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isFlipping ? 'Flipping...' : 'Flip the Coin'}
        </button>

        {/* Coin flipping animation */}
        <div className="mt-6">
          <div className="relative w-40 h-40 mx-auto">
            <img
              src={currentImage}
              alt={result || 'Coin'}
              className={`w-full h-full object-cover rounded-full shadow-lg ${
                isFlipping ? 'coin-flip-animation' : ''
              }`}
            />
          </div>
        </div>

        {result && !isFlipping && (
          <div className="mt-6 bg-gray-100 dark:bg-gray-700 p-4 rounded shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Result: {result}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              You flipped a {coinType} coin.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default FlipACoin;