
module.exports.readInput = () => {

    let input = '';
    
    process.stdin.on('data', chunk => {
      input += chunk;
    });
    
    process.stdin.on('end', () => {
      //<-- console.log('File content received:');
      return input;
    });

}

