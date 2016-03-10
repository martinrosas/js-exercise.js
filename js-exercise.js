var booleanValue    = true;
var numberValue     = 4;
var stringValue     = "dave";
var nullValue       = null;
var undefinedValue  = undefined;
var undefinedValue2 = ?;

#2
console.log(typeof (booleanValue);
console.log(typeof (numberValue);
console.log(typeof (stringValue);
console.log(typeof (nullValue));
console.log(typeof (undefinedValue);
console.log(typeof (undefinedValue2);

#3
typeof null, returns object

#4
//Mia, Albert, and Tony are going to a party.
 //Set "attendees" to an array of their names.

 attendees = ["Mia", "Albert", "Tony"];

 #5
 //Create the same array in a different way --
 //by creating a new Array object.
 var attendees = {name: "Mia", name: "Albert", name: "Tony"};

#6
//Access the third element in the array.
attendees = ["Mia", "Albert", "Tony"];
attendees [2]

#7
// Write a statement which sorts the array. */
var attendees = ["Mia", "Albert", "Tony"];
attendees.sort();

#8
/* Write a statement which removes the last
 element of the array. */
​attendees
var attendees = ["Mia", "Albert", "Tony"];
attendees.pop();

#9 * Write a statement which shifts a new element
 into the array as element 0 -- "Elaine" */

var attendees = ["Mia", "Albert", "Tony"];
var total = attendees.push(0, 'Elaine');

console.log(attendees); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total);  // 4

#10


#11
/* Fix the below while loop so that the user
 is continually asked whether he or she is done.
 Continue looping while the user enters "no".
 Remember you can place console.log statements
 inside loops to "see" the values change. */
isDone = prompt("Are you done?");
while (isDone === null) {
    var isDone = "no";
}

#12
/* Modify the solution to the above while loop
 below. Now, continue looping if "no" OR "No"
 is entered. */
isDone = prompt("Are you done?").toUpperCase();
while (isDone === null) {
    var isDone = ("no");
}

#13
#14

#15

/* The following while loop implements a
 "count up" clock. Make it console.log the
 numbers 1, 2, 3, 4, and 5. */
​
var i = 1;
while (i < 6) {
    console.log(i);
    i++;
}

#16

/* Rewrite the "count up" clock as a for loop! */
​var x = 1;
for (var i = 1; i < 6; i++) {
    console.log(i);
}


​















