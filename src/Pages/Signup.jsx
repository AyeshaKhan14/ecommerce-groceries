import React, { useState } from 'react'
import "../Style/Signup.css"
import { useDispatch } from 'react-redux'
import { SignPost } from '../Redux/AuthReducer/action'
import { useToast } from '@chakra-ui/react'
import {Link, useNavigate} from "react-router-dom"

export const Signup = () => {
   const dispatch= useDispatch()
   const navigate= useNavigate()
   const toast = useToast()
    const [user,setUser]= useState({
        name:"",
        email:"",
        password:""
    })

  const handleChange=(e)=>{
    const {name,value} = e.target;
    setUser({...user,[name]:value})
  }
 
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(SignPost(user))
    .then((res)=>{
      if(res.payload.message === "User already exists")
      {
        toast({
          title: 'User Already exists',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position:"top"
        })
         }else{
          toast({
            title: 'Signup Successful',
            status: 'success',
            duration: 3000,
            isClosable: true,
            position:"top"
          })
          navigate("/login")
      }
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
  }



  return (
    <div className='Container_signup_dib'>
    <div className='signup-div-border'>
        <div className='imgRobotSign'>
          <img src="https://www.jiomart.com/msassets/images/login-banner.jpg" alt="name"/>
        </div>
        <div className='signup-body'>
          <div className='onDivSign'>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
            <div>
                    <input placeholder='Enter Name' type="text" name="name" value={user.name} onChange={handleChange} />
                </div>
                <div>
                    <input placeholder='Enter email' type="text" name="email" value={user.email} onChange={handleChange} />
                </div>
                <div>
                    <input placeholder='Enter password' type="password" name="password" value={user.password} onChange={handleChange} />
                </div>
                <button type="submit" className='sgnbtn'>SIGNUP</button>
                <div className="span-div-sign">
                 Already a user? <span style={{color:"#008ecc"}}>
               <Link to={"/login"}>Login</Link> 
                </span>
            </div>
            </form>
            </div>
        </div>
      </div>
</div>
  )
}
