import React, { ReactElement } from 'react';
import './ResultTable.css';
import { ResultString } from '../ResultString';
import { IResult } from '../../types';
import { ResultTableHeader } from '../ResultTableHeader';

interface IResultTable {
  resultList: IResult[];
}

export const ResultTable = ({ resultList }: IResultTable): ReactElement => (
  <div className="table">
    <ResultTableHeader />

    <div className="tableContent">
      {resultList.map(result => (
        <ResultString key={result.date} result={result} />
      ))}
    </div>
  </div>
);
