const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expected1 =
    "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
};
const expected2 =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
function objectToSQLrequest(table, obj) {
  let temp1 = "INSERT INTO " + table + "(";
  let temp2 = ") VALUES (";
  let start = "";
  let end = "";
  
  for(let key in obj) {
      temp1 += key + ", ";
      temp2 += obj[key] + ", ";
  }
  start += temp1.substring(0, temp1.length - 2)
  end += temp2.substring(0, temp2.length - 2) + ");";
  console.log(start + end);
  return start + end;
}

objectToSQLrequest(table, insertData2)