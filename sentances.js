// let words = ['This','is','JavaScript','coding!'];
// let sentance = '';
// function createSentance(words){
//     for(let i = 0;i<words.length;i++){
//         sentance += words[i] + " ";
//     }
// return sentance;
// }
// console.log(createSentence(words));
let words = ['This', 'is', 'JavaScript', 'Coding!'];
// TODO: Create an empty string variable called "sentence".
let sentence = '';
// TODO: 
// 1. Create a function called "createSentence" that takes an array as an argument.
// 2. In the function use a for loop to iterate through each word element of the 
//array.
// 3. Add each word to the "sentence" variable.
// 4. Return the "sentence".
function createSentence(array) {
    for (let i = 0; i < array.length; i++){
        sentence += array[i] + " ";
    }
    return sentence;
}
// TODO: Call the function "createSentence" using the console.log method.
console.log(createSentence(words));