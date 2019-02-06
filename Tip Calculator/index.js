let bill = [124, 300, 49];
let tips = [tipcalculator(bill[0]),
    tipcalculator(bill[1]),
    tipcalculator(bill[2])
]

function tipcalculator(bill) {
    let percent;
    if (bill < 50) {
        percent = 0.20;
    } else if (bill > 51 && bill < 200) {
        percent = 0.15;
    } else {
        percent = 0.10;
    }
    return bill * percent;
};

console.log(tips)