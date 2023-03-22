import styled from "styled-components";


export const Particle = styled.img`
    position: absolute;
    width: ${(width)=> width};
    height: ${(height)=> height};
    top: ${({ initialTop }) => initialTop};
    left: ${({ initialLeft }) => initialLeft};
    right: ${({ initialRight }) => initialRight};
    bottom: ${({ initialBottom }) => initialBottom};
    transform: rotate(${({ rotate }) => rotate})
`