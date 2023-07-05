import React, { ReactElement, useState } from 'react';
import uniqid from 'uniqid';
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

    const drawingArr = newDrawing.split('&');

    // Filtering for delete empty options. We are adding an empty when user is deleting all presents
    const newDrawingData = [...drawingData].filter(
      ({ option }) => option?.length
    );
    drawingArr.filter(value => value === '');

    drawingArr.forEach(newValue => {
      newDrawingData.push({
        option: newValue,
        id: uniqid(),
      });
    });

    setDrawingData(newDrawingData);
    setNewDrawing('');
  };

  return (
    <div>
      <Separator />
      <Heading text="Добавить приз" />
      <p>
        Вы можете добавить призы по одному, каждый раз нажимая кнопку Добавить.
        Либо ввести призы одной строкой используя & как разделитель между
        призами. Например, строчка первый&второй&третий добавит при приза.
      </p>
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
