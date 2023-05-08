import React, { ReactElement } from 'react';
import './Settings.css';
import { WheelData } from '../Wheel/types';
import { ResetField } from '../ResetField';
import { Separator } from '../Separator';
import { PresentDescription } from '../PresentDescription';
import { PresentList } from '../PresentList';
import { AddNewPresent } from '../AddNewPresent';

interface ISettings {
  drawingData: WheelData[];
  presentDescription: string;
  setDrawingData: (newDrawingData: WheelData[]) => void;
  setPresentDescription: (value: string) => void;
}

export const Settings = ({
  drawingData,
  setDrawingData,
  presentDescription,
  setPresentDescription,
}: ISettings): ReactElement => {
  return (
    <div className="settingContainer">
      <ResetField setDrawingData={setDrawingData} />
      <Separator />

      <PresentList drawingData={drawingData} setDrawingData={setDrawingData} />

      <AddNewPresent
        drawingData={drawingData}
        setDrawingData={setDrawingData}
      />
      <Separator />

      <PresentDescription
        presentDescription={presentDescription}
        setPresentDescription={setPresentDescription}
      />
    </div>
  );
};
