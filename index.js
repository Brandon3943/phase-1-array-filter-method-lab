// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];


function findMatching(driver, name) {
  return driver.filter(driver => driver.toLowerCase() === name.toLowerCase());
}


function fuzzyMatch(driver, name) {
  return driver.filter(driver => driver.charAt(0) === name.charAt(0));
}

const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function matchName(driver, name) {
  return driver.filter(driver => name === driver.name);
}

console.log(matchName(drivers, 'Bobby'));
