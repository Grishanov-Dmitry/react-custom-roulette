import React, { ReactElement } from 'react';
import { modes } from '../../data';
import './Header.css';

interface IHeader {
  changeMode: (value: string) => void;
}

export const Header = ({ changeMode }: IHeader): ReactElement => (
  <header>
    <button
      type="button"
      className="changeModeButton"
      onClick={() => changeMode(modes.drawing)}
    >
      Розыгрыш
    </button>
    <button
      type="button"
      className="changeModeButton"
      onClick={() => changeMode(modes.settings)}
    >
      Настройки
    </button>
  </header>
);
