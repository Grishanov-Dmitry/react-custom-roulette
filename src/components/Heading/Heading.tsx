import React, { ReactElement } from 'react';
import './Heading.css';

interface IHeading {
  text: string;
}

export const Heading = ({ text }: IHeading): ReactElement => (
  <h2 className="heading">{text}</h2>
);
