/*
  Given two arrays of ints
  return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
      think of a venn diagram filled in except the ovlerapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)

  Venn Diagram Visualization: https://res.cloudinary.com/practicaldev/image/fetch/s--Kuq7OH5V--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/eq8zrfkbs9jntiimwjk9.png
*/


const test1SetA = [1, 2];
const test1SetB = [2, 1];
const expected1 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const test2SetA = [1, 2, 3];
const test2SetB = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const test3SetA = [4, 1, 2, 3, 4];
const test3SetB = [1, 2, 3, 5, 5];
const expected3 = [4, 5];
/* 
  Explanation: 1, 2, and 3 are shared so are excluded
    4 and 5 are included because they exist only in 1 array, but have duplicates, so only one copy of each is kept
*/

function superSmartFunction(arr1, arr2) {
    let noShared = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1 && noShared.indexOf(arr1[i]) === -1) {
            noShared.push(arr1[i])
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1 && noShared.indexOf(arr2[i]) === -1) {
            noShared.push(arr2[i])
        }
    }
    return noShared;
}
console.log(superSmartFunction(test3SetA, test3SetB));

function deltaOfTwoSets(setA, setB) {
    newArray = [];
    for (let i = 0; i < setA.length; i++) {
        if (!setA.includes(setB[i])) {
            if (!newArray.includes(setB[i])) {
                newArray.push(setB[i]);
            }
        }
    }
    for (let i = 0; i < setB.length; i++) {
        if (!setB.includes(setA[i])) {
            if (!newArray.includes(setA[i])) {
                newArray.push(setA[i]);
            }
        }
    }

    return newArray;
}
console.log(deltaOfTwoSets(test3SetA, test3SetB));
