const readline = require("readline");
const { validateZone, validateInstruction, validateLanding } = require("./validation.js");

const ask = (question) => {
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve =>
    rl.question( question , answer => {
      
        rl.close();
        resolve(answer);

    })
  );

}

const interactive = async() => {

    let input = '';
    const questions = [
        'Plateau:',
        'Rover${index} Landing:',
        'Rover${index} Instructions:',
        'Add another rover? (y/n): '
    ];

    let index = 1;
    let addAnother = 'y';

    const zone = await ask(questions[0]);
    if (!validateZone(zone)) {
        console.log('Invalid zone input. Expected format: "X Y" where X and Y are integers.');
        return '';
    }
    
    input += questions[0] + zone + '\n';
    let q1,q2;

    while (addAnother.toLowerCase() === 'y') {
        
        q1 = questions[1].replace('${index}', index);
        const landing = await ask(q1);
        if (!validateLanding(landing)) {
            console.log('Invalid landing input. Expected format: "X Y D" where X and Y are integers and Direction is one of N, S, E, W.');
            return '';
        }
        input += `${q1}${landing}\n`;
        
        q2 = questions[2].replace('${index}', index);
        const instruction = await ask(q2);
        if (!validateInstruction(instruction)) {
            console.log('Invalid instruction input. Expected format: a string of characters containing only L, R, M.');
            return '';
        }
        input += `${q2}${instruction}\n`;
        
        addAnother = await ask(questions[3]);
        index++;
    }


    //<-- console.log(`input > ${input}`);
    return input;


}

const fromFile = async() => {
    
    let input = '';
    process.stdin.on('data', chunk => {
      input += chunk;
    });
    
    return new Promise((resolve) => {
        process.stdin.on('end', () => {
            resolve(input);
        });
    });

}




module.exports.readInput = async() => {

    let input = '';
    
    if (process.stdin.isTTY) 
        input = await interactive();
    else 
        input = await fromFile();

    return input;
}

