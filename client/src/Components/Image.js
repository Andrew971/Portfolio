import styled from "styled-components";

const Image = styled.img`
    background-position: center;
    background-size: cover;
    background-image: ${props =>(props.src ?`url(${props.src})`:'grey')};
    background-size:cover;
    width:100%;
    max-width: ${props =>(props.size ?`${props.size}rem`:'5rem')};
    margin:auto;
    ::after{
  content:'';
  display: block;
  padding-bottom:100%;
}
    @media (max-width: 670px) {

    }
  `;

export const ImgageDiv = Image.withComponent('img')

export default Image