import React, { ReactElement } from 'react';
import './ResultTableHeader.css';

export const ResultTableHeader = (): ReactElement => (
  <div className="tableHeader">
    <div>Время выигрыша</div>
    <div>Выигрыш</div>
  </div>
);
