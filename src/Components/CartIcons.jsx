import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import "../Style/CartIcons.css"
import { Divider } from '@chakra-ui/react'
import {AiFillCreditCard} from "react-icons/ai"
import {RiTodoFill} from "react-icons/ri"

export const CartIcons = () => {
  return (
    <div className='icon_cart_order'>
        <div className='bag_shopping'>{<FaShoppingCart style={{fontSize:"24px", color:"teal"}}/>} Your Cart</div>
        <Divider w="3rem" borderColor="black"/>
        <div className='summary_order'>{<RiTodoFill style={{fontSize:"24px",color:"#ACACAD"}}/> }Order Summarry </div>
        <Divider w="3rem" borderColor="black"/>
        <div className='paymnt_icons'>{<AiFillCreditCard style={{fontSize:"24px",color:"#ACACAD"}}/>}Your Payment </div>
    </div>
  )
}
