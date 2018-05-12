import styled from "styled-components";

export default styled.footer`
height: 10vh;
width: 100%;
background-color: ${props => props.theme.secondary};
padding: 0 2rem;
h6{
  margin:auto;
}

    @media (max-width: 670px) {
      height: auto;
      text-align:center;
      h6{
        margin:0.2rem 0;
        text-align:center;
      }
    }
  `;
