// import { IPost, IPostParams } from "@/types/types" //@ is pointing to src
import { IPost, IPostParams } from "@/types" //@ is pointing to src

const posts: IPost[] = [
    {
        id: 1,
        title: "Post 1",
        content: "asdasdasd"
    },
    {
        id: 2,
        title: "Post 2",
        content: "asdasdasd"
    },
    {
        id: 3,
        title: "Post 3",
        content: "asdasdasd"
    },
    {
        id: 3,
        title: "Post 3"
    }
]


export default function Post({ params }: IPostParams) {

    const id = parseInt(params.id); // '1'
    const post = posts.find((post) => post.id == id); //null 1 === '1'
    return <>
        {post ?
            (
                <>
                    <p>Title: {post.title}</p>
                    <p>Content: {post.content ? post.content : 'Not Found'}</p>
                </>
            ) :
            (
                <p>Not Found</p>
            )
        }
    </>
}