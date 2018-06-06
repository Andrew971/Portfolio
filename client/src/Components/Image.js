import styled from "styled-components";

export default styled.img`
    background-position: center;
    background-size: cover;
    background-image: ${props =>(props.src ?`url(${props.src})`:'grey')};
    width:100%;
    height:${props =>(props.height ?`${props.height}rem`:'auto')};
    max-width: ${props =>(props.size ?`${props.size}rem`:'5rem')};
    margin:auto;
    @media (max-width: 670px) {

    }
  `;
