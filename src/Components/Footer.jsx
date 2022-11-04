import React from 'react'
import styled from 'styled-components';
import MailIcon from '@material-ui/icons/Mail';
import CopyrightIcon from '@material-ui/icons/Copyright';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Facebook, Twitter } from '@material-ui/icons';
const Container=styled.div`
display:flex;
padding:70px;
background-color:#343A40;
color:white;
`;
const Logo=styled.h2`
 font-size:30px;
 color:teal;
`;
const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
margin-left:50px;
`;
const Desc=styled.p`
margin:20px 0px;
display:flex;
`;
const Center=styled.div`
flex:1;
padding-left:90px;
`;
const Link=styled.div`
margin:5px;
display:flex;
`;
const List=styled.div`
margin:10px;
`;
const Heading=styled.h2`
margin-bottom:10px;
`;
const CenterS=styled.div`
flex:1
`;
const Right=styled.div`
flex:1;
`;
const Last=styled.p`
background-color:#343A40;
color:white;
text-align:center;
padding-bottom:60px;
display:flex;
justify-content:center;
font-size:20px;
`;
const Footer = () => {
  return (
    <>
    <Container>
    <Left>
     <Logo>ShopDayToday</Logo>
     <Desc> There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.</Desc>
    </Left>
    <Center>
        <Heading>USEFUL LINKS</Heading>
        <List>
            <Link>Home</Link>
            <Link>Order Tracking</Link>
            <Link>WishList</Link>
            <Link>Account</Link>
            <Link>Cart</Link>
        </List>
    </Center>
    <CenterS>
    <Heading>GET IN TOUCH</Heading>
    <Desc><MailIcon style={{ color: "teal", marginRight:"10px" }}/>  hello@shopdaytoday.in</Desc>
    </CenterS>
    <Right>
    <Heading>CONNECT WITH US</Heading>
        <List>
            <Link><LinkedInIcon style={{ color: "lightblue", marginRight:"10px" }}/>Linkedin</Link>
            <Link><InstagramIcon style={{ color: "darkpink", marginRight:"10px" }}/>Instagram</Link>
            <Link><Facebook style={{ color: "green", marginRight:"10px" }}/> Facebook</Link>
            <Link><Twitter style={{ color: "yellow", marginRight:"10px" }}/> Twitter</Link>
        </List>
    </Right>
    </Container>
    <Last>Copyright<CopyrightIcon/> 2022</Last>
    </>
  )
}

export default Footer