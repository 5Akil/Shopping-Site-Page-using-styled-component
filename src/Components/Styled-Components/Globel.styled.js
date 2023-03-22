import styled from "styled-components";

export const Mainbody = styled.div`
   background-color: #e9a000;
   position: relative;
   width: 100%;
   height: 100vh;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: auto;
`;
export const PaddingContainer = styled.div`
    padding-top: ${({top}) => top};
    padding-bottom: ${({bottom}) => bottom};
    padding-left: ${({left}) => left};
    padding-right: ${({right}) => right};
`

export const FlexContainer=styled.div`
    display: flex;
    flex-direction: ${({direction})=>direction};
    justify-content: ${({justify})=>justify};
    align-items: ${({align})=>align};
`

export const IconContainer = styled.div`
    font-size: ${({size}) => size};

    cursor: ${({cursor}) => cursor };

`

export const ParaText = styled(PaddingContainer)`
    color: ${({ color }) => color};
    font-size: ${({size})=> size};
    font-weight: ${({weight})=> weight};
`
export const Button = styled(PaddingContainer)`
    display: inline-block;
    width: 80px;
    padding: 0.5rem 1.5rem;
    margin-left: 6rem;
    margin-top: 1.5rem;
    color:#343433;
    background-color: #dce7c3;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease; 

    `
    /* &:hover{
        color: ${({ theme }) => theme.colors.primary_light};
        background-color: ${({  }) => };
    } */