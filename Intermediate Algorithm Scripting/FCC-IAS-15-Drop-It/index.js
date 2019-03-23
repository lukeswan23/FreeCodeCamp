// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
  // Drop them elements.
  //get a fixed value for array length, opposed to regular arr.length for the loop which would change with each incrementation
  let argLength = arr.length;
  console.log(argLength);

  for (let i = 0; i < argLength; i++) {
    console.log(func(arr[i]));

    //if first value in array evaluates to false, remove that element
    //repeat this until the first element in the array evaluates to true
    if (func(arr[0]) != true) {
      arr.shift();
    }
  }
  //once true condition is met, return the array
  return arr;

  console.log(arr);

  //return arr;
}

//dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});

//as soon as first true condition is met, push rest of array
