/* Even Number Range

    Write a function that accepts two numbers.
    The function should return an array of all even numbers between the two arguments inclusively.

    console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
    console.log(evenNumberRange(22, 25)); // prints [22, 24]
    console.log(evenNumberRange(2, 0)); // prints []
*/

function evenNumberRange(num1, num2) {

    let res = [];
    // if(num2 <= num1) return res;
    for(let i = num1; i <= num2; i++) {
        let el = i
        if(i % 2 === 0) {
            res.push(i)
        }
    }
    return res



// console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
// console.log(evenNumberRange(22, 25)); // prints [22, 24]
console.log(evenNumberRange(2, 0)); // prints []
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = evenNumberRange;
} catch (e) {
    module.exports = null;
}
