import React from 'react'
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { popularProducts } from '../data';
const Heading=styled.h1`
 padding:30px;
 text-align:center;
`;
const Container=styled.div`
  display:flex;
  flex-wrap:wrap;
  margin:40px;
`;

const Product = () => {
  return (
    <>
    <Heading>Our Featured Products</Heading>
    <Container>
     {popularProducts.map((item)=>(
       <ProductItem 
        item={item}
        key={item.id}
       />
     ))}
    </Container>
    
    </>
  )
}

export default Product;