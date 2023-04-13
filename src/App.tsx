import React, { useState } from 'react';
import { Wheel } from './components/Wheel/Wheel';
import { WheelData } from './components/Wheel/types';
import arrow from './assets/arrow.svg';
import logo from './assets/logo2.png';
import { Button } from './components/Button';

const data: WheelData[] = [
  { option: '100' },
  { option: '200' },
  { option: '300' },
  { option: '400' },
  { option: '500' },
  { option: '600' },
  { option: '700' },
  { option: '800' },
  { option: '900' },
  { option: '1000' },
  { option: '1100' },
  { option: '1200' },
  { option: '1300' },
  { option: '1400' },
  { option: '1500' },
  { option: '1600' },
];

export const App = () => {
  const [mustSpin, setMustSpin] = useState<boolean>(false);
  const [prizeNumber, setPrizeNumber] = useState<number>(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <main>
      <div className="container">
        <img src={logo} alt="logo" className="logoImg" />
        <Wheel
          textColors={['#ffffff']}
          radiusLineWidth={2}
          innerRadius={0}
          innerBorderWidth={50}
          backgroundColors={['#0133ac', '#011c6b']}
          spinDuration={0.1}
          outerBorderColor="#f5feff"
          innerBorderColor="#f5feff"
          radiusLineColor="#1957d0"
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
          pointerProps={{
            src: arrow,
            style: {
              right: '-35px',
              transform: 'rotate(-170deg)',
            },
          }}
        />
        <Button text="CLICK ME" onClick={handleSpinClick} />
      </div>
      <div>Test</div>
    </main>
  );
};
