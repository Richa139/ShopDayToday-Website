// import React from 'react'
import styled from "styled-components";
import ClearIcon from '@material-ui/icons/Clear';
const Container=styled.div`
 height:20px;
 display:flex;
 flex:4;
 justify-content:center;
`;
const Info=styled.div`
 display:flex;
 justify-content:center;
 text-align:center;
 background-color:teal;
 color:white;
 padding:3px;
 font-size:15px;
 cursor:pointer;
`;
const Announcements = () => {
  return (
    <Info>
    <Container>Super Deal! Free Shipping on Orders Over $100</Container>
    <ClearIcon/>
    </Info>
  )
}

export default Announcements;