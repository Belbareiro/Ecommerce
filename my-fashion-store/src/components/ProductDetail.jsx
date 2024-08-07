import React from 'react';

const ProductDetail = ({ product }) => {
    if (!product) {
        return <p>No product selected</p>;
    }

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
        </div>
    );
};

export default ProductDetail;
