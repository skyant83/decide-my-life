import React, { useState } from 'react';

function FlipACoin() {
  const [result, setResult] = useState(null);

  const flipCoin = () => {
    const outcomes = ['Heads', 'Tails'];
    const randomIndex = Math.floor(Math.random() * outcomes.length);
    setResult(outcomes[randomIndex]);
  };

  return (
    <main className="max-w-3xl mx-auto mt-12 px-4 text-center">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 transition-shadow hover:shadow-xl">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Flip a Coin
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
          Click the button below to flip a coin and see the result!
        </p>
        <button
          onClick={flipCoin}
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
        >
          Flip the Coin
        </button>
        {result && (
          <p className="mt-6 text-2xl font-bold text-gray-800 dark:text-gray-100">
            Result: {result}
          </p>
        )}
      </div>
    </main>
  );
}

export default FlipACoin;