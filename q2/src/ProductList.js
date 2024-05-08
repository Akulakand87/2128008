import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'http://20.244.56.144/test/companies/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q',
          {
            params: {
              top: 10,
              minPrice: 1,
              maxPrice: 10000,
            },
          }
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {loading? (
        <p>Loading...</p>
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item key={product.productName} xs={12} sm={6} md={4}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default ProductList;