import React, { ReactElement } from 'react';
import './WinnerText.css';

interface IWinnerText {
  prizeResult: string;
  isShowWinnerText: boolean;
}

export const WinnerText = ({
  prizeResult,
  isShowWinnerText,
}: IWinnerText): ReactElement => (
  <div className="winnerText">
    {isShowWinnerText && `Поздравляем, Вы выиграли ${prizeResult}`}
  </div>
);
