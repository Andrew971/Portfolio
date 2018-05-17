import styled from "styled-components";
import background6 from '../Assets/img/background6.png'
import background2 from '../Assets/img/background2.png'

export default styled.header`
width: 100%;
height: 100vh;
background-image: ${props =>(props.location ==='/'?`url(${background6})`:`url(${background2})`)};
background-position: center center;
background-size: cover;
h1{
  color:white;
  font-family: Andale Mono;
  text-align: center;
  margin:auto;
}

    @media (max-width: 740px) {
      padding: 3rem 0 0 0;
      h1{
        font-size: 3em;
      }
    }
    @media (max-width: 840px) {
      padding: 4rem 0 0 0;
    }
    @media (min-width: 1280px) {
      background-attachment: fixed;
    }

  `;
