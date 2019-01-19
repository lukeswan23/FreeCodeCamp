// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

//FCC reccomends using regexp...

//steps
//find index of first vowel, if it is 0 add way to end
//if not 0: add every letter before the first vowel to the end of the array
//then add ay

function translatePigLatin(str) {

  let vowels = /[aeiou]/;
  let consts = /[^aeiou]/;


  //if statement acts as an error prevention when using match.index, without it match.index finds a null value in words without vowels.
  if (str.includes("a") || str.includes("e")|| str.includes("i")|| str.includes("o")|| str.includes("u")){
      //matches index of first vowel
    var index = str.match(vowels).index;
    //if the first letter of the word is not a vowel
      if (index !== 0) {
        //slice beginning from start of word UP TO first vowel
        let sliced = str.slice(0, index);
        console.log(sliced);
        //slice from first vowel to end, add letters before the vowel and add "ay"
        return str.slice(index) + sliced + 'ay';
      } else {
        //if first letter is a vowel, just add way to end
          return str + "way"
      }  
  } else {
    //if no vowel is in word, add ay to end
    return str + "ay"
    }
  }


// translatePigLatin("consonant");
translatePigLatin("gloveo");
translatePigLatin("xx")
// translatePigLatin("eight")
//translatePigLatin("california")
//a consonant is any amount of letters in a word before the first vowel
//need to find the first vowel in a word and place all letters before it at the end of the word ( array) and then add ay









