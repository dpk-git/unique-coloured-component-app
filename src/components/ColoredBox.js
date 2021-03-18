import React from 'react';
import './ColoredBox.css';
import { generateColors } from './Helpers';
import DrawImage  from './DrawImage';

const ColoredBox = () => {
  return (
    <div className='ColoredBox' >
     { <DrawImage></DrawImage> }
    </div>
  )
}

export default ColoredBox