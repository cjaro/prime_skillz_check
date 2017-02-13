// 1 - Write a for loop that runs 5 times. Each iteration will increase the value of checkz by 1
var checkz = 0;

for (var i = 0; i < 5; i++) {
  checkz += 1;
}

// 2 - Write a while loop that runs 3 times. Each iteration will decrease the value of checkz by -2

for (var i = 0; i < 3; i++) {
  checkz -= 1;
}


// 3 - Summarize in English what this code is doing. Use a multiline comment to do so.
var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);

//This loop takes in this numbers array. While i is less than the length of the array,
//the code loops through, and then total is increased by the value of the array at the
//indicated index. Then the console.log prints the final value of total.
//
