describe('im-suma',()=>{
    test('suma',()=>{
        const {suma} = require('im-suma');
        expect(suma(1,1)).toBe(2);
    });
    test('resta',()=>{
        const {resta} = require('im-suma');
        expect(resta(1,1)).toBe(0);
    });
});