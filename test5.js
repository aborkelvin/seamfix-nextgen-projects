/* 

You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.
Examples:
"test" --> "es" "testing" --> "t" "middle" --> "dd" "A" --> "A"

*/

function findMiddleNumber(str) {
  // Algo: Divide str length by 2, if odd, round down and get the char at the number, if even, get the char and the next one
  let median = str.length / 2;

  if (str.length % 2 !== 0) {
    // For Odd numbers
    let index = Math.floor(median);
    console.log(str[index]);
  } else {
    console.log(str.slice(median - 1, median + 1));
  }
}

findMiddleNumber("1234567890");
findMiddleNumber("test");
findMiddleNumber("testing");
findMiddleNumber("middle");
findMiddleNumber("A");

// abcdef  3
