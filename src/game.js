const colours = ['green', 'red', 'yellow', 'blue'];
let trueSequence= [];
let sequence = [];

export default function Game(colour) {    
    switch (colour) {
        case 'green':
            sequence.push('green');
            break;
        case 'red':
            sequence.push('red');
            break;
        case 'yellow':
            sequence.push('yellow');
            break;
        case 'blue':
            sequence.push('blue');
            break;
        default:
            console.log('if you see this idfk what happened');
    };
    console.log(sequence)
}

export function GenerateSequence() {

}