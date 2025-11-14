const {
    validateZone, 
    validateLanding, 
    validateInstruction} = require('../validation');

describe('Validation Tests', () => {

    test('Valid Zone Input', () => {
        expect(validateZone('10 20')).toBe(true);
        
    });

    test('Invalid Zone Input', () => {
        expect(validateZone('5')).toBe(false);
        expect(validateZone('5 10 20')).toBe(false);
        expect(validateZone('55')).toBe(false);
    });

    test('Valid Landing Input', () => {
        expect(validateLanding('3 4 N')).toBe(true);
        expect(validateLanding('0 0 E')).toBe(true);
    });

    test('Invalid Landing Input', () => {
        expect(validateLanding('3 4')).toBe(false);
        expect(validateLanding('3 N 7')).toBe(false);
        expect(validateLanding('3 4 X')).toBe(false);
    });

    test('Valid Instruction Input', () => {
        expect(validateInstruction('LMLMLMLMM')).toBe(true);
        expect(validateInstruction('MMRMMRMRRM')).toBe(true);
    });
    
    test('Invalid Instruction Input', () => {
        expect(validateInstruction('LMLMLMLMK')).toBe(false);
        expect(validateInstruction('MMRMMRMRR1M')).toBe(false);
    });


});