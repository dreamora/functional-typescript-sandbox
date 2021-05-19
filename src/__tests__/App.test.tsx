import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import {isNumber} from "util";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  const data : (number | number[])[]  = [1,[2,3]];
  const sum = data.flat().reduce((val1, val2) => {return val1 + val2});
  expect(sum).toBe(6);
});
