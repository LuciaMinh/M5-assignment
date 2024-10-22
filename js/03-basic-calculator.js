// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    switch (operation) {
        case 'add':
            return x + y;
        case 'subtract':
            return x - y;
        case 'multiply':
            return x * y;
        case 'divide':
            if (y === 0) {
                return 'Error: Division by zero is not allowed.';
            }
            return x / y;
        default:
            return null; // Invalid operation
    }
}

function runCalculator(){
    let result

// COLLECT FIRST NUMBER FROM USER
let num1
while (true) {
    num1 = parseFloat (prompt('Enter the first number'))
    if (!isNaN(num1)) {
        break
    } else {
        alert ('Invalid number! Please enter a valid number.')
    }
}
// COLLECT SECOND NUMBER FROM USER
let num2
while (true) {
    num2 = parseFloat (prompt('Enter the second number'))
    if (!isNaN(num2)) {
        break
    } else {
        alert ('Invalid number! Please enter a valid number.')
    }
}
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let operation
    while (true) {
        operation = prompt('Enter the operation (add, subtract, multiply, divide):')
        if (['add', 'subtract', 'multiply', 'divide'].includes(operation)) {
            break 
        }
        alert('Invalid operation! Please enter add, subtract, multiply, or divide.')
    }
// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
result = calculate (num1, num2, operation)
alert (`The result of ${operation} ${num1} and ${num2} is: ${result}`)
}
runCalculator()
