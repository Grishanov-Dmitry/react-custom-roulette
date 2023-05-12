import React, { ReactElement, useEffect, useState } from 'react';
import { WheelData } from './components/Wheel/types';
import { Drawing } from './components/Drawing';
import { Header } from './components/Header';
import { testDrawingData, modes } from './data';
import { Settings } from './components/Settings';

export const App = (): ReactElement => {
  const lsPresentDescription = localStorage.getItem('presentDescription');
  const lsWheelSpeed = localStorage.getItem('wheelSpeed');
  const lsDrawingData = localStorage.getItem('drawingData');

  const initDrawingData = lsDrawingData
    ? JSON.parse(lsDrawingData)
    : testDrawingData;

  const initWheelSpeed = lsWheelSpeed ? JSON.parse(lsWheelSpeed) : 1.0;
  const initPresentDescription = lsPresentDescription
    ? JSON.parse(lsPresentDescription)
    : 'BYN';

  const [mustSpin, setMustSpin] = useState<boolean>(false);
  const [prizeResult, setPrizeResult] = useState<number>(0);
  const [isInitCondition, setIsInitCondition] = useState<boolean>(true);
  const [mode, setMode] = useState<string>(modes.settings);
  const [presentDescription, setPresentDescription] = useState<string>(
    initPresentDescription
  );
  const [drawingData, setDrawingData] = useState<WheelData[]>(initDrawingData);
  const [wheelSpeed, setWheelSpeed] = useState<number>(initWheelSpeed);

  const saveToLocalState = () => {
    localStorage.setItem('drawingData', JSON.stringify(drawingData));
    localStorage.setItem('wheelSpeed', JSON.stringify(wheelSpeed));
    localStorage.setItem(
      'presentDescription',
      JSON.stringify(presentDescription)
    );
  };

  const handleSpinClick = () => {
    if (!mustSpin) {
      setIsInitCondition(false);
      const newPrizeNumber = Math.floor(Math.random() * drawingData.length);
      setPrizeResult(newPrizeNumber);
      setMustSpin(true);
      setMode(modes.drawing);
    }
  };
  const isShowWinnerText = !isInitCondition && !mustSpin;
  const winnerText = drawingData[prizeResult]?.option || '0';
  const getDrawingData = drawingData.map(wheelOption => ({
    ...wheelOption,
    option: `${wheelOption.option} ${presentDescription}`,
  }));

  const pressStartButton = (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      handleSpinClick();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', pressStartButton);
  });

  return (
    <main>
      <Header changeMode={setMode} />
      {mode === modes.drawing && (
        <Drawing
          winnerText={`${winnerText} ${presentDescription}`}
          drawingData={getDrawingData}
          isShowWinnerText={isShowWinnerText}
          mustSpin={mustSpin}
          prizeResult={prizeResult}
          wheelSpeed={wheelSpeed}
          setMustSpin={setMustSpin}
          handleSpinClick={handleSpinClick}
          saveToLocalState={saveToLocalState}
          setIsInitCondition={setIsInitCondition}
        />
      )}
      {mode === modes.settings && (
        <Settings
          drawingData={drawingData}
          setDrawingData={setDrawingData}
          setPresentDescription={setPresentDescription}
          presentDescription={presentDescription}
          wheelSpeed={wheelSpeed}
          setWheelSpeed={setWheelSpeed}
        />
      )}
    </main>
  );
};
