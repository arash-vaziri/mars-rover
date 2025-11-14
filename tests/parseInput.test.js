const {
    parseInput
} = require('../parseInput.js');

describe('Parse Input Tests', () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    test('Empty Input', () => { 
        const result = parseInput('');

        expect(spy).toHaveBeenCalledWith("No input provided");
        expect(result).toEqual({ zone: null, rovers: [] });
    });

    test('Valid Input with One Rover', () => {
        const input = `Plateau:5 5
Rover1 Landing:1 2 N
Rover1 Instructions:LMLMLMLMM`;
        const result = parseInput(input);
        expect(result).toEqual({
            zone: { width: 5, height: 5 },
            rovers: [
                {
                    name: 'Rover1',
                    landing: '1 2 N',
                    instructions: 'LMLMLMLMM'
                }
            ]
        });
    });

});