/* 
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
Strings
*/

function countOccurence(str) {
  //Thought process: first map into an object key that keeps count of occurences, then I count the number of object values that's greater than one
  let repetitionCount = 0;
  let repetition = {};
  str = str.toLowerCase();
  const testRegex = /[a-z0-9]/;

  for (let i = 0; i < str.length; i++) {
    if (testRegex.test(str[i]) == false) {
      continue;
    }
    if (repetition[str[i]] == undefined) {
      repetition[str[i]] = 1;
    } else {
      repetition[str[i]] = repetition[str[i]] + 1;
    }
  }
  //console.log(repetition);

  for (const [key, value] of Object.entries(repetition)) {
    //console.log(key, value);
    if (value > 1) {
      repetitionCount++;
    }
  }
  console.log("Repetition Count is:", repetitionCount);
}

//countOccurence("aabb  cde");

/* 

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

*/

function generateHashtag(str) {
  str = str.trim();
  if (str == "") return false;
  let wordsArr = str
    .trim()
    .split(" ")
    .filter((item) => item !== "")
    .map((item) => {
      return `${item[0].toUpperCase()}${item.slice(1)}`;
    });
  let hashtagResult = `#${wordsArr.join("")}`;
  return hashtagResult.length > 140 ? false : hashtagResult;
}

//console.log(generateHashtag(" "));

/* 

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:
solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!
*/
function solve(s) {
  // Thought process: Count the number of lower and uppercase chars, convert to the least count or to lowercase if equal
  let uppercaseCount = 0;
  let lowercaseCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      uppercaseCount++;
    } else if (s[i] === s[i].toLowerCase()) {
      lowercaseCount++;
    }
  }
  const result =
    uppercaseCount > lowercaseCount ? s.toUpperCase() : s.toLowerCase();
  return result;
}

//console.log(solve("COdEdly"));

/* 

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !


*/

function pigIt(str) {
  //Code here
  // Thought process, split into words, for each word, return a slice of letter at the back of the rest of the wors with ay
  let splitWords = str.split(" ");
  let newWords = splitWords.map((word) => {
    return /[a-z]/.test(word) ? word.slice(1) + word[0] + "ay" : word;
  });
  console.log(splitWords);
  return newWords.join(" ");
}

console.log(pigIt("Pig latin is cool"));
