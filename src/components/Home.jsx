import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="max-w-6xl mx-auto mt-12 px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Welcome to Decide My Life!
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-200 mb-8">
        Struggling to make decisions? Let us help you! Use our tools to spin the wheel or flip a coin and let fate decide for you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Spin the Wheel Card */}
        <Link
          to="/spin-the-wheel"
          className="block bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            🎡 Spin the Wheel
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Add items to the wheel and let it decide for you. Perfect for making tough decisions!
          </p>
        </Link>

        {/* Flip a Coin Card */}
        <Link
          to="/flip-a-coin"
          className="block bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            🪙 Flip a Coin
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Choose a coin type and flip it to see the result. Heads or tails? Let the coin decide!
          </p>
        </Link>

        {/* Roll a Die Card */}
        <Link
          to="/dice-roll"
          className="block bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            🎲 Roll a Die
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Throw two 6-sided die (results from 2-12). So let's GO GAMBLING!! 🤑
          </p>
        </Link>
      </div>
    </main>
  );
}

export default Home;
