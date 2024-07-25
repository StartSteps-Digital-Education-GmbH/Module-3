// import { Post } from "@/types/types" //@ is pointing to src
import { IPost } from "@/types" //@ is pointing to src

const posts: IPost[] = [
  {
    id: 1,
    title: "Post 1",
    content: "asdasdasd",
    creationDate: new Date(),
    user: {
      name: "asdasd",
      surname: "asdasd",
      age: 21,
    }
  },
  {
    id: 2,
    title: "Post 2",
    content: "asdasdasd",
    creationDate: new Date(),
    user: {
      name: "asdasd",
      surname: "asdasd",
      age: 21,
    }
  },
  {
    id: 3,
    title: "Post 3",
    content: "asdasdasd",
    creationDate: new Date(),
    user: {
      name: "abcd",
      surname: "asdasd",
      age: 21,
    }
  },
  {
    id: 4,
    title: "Post 3",
    creationDate: new Date(),
    user: {
      name: "John",
      surname: "asdasd",
      age: 21,
    }
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
            <div>
              <p>Created by: {post.user.name} {post.user.surname}</p>
              <p>User Age: {post.user.age}</p>
            </div>
          </>
        ))

      }
    </>
  );
}
