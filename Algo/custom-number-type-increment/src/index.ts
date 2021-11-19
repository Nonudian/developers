type digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;


/* Main function. We assume that number param is not an empty array */
function increment(number: Array<digit>): Array<digit> {
    return recursiveIncrement([...number].reverse());
}

/* Recursive function for increment */
function recursiveIncrement([lastDigit, ...leftover]: Array<digit>): Array<digit> {
    if (!lastDigit) return [1];
    if (lastDigit < 9) return [...leftover.reverse(), lastDigit + 1 as digit];
    return [...recursiveIncrement(leftover), 0];
}


/* Few tests */
console.log(increment([0]));         // result: [1]
console.log(increment([1, 2, 3]));   // result: [1, 2, 4]
console.log(increment([9, 9]));      // result: [1, 0, 0]
console.log(increment([8, 9, 9]));   // result: [9, 0, 0]