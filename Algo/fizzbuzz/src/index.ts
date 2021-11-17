

/** Fizzbuzz rules */
const rules = [
    { divisor: 3, display: 'Fizz' },
    { divisor: 5, display: 'Buzz' }
];


/** Main function. We assume that number param is positive */
function fizzbuzz(n: number): Array<string | number> {
    return recursiveFizzbuzz(n).reverse();
}

/** Check whether a number is divisible by a given divisor */
function isDivisibleBy(n: number, divisor: number) {
    return n % divisor === 0;
}

/** Recursive function of fizzbuzz algorithm, that stores values before displaying */
function recursiveFizzbuzz(n: number): Array<string | number> {
    const string = rules
        .filter(({ divisor }) => isDivisibleBy(n, divisor))
        .map(({ display }) => display)
        .join('');

    return [string || n, ...(n > 1 ? recursiveFizzbuzz(n - 1) : [])];
}


/** Just only one test is necessary, I mean... */
console.log(fizzbuzz(42));