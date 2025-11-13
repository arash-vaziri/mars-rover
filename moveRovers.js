const engine = (x , y , direction , zone) => {

    switch (direction) {

        case 'N':
            if (y < zone.height) 
                y += 1;
            
            break;

        case 'E':
            if (x < zone.width) 
                x += 1;
            
            break;

        case 'S':
            if (y > 0) 
                y -= 1;
            break;

        case 'W':
            if (x > 0) 
                x -= 1;
            
            break;
    }



    return { x, y };
}


module.exports.moveRovers = (zone, rovers , trace = false) => {

    const directions = ['N', 'E', 'S', 'W'];

    const output = [];

    rovers.forEach(rover => {

        let [x, y, dir] = rover.landing.split(' ');
        x = parseInt(x);
        y = parseInt(y);
        dir = dir;
        let dirIdx = directions.indexOf(dir);

        for (let move of rover.instructions) {

            switch (move) {

                //<-- change the directions
                case 'L':
                    dirIdx = dirIdx - 1 >= 0 
                                        ? (dirIdx - 1) 
                                        : directions.length - 1 ; 

                    dir = directions[dirIdx];
                    break;

                case 'R':
                    dirIdx = (dirIdx + 1) < directions.length -1 
                                          ? dirIdx+1 
                                          : 0; 
                    dir = directions[dirIdx];
                    break;
                
                
                
                
                case 'M':
                    const result = engine(x, y, dir, zone);
                    x = result.x;
                    y = result.y;
                    break;
                       
            }
            
            if (trace) 
                console.log(`Rover ${rover.name} moved ${move} to position ${x} ${y} ${dir}`);
            
        }

        if (trace)
            console.log(`\n`); //<-- make space for more readability

        output.push(`${rover.name} : ${x} ${y} ${dir}`);

    });

    return output.join('\n');

}