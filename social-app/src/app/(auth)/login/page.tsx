'use client';
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { redirect } from 'next/navigation'

const Login = () => {
    const [id, setId] = useState("");
    const dispatch = useDispatch();
    const data = useSelector((state) => state);
    const login = (e) => {
        e.preventDefault(); // prevent auto submision of the form(Browser behavior)
        //login the user to redux
        //Distpatch LOGIN action
        //user.id
        console.log("data befre login", data)
        const action = {
            type: 'LOGIN',
            user: {
                id,
            }
        }
        dispatch(action);
        console.log("data after login", data);

    }
    console.log("data after login", data);
    if(data?.auth.isLoggedIn){
        redirect("/")
    }
    return (

        <form>
            <input type="text" id="id" value={id} onChange={e => setId(e.target.value)} />{/* controlled Input */}
            <button onClick={login}>Login</button>
            <p></p>
        </form>
    )
}

export default Login;