'use client';
import { stat } from "fs";
import { useReducer } from "react";

const initialTodos = [
    {
        id: 1,
        title: "TODO 1",
        body: "Description of TODO 1",
        completed: false
    },
    {
        id: 2,
        title: "TODO 2",
        body: "Description of TODO 2",
        completed: false
    },
]

const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, completed: true }
                } else {
                    return todo
                }
            })
        case "IN_PROGRESS":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, completed: false }
                } else {
                    return todo
                }
            })
        default:
            return state
    }
}

export default function Todos() {
    const [todos, dispatch] = useReducer(reducer, initialTodos)

    const handleChange = (todo) => {
        if(todo.completed) {
            dispatch({ type: "IN_PROGRESS", id: todo.id })    
        } else {
            dispatch({ type: "COMPLETE", id: todo.id })
        }
    }

    return <>
        {todos.map((todo) => (
            <div>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleChange(todo)}
                />
                {todo.title}
            </div>
        ))}
    </>
}