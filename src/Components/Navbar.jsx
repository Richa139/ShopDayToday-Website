import React from 'react';
import styled from 'styled-components'
import PersonIcon from '@material-ui/icons/Person';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
const Container=styled.div`
 height:80px;
 background-color: #343A40;
 color:white;
`;
const Wrapper=styled.div`
 display:flex;
 align-items:center;
 justify-content:space-between;
 padding:25px 70px;
`;
const Left=styled.div`
font-size:20px;
`;
const Title=styled.div`
cursor:pointer;
`;
const SearchContainer=styled.div`
 border: 0.5px solid lightgray;
  display: flex;
  padding-left:150px;
  background-color:white;
  margin-right:14px;
  border-radius:3px;
`;
const Right=styled.div`
display:flex;
cursor:pointer;
`;
const Input=styled.div`
background-color:white;
color:black;
border:none;
${'' /* border:0.5 solid grey; */}
${'' /* padding:0px 10px 0px; */}
${'' /* display:flex; */}
margin:10px;
`;
const MenuItem=styled.div`
 display:flex;
 padding:7px;
`;
const Sign=styled.div`
  padding-left:7px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Title>ShopDayToday</Title>
            
        </Left>
        <Right>
        <MenuItem>
                <SearchContainer>
                <Input placeholder="Search"/>
                <SearchOutlinedIcon style={{ color: "gray", fontSize: 26 }}/>
                </SearchContainer>
        </MenuItem>
            <MenuItem>
             <ShoppingCartOutlinedIcon/>
             <Sign>CART</Sign>
            </MenuItem>
            <MenuItem>
               <PersonIcon/>  
               <Sign>SIGN-IN</Sign>
            </MenuItem>
            
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;