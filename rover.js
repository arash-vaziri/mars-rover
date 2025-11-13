const { readInput }   = require('./readInput.js');



const incoming = readInput();
if (!incoming) {
    console.error('No input received. This version requires input via file.');
}