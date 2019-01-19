//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

//Note
//You have to use the arguments object.

function destroyer(arr) {
  // Remove all the values
  
  //You can invoke arguments by using arguments[n] (where n is the index of the argument in the array-like object) but if you want to use it as an array for iteration purposes or applying array methods to it, you need to convert it to an array by declaring a variable and using the Array.prototype.slice.call method (because arguments is not an array):
  //start slice at position 1 (after the array, lets us get the destroy values to be used)
  let args = Array.prototype.slice.call(arguments, 1);
  console.log(args);


  //check if value is NOT in args, returning true to keep the value in the array or false to remove it
  let aliveArray = arr.filter(value => !args.includes(value))

  return aliveArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//get arguments as variable
//check each element of array for value
//if value exists remove it