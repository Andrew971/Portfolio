import styled from "styled-components";
import profile from '../Assets/img/profile.jpg'

export default styled.div`
width:25rem;
height:25rem;
border-radius:50%;
border: ${props=>(props.theme.label==='Main'?'0.5em solid #B6D8FF':'0.5em solid #FFD9B6')};
background-image: url(${profile});
background-position: center;
background-size: cover;

    @media (max-width: 670px) {
      width:15rem;
      height:15rem;
    }
  `;
