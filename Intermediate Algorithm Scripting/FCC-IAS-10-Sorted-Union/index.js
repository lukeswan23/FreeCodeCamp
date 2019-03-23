// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

function uniteUnique(arr) {
  //console.log(arr);
  let bigArray = [];
  let newArray = [];

  //Convert the arguments object into an array
  var args = Array.prototype.slice.call(arguments);

  //flatten array https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Flatten_an_array_of_arrays
  let flattened = args.reduce(function(accumulator, currentValue) {
    return accumulator.concat(currentValue);
  });

  newArray = flattened.filter(function(element, index, array) {
    return index === array.indexOf(element);
  });

  //console.log(flattened);

  console.log(newArray);

  //console.log(bigArray);

  return newArray;
}

//uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
uniteUnique([1, 2, 3], [5, 2, 1]);

//create an array to push unique values to
//loop over each value in the provided arrays\
//if value does not exist in unique array, push that value
//if that value does already exist, ignore it

// newArray = flattened.filter(function(element,index) {
//   if (newArray.includes(element)) {
//     console.log('lol')
//     console.log(newArray)
//   } else {
//     return element;
//   }

// });
