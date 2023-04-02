import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setCartItems(getDefaultCart(res.data));
      })
      .catch((error) => console.error(error));
  }, []);

  const getDefaultCart = (products) => {
    let cart = {};
    for (let i = 1; i < products.length + 1; ++i) {
        cart[i] = 0
    }
    return cart;
  };

  const addCartItem = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeCartItem = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newAmount}))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = cartItems.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount;
  }

  const contextValue = { cartItems, addCartItem, removeCartItem, updateCartItemCount, getTotalCartAmount };

  

  console.log(cartItems)

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;


