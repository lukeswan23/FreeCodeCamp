//  https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace/
 // Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"


//split sentence into array of words
//check array for word to change
//get words index
//replace word to change with after word
//capitilize it if required

function myReplace(str, before, after) {
  let capitals = /[A-Z]/
  let arrayStr = str.split(' ');


  //need to learn what find => find does in this case, returns index of before word though in essence
  let index = arrayStr.findIndex(find => find === before);
  console.log(index);


  //test for any capitals in our BEFORE word, if true first if statement runs.
  if (capitals.test(before)) {
    //gives us a way to manipulate after word based on prior if check, take first letter of after word, uppercase it and then add the rest of the word 
    let capital = after.slice(0,1).toUpperCase() + after.slice(1);
    //edit the array to remove 1 word at the index(before word) and replace it with after word which is capitilized as required.
    arrayStr.splice(index,1,capital);
    return arrayStr.join(" ");
  } else {
    //if no capitals, simply replace before word with after word at correct index
    arrayStr.splice(index,1,after);
    return arrayStr.join(" ");

  }

  //console.log(index);

  //console.log(arrayStr);

}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");