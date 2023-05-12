import React, { ReactElement } from 'react';
import { modes } from '../../data';
import './Header.css';
import { Button } from '../Button';

interface IHeader {
  changeMode: (value: string) => void;
}

export const Header = ({ changeMode }: IHeader): ReactElement => (
  <header>
    <Button
      text="Розыгрыш"
      classes="changeModeButton"
      onClick={() => changeMode(modes.drawing)}
    />
    <Button
      text="Настройки"
      classes="changeModeButton"
      onClick={() => changeMode(modes.settings)}
    />
  </header>
);
