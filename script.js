'use strict';

/*

const temperatures1 = [3, -10, -6, -1, 'error', 9, 13, 17, 35, 14, 9, 5];
const temperatures2 = [10, 5,'error', -15];


const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

*/

// merged arrays

const calcTempAmplitude = function (t1, t2) {
  let temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude([5, 3, 2, 'error'], [-2, 3, -15, -1]);
console.log(amplitude);
