import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CheckoutItem from "../components/CheckoutItem";
import { ShopContext } from "../Context";
import {useNavigate} from 'react-router-dom';

const Checkout = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  // const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()

  const fetchStoreData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
  };

  useEffect(() => {
    fetchStoreData();
  }, []);

  return (
    <div>
      <div>Your cart items</div>
      <div>
        {products.map((item) =>
          cartItems[item.id] !== 0 ? (
            <CheckoutItem {...item} key={item.id}/>
          ) : null )}
      </div>
      <div className="checkout--footer">
        {/* <p>Subtotal: ${totalAmount}</p> */}
        <button onClick={() => navigate('/')}>Continue shopping</button>
        <button>PAY</button>
      </div>
    </div>
  );
};

export default Checkout;
