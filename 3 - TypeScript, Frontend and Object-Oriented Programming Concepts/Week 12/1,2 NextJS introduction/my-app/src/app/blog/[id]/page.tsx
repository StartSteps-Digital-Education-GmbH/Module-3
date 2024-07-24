type params = {
    params: {
        id: string
    }
}

//React Node
export default function Blog({ params }: params): React.ReactNode {
    return <p>Blog Page {params.id}</p> //React node
}