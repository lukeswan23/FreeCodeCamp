// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
  //function to find first occurence of number being less than item in array
  function findDec(element) {
    return num < element;
  }

  const romans = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
    "MMMM",
    "V!"
  ];
  const decimals = [
    1,
    4,
    5,
    9,
    10,
    40,
    50,
    90,
    100,
    400,
    500,
    900,
    1000,
    4000,
    5000
  ];
  let romArr = [];

  let index1 = decimals.findIndex(findDec);
  console.log("index 1 :" + index1);

  //run loop until provided number is 0
  for (let i = 0; num > 0; i++) {
    let index = decimals.findIndex(findDec); //index where number is less than element in array

    romArr.push(romans[index - 1]); //push the roman element with above index - 1 to get highest numeral before being too low
    num -= decimals[index - 1]; //set num equal to itself minus it's relative roman numeral above
    console.log(num);
  }

  return romArr.join("");
}

//find first occurence index of num being greater than decimals

convertToRoman(8);
// convertToRoman(2)

//while loop solution from FCC, makes a bit more sense than my index - 1

// for (var index = 0; index < decimalValue.length; index++) {
//   while (decimalValue[index] <= num) {
//     romanized += romanNumeral[index];
//     num -= decimalValue[index];
//   }
// }
