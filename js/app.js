'use strict';


var name = prompt('Hello, what is your name');
console.log('users name is ' + name);
alert('Welcome to the Thunder Dome ' + name)

var state = alert('Please answer the following questions with a yes or a no ') 
var userPoints = 0
  


var answerOne = prompt('Do you think I like the rain?');
var lowerOne = answerOne.toLowerCase();
console.log(lowerOne);
if (lowerOne === 'yes' || lowerTwo === 'y') {
  //console.log('Wrong! I do not like the rain')
  alert('Wrong! I do not like the rain')
} else if (lowerOne === 'no' || lowerOne === 'n') {
  //console.log('Correct! I do not like the rain')
  alert('Correct! I do not like the rain')
  userPoints++
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
  userPoints++
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
  userPoints++
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
  userPoints++
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
  alert('Correct I love me some bacon.')
  userPoints++
} else {
  //console.log('Please answer yes or no');
  alert('Please answer yes or no');
}

alert('Thank you ' + name + ' for playing who wants to be a millionaire');

//first question using loops

var userAnswer = prompt('Im thinking of a number 1 through 10 can you guess it?');
var userNumber = parseInt(userAnswer);
var rightNumber = 5;
var attempts = 0;
var answerCorrect = false;


while (attempts < 4) {
  if (userNumber === rightNumber) {
    alert('Correct');
    attempts = 6;
    userPoints++
  }
  else if (userNumber < rightNumber) {
    userAnswer = prompt('Too low, please guess again');
    userNumber = parseInt(userAnswer)
    attempts++;
  } else if ( userNumber > rightNumber) {
    userAnswer = prompt('Too high, please guess again');
    userNumber = parseInt(userAnswer)
    attempts++;
  }
}
if (attempts === 4) {
  alert('Wrong again the answer is 5')
}

//2nd question using loops

var secondAnswer = ['basketball', 'baseball', 'soccer'];
var userSecond = prompt('What sport do you think I like?');
//starting at 5 gives me 6 attempts
var attempts = 0;

while (attempts < 5) {
  for (var i = 0; i < secondAnswer.length; i++) {
    if (userSecond.toLowerCase() === secondAnswer[i]) {
      alert('Correct! I like that sport.');
      attempts = 8;
      userPoints++
    }
  }
  if (attempts < 5) {
    userSecond = prompt('Wrong please guess again.').toLowerCase();
    attempts++
  }
}
  if (attempts === 5) {
    alert('Wrong again? My favorite sports are basketball, baseball, and soccer')
  }
  //console.log(userPoints);
  alert(`Good job you got ${userPoints} points out of 7`)


