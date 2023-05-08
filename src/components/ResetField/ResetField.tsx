import React, { ReactElement } from 'react';
import { WheelData } from '../Wheel/types';
import { initDrawingData } from '../../data';
import { Button } from '../Button';
import { Heading } from '../Heading';

interface IResetField {
  setDrawingData: (newDrawingData: WheelData[]) => void;
}

export const ResetField = ({ setDrawingData }: IResetField): ReactElement => (
  <div className="resetContainer">
    <Heading text="Сброс списка призов" />
    <p>
      Нажмите на кнопку, что бы сбросить список призов к начальному состоянию
    </p>
    <Button text="Сбросить" onClick={() => setDrawingData(initDrawingData)} />
  </div>
);
