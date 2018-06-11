import styled from "styled-components";

export default styled.div`
width:2rem;
height:2rem;
border-radius:50%;
border: ${props=>`.08em solid ${props.theme.primary}`};
background-image: ${props=>(props.src?`url(${props.src})`:'')};
background-position: center;
background-size: cover;

    @media (max-width: 670px) {

    }
  `;
