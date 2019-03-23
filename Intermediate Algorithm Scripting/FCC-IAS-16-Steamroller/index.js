//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  // I'm a steamroller, baby
  let flatArray = [];

  for (let i = 0; i < arr.length; i++) {
    let arrayValue = arr[i];
    console.log(arr[i]);
    if (Array.isArray(arrayValue)) {
      //if value IS an array object, recursively run steamrollArray on this specific value. If value is then NOT an array, push it. Otherwise keep running this function until a value that is not an array is found and then push it
      flatArray = flatArray.concat(steamrollArray(arrayValue));
    } else {
      //if value is NOT an array object, push that value to new array
      flatArray.push(arrayValue);
    }
    console.log("array: " + flatArray);
  }
  return flatArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
//steamrollArray([[["a"]], [["b"]]])
//steamrollArray([1, [], [3, [[4]]]])

// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

//
