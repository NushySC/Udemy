function calculateAge (birthYear) {
return 2019 - birthYear;
};

let ageJohn = calculateAge(1980);
console.log(ageJohn);

function yearsUntilRetire (year, name) {
    let age = calculateAge(year);
    let retirement = 65 - age;
    if (retirement > 0) {
    console.log(name + ' will retire in ' + retirement);
} else {
    console.log(name + ' has alredy retired.');
}
}

yearsUntilRetire(1948, 'Anuska');