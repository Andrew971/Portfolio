import styled from "styled-components";
import background6 from '../Assets/img/background6.jpg'
import background2 from '../Assets/img/background2.jpg'

export default styled.header`
width: 100%;
height: 90vh;
background-image: ${props =>(props.location ==='/'?`url(${background6})`:`url(${background2})`)};
background-attachment: fixed;
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
h1{
  color:white;
  font-family: Andale Mono;
  text-align: center;
  font-size: 3em;
  margin:auto;
}

    @media (max-width: 670px) {
      padding: 3rem 0 0 0;
    }

    @media (max-width: @iphone-screen) {
      background-attachment: scroll;
    }
  `;
