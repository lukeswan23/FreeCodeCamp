// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  // LBH QVQ VG!

  const alph = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  let cipher = str.toLowerCase().split("");
  let ciphered = [];
  let letterCheck = /[a-zA-Z]/;

  for (let i = 0; i < cipher.length; i++) {
    //used to get index of ciphered element in relation to the alphabet
    let indexLoop = alph.indexOf(cipher[i]);
    //used as value in case of + 13 hitting the end of the array
    let loopValue = indexLoop - 13;

    // console.log('index of cipher letter(index loop) ' + cipher[i] +  ' is ' + indexLoop)
    // console.log('loopValue is ' + loopValue)
    //console.log(indexLoop)

    //if current element is NOT a letter, push it
    if (cipher[i].search(letterCheck) == -1) {
      //console.log('not a letter')
      ciphered.push([cipher[i]]);
    } //if current element would hit end of array with + 13, push current element - 13 characters
    else if (alph[indexLoop + 13] == undefined) {
      //console.log('hit end loop')
      //console.log(loopValue)
      ciphered.push(alph[loopValue]);
    } //otherwise push current element + 13 characters
    else {
      //console.log('worked')
      ciphered.push(alph[indexLoop + 13]);
    }
  }

  return ciphered.join("").toUpperCase();
}

// Change the inputs below to test
rot13("SERR PBQR PNZC"); //FREE CODE CAMP

//get the index of letter in cipher array IN the alph
//if index of cipher is a letter
//return value of index + 13 in the alph
//if index of cipher is not a letter
//return that index as is

//how to get the index of a value where + 13 reaches end of loop

//hardest part was simply realising if + 13 hits end of the array all you need to do is -13...lol
