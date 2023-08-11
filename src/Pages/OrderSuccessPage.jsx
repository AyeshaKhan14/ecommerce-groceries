import { useParams } from "react-router-dom";

const OrderSuccessPage = () => {
  const params = useParams();
  return (
    <>
      <div  style={{paddingTop:"20px",justifyItems:"center",alignItems:"center",marginBottom:"20%"}}>
        <div>
          <h1 class="text-center">{"Hello User "}</h1>
        </div>
        <div class="d-flex justify-content-center" style={{ marginTop:"20px",maxWidth:"50%",margin:"auto",justifyContent:"center",alignContent:"center"}}>
          <div class="login-box m-auto mt-5 col-4 text-center">
            <h3 class="text-center" style={{fontSize:"20px"}}>Your Order #{params.orderid} Successful</h3>
            <i class="bi bi-check-circle-fill text-success success-icon"></i>
            <h6>We will deliver your order within 7 days</h6>
            <a href="/">Go Back To Home</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSuccessPage;