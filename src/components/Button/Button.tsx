import React, { ReactElement } from 'react';
import './Button.css';

interface IButton {
  text: string;
  classes?: string;
  onClick: () => void;
}

export const Button = ({
  text,
  classes = '',
  onClick,
}: IButton): ReactElement => (
  <button type="button" onClick={onClick} className={`btn ${classes}`}>
    {text}
  </button>
);
