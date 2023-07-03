"use strict";

//Task1

function timeBetweenDates(a = '25 May 2023', b = Date.now(), units = 'days') {
    let date1 = new Date(a);
    let date2 = new Date(b);
    let difference = date2.getTime() - date1.getTime();
        if (units === 'seconds') {
            return Math.abs(difference / 1000)
        } else if (units === 'minutes') {
            return Math.abs(difference / (1000 * 60))
        } else if (units === 'hours') {
            return Math.abs(difference / (1000 * (60*60)))
        } else if (units === 'days') {
            //додав Math.floor, щоб коректно відображався результат моїх дефолтів
            return Math.floor(Math.abs(difference / (1000 * (60*60) * 24)))
        } else {
            return 'Unit ' + units + ' is not supported' 
        }
      }

// function timeBetweenDates(a = '25 May 2023', b = Date.now(), units = 'days') {
//     let date1 = new Date(a);
//     let date2 = new Date(b);
//     let difference = date2.getTime() - date1.getTime();
//     switch (units) {
//         case 'seconds':
//             return Math.abs(difference / 1000)
//         case 'minutes':
//             return Math.abs(difference / (1000 * 60))
//         case 'hours':
//             return Math.abs(difference / (1000 * (60*60)))
//         case 'days':
//             //додав Math.floor, щоб коректно відображався результат моїх дефолтів
//             return Math.floor(Math.abs(difference / (1000 * (60*60) * 24)))
//         default:
//             return 'Such unit is not supported'
//         }
//       }

console.log(timeBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'));
console.log(timeBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'));
console.log(timeBetweenDates('31 Jan 2022', '03 Feb 2021', 'years'));
console.log('I study JavaScript for ' + (timeBetweenDates() + 1) + ' days');


// Task2

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAnGEs: '48.7584', };

function optimizer(data) {
  const optimizedArray = Object.entries(data).map(([key, value]) => [
    key.toLowerCase(),
    parseFloat(value).toFixed(2),
  ]);

  return Object.fromEntries(optimizedArray);
}

let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData);


// Task3

function iterativeOddSumTo(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if  (i % 2 !== 0) {
            sum += i; 
        }               
    }
    return sum;
}

function recursiveOddSumTo(n) {
    if (n <= 0) {
        return 0;
    }
    if (n % 2 === 0) {
        return recursiveOddSumTo(n - 1);
    }
    return n + recursiveOddSumTo(n - 2);
}

console.log(iterativeOddSumTo(25));
console.log(recursiveOddSumTo(25));