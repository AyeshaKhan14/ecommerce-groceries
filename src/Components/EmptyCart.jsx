import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, img } from 'reactstrap';

const EmptyCart = () => {
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  const handleContinueShopping = () => {
    setIsCartEmpty(false);
  };

  return (
    <Card>
      <CardHeader>
        <h5>Cart</h5>
      </CardHeader>
      <CardBody>
        {isCartEmpty && (
          <div className="empty-cart-cls text-center">
            <img src="https://i.imgur.com/dCdflKN.png" width="200" height="130" className="img-fluid mb-4 mr-3" style={{marginLeft:"auto",marginRight:"auto"}} />
            <h3><strong>Your Cart is Empty</strong></h3>
            <h4>Add something to make me happy :)</h4>
            <Button onClick={handleContinueShopping} className="btn btn-primary cart-btn-transform m-3">
              Continue Shopping
            </Button>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default EmptyCart;