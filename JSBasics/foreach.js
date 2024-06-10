let numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(2);

printArray(numbers, function (value, index) {
    console.log(`value: ${value}\nindex: ${index}`);
});


function printArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}
