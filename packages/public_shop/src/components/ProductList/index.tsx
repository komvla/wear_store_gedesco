import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../../api';
import { ProductInfo } from '../../models/product.models';
import {Container, Row} from 'reactstrap'
import Card from './ProductCard/ProductCard'

const ProductList = () => {
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');


  useEffect(() => {
      fetchProducts();
    }, []);
    
    const fetchProducts = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(getAllProducts());
        const data = await response.json();
        setProducts(data);
        
      } catch (error) {
        setError('Error fetching products');
      } finally {
        setIsLoading(false)
      }

    };



  return (
    <Container>
      {isLoading ? <LoaderBox /> : error ? (
        <div>{error}</div>
      ) : (
        <Row>
          {products.map((product) => (
            <Card product={product} />
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductList;