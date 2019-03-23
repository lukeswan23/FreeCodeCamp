// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
  // Is everyone being true?

  for (let i = 0; i < collection.length; i++) {
    console.log(collection[i]);
    console.log(collection[i][pre]);

    if (!collection[i].hasOwnProperty(pre) || !collection[i][pre]) {
      console.log(collection[i]);
      return false;
    }
  }
  return true;
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);
//truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
truthCheck([{ single: "double" }, { single: NaN }], "single");

//iterate through each individual element in the array
//check if predicate exists on every element
//if pre exists, check it is a truthy value
//if it is return true
//else return false

//I was using . notation to access collection[i].pre for e.g. this was not actually accessing the pre value in that array object value, had to change to [] access notation and it worked
