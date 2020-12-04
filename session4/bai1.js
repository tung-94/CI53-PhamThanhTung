class Student {
    constructor(studentCode, name, age, schoolYear){
        this.studentCode = studentCode;
        this.name = name;
        this.age = age;
        this.schoolYear = schoolYear;
    }
}

class Teacher {
    constructor(teacherCode, name, age, lever){
        this.teacherCode = teacherCode;
        this.name = name;
        this.age = age;
        this.lever = lever;
    }
}

class Classroom {
    
    liststudent = [];
    listteacher = [];

    constructor(classCode, subjectTitile, teacher, listStudent) {
        this.classCode = classCode;
        this.subjectTitile = subjectTitile;
        this.teacher = teacher;
        this.listStudent = listStudent;
    }

    addStudents(student) {
        this.liststudent.push(student);
    }

    addTeacher(teacher) {
        this.listteacher.push(teacher);
    }
    
}

let student = new Student(13121519, "Nhung", 19, "2018-2022");
let teacher = new Teacher(30363938, "Han", 32, "master");
let classroom = new Classroom("VT-123", "Automation", 52);

let newStudent = new Student(00123121, "Tung", 20, "2018-2023");
let newTeacher = new Teacher(94536211, "Thanh", 65, "Professor");

classroom.addStudents(newStudent);
    console.log("update student");
classroom.addTeacher(newTeacher);
    console.log("update teacher");
    console.log(classroom);


  