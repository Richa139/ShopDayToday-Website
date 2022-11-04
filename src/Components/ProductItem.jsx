import React from 'react'
import styled from 'styled-components';
const Wrapper=styled.div`
padding:10px;
border:1.5px solid grey;
margin:20px;
align-items:center;
flex:1;
border-radius:6px;
`;
const Container=styled.div`
  margin: 5px;
  min-width: 280px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
`;
const Image=styled.img`
 height:75%;
`;
const Info=styled.p`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
`;
const Heading=styled.h2`
text-align:center;
padding:10px;
`;
const Button=styled.button`
text-align:center;
margin:1px;
padding:10px;
border:none;
font-size:19px;
background-color:teal;
width:40%;
border-radius:5px;
color:white;
margin-bottom:10px;
`;
const ProductItem = ({item}) => {
  return (
    <>
    <Wrapper>
    <Container>
    <Image src={item.img}/>
    </Container>
    <Info>
    <Heading>{item.title}</Heading>
    <Button>SHOP NOW</Button>
    </Info>
    </Wrapper>
    </>
  )
}

export default ProductItem