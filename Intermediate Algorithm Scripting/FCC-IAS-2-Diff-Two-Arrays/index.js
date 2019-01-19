//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);

//function will be used with filter method to check if value exists in both arr 1 and 2

  function uniqueValues(value) {
    if (arr1.includes(value) && arr2.includes(value)) {
      console.log("dupe") 
    } else {
      return value;
    }
  }

  let uniqueValuesArr = newArr.filter(uniqueValues)




  // Same, same; but different.
  console.log(newArr);
  //console.log(uniqueValues);



  return uniqueValuesArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//steps
//combine two arrays into one
//look for duplicate values
//filter those out
//You’re in the right path by concatenating both arrays, but instead of looking for duplicated elements in that big array, I think it’s easier and simpler if you iterate the big array and check if the element is present in both arr1 and arr2.
