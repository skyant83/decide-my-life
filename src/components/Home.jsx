import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { themeChange } from 'theme-change';

function Home() {
	useEffect(() => {
		// initialize theme-change library (false = do not watch system preference)
		themeChange(false);
	}, []);

	return (
		<main className="max-w-6xl mx-auto mt-12 px-4 text-center">
			<h1 className="text-4xl font-bold text-base-content mb-6">
				Welcome to Decide My Life!
			</h1>
			<p className="text-lg text-base-content opacity-70 mb-8">
				Struggling to make decisions? Let us help you! Use our tools to spin the
				wheel or flip a coin and let fate decide for you.
			</p>
			<div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
				{/* Spin the Wheel Card */}
				<Link
					to="/spin-the-wheel"
					className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
					style={{ textDecoration: 'none' }}
				>
					<div className="card-body bg-base-content items-center text-center">
						<h2 className="card-title">🎡 Spin the Wheel</h2>
						<p className='text-base-100'>
							Add items to the wheel and let it decide for you. Perfect for making
							tough decisions!
						</p>
					</div>
				</Link>

				{/* Flip a Coin Card */}
				<Link
					to="/flip-a-coin"
					className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
					style={{ textDecoration: 'none' }}
				>
					<div className="card-body bg-base-content items-center text-center">
						<h2 className="card-title">📀 Flip a Coin</h2>
						<p className='text-base-100'>
							Choose a coin type and flip it to see the result. Heads or tails?
							Let the coin decide!
						</p>
					</div>
				</Link>

				{/* Roll a Die Card */}
				<Link
					to="/dice-roll"
					className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
					style={{ textDecoration: 'none' }}
				>
					<div className="card-body bg-base-content items-center text-center">
						<h2 className="card-title">🎲 Roll a Die</h2>
						<p className='text-base-100'>
							Throw two 6-sided dice (results from 2-12). Ready to roll the dice?
						</p>
					</div>
				</Link>
			</div>
		</main>
	);
}

export default Home;
