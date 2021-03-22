// Method generates an array of rgb colors 
const generateColors = () => {
    let colors = [];
    for (let r = 0; r < 256; r += 8) {
        for (let b = 0; b < 256; b += 8) {
            for (let g = 0; g < 256; g += 8) {
                colors.push(`rgb(${r},${b},${g})`);
            }
        }
    }
    return colors
}

export { generateColors }
