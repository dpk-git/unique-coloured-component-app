import React from 'react';
import './ColoredBox.css'
import Box from './Box'
import { generateColors } from './Helpers'

const ColoredBox = () => {
  const uniqueColors = generateColors();

  return (
    <div className='ColoredBox' style={{ width: '256px', height: '128px' }}>
      {
        uniqueColors.map((color, index) => (
          // For each color make a box component 
          <Box key={index} color={color} />
        ))
      }
    </div>
  )

}

export default ColoredBox