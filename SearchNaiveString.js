function naiveStringSearch(sentence, str) {
    let count = 0;
    let matched = 0;
    for (let i = 0; i < sentence.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (sentence[i + j] !== str[j]) break;
            matched++
        }
        if (matched === str.length) count++;
        matched = 0;
    }
    return count;
}
// function naiveStringSearch(sentence, str) {
//   let count = 0;
//   let matched = 0;
//   for (let i = 0; i < sentence.length; i++) {
//       for (let j = 0; j < str.length; j++) {
//         if(sentence[i+j] !== str[j]) break;
//         if (j === str.length - 1) count++
//       }
//   }
//   return count;
// }