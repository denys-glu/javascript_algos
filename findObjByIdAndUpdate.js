const students = [
    {
      id: 1,
      name: "student1",
      isLateToday: false,
      lateCount: 15,
      redBeltStatus: false,
    },
    {
      id: 2,
      name: "student2",
      isLateToday: false,
      lateCount: 1,
      redBeltStatus: false,
    },
    {
      id: 3,
      name: "student3",
      isLateToday: false,
      lateCount: 0,
      redBeltStatus: false,
    },
  ];
  const id1 = 3;
  const updateData1 = { redBeltStatus: true };
  const expected1 = {
    id: 3,
    name: "student3",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: true,
  };
  
  const id2 = 1;
  const updateData2 = {
    isLateToday: true,
    lateCount: 16,
    randomKey: "randomValue",
  };
  const expected2 = {
    id: 1,
    name: "student1",
    isLateToday: true,
    lateCount: 16,
    redBeltStatus: false,
  };
  /* 
    Explanation: In this implementation
      randomKey was not added because it is not an existing key that can be updated
  */
  
  const id3 = 5;
  const updateData3 = {};
  const expected3 = null;
  
  
  updatedStudentInfo(id3, updateData3, students);
  function updatedStudentInfo(id, data, students) {
  
    for(let i = 0; i < students.length; i++) {
      if(students[i].id === id) {
        let obj = students[i];
        for(let key in data){
          obj[key] = data[key]
        } 
        return obj
      }
    }
    return null;
  }