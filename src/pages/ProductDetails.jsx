import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'; 
import axios from 'axios';

const ProductDetails = () => {
    const { id } = useParams();

    const { data, isLoading } = useQuery(['product', id], () =>
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => res.data)
);


if (isLoading) {
    return <div>Loading...</div>;
}

    return (
        <div>
            <h1>Product Details for Product {id}</h1>
            <p>{data?.price}</p>
            <p>{data?.category}</p>
            <p>{data?.title}</p>
            <p>{data?.description}</p>
            <p>rate: {data?.rating.rate}, count: {data?.rating.count}</p>
            <img src={data?.image} alt={data?.title} />
        </div>
    );
};

export default ProductDetails;