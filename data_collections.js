//Part 1: Refactoring Old Code
let str =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let placeholder = '';
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';
let char = '';
let twoDimensionalArray = [];

for (char of str) {
  switch (char) {
    case ',':
      if (!cell1) {
        cell1 = placeholder;
        placeholder = '';
        break;
      } else if (!cell2) {
        cell2 = placeholder;
        placeholder = '';
        break;
      } else {
        cell3 = placeholder;
        placeholder = '';
        break;
      }
    case '\n':
      cell4 = placeholder;
      placeholder = '';
      twoDimensionalArray.push([cell1, cell2, cell3, cell4]);
      cell1 = '';
      cell2 = '';
      cell3 = '';
      cell4 = '';
      break;
    default:
      placeholder += char.toLowerCase();
  }
}
//Part 2: Expanding Functionality
//Two dimensional array
if (cell1 || cell2 || cell3 || cell4) {
  twoDimensionalArray.push([cell1, cell2, cell3, cell4]);
}
console.log(twoDimensionalArray);

//Part 3: Transforming Data
//Array.map(): The map() method in JavaScript creates a new array by applying a provided function to each element of the original array. 
//It allows us to transform the elements of an array based on specific logic.

//Array.reduce(): The reduce() method in JavaScript applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. 
//It is commonly used to perform calculations or transformations on arrays.

let [keys, ...rows] = twoDimensionalArray;
//Initializes the array variable with an array of arrays. The let keyword is used to declare the variable, and the array is assigned using square brackets.

//The reduce() method is used to transform the row into an object with key-value pairs.
let result = rows.map(r => (keys.reduce((o, k, i) => (o[k] = r[i], o), {})));
//Uses the map() method to iterate over each row in the rows array.

//Logs result
console.log(result);

//Part 4: Sorting and Manipulating Data

//Remove the last element from the sorted array.
result.pop();
// console.log(result);

//Insert the following object at index 1:
result.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
// console.log(result);

//Add the following object to the end of the array:
result.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(result);

//Average age
let total = 0;
for(let i = 0; i < twoDimensionalArray.length; i++){
	total += twoDimensionalArray[i].age;
  	
  }	
	let average = total / twoDimensionalArray.length;
	console.log(average);

// Part 5: Full Circle
// The map() method on the twoDimensionalArray
let reversedString = twoDimensionalArray.map(row => row.join(',').concat('\n'));
console.log(reversedString);
let convert = reversedString.toString();
console.log(convert);
