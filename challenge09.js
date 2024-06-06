// challenge 09

// A needle in the Haystack: can you find the needle in the haystack?
//Write a function findNeedle() that takes an array full of junk but containing one "needle"
//After your function finds the needle it should return a message (ad a string ) that says:
// "found that needle at position " plus the index it found the needle.

function findNeedle(myArr) {
  // let str = "";
  // for (let i = 0; i < myArr.length; i++) {
  //   if (myArr[i] === "needle") {
  //     str = [i];
  //   }
  // }
  // return `"found that needle at position ${str}" `;
  return "found that needle at position " + myArr.indexOf("needle");
}

console.log(findNeedle(["hay", "needle", "junk", "hay"]));
