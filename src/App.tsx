import React from 'react';
import { Wheel } from './components/Wheel/Wheel';

const data = [{ option: '0' }, { option: '1' }, { option: '2' }];
const prizeNumber = 0;
const mustStartSpinning = false;

export const App = () => {
  return (
    <div>
      <Wheel
        data={data}
        prizeNumber={prizeNumber}
        mustStartSpinning={mustStartSpinning}
        innerBorderWidth={0}
      />
    </div>
  );
};
