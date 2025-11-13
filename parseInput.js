
module.exports.parseInput = (input) => {

    const output = {
        zone: null,
        rovers: [],
    }


    if (!input || input.length === 0) {
        console.error('No input provided');
        return output;
    }

    const lines = input.split('\n');
    
    //console.log(`lines > ${lines}`);


    // Extract the zone
    let command = lines[0].split(':');
    const zoneParts = command[1].split(' ').map(section => parseInt(section));
    const zone = { width: zoneParts[0], height: zoneParts[1] };

    //<- console.log(`zone > ${JSON.stringify(zone)}`);
    //<-- we can and should zone validation here



    const rovers = [];
    
    
    for (let index = 1; index < lines.length; index += 2) {
        
        if (lines[index].trim().length === 0) 
            continue;

        // Extract rover name
        command = lines[index].split(':');
        let key = command[0].split(' ');
        //<-- console.log(`key > ${JSON.stringify(key)}`);
        if (key[1].toLowerCase() !== 'landing') {
            console.error(`Expected 'landing' command for rover at line ${index} . File foemat error.`);
            continue;
        }
        
        let roverName = key[0];
        let roverLanding = command[1];
        
        command = lines[index+1].split(':');
        key = command[0].split(' ');
        if (key[1].toLowerCase() !== 'instructions') {
            console.error(`Expected 'instructions' command for rover at line ${index+1} . File foemat error.`);
            continue;
        }

        let instruction = command[1];

        rovers.push({
            name: roverName,
            landing: roverLanding,
            instructions: instruction
        })

    }


    return { zone, rovers };

}