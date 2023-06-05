import React, { ReactElement, useEffect, useState } from 'react';
import { WheelData } from './components/Wheel/types';
import { Drawing } from './components/Drawing';
import { Header } from './components/Header';
import { testDrawingData, modes } from './data';
import { Settings } from './components/Settings';
import { IResult } from './types';

export const App = (): ReactElement => {
  const lsPresentDescription = localStorage.getItem('presentDescription');
  const lsWheelSpeed = localStorage.getItem('wheelSpeed');
  const lsDrawingData = localStorage.getItem('drawingData');
  const lsResultList = localStorage.getItem('resultList');

  const initResultList = lsResultList ? JSON.parse(lsResultList) : [];

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
  const [resultList, setResultList] = useState<IResult[]>(initResultList);
  const [winTextValue, setWinTextValue] = useState<string>('');
  const [textDistance, setTextDistance] = useState<number>(60);

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
  const getWinnerText = () => {
    const winRes = drawingData[prizeResult]?.option || '0';

    return setWinTextValue(`${winRes} ${presentDescription}`);
  };
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

  const saveResultToLs = list => {
    localStorage.setItem('resultList', JSON.stringify(list));
  };

  const wheelStopped = () => {
    setMustSpin(false);
    getWinnerText();

    const newResultList: IResult[] = [
      {
        date: String(new Date()),
        value: drawingData[prizeResult]?.option || '',
      },
      ...resultList,
    ];

    setResultList(newResultList);
    saveResultToLs(newResultList);
  };

  const resetResultList = () => {
    setResultList([]);
    saveResultToLs([]);
  };

  return (
    <main>
      <Header changeMode={setMode} />
      {mode === modes.drawing && (
        <Drawing
          winnerText={winTextValue}
          drawingData={getDrawingData}
          isShowWinnerText={isShowWinnerText}
          mustSpin={mustSpin}
          prizeResult={prizeResult}
          wheelSpeed={wheelSpeed}
          resultList={resultList}
          textDistance={textDistance}
          wheelStopped={wheelStopped}
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
          textDistance={textDistance}
          setTextDistance={setTextDistance}
          setWheelSpeed={setWheelSpeed}
          resetResultList={resetResultList}
        />
      )}
    </main>
  );
};
