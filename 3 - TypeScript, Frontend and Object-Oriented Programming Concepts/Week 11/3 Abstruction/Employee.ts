abstract class Employee {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract getEmployeeType(): void;
}

class FullTimeEmployee extends Employee {

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
