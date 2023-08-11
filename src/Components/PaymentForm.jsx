import React, { useState } from "react";
import "../Style/PaymentForm.css";

const initialData = {
  cardNumber: "",
  address: "",
  unit: "",
  country: "",
  city: "",
  state: "",
  zipcode: "",
};

function PaymentForm() {
  const [data, setData] = useState(initialData);


  const countries = ["USA", "India", "UK", "Spain", "Malaysia"];

  const handleOnchange =(e)=>{
    const { name, value } = e.target;
    setData({...data,[name]:value})
    console.log(data)
  }

//   const handleSubmit =()=>{

//   }

  return (
    <div className="payment-container">
      <h1>Enter your payment details</h1>
      <form action="" >
        <div className="form-group">
          <input type="text" name="cardNumber" placeholder="Card number" defaultValue={""} onChange={handleOnchange}/>
          <input type="text" name="address" placeholder="Street address"  defaultValue={""} onChange={handleOnchange}/>
          <input
            type="text"
            name="unit"
            placeholder="Apt, unit, suite, etc. (Optional)"
            defaultValue={""} onChange={handleOnchange}
          />
          <select name="country" placeholder="Enter the country"  value={data.country} onChange={handleOnchange}>
            {countries.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className="city-state-zipcode">
            <input type="text" name="city" placeholder="City"   defaultValue={""} onChange={handleOnchange}/>
            <input type="text" name="state" placeholder="State"  defaultValue={""} onChange={handleOnchange} />
            <input type="text" name="zipcode" placeholder="Zipcode"  defaultValue={""} onChange={handleOnchange} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default PaymentForm;