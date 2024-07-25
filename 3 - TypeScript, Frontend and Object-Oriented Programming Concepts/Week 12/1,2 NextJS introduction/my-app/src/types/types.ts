export interface IPost {
    id: number,
    title: string,
    content?: string,
    creationDate?: Date,
    user?: User;
}


export interface User {
    name: string;
    surname: string;
    age: number;
}

export interface IPostParams {
    params: {
        id: string;
    }
}