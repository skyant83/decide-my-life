import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

function MainContent() {
  const [textareaValue, setTextareaValue] = useState('');
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)
  const [decision, setDecision] = useState('What will win?')

  const items = textareaValue.split('\n').filter((item) => item.trim() !== '');
  const itemData = items.map(item => ({ option: item }));

  const handleSpin = () => {
    if (!mustSpin && items.length > 0) {
      const winner = Math.floor(Math.random() * items.length);
      setDecision('What will win?');
      setPrizeNumber(winner);
      setMustSpin(true);
    }

    else {
      if (mustSpin){
        alert('Please wait for the wheel to stop');
      }
      else if (items.length == 0){
        alert('Please add items to spin the wheel!');
      }
    }
  }

  var wheelDisplay = null

  if (items.length > 0) {
    wheelDisplay = (
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={itemData}
        backgroundColors={['#FFD700', '#FF8C00']}
        textColors={['#000']}
        onStopSpinning={() => {
          setMustSpin(false);
          setDecision(`${items[prizeNumber]} won!`)
        }}
      />
    );
  }

  return (
    <main className="max-w-3xl mx-auto mt-12 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 transition-shadow hover:shadow-xl">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Spin the Wheel
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
          Add items below, one per line, and spin the wheel to make a decision!
        </p>

        <textarea
          rows={6}
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          placeholder="Type one item per line..."
          className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white resize-none"
        />

        <button
          onClick={handleSpin}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Spin the Wheel
        </button>

        <h3 className="mt-6 mb-2 font-semibold text-lg text-gray-800 dark:text-gray-100">
          Your Items:
        </h3>
        <ul className="list-disc list-inside text-gray-800 dark:text-gray-200">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="mt-6 bg-gray-100 dark:bg-gray-700 p-4 rounded shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 text-center">
              {decision}
            </h3>
        </div>
        <div className="flex justify-center items-center my-4">
          {wheelDisplay}
        </div>
      </div>
    </main>
  );
}

export default MainContent;