import styled from "styled-components";
import profile from '../Assets/img/profile.jpg'
export default styled.div`
width:15rem;
height:15rem;
border-radius:50%;
border: 0.5em solid #B6D8FF;
background-image: url(${profile});
background-position: center;
background-size: cover;

    @media (max-width: 670px) {

    }
  `;
