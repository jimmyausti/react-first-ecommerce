import { useContext } from "react";
import { ShopContext } from "../Context";

const CheckoutItem = (props) => {
  const { id, title, image, price } = props;
  const { cartItems, addCartItem, removeCartItem, updateCartItemCount } = useContext(ShopContext);

  return (
    <div>
        <img style={{width: 400} }src={image} alt={title} />
        <p><b>{title}</b></p>
        <p>${price}</p>
        <div>
          <button onClick={() => removeCartItem(id)}> - </button>
          <input type="number" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
          <button onClick={() => addCartItem(id)}> + </button>
        </div>
    </div>
  )
}

export default CheckoutItem;