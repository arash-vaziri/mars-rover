const { moveRovers } = require('../moveRovers');

describe('Move Rovers Tests', () => {

    test('Single Rover Movement within Zone', () => {
        const zone = { width: 5, height: 5 };
        const rovers = [
            {
                name: 'Rover1',
                landing: '1 2 N',
                instructions: 'LMLMLMLMM'
            }
        ];

        const result = moveRovers(zone, rovers);
        expect(result).toEqual('Rover1 : 1 3 N');
    });

});