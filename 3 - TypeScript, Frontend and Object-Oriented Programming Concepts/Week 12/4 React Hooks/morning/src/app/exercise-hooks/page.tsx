'use client';
import { useReducer, useState, useEffect, createContext, useContext } from "react";

export default function ExerciseHook() {
    return <>
        <ExerciseUseState/>
        <ExerciseUseEffect/>
        <ExerciseUseContext/>
    </>
}

function ExerciseUseState() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

function ExerciseUseEffect() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p>Seconds: {seconds}</p>
        </div>
    );
}

const ThemeContext = createContext();

function ExerciseUseContext() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemedComponent />
        </ThemeContext.Provider>
    );
}

function ThemedComponent() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Component1/>
        </div>
    );
}

function Component1() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            The theme is: {theme}
        </div>
    )
}