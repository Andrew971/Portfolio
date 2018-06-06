import styled from "styled-components";

export default styled.footer`
height: auto;
width: 100%;
background-color: ${props => props.theme.secondary};
padding: 1rem 2rem;

h6{
  margin:auto;
  color:white;
}

    @media (max-width: 740px) {
      height: auto;
      text-align:center;
      h6{
        margin:0.2rem 0;
        text-align:center;

      }
    }
    @media (max-width: 840px) {
      height: auto;
      text-align:center;
      h6{
        margin:0.2rem 0;
        text-align:center;
      }
    }
  `;
