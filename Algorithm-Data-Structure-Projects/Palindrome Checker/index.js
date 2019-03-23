// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

function palindrome(str) {
  // Good luck!
  let regex = /[^0-9a-z]/gi;

  let arrayOrig = str.replace(regex, "").split("");
  let arrayTwo = str
    .replace(regex, "")
    .split("")
    .reverse();
  console.log(arrayOrig);
  console.log(arrayTwo);

  console.log(arrayOrig.join("").toLowerCase());
  console.log(arrayTwo.join("").toLowerCase());

  if (arrayOrig.join("").toLowerCase() == arrayTwo.join("").toLowerCase()) {
    return true;
  }
  return false;

  // console.log(arrayOrig);
  // console.log(arrayTwo)

  //return true;
}

//possibly make a loop to remove falsy values like blanks (spaces)

//palindrome("eye");
//palindrome("bigeye");
palindrome("race car!");
