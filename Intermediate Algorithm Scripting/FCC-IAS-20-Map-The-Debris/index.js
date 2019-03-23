// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
// the formula is T = 2*pi*sqrt(r^3/GM) where r = earthRadius+avgAlt, which is the distance from midpoint of the earth to the object, and T = Orbital Period

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(arr[i].avgAlt);

    arr[i].avgAlt = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(arr[i].avgAlt + earthRadius, 3) / GM)
    );

    console.log(arr[i].avgAlt);
  }

  // "You don't change a key name. You can assign a new key name/value and then remove the previous key if you want. "
  for (let i = 0; i < arr.length; i++) {
    let xyz = arr[i];
    xyz.orbitalPeriod = xyz.avgAlt;
    delete xyz.avgAlt;
  }

  return arr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
orbitalPeriod([
  { name: "iss", avgAlt: 413.6 },
  { name: "hubble", avgAlt: 556.7 },
  { name: "moon", avgAlt: 378632.553 }
]);
