'use client';
import { useReducer } from "react";

const reduser = (state, action) => {
    // action.type //completed, inprogress
    // the reduser function should return a new state
    switch (action.type) {
        case "Completed": //if(action.type === "completed")
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, status: "Completed" }
                } else {
                    return todo;
                }
            })
        case "inprogress": //else if(action.type === "inprogress")
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, status: "inprogress" }
                } else {
                    return todo;
                }
            })
        default: //else
            return state;
    }
}
export default function Todos() {
    const initialTodos = [
        {
            id: 1,
            title: "do the homeworld",
            status: "Completed",
        }, {
            id: 2,
            title: "do the homeworld 2",
            status: "inprogress",
        },
        {
            id: 3,
            title: "do the homeworld 3",
            status: "Completed",
        }
    ]

    const [todos, dispatch] = useReducer(reduser, initialTodos);

    return <>
        {todos.map((todo) => {
            return <div key={todo.id}>
                <input type="checkbox" checked={todo.status === "Completed"}>
                {todo.title}
            </div>
        })}
    </>
}