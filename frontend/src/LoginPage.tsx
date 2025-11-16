import { useRef, useState } from 'react'
import {Icon} from './assets/icon.tsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const LoginPage = ()=> {
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const [invalidDetails, setInvalidDetails] = useState(false);
    const signInHandler = async () => {
        try {
            const email = emailRef.current.value
            const password = passRef.current.value
            const res = await axios.post('http://localhost:3000/user/signin',{email:email,password:password})
            if(res.status ==200){
                navigate('/dashboard')
            }
        }
        catch (err){
            setInvalidDetails(true)
        }

    }
    return  <div className="
    mx-auto 
    my-50
    flex 
    max-w-sm 
    place-items-center
    grid-cols-1
    gap-x-1 
    rounded-xl 
    bg-white 
    px-10
    py-10
    shadow-lg 
    outline 
    outline-black/5 ">
        <div>
            <Icon/>
            <div className="text-4xl text-black my-10 ">Welcome!</div>
            <input ref= {emailRef} className="text-black-500 bg-amber-50 w-full" placeholder="Email"></input>
            <input ref= {passRef} className="text-black-500 my-3 bg-amber-50 w-full" placeholder="Password"></input>
            <div>
                <button className="px-4 py-2 text-gray-950 rounded-full hover:bg-sky-100 cursor-pointer">Create an account</button>
                <button className="px-4 py-2 mx-2 my-2 bg-sky-400 text-gray-950 rounded-full hover:bg-sky-300 cursor-pointer" onClick={signInHandler}>Sign In</button>

            </div>
            {invalidDetails ? <div className="text-xl text-red-500 my-10 "> Incorrect details entered.</div> : null }
            
            
        </div>
    </div>
    
}