const idx = require('./Helpers.js')

describe("Helper", ()=>{
    it("Check methods", ()=>{
        const colors = idx.generateColors();
        expect(colors).toContain('rgb(192,160,184)');
    });
});