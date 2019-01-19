function sumAll(arr) {
  let ascSorted = arr.sort(function(a,b){
    return a - b;
  })
  console.log(ascSorted)

  let array = [];

  for (let i = ascSorted[0]; i < ascSorted[1] + 1; i++) {
    console.log(i)
    array.push(i);
  }
  console.log(array);
  return array.reduce((x1, x2) => x1 + x2);
}

sumAll([5, 10]);