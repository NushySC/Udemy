let johnMass = 70;
let johnHeight = 1.70;
let markMass = 90;
let markHeight = 1.90;


let johnBMI = johnMass / (johnHeight*johnHeight);
let markMBI = markMass / (markHeight*markHeight);

if(markMBI > johnBMI) {   
    console.log('Mark is fatter');
} else {
    console.log('john is fatter');
}