import styled from "styled-components";

export default styled.header`
width: 100%;
height: 100vh;
background: ${props =>(props.src ?`url(${props.src}),url(${props.src})`:'grey')};
background-blend-mode: overlay;
background-repeat: no-repeat;
background-position: 47%;
background-size: cover;
h1{
  color:white;
  text-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);

  font-family: Andale Mono;
  text-align: center;
  margin:auto;
}

    @media (max-width: 740px) {
      padding: 3rem 0 0 0;
      h1{
        font-size: 2em;
      }
    }
    @media (max-width: 840px) {
      padding: 4rem 0 0 0;
    }
    @media (min-width: 1280px) {
      background-attachment: fixed;
    }

  `;
