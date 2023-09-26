import React from 'react';
import './Dice.css';

export default function Dice({ dice }) {
  return (
    <>
      <h3>
        TV {dice.targetValue} - Hits: {dice.hits}
      </h3>
    </>
  );
}
