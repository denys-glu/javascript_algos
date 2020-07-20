const obj1 = { firstName: "Foo", lastName: "Bar", age: 13 };

function objToArr(obj) {
  let arr = [];
  for(let key in obj) {
    arr.push([key, obj[key]])
  }
  console.log(arr)
  return arr;
}

objToArr(obj1)