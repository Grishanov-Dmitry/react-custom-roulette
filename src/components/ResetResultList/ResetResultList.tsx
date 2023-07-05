import React, { ReactElement } from 'react';
import { Button } from '../Button';
import { Heading } from '../Heading';

interface IResetResultList {
  resetResultList: () => void;
}

export const ResetResultList = ({
  resetResultList,
}: IResetResultList): ReactElement => (
  <div className="resetContainer">
    <Heading text="Очистить список результатов" />
    <p>Нажмите на кнопку, что бы очистить список результатов</p>
    <Button text="Очистить" onClick={resetResultList} />
  </div>
);
