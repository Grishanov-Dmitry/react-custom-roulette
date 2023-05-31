import React, { ReactElement } from 'react';
import './Settings.css';
import { WheelData } from '../Wheel/types';
import { ResetField } from '../ResetField';
import { Separator } from '../Separator';
import { PresentDescription } from '../PresentDescription';
import { PresentList } from '../PresentList';
import { AddNewPresent } from '../AddNewPresent';
import { WheelSpeed } from '../WheelSpeed';

interface ISettings {
  drawingData: WheelData[];
  presentDescription: string;
  wheelSpeed: number;
  setDrawingData: (newDrawingData: WheelData[]) => void;
  setPresentDescription: (value: string) => void;
  setWheelSpeed: (value: number) => void;
}

export const Settings = ({
  drawingData,
  setDrawingData,
  wheelSpeed,
  presentDescription,
  setPresentDescription,
  setWheelSpeed,
}: ISettings): ReactElement => {
  return (
    <div className="settingContainer">
      <div className="content">
        <ResetField setDrawingData={setDrawingData} />
        <Separator />

        <PresentList
          drawingData={drawingData}
          setDrawingData={setDrawingData}
        />

        <AddNewPresent
          drawingData={drawingData}
          setDrawingData={setDrawingData}
        />
        <Separator />

        <PresentDescription
          presentDescription={presentDescription}
          setPresentDescription={setPresentDescription}
        />
        <Separator />

        <WheelSpeed wheelSpeed={wheelSpeed} setWheelSpeed={setWheelSpeed} />
      </div>
    </div>
  );
};