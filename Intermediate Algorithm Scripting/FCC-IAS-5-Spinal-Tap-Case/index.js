function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  //let arrayWord = str.split(/[(A-Z)_\s]/g).join("-").toLowerCase();

  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  let arrayWord = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  console.log(arrayWord);


  // Replace space and underscore with -
  return arrayWord.replace(regex, '-').toLowerCase();
  console.log(arrayWord);


}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap")
spinalCase("The_Andy_Griffith_Show")
spinalCase("AllThe-small Things")

//lowercase entire sentence
//split string into an array, individual words
//convert array to string with -'s for space


//advanced code solution
  //return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
