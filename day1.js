function checkOddEven() {
    const number = document.getElementById('numberInput').value;
    const result = document.getElementById('result');
    if (number === '') {
        result.textContent = 'Please enter a number.';
         return;
        
    }
    const isEven = number % 2 === 0;
    result.textContent = isEven ? `'The number ${number} is even.'` : `'The number ${number} is odd.'`;
}
function calculateFactorial() {
    const number = parseInt(document.getElementById('factorialInput').value);
    const result = document.getElementById('factorialResult');
    if (isNaN(number) || number < 0) {
        result.textContent = 'Please enter a non-negative integer.';
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    result.textContent = `Factorial: ${factorial}`;
}
function checkPalindrome() {
    const str = document.getElementById('palindromeInput').value;
    const result = document.getElementById('palindromeResult');
    if (str === '') {
        result.textContent = 'Please enter a string.';
        return;
    }

    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    const isPalindrome = cleanedStr === reversedStr;

    result.textContent = isPalindrome ? `'The string ${str} is a palindrome.'` : `'The string ${str} is not a palindrome.'`;
}