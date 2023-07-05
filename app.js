"use strict";

//Task1

function timeBetweenDates(startDate = new Date('25 May 2023'), endDate = new Date(), units = 'days') {
    let date1 = new Date(startDate);
    let date2 = new Date(endDate);
    let difference = (date2.getTime() - date1.getTime()) / 1000;
    switch (units) {
      case 'seconds':
        return Math.abs(difference);
      case 'minutes':
        return Math.abs(difference / 60);
      case 'hours':
        return Math.abs(difference / (60 * 60));
      case 'days':
        return Math.floor(Math.abs(difference / (60 * 60 * 24)));
      default:
        return 'Unit ' + units + ' is not supported';
    }
}

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