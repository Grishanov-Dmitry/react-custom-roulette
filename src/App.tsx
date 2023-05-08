import React, { ReactElement, useState } from 'react';
import { WheelData } from './components/Wheel/types';
import { Drawing } from './components/Drawing';
import { Header } from './components/Header';
import { initDrawingData, modes } from './data';
import { Settings } from './components/Settings';

export const App = (): ReactElement => {
  const [mustSpin, setMustSpin] = useState<boolean>(false);
  const [prizeResult, setPrizeResult] = useState<number>(0);
  const [isInitCOndition, setIsInitCondition] = useState<boolean>(true);
  const [mode, setMode] = useState<string>(modes.settings);
  const [presentDescription, setPresentDescription] = useState<string>('BYN');
  const [drawingData, setDrawingData] = useState<WheelData[]>(initDrawingData);

  const handleSpinClick = () => {
    if (!mustSpin) {
      setIsInitCondition(false);
      const newPrizeNumber = Math.floor(Math.random() * drawingData.length);
      setPrizeResult(newPrizeNumber);
      setMustSpin(true);
      setMode(modes.drawing);
    }
  };
  const isShowWinnerText = !isInitCOndition && !mustSpin;
  const winnerText = drawingData[prizeResult]?.option || '0';
  const getDrawingData = drawingData.map(wheelOption => ({
    ...wheelOption,
    option: `${wheelOption.option} ${presentDescription}`,
  }));

  return (
    <main>
      <Header changeMode={setMode} />
      <div className="container">
        {mode === modes.drawing && (
          <Drawing
            winnerText={winnerText}
            drawingData={getDrawingData}
            isShowWinnerText={isShowWinnerText}
            mustSpin={mustSpin}
            prizeResult={prizeResult}
            setMustSpin={setMustSpin}
            handleSpinClick={handleSpinClick}
          />
        )}
        {mode === modes.settings && (
          <Settings
            drawingData={drawingData}
            setDrawingData={setDrawingData}
            setPresentDescription={setPresentDescription}
            presentDescription={presentDescription}
          />
        )}
      </div>
    </main>
  );
};
