import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
  return mentors
  .filter(mentor => mentor.canTeach.includes(moduleName))
  .map(mentor => mentor.name); 
};
 console.log(possibleMentorsForModule('using-apis'));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */ // Choose a method that will return a single value
// const word = cities.reduce((acc, currVal) => {
//   return acc + currVal[0]
// }, "C");

// console.log(word)

const findMentorForModule = (moduleName) => {
    const possibleMentors = possibleMentorsForModule(moduleName);
    return possibleMentors[Math.floor(Math.random() * possibleMentors.length)];

 };

console.log(findMentorForModule('javascript'));
