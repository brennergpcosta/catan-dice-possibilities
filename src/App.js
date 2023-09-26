import { useState } from 'react';
import './App.css';
import DiceList from './components/DiceList';

const INITIAL_TAGET_VALUES = [
  { targetValue: 2, hits: 0 },
  { targetValue: 3, hits: 0 },
  { targetValue: 4, hits: 0 },
  { targetValue: 5, hits: 0 },
  { targetValue: 6, hits: 0 },
  { targetValue: 7, hits: 0 },
  { targetValue: 8, hits: 0 },
  { targetValue: 9, hits: 0 },
  { targetValue: 10, hits: 0 },
  { targetValue: 11, hits: 0 },
  { targetValue: 12, hits: 0 },
];

function App() {
  const [targetValues, setTargetValues] = useState(INITIAL_TAGET_VALUES);

  const randomIntegerGenerator = (argMin, argMax) => {
    const min = Math.ceil(argMin);
    const max = Math.floor(argMax);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const updateTargetValueHit = (tv) => {
    setTargetValues((prevState) => {
      const auxArray = prevState.slice(0);
      const index = targetValues.map((tv) => tv.targetValue).indexOf(tv);
      auxArray[index].hits += 0.5;
      console.log(auxArray);
      return auxArray;
    });
  };

  const simulationHandler = () => {
    let count = 0;
    while (true) {
      const gNum = randomIntegerGenerator(1, 7) + randomIntegerGenerator(1, 7);
      updateTargetValueHit(gNum);
      count++;
      if (count === 1) break;
    }
  };

  return (
    <>
      <h1 className='App'>Catan Dice Values Possibilities</h1>
      <h2>Target Value List: </h2>
      <DiceList dices={targetValues} />
      <button onClick={simulationHandler}>Generate</button>
    </>
  );
}

export default App;
