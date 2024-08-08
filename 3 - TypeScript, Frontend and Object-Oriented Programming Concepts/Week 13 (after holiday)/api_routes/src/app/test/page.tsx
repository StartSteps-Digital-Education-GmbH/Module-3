'use client'
import { useEffect, useState } from "react";

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;

};

const TestComponent = async () => {
    const [todos, setTodos] = useState<ITodo[] | null>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>();
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                //handel the response copde here
                console.log(response);
                return response.json() //convert the response body to a readable JS object
            }).then((data: ITodo[]) => {
                //got the data succefully
                setTodos(data);
                setLoading(false);
            }).catch((error: Error) => {
                //if there was no response or an error in the request
                setError(error)
                setLoading(false);
            })
    }, [])// [] means only runned one time at first renderloading
    if (loading) {
        return <p>Loading</p>
    }
    if (error) {
        return <p>An error happened: {error.message}</p>
    }
    // return <pre>{JSON.stringify(todos, null, 2)}</pre>
    return (
        todos && todos.map((todo) => (
            <>
                <h2>Title: {todo.title}</h2>
                <p>completed: {todo.completed ? 'Completed' : 'Not Completed'}</p>
            </>
        ))
    )
}
export default TestComponent;