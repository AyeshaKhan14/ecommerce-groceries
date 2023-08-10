import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";

import { AiOutlineDown } from "react-icons/ai";
import {FaHeart} from "react-icons/fa";
import "../Style/UserName.css"
import { handleLogout } from '../Redux/AuthReducer/action';


export const UserName = () => {
 const dispatch= useDispatch()

 const userdata= useSelector((state)=>state.AuthReducer.userDetails)

       const handlelogout=()=>{
        dispatch(handleLogout())
       }

       const menuButtonStyle = {
        backgroundColor: '#008ecc', 
        border: 'none', // Remove the border
        boxShadow: 'none', // Remove any box shadow
        outline: 'none', // Remove the outline
        cursor: 'pointer', // Change cursor to pointer on hover
      };
  return (
    <div className='user_div'>
      <div className='another_user_div'>
            <Menu isLazy>
            <MenuButton style={menuButtonStyle}> 
            <div className="menu_arrow">
            <Text style={{color:"white", marginTop:"15px"}}>{userdata.user.name}</Text>
            <AiOutlineDown style={{color:"white",marginLeft:"10px"}} />
         </div>
       </MenuButton>
              <MenuList >
                <MenuItem color={"black"} textAlign={"center"} onClick={handlelogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </div>
    </div>
  )
}
