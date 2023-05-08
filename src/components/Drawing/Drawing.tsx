import React, { ReactElement } from 'react';
import { WinnerText } from '../WinnerText/WinnerText';
import { PreparedWheel } from '../PreparedWheel';
import { WheelData } from '../Wheel/types';
import logo from '../../assets/logo2.png';

interface IDrawing {
  winnerText: string;
  isShowWinnerText: boolean;
  mustSpin: boolean;
  prizeResult: number;
  drawingData: WheelData[];
  setMustSpin: (value: boolean) => void;
  handleSpinClick: () => void;
}

export const Drawing = ({
  winnerText,
  isShowWinnerText,
  mustSpin,
  prizeResult,
  drawingData,
  setMustSpin,
  handleSpinClick,
}: IDrawing): ReactElement => {
  return (
    <>
      <WinnerText
        prizeResult={winnerText}
        isShowWinnerText={isShowWinnerText}
      />
      <PreparedWheel
        mustStartSpinning={mustSpin}
        prizeResult={prizeResult}
        data={drawingData}
        setMustSpin={setMustSpin}
      />
      <img src={logo} alt="logo" className="logoImg" />
      <button type="button" className="spinButton" onClick={handleSpinClick}>
        CLICK ME
      </button>
    </>
  );
};
