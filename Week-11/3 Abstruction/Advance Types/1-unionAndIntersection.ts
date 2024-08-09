type stringOrNumberOrBoolean = Number | String | boolean; //Union

let test: stringOrNumberOrBoolean = 10;
test = "asdasd";
test = false;


type fullTimeEmployee = {
    name: string;
    numberOfWorkingHours: number;
    salary: number;
    bouns: number;
}


type contractors = {
    name: string;
    numberOfWorkingHours: number;
    salary: number;
    endDate: "String";
}

type employee = fullTimeEmployee & contractors;

const employee1: employee = {
    name: "asdasd",
    numberOfWorkingHours: 10,
    salary: 40,
    bouns: 100,
    endDate: "String",
}
