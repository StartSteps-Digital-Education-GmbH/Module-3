type newType = {
    id: number,
    name?: string, // optional
    age?: string, //optional
    salary: number,
    address?: string
}


type typeWithPick = Pick<newType, "id" | "name" | "address">;

const newObjectWithPick: typeWithPick = {
    id: 10,
    // salary: 5000,
    // age: "10",
    name: "asdasd",
    address: "string"
}

type typeWithOmit = Omit<newType, "address">;

const newObjectWithOmit: typeWithOmit = {
    id: 10,
    salary: 5000,
    age: "10",
    name: "asdasd",
    // address: "string"
}
