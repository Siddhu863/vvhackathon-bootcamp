function removeDuplicates() {
    let input = document.getElementById('arrayInput').value;
    let arr = input.split(',').map(item => item.trim());
    let uniqueArray = [...new Set(arr)];
    document.getElementById('arrayResult').innerText = 'Unique Array: ' + uniqueArray.join(', ');
}

function reverseString() {
    let input = document.getElementById('stringInput').value;
    let reversed = input.split('').reverse().join('');
    document.getElementById('stringResult').innerText = 'Reversed String: ' + reversed;
}

function isPrime() {
    let num = parseInt(document.getElementById('primeInput').value);
    if (num <= 1) {
        document.getElementById('primeResult').innerText = 'Not a prime number';
        return;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            document.getElementById('primeResult').innerText = 'Not a prime number';
            return;
        }
    }
    document.getElementById('primeResult').innerText = 'Prime number';
}

function sumOfDigits() {
    let num = document.getElementById('digitsInput').value;
    let sum = num.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    document.getElementById('digitsResult').innerText = 'Sum of Digits: ' + sum;
}

function countVowels() {
    let input = document.getElementById('vowelsInput').value.toLowerCase();
    let count = input.match(/[aeiou]/g)?.length || 0;
    document.getElementById('vowelsResult').innerText = 'Number of Vowels: ' + count;
}
