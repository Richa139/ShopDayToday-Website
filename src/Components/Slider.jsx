import React , {useState} from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import styled from 'styled-components';
import { sliderItems } from "../data";

const Container=styled.div`
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #343A40;
  border:20px solid teal;
  
`;
const Arrow=styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  ${'' /* opacity: 0.5; */}
  ${'' /* z-index: 2; */}
`;
const Wrapper=styled.div`
height: 100%;
display:flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide=styled.div`
width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer=styled.div`
 height: 100%;
  flex: 1;
`;
const Img=styled.img`
height: 80%;
`;

const ImgInfo=styled.div`
padding:50px;
`;
const Title=styled.h1`
font-size:70px;
`;
const Desc=styled.p`
font-size:25px;
margin:40px 0px;
`;
const Button=styled.button`
padding:10px;
font-size:20px;
border-radius:40px;
background-color:transparent;
cursor:pointer;
`;
const Slider = () => {
  const [slideindex,setslideindex]=useState(0);
  const handleClick = (direction) => {
    if(direction === "left"){
     setslideindex(slideindex>0 ? slideindex-1 : 2 );
    }
    else {
     setslideindex(slideindex<2 ? slideindex+1 : 0);
    }
  };

  // user panel , registeration page ,admin, distributor , dealer , customer  ,  mobile no 
  return (

    <Container>
    <Wrapper slideIndex={slideindex}>
        {sliderItems.map((i)=>(
          <Slide bg={i.bg} key={i.id}>
            <ImgContainer>
                <Img src={i.img} />
            </ImgContainer>
                <ImgInfo>
                    <Title>{i.title}</Title>
                    <Desc>{i.desc}</Desc>
                    <Button>Show More</Button>
                </ImgInfo>
          </Slide>
        ))}
    </Wrapper>
    <Arrow direction="left" onClick={()=>handleClick("left")}>
    <ArrowForwardIosIcon/>
    </Arrow>
    <Arrow direction="right" onClick={()=>handleClick("right")}>

    <ArrowBackIosIcon/>
    </Arrow>
    </Container>
  )
};

export default Slider;