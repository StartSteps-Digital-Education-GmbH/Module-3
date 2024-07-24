export interface IPost {
    id: number,
    title: string,
    content?: string,
}

export interface IPostParams {
    params: {
        id: string;
    }
}