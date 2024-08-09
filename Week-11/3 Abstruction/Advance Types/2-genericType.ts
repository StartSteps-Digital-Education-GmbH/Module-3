//Generic Types

interface IGenericType<T, N> {
    id: number;
    name: N;// a Generic Type
    age: T; // a Generic Type
}


function showType(args: IGenericType<number, boolean>) {
    console.log(args);
}

showType({
    id: 1,
    name: true,
    age: 10,
})

const obj: IGenericType<number, number> = {
    id: 10,
    name: 20,
    age: 50
}
