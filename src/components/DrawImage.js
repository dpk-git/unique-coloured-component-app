import React, { useRef, useEffect } from 'react'
import { generateColors } from './Helpers';

const DrawImage = props => {
    const uniqueColors = generateColors();
    const canvasRef = useRef(props);
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        //init color counter
        var cntr=0;
        for (let h = 0; h < 128; h++) {  //
            for (let w = 0; w < 256; w++) {
                context.fillStyle = uniqueColors[cntr];
                context.fillRect(w, h, 1, 1);
                cntr++;
            }
        }
}, []);

return <canvas ref={canvasRef} {...props} />
}

export default DrawImage