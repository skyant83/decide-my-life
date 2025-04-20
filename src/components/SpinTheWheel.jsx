import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

function MainContent() {
  const [textareaValue, setTextareaValue] = useState('');
  const [weightValue, setWeightValue] = useState('');
  const [itemData, setItemData] = useState([]);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [decision, setDecision] = useState('What will win?');
  const [checked, setChecked] = useState(false);
  const [weights, setWeights] = useState([]);

  const items = textareaValue
    .split('\n')
    .map((item) => item.trim())
    .filter((item) => item !== '');

  const inputArea = (
    <textarea
      rows={6}
      value={textareaValue}
      onChange={(e) => {
        setTextareaValue(e.target.value);
        updateItemData(e.target.value, weightValue);
      }}
      placeholder="Type one item per line..."
      className="w-full center p-2 rounded border dark:bg-gray-700 dark:text-white resize-none text-center w-64 truncate overflow-hidden text-ellipsis whitespace-nowrap"
    />
  );

  const weightInput = checked && (
    <textarea
      rows={6}
      value={weightValue}
      onChange={(e) => {
        setWeightValue(e.target.value);
        updateItemData(textareaValue, e.target.value);
      }}
      placeholder="Type one item per line..."
      className="w-full center p-2 rounded border dark:bg-gray-700 dark:text-white resize-none text-center w-64 truncate overflow-hidden text-ellipsis whitespace-nowrap"
    />
  );

  const updateItemData = (textarea, weightsInput) => {
    const itemsList = textarea
      .split('\n')
      .map((item) => item.trim())
      .filter((item) => item !== '');

    if (checked) {
      const parsedWeights = weightsInput
        .split('\n')
        .map((w) => parseFloat(w.trim()) || 1);

      setWeights(parsedWeights);

      const combined = itemsList.map((item, i) => ({
        option: item,
        optionSize: parsedWeights[i] ?? 1,
      }));

      setItemData(combined);
    } else {
      setItemData(
        itemsList.map((item) => ({
          option: item
        }))
      );
    }
  };

  const handleCheck = () => {
    setChecked(!checked);
    updateItemData(textareaValue, weightValue); 
  };

  const handleSpin = () => {
    if (!mustSpin && items.length > 0) {
      const winner = Math.floor(Math.random() * items.length);
      setDecision('What will win?');
      setPrizeNumber(winner);
      setMustSpin(true);
    } else {
      if (mustSpin) {
        alert('Please wait for the wheel to stop');
      } else if (items.length === 0) {
        alert('Please add items to spin the wheel!');
      }
    }
  };

  const wheelDisplay = items.length > 0 && itemData.length > 0 && (
    <Wheel
      mustStartSpinning={mustSpin}
      prizeNumber={prizeNumber}
      data={itemData}
      onStopSpinning={() => {
        setMustSpin(false);
        setDecision(`${items[prizeNumber]} won!`);
      }}
    />
  );


  return (
    <main className="max-w-3xl mx-auto mt-12 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 transition-shadow hover:shadow-xl">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Spin the Wheel</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
          Add items below, one per line, and spin the wheel to make a decision!
        </p>
        <div className='flex flex-row items-center justify-center gap-4'>
          <div>{inputArea}</div>
          <div>{weightInput}</div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <button onClick={handleSpin} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Spin the Wheel
          </button>
          <button
            onClick={handleCheck}
            className={`mt-4 px-4 py-2 rounded text-white ${checked ? 'bg-green-500' : 'bg-gray-500'}`}
          >
            {checked ? '✅ Enabled Weights' : '☐ Use custom weights?'}
          </button>
        </div>

        <h3 className="mt-6 mb-2 font-semibold text-lg text-center text-gray-800 dark:text-gray-100">Your Items:</h3>

        <div className="flex flex-col justify-center items-center">
          {items.map((item, index) => (
            <div className="flex flex-row justify-center items-center gap-4">
              <div className="mt-4 w-32 text-black border-2 border-solid border-black px-4 py-2 rounded hover:bg-blue-600 text-center truncate overflow-hidden text-ellipsis whitespace-nowrap">{item}</div>
              {checked && (
                <div className="mt-4 w-32 text-black border-2 border-solid border-black px-4 py-2 rounded hover:bg-blue-600 text-center truncate overflow-hidden text-ellipsis whitespace-nowrap">{weights[index]}</div>)      
              }        
            </div>
          ))}
        </div>
        <div className="mt-6 bg-gray-100 dark:bg-gray-700 p-2 rounded shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 text-center">{decision}</h3>
        </div>
        <div className="flex justify-center items-center my-4">{wheelDisplay}</div>
      </div>
    </main>
  );
}

export default MainContent;
