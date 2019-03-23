//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
//& &amp;
// < 	&lt;
// > &gt;
// " &quot;
// ' &apos;

//split string to array
//search each index of array for changer
//when finding changer save  get index of that changer
//replace changer with change using same index

function convertHTML(str) {
  //create two arrays where character corresponds to other arrays correct index
  //allows for easy switching due to same index
  let changers = ["&", "<", ">", '"', "'"];
  let change = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];

  let stringChange = str.split("");

  //first loop runs through each character in provided string
  //second loop checks each character in string against the changers array
  //if a changer is found, the index of that character in the string is replaced with the index of its character in the change array
  for (let i = 0; i < stringChange.length; i++) {
    for (let j = 0; j < changers.length; j++) {
      if (stringChange[i] === changers[j]) {
        console.log("need to change " + changers[j]);
        stringChange.splice(i, 1, change[j]);
      }
    }
  }

  console.log(stringChange);
  return stringChange.join("");

  //console.log(stringChange);
}

//convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");

// solution on FCC that is much cleaner:
// function convertHTML(str) {
// //Chaining of replace method with different arguments
//   str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
// return str;
// }

// // test here
// convertHTML("Dolce & Gabbana");
