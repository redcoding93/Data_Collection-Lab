//part 1
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
      placeholder += char;
  }
}

//part 2
// Two dimensional arrayif (cell1 || cell2 || cell3 || cell4) {
  twoDimensionalArray.push([cell1, cell2, cell3, cell4]);
}

console.log(twoDimensionalArray);

//part 3
let constructObject = arr => {
   return arr.reduce((acc, val) => {
      const [key, value] = val;
      acc[key] = value;
      return acc;
   }, {});
};

//part 4
console.log(constructObject(twoDimensionalArray));
console.log(twoDimensionalArray.pop());
console.log(twoDimensionalArray.push({ id: "48", name: "Barry", occupation: "Runner", age: "25" }));
console.log(twoDimensionalArray);
console.log(twoDimensionalArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" }));
console.log(twoDimensionalArray);

//Average age
let total = 0;
for(let i = 0; i < twoDimensionalArray.length; i++){
	total += twoDimensionalArray;
  	
  }	
	let average = total / twoDimensionalArray.length;
	console.log(average);


