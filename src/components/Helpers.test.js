const idx = require('./Helpers.js')

describe("Helper", ()=>{
    it("Color generation", ()=>{
        const colors = idx.generateColors();
        expect(colors).toContain('rgb(192,160,184)');
    });

    it("Count No of Colors", ()=>{
        const colors = idx.generateColors();
        expect(colors.length).toEqual(32768)
    });

    it("Check for all unique elements", ()=>{
        const colors = idx.generateColors();
        const count=1;
        colors.forEach(color=>{
            expect(colors.filter(c=>c==color).length).toBe(1);
        });
    });

});