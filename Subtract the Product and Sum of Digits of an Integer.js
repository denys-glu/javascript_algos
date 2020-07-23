const subtractProductAndSum = function(n) {
    let str = n+""
    let arr = []
    for(let i = 0; i < str.length; i++) {
      arr.push(parseInt(str[i]))
    }
    
    let product = 1;
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        product *= arr[i];
        sum  += arr[i];
    }
  
    return product - sum
};

console.log(subtractProductAndSum(4421));//21
console.log(subtractProductAndSum(234));//9