'use strict';


var answerOne = confirm('Are you ready to rumble?');
console.log(answerOne);

if (answerOne === true){
  onmouseleave.log('lets get ready to rumble')
} else {
  console.log('another time then');
}

var myBool = true;
var anotherBool = false;
var thirdBool = true;

if (myBool && thirdBool) {
  console.log('both are true');
}
else if (myBool || anotherBool) {
  console.log('myBool OR anotherBool is true');
}
