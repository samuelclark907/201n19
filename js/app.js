'use strict';


var name = prompt('Hello, what is your name');
console.log('users name is ' + name);
alert('Welcome to the Thunder Dome ' + name )

var state = alert('Please answer the following questions with a yes or a no ');

if (state){
  console.log('Thank you')
} 

var answerOne = prompt('Do you think I like the rain?');
console.log(answerOne);
if (answerOne === 'yes')  {
  console.log('Wrong! I do not like the rain')
}
if (answerOne === 'no') {
  console.log('Correct!! I do not like the rain');
} else {
  console.log('Please answer yes or no.')
}