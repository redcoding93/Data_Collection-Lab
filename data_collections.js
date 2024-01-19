// This is the base data from previos lab

// CSV Data we are working with
let str =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

// Variables created to hold cell data and placeholders
let placeholder = '';
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';
let char = '';

// Loop for each character
for (char of str) {
    //Switch case to determin what to do with each char
  switch (char) {
    case ',':
      if (!cell1) {
        cell1 = placeholder.split();
        placeholder = '';
        break;
      } else if (!cell2) {
        cell2 = placeholder.split();
        placeholder = '';
        break;
      } else {
        cell3 = placeholder.split();
        placeholder = '';
        break;
      }
    case '\n':
      cell4 = placeholder.split();
      placeholder = '';
      console.log(cell1, cell2, cell3, cell4);
    //   console.log(cell1.split(), cell2.split(), cell3.split(), cell4.split());
      cell1 = '';
      cell2 = '';
      cell3 = '';
      cell4 = '';
      break;
    default:
      placeholder += char;
      //char += twoDem;
    //   char.slice(4,4);
    //   char += col;
    //   console.log(col);
  }
}

let arr = [];
let rows = 4;
let columns = 4;
// creating two-dimensional array
for (let i = 0; i < rows; i++) {
  arr[i] = [];
  for (let j = 0; j < columns; j++) {
    arr[i][j] = j;
  }
}

console.log(arr);


