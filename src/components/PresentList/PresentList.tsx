import React, { ReactElement } from 'react';
import './PresentList.css';
import { WheelData } from '../Wheel/types';
import { Button } from '../Button';
import { Heading } from '../Heading';

interface IHeading {
  drawingData: WheelData[];
  setDrawingData: (newDrawingData: WheelData[]) => void;
}

export const PresentList = ({
  drawingData,
  setDrawingData,
}: IHeading): ReactElement => {
  const deleteDrawingData = (value: string) => {
    const newDrawingData = drawingData.filter(({ option }) => option !== value);
    if (!newDrawingData.length) {
      // Have a mistake where data is empty arr
      setDrawingData([{ option: '' }]);
    } else {
      setDrawingData(newDrawingData);
    }
  };

  return (
    <>
      <Heading text="Редактировать список призов" />
      <div className="presentList">
        {drawingData.map(({ option }) => {
          if (!option) {
            return null;
          }

          return (
            <div key={option} className="optionContainer">
              {option}
              <Button
                text="Удалить"
                onClick={() => deleteDrawingData(option)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
