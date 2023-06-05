import React, { ReactElement, useState } from 'react';
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

    // Filtering for delete empty options. We are adding an empty when user is deleting all presents
    const newDrawingData = [...drawingData].filter(
      ({ option }) => option?.length
    );
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
        className="inputCommon"
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
