'use strict';


var name = prompt('Hello, what is your name');
console.log('users name is ' + name);
alert('Welcome to the Thunder Dome ' + name)

var state = alert('Please answer the following questions with a yes or a no ');

if (state) {
  console.log('Thank you')
}

var answerOne = prompt('Do you think I like the rain?');
var lowerOne = answerOne.toLowerCase();
console.log(lowerOne);
if (lowerOne === 'yes' || lowerTwo === 'y') {
  //console.log('Wrong! I do not like the rain')
  alert('Wrong! I do not like the rain')
} else if (lowerOne === 'no' || lowerOne === 'n') {
  //console.log('Correct! I do not like the rain')
  alert('Correct! I do not like the rain')
} else {
  //console.log('Please answer yes or no');
  alert('Please answer yes or no');
}



var answerTwo = prompt('Is chocolate my favorite sweet?')
var lowerTwo = answerTwo.toLowerCase();
console.log(lowerTwo);
if (lowerTwo === 'yes' || lowerTwo === 'y') {
  //console.log('Im sorry thats incorrect, my favorite sweet is Sour Patch Kids')
  alert('Im sorry thats incorrect, my favorite sweet is Sour Patch Kids')
} else if (lowerTwo === 'no' || lowerTwo === 'n') {
  //console.log('Correct my favorite sweet is Sour Patch Kids.')
  alert('Correct my favorite sweet is Sour Patch Kids.')
} else {
  //console.log('Please answer yes or no');
  alert('Please answer yes or no');
}

var answerThree = prompt('Do I like to drive fast?');
var lowerThree = answerThree.toLowerCase();
console.log(lowerThree);
if (lowerThree === 'yes' || lowerThree === 'y') {
  //console.log('Correct I love driving fast')
  alert('Correct I love driving fast')
} else if (lowerThree === 'no' || lowerThree === 'n') {
  //console.log('Wrong driving slow is for old people.')
  alert('Wrong driving slow is for old people.')
} else {
  //console.log('Please answer yes or no');
  alert('Please answer yes or no');
}

var answerFour = prompt('Is my favorite color blue?');
var lowerFour = answerFour.toLowerCase();
console.log(lowerFour);
if (lowerFour === 'yes' || lowerFour === 'y') {
  //console.log('Wrong my favorite color is red')
  alert('Wrong my favorite color is red')
} else if (lowerFour === 'no' || lowerFour === 'n') {
  //console.log('Correct I love the color red')
  alert('Correct I love the color red')
} else {
  //console.log('Please answer yes or no');
  alert('Please answer yes or no');
}

var answerFive = prompt('Am I a vegitarian?');
var lowerFive = answerFive.toLowerCase();
console.log(lowerFive);
if (lowerFive === 'yes' || lowerFive === 'y') {
  //console.log('Wrong I love me some bacon')
  alert('Wrong I love me some bacon')
} else if (lowerFive === 'no' || lowerFive === 'n') {
  //console.log('Correct I love to eat all meat.')
  ('Correct I love to eat all meat.')
} else {
  //console.log('Please answer yes or no');
  alert('Please answer yes or no');
}

alert('Thank you ' + name + ' for playing who wants to be a millionaire');

