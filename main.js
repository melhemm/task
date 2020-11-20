// TASK 1 * Tips calculator

// function tipCalc(check, tipsPrecentage) {
//   return (check / 100) * tipsPrecentage;
// }

// console.log(tipCalc(10, 100)); // => 10
// console.log(tipCalc(10, 90));  // => 9

////////////////////////////////////////////////////////////

// TASK 2 * Find max and min numbers in array

// const arr = [0, -2, 50, 5, 100, -50];

// function maxAndMin(arr) {
//     let maxNumber = Math.max(...arr)
//     let minNumber = Math.min(...arr)

//     console.log(`Max Number: ${maxNumber}
// Min Number: ${minNumber}`)
// }

// maxAndMin(arr)

////////////////////////////////////////////////////////////

// TASK 3 * Remove Negative numbers in array

// const arr = [0, -2, 50, 5, 100, -50];

// function removeNegative() {
//     let numbers = arr.filter(function(value){
//         return value >= 0
//     })
//     console.log(numbers)
// }

// removeNegative();

////////////////////////////////////////////////////////////

// TASK 4 * Get sum of numbers in array

// const arr = [0, -2, 50, 5, 100, -50];

// function sumOfNumber() {
//     let numbers = arr.filter(function(value){
//         return value >= 0
//     })
//     let sum = numbers.reduce(function(a, b) {
//         return a + b
//     }, 0)

//     console.log(sum)
// }

// sumOfNumber()

////////////////////////////////////////////////////////////

// TASK 5 * remove duplicates numbers from array

// const arr = [0, -2, 50, 5, 100, -50, -50, 13, 10, -2, 0];

// const uniqArr = (arr) => [...new Set(arr)]

// console.log(uniqArr(arr))

////////////////////////////////////////////////////////////

// TASK 6 * get square of numbers from array

// const arr = [0, 2, 50, 5, 100, 50];

// const sqr = arr.map(num => num * 2)

// console.log(sqr)


////////////////////////////////////////////////////////////
// TASK 7 * merge tow arrays

// const arr = [60, 70, 80, 90, 100];
// const arr2 = [10, 20, 30, 40, 50];

// const merge = arr2.concat(arr);

// console.log(merge)


////////////////////////////////////////////////////////////
// TASK 8 * copy of array

// const arr = [60, 70, 80, 90, 100];
// const arr2 = arr.slice().reverse()

// console.log(arr)