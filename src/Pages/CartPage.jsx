import React, { useEffect, useState } from 'react'
import "../Style/CartPage.css"
import { CartIcons } from '../Components/CartIcons'
import axios from 'axios'
import {RxCross1} from "react-icons/rx"

export const CartPage = () => {
    const [dal,setDal] = useState([])
    const mrptotal=12
    const prdDisct=12
    const totalAmt=19

    useEffect(()=>{
        axios.get("http://localhost:4000/products/all")
        .then((res)=>{
         console.log(res.data.products,"res.dal")
         setDal(res.data.products)
        }).catch((err)=>{
         console.log(err)
        })
    })


  return (
    <div className='cart_container'>
          {/* cart */}
        <div className='cart_section'>
           <div className='my_cart_div'>My Cart</div>
           <div className='basket_item'>
            <p>Basket (items)</p>
            <p>{totalAmt}</p>
           </div>
         
         {/* data map */}
       
            {dal?.map((el)=>{
                return <div className='data_map_container' key={el._id}>
                       <div className='image_constin_div'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC_T_sOZgDXbJKtIJYF6PgKfhfj4q_hQRXMEyqSoNQ&s"/>
                       </div>
                       <div className='disctiptn_div'>
                        <p>{el.description}</p> 
                       <p className='sols'>Sold :{el.sold}</p> 
                       </div>
                       <div className='price_and_bttns'>
                        <p>Price{el.price}</p>
                        <div className='btn_plumin'>
                            <button>+</button>
                            <p>2</p>
                            <button>-</button>
                        </div>
                       </div>
                       <div className='remove_icons'>{<RxCross1/>}</div>
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
                 <div className='total_amount'><h3>Total Amount</h3><h3>₹{totalAmt}</h3></div>

               </div>
               <div className='button_div'>
                <button>Place Order</button>
               </div>
            </div>
        </div>
    </div>
  )
}
