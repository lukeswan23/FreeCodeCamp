// Fill in the object constructor with the following methods below:

// getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it has to be a string.

// These methods must be the only available means of interacting with the object.

var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let array = firstAndLast.split(" ");
  console.log(array);
  let first = array[0];
  let last = array[1];
  console.log(first);

  this.getFullName = function() {
    return first + " " + last;
  };

  this.getFirstName = function() {
    return first;
  };

  this.getLastName = function() {
    return last;
  };

  this.setFirstName = function(name) {
    return (first = name);
    //return first;
  };

  this.setLastName = function(name) {
    return (last = name);
  };

  this.setFullName = function(string) {
    let nameArray = string.split(" ");
    first = nameArray[0];
    last = nameArray[1];
  };

  //return firstAndLast;
};

var bob = new Person("Bob Ross");
bob.getFullName();
//bob.getFirstName();
//bob.setFirstName("Haskell")
//bob.getFirstName();
