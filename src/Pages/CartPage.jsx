import React, { useEffect, useState } from 'react'
import "../Style/CartPage.css"
import { CartIcons } from '../Components/CartIcons'
import axios from 'axios'
import {RxCross1} from "react-icons/rx"
import { useDispatch } from 'react-redux'
import {  getDelete, patchCart, patchCartDec } from '../Redux/CartReducer/action'
import { UserId } from '../data/demo'
import {Link} from "react-router-dom"




export const CartPage = () => {
    const dispatch= useDispatch()
    const [CartItems,setCartItems] = useState([])
    const [dataUpdate, setdataUpdate] = useState({});
    const [total,setTotal]= useState()
    const mrptotal=12
    const prdDisct=12
   



     const getCartItems = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_BACKENED_URL}/carts/${UserId}`);
      setCartItems(data?.cart[0]?.products);
      setTotal(data?.cart[0]?.amount)
     // console.log(data?.cart[0]);
       
    };
  
     useEffect(()=>{
      getCartItems()
      
     },[dataUpdate])
   

     const handleDelete=(id)=>{ 
      dispatch(getDelete(id))
      .then((res)=>{
        getCartItems()
      }).catch((err)=>{
        console.log(err)
      })
     

  }


     const handleAddPlus=(id)=>{
        dispatch(patchCart({userId:UserId,productId:id}))
        .then((res)=>{
          setdataUpdate(res)
          getCartItems()
        }).catch((err)=>{
          console.log(err)
        })
     }

     const handledecmin=(id)=>{
      dispatch(patchCartDec({userId:UserId,productId:id}))
      .then((res)=>{
        setdataUpdate(res)
        getCartItems()
      }).catch((err)=>{
        console.log(err)
      })
     }


  return (
    <div className='cart_container'>
          {/* cart */}
        <div className='cart_section'>
           <div className='my_cart_div'>My Cart</div>
           <div className='basket_item'>
            <p>Basket ({CartItems.length} items)</p>
            <p>Rs {total}</p>
           </div>
         
         {/* data map */}
       
            {CartItems?.map((el)=>{
                return <div className='data_map_container' key={el._id}>
                       <div className='image_constin_div'>
                        <img src={el.image} alt=""/>
                       </div>
                       <div className='disctiptn_div'>
                        <p>{el.description}</p>  
                       </div>
                       <div className='price_and_bttns'>
                        <p>Price {el.price}</p>
                        <div className='btn_plumin'>
                            <button onClick={()=>handleAddPlus(el.productId,el.count)}>+</button>
                            <p>{el.count}</p>
                            <button disabled={el.count<=1} onClick={()=>handledecmin(el.productId)}>-</button>
                        </div>
                       </div>
                       <div className='remove_icons' onClick={()=>handleDelete(el.productId)} >{<RxCross1/>}</div>
                </div>
            })}
      
        </div>

        {/* payment total */}
        <div className='payment_section'>
            <CartIcons/>
            <div className='payment_details'>
               <h1>Payment Details</h1>
               <div className='block_mrp_div'>

                 <div className='mrp_price'><h3>MRP Total</h3> <h3>₹{mrptotal}</h3></div>
                 <div className='product_discount'><h3>Product Discount</h3><h3>₹{prdDisct}</h3></div>
                 <div className='total_amount'><h3>Total Amount</h3><h3>₹{total}</h3></div>

               </div>
               <div className='button_div'>
                <button><Link to="/CheckoutPage">Place Order</Link></button>
               </div>
            </div>
        </div>
    </div>
  )
}
