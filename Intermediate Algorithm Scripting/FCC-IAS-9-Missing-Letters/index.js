function fearNotLetter(str) {
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
  //console.log(alph)
  let checker = str.split("");
  console.log(checker);
  let index = checker[0];
  console.log(index);
  //find index function to return index of first letter in provided string in the alphabet. Use this index as starting point of search
  let alphIndex = alph.findIndex(alphabetIndex => alphabetIndex === index);
  console.log(alphIndex);

  //acts as filter function, checks if alphabet AND letter array provided both contain the same values
  //any values that are not in BOTH are returned, not the most effecient way to do this task but it does work. From here we can use our alphIndex value to grab the first missing letter from the array which will solve the task.
  function missingLetter(value) {
    if (alph.includes(value, alphIndex) && checker.includes(value)) {
      console.log("not a dupe");
    } else {
      return value;
    }
  }

  let theMissingLetter = alph.filter(missingLetter);

  //use alphIndex so it doesn't just start from a
  let firstMissingLetter = theMissingLetter[alphIndex];
  console.log(theMissingLetter);
  console.log(firstMissingLetter);

  return firstMissingLetter;
}

fearNotLetter("abce");
fearNotLetter("bcdf");

//find first letter in provided string
//find that letters index in alphabet
//begin running for loop check from that letter
//check alphabet against string
//return first letter in alphabet that is not in provided string
