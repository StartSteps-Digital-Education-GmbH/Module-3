class Person {
    constructor(name: string, age: number) {

    }
}

const newPerson = new Person("asdas", 100);

if (newPerson instanceof Person) {
    console.log("this object is an instance of Person class");
}

if (typeof newPerson === "object") {
    console.log("this is an object");
}

const salary = 100;

console.log(typeof salary);

const employeeObject = {
    name: "asdasd",
    age: 100,
}

if ("name" in employeeObject) { //if(employeeObject.name) if(employeeObject["name"])
    console.log("name exsit in employee object");
}

let age: number | string = "100";
if (typeof age === "string") {
    age = parseInt(age)
}