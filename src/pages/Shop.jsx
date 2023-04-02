import axios from "axios";
import React, { useEffect, useState } from "react";
import ShopItem from "../components/ShopItem";
import '../components/components.css';

const Shop = () => {
  const [products, setProducts] = useState([]);

  const fetchStoreData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
  };

  useEffect(() => {
    fetchStoreData();
  }, []);

  return (
    <div className='shopItemStyling'>
      {products.map((item) => {
        return (
            <ShopItem {...item} key={item.id}/>
        );
      })}
    </div>
  );
};

export default Shop;
