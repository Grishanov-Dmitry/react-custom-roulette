import React, { ReactElement } from 'react';
import './PresentDescription.css';
import { Heading } from '../Heading';

interface IPresentDescription {
  presentDescription: string;
  setPresentDescription: (value: string) => void;
}

export const PresentDescription = ({
  presentDescription,
  setPresentDescription,
}: IPresentDescription): ReactElement => (
  <div className="presentDescription">
    <Heading text="Единицы выигрыша" />
    <p>
      В этом поле можно указать единое значение, которое примениться ко всем
      выигрышам. Например 100 BYN, 5 шт и т.д. Оставьте поле пустым, если не
      хотите использовать такое значение
    </p>

    <input
      className="add-new"
      placeholder="Введите значение единиц выигрыша"
      value={presentDescription}
      onChange={({ target }) => setPresentDescription(target.value)}
    />
  </div>
);
