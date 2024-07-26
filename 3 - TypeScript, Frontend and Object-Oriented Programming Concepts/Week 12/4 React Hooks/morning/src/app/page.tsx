'use client'
import { useContext, useEffect, useState, createContext } from  "react";

const DarkMode = createContext(false);

export default function Home() {
  //Hooks should at the top of a functional component
  const [dark, setDark] = useState(false);
  const [color, setColor] = useState("red");
  const [colorCode, setColorCode] = useState("#ff0000")

  useEffect(() => {
    console.log("undefined send to use effect runs on each rerunder");
  }) //undefined

  useEffect(() => {
    console.log("[] running it only the first time page runders")
  }, [])

  useEffect(() => {
    let timer = setTimeout(() => {
      if (color === "blue") {
        setColorCode("#00ff00")
      }
    }, 5000)
    return () => clearTimeout(timer);//cleanups
  }, [color])

  return (
    <DarkMode.Provider value={dark}>
      <main className={dark ? 'bg-black' : ''}>
        <p className={dark ? 'text-white' : ''}>The color is {color} and its code is {colorCode}</p>
        <button type="button" onClick={() => { setColor('blue') }} className={dark ? 'text-white' : ''}>Change Color</button>
        <br />
        <button type="button" onClick={() => {
          setDark(!dark);
        }}
          className={dark ? 'text-white' : ''}
        >Dark/Light</button>

        {/* <ChildOne dark={dark} /> passing using props drilling */}
        <ChildOne/>
      </main >
    </DarkMode.Provider>
  );
}

function ChildOne() {
  const dark = useContext(DarkMode);
  return <><p className={dark ? 'text-white' : ''}>Child one contents</p><ChildTwo/></>

}

function ChildTwo() {
  const dark = useContext(DarkMode);
  return <p className={dark ? 'text-white' : ''}>ChildTwo</p>
}
