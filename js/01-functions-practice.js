//STEP 1
function halfNumber(num) {
    const result = num / 2;
    console.log(`Half of ${num} is ${result}.`);
    return result;
}

halfNumber(5); // Logs: "Half of 5 is 2.5."

//STEP 2
ffunction squareNumber(num) {
    const result = num * num;
    console.log(`The result of squaring the number ${num} is ${result}.`);
    return result;
}


squareNumber(3); // Logs: "The result of squaring the number 3 is 9."

//STEP 3
function percentOf(num1, num2) {
    const percentage = (num1 / num2) * 100;
    console.log(`${num1} is ${percentage}% of ${num2}.`);
    return percentage;
}

percentOf(2, 4); // Logs: "2 is 50% of 4."

//STEP 4
function findModulus(num1, num2) {
    const modulus = num2 % num1;
    console.log(`${modulus} is the modulus of ${num1} and ${num2}.`);
    return modulus;
}

findModulus(4, 10); // Logs: "2 is the modulus of 4 and 10."

