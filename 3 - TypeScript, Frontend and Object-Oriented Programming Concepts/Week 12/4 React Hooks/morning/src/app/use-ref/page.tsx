"use client";
import { useEffect, useRef, useState } from "react"

export default function UseRefPage() {
    const [inputValue, setInputValue] = useState<String>("")
    const previousInputValue = useRef("")

    const inputElement = useRef();

    useEffect(() => {
        previousInputValue.current = inputValue
    }, [inputValue])


    const focusInput = () => {
        inputElement.current.focus()
    }


    return (
        <>
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        
        />
        <h2>Current value: {inputValue}</h2>
        <h2>Previous value: {previousInputValue.current}</h2>

        <br/>
        <br/>
        <br/>
        <input type="text" ref={inputElement}/>
        <button onClick={focusInput}>Focus Input</button>
        </>
    )
}