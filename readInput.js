const readline = require("readline");

const interactive = async() => {

    let input = '';
    console.log('Interactive Mode');

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

