class University {
    name="";
    location="";
    constructor(name,location){
        this.name =name;
        this.location =location;
    }
    addDepartment(department){
        this.department.push(department);
    }
    addStudent(student){
        this.student.push(student);
    }
    addProfessor(professor){
        this.professor.push(professor);
    }
    removeDepartment(){
        const Person = ["name"];
        let index = Person.indexOf("departments",1);
        
    }
    removeStudent(){
        const Person = ["name", "address", "email"];
        let index = Person.indexOf("student",1);

    }
    removeProfessor(){
        const Person = ["name", "address", "email"];
        let index = Person.indexOf("professor",1);
    }
    getDepartments(){
        return this.departments;
//         let authorName = "";
//   for(let i = 0; i < this.authors.lenght; i++) {
//     authorName += this.authors[i].getName();
//     if (i <this.authors.lenght - 1) {
//       authorName += ", ";
//     }
//   }
//   return `a" ${authorName}"`
        
    }
    getStudent(){
        return this.student;
    }
    getProfessor(){
        return this.professor;
    }

    setDepartment(department){
        return this.department=department;
    }
    setStudent(student){
        return this.student=student;
    }
    setProfessor(professor){
        return this.professor=professor;
    }
}

class Department{
    name="";
    constructor(name){
        this.name=name;
    }
    addCourse(course){
        this.course.push(course);
    }
    removeCourse(){
        const Course = ["code", "title", "email"];
        let index = Course.indexOf("course",1);
    }
    removeStudent(){
        const Person = ["name", "address", "email"];
        let index = Person.indexOf("student",1);
    } 
    addStudent(){
    this.student.push(student);
    }
    addProfessor(){
        this.professor.push(Professor);
    }
    getCourses(){
        return this.courses
    }
    getStudents(){
        return this.student
    }
    setStudent(student){
        return this.student=student;
    }
    toString(){
        return `Department:Computer Science`
    }
}

class Course{
    code ="";
    title ="";
constructor(code,title){
    this.code=code;
    this.title=title;
}
addStudent(){
    this.student.push(student);
}
removeStudent(){
    const Person = ["name", "address", "email"];
        let index = Person.indexOf("student",1);
}
setProfessor(professor){
    return this.professor=professor;
}
getProfessor(){
    return this.professor
}
setStudent(student){
    return this.student=student;
}
toString(){
    return `Course = [Code: ${this.code},Title: ${this.title}]`
}
}

class Professor{
    name="";
    staffId="";
constructor(name,staffId){
    this.name=name;
    this.staffId=staffId;
}
teachCourse(){

}
stopTeachingCourse(){

}
getCourses(){

}
toString(){
    return `Professor = [Name: ${this.name},StaffID: ${this.staffId}]`
}
}

class Student{
    studentId="";
    year=0;
constructor(studentId,year){
    this.studentId=studentId;
    this.year=year;
}
regiserCourse(){

}
dropCourse(){

}
getCourses(){

}
toString(){
    return `Student = [StudentId: ${this.studentId},Year: ${this.year}]`
}
}

class Person{
    name="";
    address="";
    email="";
constructor(name,address,email){
    this.name=name;
    this.address=address;
    this.email=email;
}
toString(){
    return `Professor = [Name: ${this.name},Address: ${this.address},Email: ${this.email}]`
}
}

const main =() => {
    const person1 =new Person("Alice","Nakhon Pathom","Alice123@gmail.com");
    const person2 =new Person("Bob","Nakhon Pathom","Bob123@gmail.com");


    const student1 =new Student("001","21");
    const student2 =new Student("002","20");
    const student3 =new Student("003","20");

    const professor1 =new Professor("Dr. Worachet Uttha");
    const professor2 =new Professor("Dr. Udsanee Pakdeetrakulwong");

    const professor3 =new Professor("Dr. Worachet Uttha", "P001");
    const professor4 =new Professor("Dr. Udsanee Pakdeetrakulwong", "P002");

    const course1 =new Course("SE101 - ","Introduction of Database Design");
    const course2 =new Course("CS101 - ","Introduction to Programming");

    const department1 =new Department("Software Engineering");
    const department2 =new Department("Computer Science");

    const university1 =new University("Nakhon Pathom Rajabhat","85 Malaiman Road, Nakhon Pathom", "Thailand");

    // const test1 = new Department

    console.log("Department: ","Computer Science");
    console.log(course2,"Alice",professor1);
    console.log();

    console.log("Department: ","Software Engineering");
    console.log(course1,"Bob",professor2);
    console.log();

    console.log("Course: ",course2);
    console.log(professor1,"Alice");
    console.log();

    console.log("Course: ",course2);
    console.log(professor1,"Bob");
    console.log();

    console.log("Student", person1.name,student1);
    console.log("Course: ",course2);
    console.log();
    console.log("Student", person2.name,student2);
    console.log("Course: ",course1);
    console.log();

    console.log("Professor: ",professor3);
    console.log("Course: ",course2);
    console.log();
    console.log("Professor: ",professor4);
    console.log("Course: ",course1);
    console.log();

    console.log("Student in the University");
    console.log(person1.name,student1);
    console.log("Course: ",course1);
    console.log();
    console.log("Student in the University");
    console.log(person1.name,student1);
    console.log("Course: ",course2);
    console.log();

};
main();