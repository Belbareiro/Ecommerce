import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('mongodb://localhost:27017/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);






    return (
        <div>
            <h2>Products</h2>
            <ProductList products={products} />
        </div>
    );
};

export default Products;
