import React, { useContext } from "react";
import { ShopContext } from "../Context";
import './components.css';

const ShopItem = (props) => {
  const { id, title, image, price } = props;
  const {addCartItem, cartItems} = useContext(ShopContext)
  const cartItemAmount = cartItems[id]
  return (
    <div key={id} >
      <img style={{width: 400} }src={image} alt={title} />
      <p>{title}</p>
      <p>${price}</p>
      <button onClick={() => addCartItem(id)}>Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </div>
  );
};

export default ShopItem;
