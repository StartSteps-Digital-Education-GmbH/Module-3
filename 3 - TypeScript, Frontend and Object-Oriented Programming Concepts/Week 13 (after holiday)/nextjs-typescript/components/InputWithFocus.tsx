"use client";
import { useRef } from "react"


const InputWithFocus: React.FC = () => {
    const inputElement = useRef<HTMLInputElement>(null)

    const onFocusClick = () => {
        if(inputElement && inputElement.current) {
            inputElement.current.focus()
        }
    }

    return (
        <div>
            <input type="text" ref={inputElement}/>
            <button onClick={onFocusClick}>Focus the input</button>
        </div>
    )
}

export default InputWithFocus;