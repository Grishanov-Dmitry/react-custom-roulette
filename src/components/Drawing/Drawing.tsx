import React, { ReactElement, useLayoutEffect } from 'react';
import { WinnerText } from '../WinnerText/WinnerText';
import { PreparedWheel } from '../PreparedWheel';
import { WheelData } from '../Wheel/types';
import logoVulkan from '../../assets/logo_vulkan.png';
import './Drawing.css';
import { IResult } from '../../types';
import { ResultTable } from '../ResultTable';

interface IDrawing {
  winnerText: string;
  isShowWinnerText: boolean;
  mustSpin: boolean;
  prizeResult: number;
  drawingData: WheelData[];
  wheelSpeed: number;
  resultList: IResult[];
  wheelStopped: () => void;
  handleSpinClick: () => void;
  saveToLocalState: () => void;
  setIsInitCondition: (value: boolean) => void;
}

export const Drawing = ({
  winnerText,
  isShowWinnerText,
  mustSpin,
  prizeResult,
  drawingData,
  wheelSpeed,
  resultList,
  wheelStopped,
  handleSpinClick,
  saveToLocalState,
  setIsInitCondition,
}: IDrawing): ReactElement => {
  useLayoutEffect(() => {
    return () => {
      saveToLocalState();
      setIsInitCondition(true);
    };
  }, []);

  return (
    <div className="drawingContainer">
      <div className="info">
        <WinnerText
          prizeResult={winnerText}
          isShowWinnerText={isShowWinnerText}
        />
        <button type="button" className="spinButton" onClick={handleSpinClick}>
          CLICK ME
        </button>
        <ResultTable resultList={resultList} />
      </div>
      <div className="wheelContainer">
        <PreparedWheel
          mustStartSpinning={mustSpin}
          prizeResult={prizeResult}
          data={drawingData}
          wheelSpeed={wheelSpeed}
          wheelStopped={wheelStopped}
        />
        <img src={logoVulkan} alt="logo" className="logoImg" />
      </div>
    </div>
  );
};
