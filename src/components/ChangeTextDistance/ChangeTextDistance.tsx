import React, { ReactElement } from 'react';
import { Separator } from '../Separator';
import { Heading } from '../Heading';

interface IChangeTextDistance {
  textDistance: number;
  setTextDistance: (distance: number) => void;
}

export const ChangeTextDistance = ({
  textDistance,
  setTextDistance,
}: IChangeTextDistance): ReactElement => {
  const checkDistanceValue = ({ target }) => {
    const resAsNumber = Number(target.value);

    if (Number.isNaN(resAsNumber) || resAsNumber > 100) {
      return;
    }

    setTextDistance(resAsNumber);
  };

  return (
    <div>
      <Heading text="Изменить расстояние до центра" />
      <p>
        Здесь можно задать отступ выигрыша от центра. Значение должно быть от 0
        (ближе к центу) до 100 (дальше от центра). Эта возможность добавлена для
        того чтобы Администратор мог сам контролировать расстояние в зависимости
        от текущих названий призов. Распространяется на все поля стразу
      </p>
      <input
        className="inputCommon"
        placeholder="Введите расстояние текста от центра"
        value={textDistance}
        onChange={checkDistanceValue}
      />
      <Separator />
    </div>
  );
};
