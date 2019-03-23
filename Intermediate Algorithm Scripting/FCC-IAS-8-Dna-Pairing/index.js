// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

//each letter of the input must be matched with its missing letter and put in its own array

//split string into an array of individual characters
//encapsulate each letter in its own array
//loop over each character
//insert appropriate match next to character (index position 1) in the array

function pairElement(str) {
  let pairArray = str.split("");
  let newArray = [];
  //console.log(pairArray);

  //encapsulate each individual item in its own array
  for (let i = 0; i < pairArray.length; i++) {
    newArray.push([pairArray[i]]);
  }

  for (let i = 0; i < newArray.length; i++) {
    //access first element of index i array and check its first letter, based on first
    //letter decide what character needs to be added to complete pair.
    if (newArray[i][0] === "T") {
      console.log("yes");
      newArray[i].push("A");
    } else if (newArray[i][0] === "A") {
      console.log("yes");
      newArray[i].push("T");
    } else if (newArray[i][0] === "C") {
      console.log("yes");
      newArray[i].push("G");
    } else if (newArray[i][0] === "G") {
      console.log("yes");
      newArray[i].push("C");
    }
    console.log(newArray[0][i]);
  }
  console.log(newArray);
  return newArray;
}

pairElement("GCG");
//pairElement("ATCGA")

// this is FCC's provided solution, cleaner than mine but functionality is the same
//  function pairElement(str) {
//     // Return each strand as an array of two elements, the original and the pair.
//     var paired = [];

//     // Function to check with strand to pair.
//     var search = function(char) {
//       switch (char) {
//         case 'A':
//           paired.push(['A', 'T']);
//           break;
//         case 'T':
//           paired.push(['T', 'A']);
//           break;
//         case 'C':
//           paired.push(['C', 'G']);
//           break;
//         case 'G':
//           paired.push(['G', 'C']);
//           break;
//       }
//     };

//     // Loops through the input and pair.
//     for (var i = 0; i < str.length; i++) {
//       search(str[i]);
//     }

//     return paired;
//   }
