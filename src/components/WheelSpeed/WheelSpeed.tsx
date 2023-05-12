import React, { ReactElement } from 'react';
import './WheelSpeed.css';
import { Heading } from '../Heading';

interface IWheelSpeed {
  wheelSpeed: number;
  setWheelSpeed: (value: number) => void;
}

export const WheelSpeed = ({
  wheelSpeed,
  setWheelSpeed,
}: IWheelSpeed): ReactElement => (
  <div>
    <Heading text="Скорость вращения" />
    <p>Выберите скорость врещения, где 0,2 является самым быстрым</p>
    <select
      name="wheelSpeed"
      id="wheelSpeed"
      className="wheelSpeed"
      value={String(wheelSpeed)}
      onChange={({ target }) => setWheelSpeed(+target.value)}
    >
      <option value={0.2}>0.2</option>
      <option value={0.4}>0.4</option>
      <option value={0.6}>0.6</option>
      <option value={0.8}>0.8</option>
      <option value={1.0}>1.0</option>
    </select>
  </div>
);
