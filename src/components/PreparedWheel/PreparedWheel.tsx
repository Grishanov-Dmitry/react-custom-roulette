import React, { ReactElement } from 'react';
import arrow from '../../assets/arrow.svg';
import { WheelData } from '../Wheel/types';
import { Wheel } from '../Wheel/Wheel';

interface IPreparedWheel {
  mustStartSpinning: boolean;
  prizeResult: number;
  data: WheelData[];
  wheelSpeed: number;
  wheelStopped: () => void;
}

export const PreparedWheel = ({
  mustStartSpinning,
  prizeResult,
  data,
  wheelSpeed,
  wheelStopped,
}: IPreparedWheel): ReactElement => (
  <Wheel
    textColors={['#ffffff']}
    radiusLineWidth={2}
    innerRadius={0}
    innerBorderWidth={60}
    backgroundColors={['#0133ac', '#011c6b']}
    spinDuration={wheelSpeed}
    outerBorderColor="#f5feff"
    innerBorderColor="#f7fcff"
    radiusLineColor="#1957d0"
    mustStartSpinning={mustStartSpinning}
    prizeNumber={prizeResult}
    data={data}
    onStopSpinning={wheelStopped}
    pointerProps={{
      src: arrow,
      style: {
        right: '-7px',
        transform: 'rotate(-170deg)',
      },
    }}
  />
);
