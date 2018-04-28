import styled from "styled-components";

export default styled.div`
  width: 100%;
  color: black;
  font-size: 1.2em;

  ul {
    float: right;
    margin: auto;
  }

  li {
    display: inline-block;
  }

  a {
    color: white;
    padding: 14px 16px;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;

    @media (max-width: 660px) {
      height: auto;
      flex-direction: column;
      padding: 0;
    }
  }
`;
