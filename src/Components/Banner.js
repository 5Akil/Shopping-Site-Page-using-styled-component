import React from "react";
import {
    Button,
  Container,
  FlexContainer,
  PaddingContainer,
  ParaText,
} from "./Styled-Components/Globel.styled";
import bannerImg from "./../assets/img.png";
import { ImgContainer } from "./Styled-Components/Banner.styled";

function Banner() {
  return (
    <Container>
      <PaddingContainer top="6%" left='10%' >
        <FlexContainer >
          <ImgContainer>
            <img src={bannerImg} />
          </ImgContainer>
          <div>
            <ParaText as="p" size='4rem'  color= '#dce7c3' weight=' 700' left='6rem'>
                SUPER SALE
            </ParaText>
            <ParaText as="p" size='4rem'  color= '#171717' weight=' 700' left='6rem'>
                BLACK DEAL
            </ParaText>
            <ParaText as='p' size='3.5rem' color='#dce7c3' weight='700' left='6rem'>
            DISC UP TO 70%*
            </ParaText>
            <ParaText as='p' size='1.5rem ' color= '#dce7c3' weight= '400' left='6rem'>Lorem ipsum dolor sit amet consectetur adip elit vestibuet lorem odio luctus egestas idsit amet eu libero fusce aliquet viverratesque  </ParaText>
          <Button>Order Now</Button>
          </div>
        </FlexContainer>
      </PaddingContainer>
    </Container>
  );
}

export default Banner;
