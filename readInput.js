
module.exports.readInput = async() => {

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

