
//Mapped Type

type StringMap<T> = {
    [p in keyof T]: string
}

type strType = {
    id: number,
    name: string,
    age: number,
}



const objStringMap: StringMap<strType> = {
    id: "10",
    name: "Asdas",
    age: "asdsd"
}

const objNormal: strType = {
    id: 10,
    name: "asdas",
    age: 10
}
