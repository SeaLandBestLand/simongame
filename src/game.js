const colours = ['green', 'red', 'yellow', 'blue'];
let trueSequence = [];
let sequence = [];

export function Select(colour) {   
    document.getElementById(colour).style.backgroundColor = '#9e9e9e'; 
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
    setTimeout (() => {
        document.getElementById(colour).style.backgroundColor = colour; 
    }, 100)
    console.log('User', sequence)
};

export function GenerateSequence() {
    let a = Math.floor(Math.random() * 4);
    trueSequence.push(colours[a]);
    console.log('Correct', trueSequence);
};

window.onload = () => {
    GenerateSequence();
};

export default function Game(colour) {
    Select(colour);
    if (sequence == trueSequence) {
        GenerateSequence();
    } else {
        sequence = [];
        trueSequence = [];
        GenerateSequence();
    }
    
};