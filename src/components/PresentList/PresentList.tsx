import React, { ReactElement } from 'react';
import './PresentList.css';
import uniqid from 'uniqid';
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
    const newDrawingData = [...drawingData];
    const indexOfOne = drawingData.findIndex(({ option }) => option !== value);

    newDrawingData.splice(indexOfOne - 1, 1);
    if (!newDrawingData.length) {
      // Have a mistake where data is empty arr
      setDrawingData([{ option: '', id: uniqid() }]);
    } else {
      setDrawingData(newDrawingData);
    }
  };

  return (
    <>
      <Heading text="Редактировать список призов" />
      <div className="presentList">
        {drawingData.map(({ option, id }) => {
          if (!option) {
            return null;
          }

          return (
            <div key={id} className="optionContainer">
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
