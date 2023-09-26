import React from 'react';

import Dice from './Dice';

export default function DiceList({ dices }) {
  return (
    <>
      {dices.map((dice) => (
        <Dice dice={dice} key={dice.targetValue} />
      ))}
    </>
  );
}
