function binaryAgent(str) {
  let array = str.split(" ");
  console.log(array);
  let decimalArray = [];
  let letterArray = [];

  for (let i = 0; i < array.length; i++) {
    //converts binary sequence into decimal number, 2 is the radix that is required
    console.log(parseInt(array[i], 2));
    decimalArray.push(parseInt(array[i], 2));
  }
  console.log(decimalArray);
  //join decimal array into a string seperated by spaces
  let string = decimalArray.join(" ");
  console.log(string);
  //use fromCharCode to transform each decimal number into it's appropriate character
  let convert = String.fromCharCode(...decimalArray);
  console.log(convert);

  return convert;
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
