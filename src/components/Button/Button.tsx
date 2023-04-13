import React from 'react';

interface IButton {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: IButton) => (
  <button type="button" onClick={onClick} className="spinButton">
    {text}
  </button>
);
