interface IEmployee {
    name: string;
    getName(): void;
}

interface ParentTow {
    salary: number;
}

interface Child extends IEmployee, ParentTow {
//Multiple  Inhertance Supported by interface but not abstruct class
}

class Test implements IEmployee {
    name: string = "asdasd";
    getName(){

    }
}

abstract class Employee implements IEmployee {
     name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract getEmployeeType(): void; //The child need to write thier own implementation
    getName(){
        console.log("name");
    }
}

class FullTimeEmployee extends Employee implements IEmployee{
    //Name and getName are coming from parent so IEmployee is not showing an error

    constructor(name: string) {
        super(name)
    }

    getEmployeeType() {
        console.log("Full-Time Employee")
    }

}

class Contractors extends Employee {


    constructor(name: string) {
        super(name)
    }

    getEmployeeType() {
        console.log("Contractor Employee")
    }
}

// const employee = new Employee("john"); //You dont this

const john = new FullTimeEmployee("john");
john.getEmployeeType();
john.getName()
