const secsPerMinute = 60;
const minsPerHour = 60;
const hoursPerDay = 24; 
const daysPerweek = 7;
const weeksPerYear = 52;

const secondsPerDay = secsPerMinute * minsPerHour * hoursPerDay;
console.log(`There are ${secondsPerDay} seconds in a day.`);

const yearsAlive = 29 * secondsPerDay * daysPerweek * weeksPerYear;
console.log(`I've been alive for more than ${yearsAlive} seconds`);
