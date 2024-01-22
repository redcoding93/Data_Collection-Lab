//Part 1: Refactoring old code
let str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz,Master,58\n98,Bill,Doctor's Assistant,26";

let placeholder = '';
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';
let char = '';
let twoDimensionalArray = [];

// Loop for each character
for (char of str) {
    //Switch case to determin what to do with each char
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

//Part 2: expanding functionality
//Two dimensional array
if (cell1 || cell2 || cell3 || cell4){
	twoDimensionalArray.push([cell1, cell2, cell3, cell4]);
}
console.log(twoDimensionalArray);

//Part 3: Transforming data
let[keys, ...rows] = twoDimensionalArray;
let result = rows.map(r => (keys.reduce((o,k,i) => (o[k] = r[i], o), {})));
//uses map method to iterate over reach row in the rows array

//log result
console.log(result);

//Part 4: Sorting and manipulating data
//remove last element from sorted array
result.pop()
console.log(result);

//Insert the following object at index 1
result.splice(1,0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" });

//add the following object to the end of the array:
result.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(result);

//Average age
let total = 0;
for(let i = 0; i < twoDimensionalArray.length; i++){
	total += twoDimensionalArray[i].age;
}
	let average = total / twoDimensionalArray.length;
	console.log(average);

//Part 5: Full Circle
let reversedString = twoDimensionalArray.map(row => row.join(',').concat('\n'));
console.log(reversedString);
//uses toString() to convert the array containing a string, into a stand alone string
let convert = reversedString.toString();
console.log(convert);















			
