const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (sum, curr, index) {
    return sum += curr;
}, 0);

console.log(sum);

const map = numbers.reduce(function (array, current) {
    array.push(current * 3);
    return array;
}, [])

console.log(map);

const filter = numbers.reduce(function (prev, curr, index) {
    if (curr > 3) prev.push(curr);
    return prev;
}, []);

console.log(filter);

const find = numbers.reduce(function (prev, curr, index) {
    if (curr === 5) return curr;
}, undefined)
console.log(find);

function IsParenthesesBalanced(input) {
    const arr = input.split('');

    const result = arr.reduce(function (prev, curr, index) {
        if (prev < 0) return prev;
        if (curr === '(') return ++prev;
        else if (curr == ')') return --prev;
        return prev;
    }, 0);

    if (!result) console.log("Parantheseses is balanced");
    else console.log("Parantheses is not balanced");
}

console.log(IsParenthesesBalanced("(((())))()()(())()"));