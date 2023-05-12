import React, { ReactElement, useLayoutEffect } from 'react';
import { WinnerText } from '../WinnerText/WinnerText';
import { PreparedWheel } from '../PreparedWheel';
import { WheelData } from '../Wheel/types';
import logo from '../../assets/logo2.png';
import './Drawing.css';

interface IDrawing {
  winnerText: string;
  isShowWinnerText: boolean;
  mustSpin: boolean;
  prizeResult: number;
  drawingData: WheelData[];
  wheelSpeed: number;
  setMustSpin: (value: boolean) => void;
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
  setMustSpin,
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
      <WinnerText
        prizeResult={winnerText}
        isShowWinnerText={isShowWinnerText}
      />
      <div className="wheelContainer">
        <PreparedWheel
          mustStartSpinning={mustSpin}
          prizeResult={prizeResult}
          data={drawingData}
          wheelSpeed={wheelSpeed}
          setMustSpin={setMustSpin}
        />
        <img src={logo} alt="logo" className="logoImg" />
      </div>
      <button type="button" className="spinButton" onClick={handleSpinClick}>
        CLICK ME
      </button>
    </div>
  );
};
