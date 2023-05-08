import React, { ReactElement } from 'react';
import arrow from '../../assets/arrow.svg';
import { WheelData } from '../Wheel/types';
import { Wheel } from '../Wheel/Wheel';

interface IPreparedWheel {
  mustStartSpinning: boolean;
  prizeResult: number;
  data: WheelData[];
  setMustSpin: (value: boolean) => void;
}

export const PreparedWheel = ({
  mustStartSpinning,
  prizeResult,
  data,
  setMustSpin,
}: IPreparedWheel): ReactElement => (
  <Wheel
    textColors={['#ffffff']}
    radiusLineWidth={2}
    innerRadius={0}
    innerBorderWidth={60}
    backgroundColors={['#0133ac', '#011c6b']}
    spinDuration={0.1}
    outerBorderColor="#f5feff"
    innerBorderColor="gray"
    radiusLineColor="#1957d0"
    mustStartSpinning={mustStartSpinning}
    prizeNumber={prizeResult}
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
);
