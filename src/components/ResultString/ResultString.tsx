import React, { ReactElement } from 'react';
import './ResultString.css';
import { IResult } from '../../types';

interface IResultString {
  result: IResult;
}

const getTimeWithZero = count => (count < 10 ? `0${count}` : count);

const getCorrectDate = (strDate: string) => {
  const date = new Date(strDate);

  return `${getTimeWithZero(date.getHours())}: ${getTimeWithZero(
    date.getMinutes()
  )}: ${getTimeWithZero(date.getSeconds())}`;
};

export const ResultString = ({ result }: IResultString): ReactElement => (
  <div className="resultRow">
    <div>{getCorrectDate(result.date)}</div>
    <div>{result.value}</div>
  </div>
);
