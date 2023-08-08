import React, { useState } from 'react'
import "../Style/Login.css"
import { useDispatch } from "react-redux"
import { LoginPost } from '../Redux/AuthReducer/action'
import { Link ,useNavigate} from 'react-router-dom'
import { useToast } from '@chakra-ui/react'


export const Login = () => {
    const dispatch=useDispatch()
    const toast = useToast()
    const navigate=useNavigate()
 const [user,setUser] = useState({
    email:"",
    password:""
 })
   
 const handleChange=(e)=>{
    const {name,value} = e.target;
    setUser({...user,[name]:value})

 }

 const handleSubmit=(e)=>{
      e.preventDefault()
    dispatch(LoginPost(user))
    .then((res)=>{
        if(res.payload.message==="Invalid credentials - password does not match")
        {
            toast({
                title: 'Invalid credentials',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position:"top"
              })
        }
        else{
            toast({
                title: 'Signup Successful',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position:"top"
              })
              navigate("/")
        }
       
    }).catch((err)=>{
        console.log(err)
    })
 }


  return (
    <div className='Container_login_dib'>
        <div className='login-div-border'>
            <div className='imgRobot-login'>

            </div>
            <div className='login-body'>
                <div className='oneDiv'>
                <h1>Log in</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input placeholder='Enter email' type="text" name="email" value={user.email} onChange={handleChange} />
                    </div>
                    <div>
                        <input placeholder='Enter password' type="password" name="password" value={user.password} onChange={handleChange} />
                    </div>
                    <button type="submit" className='butn'>LOGIN</button>
                    <div className="span-div">
                    New to account? <span style={{color:"blue"}}>
                    <Link to={"/signup"}>SignUp</Link>  
                    </span>
                </div> 
                <div style={{display:"flex" ,justifyContent:"center", alignItems:"center"}}>Or</div>
                <div style={{display:"flex" ,justifyContent:"center", alignItems:"center"}}>
                <Link style={{color:"blue"}} to="">Admin?</Link> 
                    </div>
                </form>
                </div>
            </div>
          </div>
    </div>
  )
}