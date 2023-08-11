import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PaymentForm from "./PaymentForm";
import { useToast } from '@chakra-ui/react'
import { UserId } from "../data/demo";


const CheckOut = ({order,placeOrder}) => {

 // const userId="64d0ce6edc2647d496bac42a";
  const baseUrl= "https://ecom-backend-wdkk.onrender.com"

  const blank_address = {userId:UserId,phone:'',country:'',state:'',pin:'',address:''}
  const [address,setAddress] = useState(blank_address);
  const [user, setUser] =useState([])
  const [cart, setCart] = useState([]);
  const [add, setAdd] = useState(false);
  const toast = useToast()

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const {data} = await axios.get(`${baseUrl}/carts/${UserId}`);
        // console.log(data?.cart[0])
        setCart(data.cart[0]);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, []);
  
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const {data} = await axios.get(`${baseUrl}/user/${UserId}`);
        console.log("shipAddress:", data.user)
        setUser(data.user);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, []);


  const handleShipAddress = ()=>{
    setAdd(!add)
  }


  const addAddress = (address) => {
    console.log(address);
    axios.patch(`${baseUrl}/user/update/info`, address)
      .then((response) => {
        console.log('Address added AddAddress:', response.data);

      })
      .catch((error) => {
        console.error('Error adding address:', error);
      });
  };

  const validateAddress = (address) =>{
    if(!address.phone || !address.address || !address.pin || !address.country || !address.state){
      alert('Enter the required fields')
    }
    else{
      addAddress(address);
      setAddress(address);
      toast({
        title: 'Address Added Successful',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position:"top"
      })
    }
  }



  return(
  <div className="container mb-5">
    <main>
      <div className="py-5 text-center">
        <h2>Checkout</h2>
      </div>

      <div className="row g-3" style={{alignItems:"center",justifyItems:"center"}}>
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge bg-secondary rounded-pill">{5}</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Total</h6>
                <small className="text-muted">Cart Items</small>
              </div>
              <span className="text-muted">${cart.amount}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <small className="text-muted">Shipping Charges</small>
              </div>
              <span className="text-muted">${12}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <small className="text-muted">Discount</small>
              </div>
              <span className="text-muted">{"20% OFF"}</span>
            </li>

            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>${cart.amount}</strong>
            </li>
          </ul>

          {add?<div className="card">
            <div className="card-body">
              <h5 className="card-title">{user.name} </h5>
              <h6 className="card-subtitle mb-2 text-muted ">
                {user.address}, {user.state}, {user.country},{user.pin}
              </h6>
              <p className="card-text">{user.phone}</p>
            </div>
          </div>:null}
          <div>
           <PaymentForm/>
           <Link className="navbar-brand" to="/OrderSuccessPage">
          <button className="w-50 btn btn-primary btn-lg mt-5" >Place Order</button>
          </Link>
          </div>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Shipping address</h4>
        <div style={{display:"flex",flexDirection:"row"}}>
         {user.address?<div className="card">
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted ">
                {user.address}, {user.state}, {user.country},{user.pin}
              </h6>
              <p className="card-text">{user.phone}</p>
              <input type="radio" name="address" id="" onClick={e=>handleShipAddress()}/> Use this Address
            </div>
          </div>:null}

          {address?<div className="card">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted ">
                {address.address}, {address.state}, {address.country},{address.pin}
              </h6>
              <p className="card-text">{address.phone}</p>
            </div>
          </div>:null}
          </div>

          <hr className="my-4" />
          <div style={{width:"80%"}}>
          <h5>OR</h5>
          <h4 className="mb-3">Add New Address</h4>
          <form
            className="needs-validation"
            novalidate=""
            onSubmit={(e)=>{e.preventDefault();validateAddress(address)}}
          >
            <div className="row g-3" >
              <div className="col-12">
                <label for="phone" className="form-label">
                  Phone <span className="text-muted"></span>
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="+91-1111111111"
                  value={address.phone}
                  onChange={e=>setAddress({...address, phone:e.target.value})}
                />
                <div className="invalid-feedback">
                  Please enter a valid phone for shipping updates.
                </div>
              </div>

              <div className="col-12">
                <label for="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  value={address.address}
                  onChange={e=>setAddress({...address, address:e.target.value})}
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
              <div className="col-md-5">
                <label for="country" className="form-label">
                  Country
                </label>
                <select className="form-select" id="country" value={address.country}
                  onChange={e=>setAddress({...address, country:e.target.value})}>
                  <option value="">Choose...</option>
                  <option>India</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div className="col-md-4">
                <label for="state" className="form-label">
                  State
                </label>
                <select className="form-select" id="state" value={address.state}
                  onChange={e=>setAddress({...address, state:e.target.value})}>
                  {/* <option value="">Choose...</option> */}
                  <option>West Bengal</option>
                  <option>Uttar Pradesh</option>
                  <option>Maharastra</option>
                  <option>Delhi</option>
                  <option>Bihar</option>
                  <option>Hariyana</option>
                  <option>Karnataka</option>
                  <option>Tamilnaru</option>
                  <option>kerala</option>
                  <option>Orisha</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>




              <div className="col-md-3">
                <label for="zip" className="form-label">
                  Pin_Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder=""
                  value={address.pin}
                  onChange={e=>setAddress({...address, pin:e.target.value})}
                />
                <div className="invalid-feedback">Zip code required.</div>
              </div>
            </div>
            <hr className="my-4" />
            
            <button className="w-50 btn btn-success btn-lg" type="submit" >
              Add Address
            </button>
          </form>
          
          </div>
        </div>
      </div>
    </main>
  </div>
)};
export default CheckOut;