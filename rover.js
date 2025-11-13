const { readInput }   = require('./readInput.js');
const { parseInput }  = require('./parseInput.js');
const { moveRovers }  = require('./moveRovers.js');


const main = async() => {


    const incoming = await readInput();
    if (!incoming) {
        console.error('No input received. This version requires input via file.');
    }
    
    const { zone , rovers  } = parseInput(incoming);

    const output = moveRovers(zone, rovers , true);

    console.log(output);
}


main();