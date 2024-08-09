
// type partialType = Partial<strType>;

const objPartial: Partial<strType> = {
    id: 10,
}

interface ABC {
    userDetails: Partial<strType>;
    password: string;
}

const newObj: ABC = {
    userDetails: {
        id: 10
    },
    password: "kjhkjh"
}


type userInfoType = {
    id: number,
    name?: string, // optional
    age?: string, //optional
    salary: number,
    address?: string
}

const objUserInfoOptional: userInfoType = {
    id: 10,
    salary: 5000,
}

type newRequiredType = Required<userInfoType>;

const newObject: newRequiredType = {
    id: 10,
    salary: 5000,
    age: "10",
    name: "asdasd",
    address: "string"
}
