import React, {useState} from 'react'
import './login.css'
import {create,auth} from '../firebase';
import { useDispatch } from 'react-redux';
import {login} from '../features/userSlice'
import { getAuth, createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword  } from "firebase/auth";


function Login() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const [pict,setPict] = useState('')
    const dispatch = useDispatch();

    const register = (e) =>{
        e.preventDefault();
        if(!name){
            return alert('Please enter a full name');
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then((userAuth)=>{
            updateProfile(auth.currentUser,{
                displayName: name,
                photoURL: pict
            })
            .then(()=>{
                const user = userAuth.user;
            dispatch(login({
                        email:user.email,
                        uid:user.uid,
                        displayName:user.displayName,
                        photoUrl:user.photoURL}))
            })
       
    })
    .catch(error=>alert(error.message))

    }
    const loginToApp = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then((userAuth)=>{
            console.log(userAuth)
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoUrl:userAuth.user.photoURL
            }))
        }).catch(error=>{
            alert(error)
        })
    }
  return (
    <div className='login'>
        <img src='https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019-700x175.png' alt="logo"/>
        <form onSubmit={loginToApp}>
            <input type="text" value={name} placeholder='Full name (required if registering)' onChange={(e)=>setName(e.target.value)} />
            <input value={pict} placeholder='Profile Pic URL (optional)' onChange={(e)=>setPict(e.target.value)} type="text" />
            <input placeholder='Email' value={email} type="email" onChange={(e)=>setEmail(e.target.value)} />
            <input placeholder='Password' value={password} type="password" onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">Sign in </button>
        </form>
        <p>Not a Member ? <span className='login__register' onClick={register}>Sign up</span></p>

    </div>
  )
}

export default Login