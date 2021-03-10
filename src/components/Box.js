import React, { Component } from 'react'

const Box = (props) => {

    // Handler callback 
    const handleChangeColor = () => {

        // Call parent component cahngeColor method passing the 
        // color value of div 
        props.changeColor(props.color)
    }

    // Create a div component and assign the given 
    // background color 
    return <div

        // Set click handler to the div and pass a callback 
        onClick={handleChangeColor}
        style={{
            backgroundColor: props.color,
            width: '50em', height: '50em'
        }}
    />
}

export default Box
