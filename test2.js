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
  if (!str || str.length == 0) {
    return false;
  }
  let newStr = str.split(" ");

  let bstr = newStr.map((element) => {
    if (element !== "") {
      return element[0].toUpperCase() + element.slice(1);
    } else {
      return element;
    }
  });

  let finalStr = bstr.join("");
  finalStr = "#" + finalStr;

  console.log(finalStr.length);
  if (finalStr.length <= 140) {
    return finalStr;
  }
  return false;
}

console.log(
  generateHashtag(
    "a man of the people a man of the people a man of the people a man of the people a man of the people a man of the people a man of the people a man of the people  a man of the people a man of the people a man of the people a man of the people a man of the people a man of the people a man of the people a man of the people "
  )
);
console.log(
  generateHashtag(
    "a man of the people a man of the people a man of the people a man of the people "
  )
);
console.log(generateHashtag());
