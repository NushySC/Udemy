let johnFirstGame = 100;
let johnSecondGame = 110;
let johnThirdGame = 100;

let johnAverage = (johnFirstGame + johnSecondGame + johnThirdGame)/3;

let markFirstGame = 200;
let markSecondGame = 0;
let markThirdGame = 100;

let markAverage = (markFirstGame + markSecondGame + markThirdGame) / 3;

let maryFirstGame = 10;
let marySecondGame = 10;
let maryThirdGame = 13;

let maryAverage = (maryFirstGame + marySecondGame + maryThirdGame) / 3;

if (johnAverage > markAverage && johnAverage > maryAverage) {
    console.log('Jonnies are better');
} else if (maryAverage > markAverage && maryAverage > johnAverage) {
    console.log('Maries are better');
} else if (markAverage > johnAverage && markAverage > maryAverage) {
    console.log('Markies are better');
} else {
    console.log('It\' a tie');
} 