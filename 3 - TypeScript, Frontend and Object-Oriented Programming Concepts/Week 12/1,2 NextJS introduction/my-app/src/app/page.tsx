// import { Post } from "@/types/types" //@ is pointing to src
import { IPost } from "@/types" //@ is pointing to src

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

export default function Home() {
  return (
    <>
      {
        //javascript
        posts.map((post) => (
          <>
            <p>post :{post.id}</p>
            <p>Title: {post.title}</p>
            <p>Content: {post.content ? post.content : 'No Content'}</p>
          </>
        ))

      }
    </>
  );
}
