import styled from "styled-components";

export default styled.div`
width: 100%;
height: 10vh;
background-color: ${props => props.theme.secondary};
position: fixed;
top: 0;
z-index: 1;

a {
  color: white;
  text-decoration: none;
}
padding: 0 2rem;

ul {
  list-style-type: none;
  margin: auto;
  padding: 0;
  width: 100%;
  height: 100%;
}

li {
  display: inline-block;

  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }
}
}

  `;
