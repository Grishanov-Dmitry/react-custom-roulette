import React, { ReactElement, useState } from 'react';
import './AddNewPresent.css';
import { Separator } from '../Separator';
import { Heading } from '../Heading';
import { WheelData } from '../Wheel/types';

interface IAddNewPresent {
  drawingData: WheelData[];
  setDrawingData: (newDrawingData: WheelData[]) => void;
}

export const AddNewPresent = ({
  drawingData,
  setDrawingData,
}: IAddNewPresent): ReactElement => {
  const [newDrawing, setNewDrawing] = useState<string>('');
  const addDrawingData = () => {
    if (!newDrawing.length) {
      return;
    }
    const newDrawingData = [...drawingData];
    newDrawingData.push({
      option: newDrawing,
    });
    setDrawingData(newDrawingData);
    setNewDrawing('');
  };

  return (
    <div>
      <Separator />
      <Heading text="Добавить приз" />
      <input
        className="add-new"
        placeholder="Введите значение нового приза"
        value={newDrawing}
        onChange={({ target }) => setNewDrawing(target.value)}
      />
      <button type="button" className="btn" onClick={addDrawingData}>
        Добавить
      </button>
    </div>
  );
};
