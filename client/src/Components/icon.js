import styled from "styled-components";
import lang from '../Assets/img/lang.png'

export default styled.div`
width:2rem;
height:2rem;
border-radius:50%;
border: ${props=>(props.theme.label==='Main'?'0.1em solid #B6D8FF':'0.1em solid #FFD9B6')};
background-image: url(${lang});
background-position: center;
background-size: cover;

    @media (max-width: 670px) {

    }
  `;
