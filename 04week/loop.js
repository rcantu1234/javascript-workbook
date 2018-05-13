// Created persons object
const persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}

// For loop to view keys
for(const person in persons) {
    console.log(`${person}`);
}
console.log('\n');

// While loop to print 1000 numbers
console.log('While Loop');
let j = 1;
while(j <= 1000) {
  console.log(j);
  j++;
}
console.log('\n');

// For loop to print 1000 numbers
console.log('For Loop');
for (let i = 1; i <= 1000; i++) {
  console.log(i);
}
console.log('\n');

// do...while loop to print 1000 numbers
console.log('do...While Loop');
let k = 1;
do {
    console.log(k);
    k++;
} while(k <= 1000);

// 1.  When is a for loop better than a while loop?
// For loops have better performance than while loops because they have an explicit loop counter.

// 2.  How is the readability of the code affected?
// It is easier to reaad the setup, test expression, and increment.

// 3.  What is the difference between a for loop and a for...in loop?
// When creating objects, the for-in loop allows you to get the property name in the iteration variable.
// With the for loop you have control over the iteration variable, such as iterating over even indices.

// 4.  What is the difference between a while loop and a do...while loop?
// The difference is when the condition gets evaluated.  The do...while loop will always run
// at least once.  The while loop's test expression is checked at first.
