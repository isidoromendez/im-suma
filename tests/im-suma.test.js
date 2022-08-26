import { suma, resta } from "../src/index.js";

describe('im-suma',()=>{
    test('suma',()=>{
        expect(suma(1,1)).toBe(2);
    });
    test('resta',()=>{
        expect(resta(1,1)).toBe(0);
    });
});