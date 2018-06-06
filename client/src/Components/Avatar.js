import styled from "styled-components";

export default styled.div`
display:flex;
flex-flow:column nowrap;
align-self: center;
max-width:20rem;
width:100%;
height:20rem;
margin: 2rem;
border-radius:50%;
border: ${props=>(props.theme.label==='Main'?'0.5em solid #B6D8FF':'0.5em solid #FFD9B6')};
background-image: ${props=>props.src&&`url(${props.src})`};
background-position: center;
background-size: cover;

  `;
