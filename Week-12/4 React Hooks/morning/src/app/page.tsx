'use client'
import { useContext, useEffect, useState, createContext, useMemo, useCallback } from "react";
import Todos from "../../components/Todo";

const UserNameContext = createContext()

export default function Home() {
  const [color, setColor] = useState("black")
  const [count, setCount] = useState(0)
  
  const [todos, setTodos] = useState([])

  const calculation = useMemo(() => expensiveCalculation(count), [count])


  const [userName, setUserName] = useState("Faruk")

  useEffect(() => { console.log("useEffect called, the new value is: " + count) }, [count])


  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1)
    }, 1000)

    return () => {
      clearTimeout(timer)
      console.log("Timer cleared")
    }
  }, [])

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"])
  }, [todos])


  return (
    <UserNameContext.Provider value={userName}>

      <Todos todos={todos} addTodo={addTodo}/>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1>My favorite color is: {color}</h1>
      <button type="button" onClick={() => setColor("blue")}>Set color to blue</button>
      <br />
      <br />

      <h5>The count is {count}</h5>
      <button type="button" onClick={() => setCount(count + 1)}>+</button>
      <br />
      <button type="button" onClick={() => setCount(count - 1)}>-</button>

      <br />
      <br />

      <Component1 />

    </UserNameContext.Provider>
  );
}



const expensiveCalculation = (num) => {
  console.log("Calculating...")
  for (let i = 0; i < 100000; i++) {
    num += 1
  }
  return num
}

function Component1() {
  return (
    <>
      <p>Component1</p>
      <Component2 />
    </>
  )
}

function Component2() {
  const userName = useContext(UserNameContext)

  return (
    <>
      <p>Component2</p>
      <h1>Hello from Component 2, the name is: {userName}</h1>
      <Component3 />
    </>
  )
}
function Component3() {
  const userName = useContext(UserNameContext)

  return (
    <>
      <p>Component3</p>
      <h1>Hello from Component 3, the name is: {userName}</h1>
      <Component4 />
    </>
  )
}

function Component4() {

  return (
    <>
      <p>Component4</p>

      <Component5 />
    </>
  )
}

function Component5() {
  const userName = useContext(UserNameContext)
  return (
    <>
      <p>Component5</p>
      <h1>Hello {userName}</h1>
    </>
  )
}


