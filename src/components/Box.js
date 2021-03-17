import React from 'react'

const Box = (props) => {
    // Create a div component and assign the given 
    // background color 
    return <canvas
        // Set click handler to the div and pass a callback 
        style={{
            backgroundColor: props.color,
            width: '1px', height: '1px'
        }}
    />
}

export default Box
