import styled from "styled-components";
import {NavLink} from "react-router-dom";

export default styled(NavLink)`

  font-size: 1rem;
  text-decoration: none;
  margin:0;
  color:white;
  img{
    height:4rem;
    width: 4rem;
  }
  &:hover{
    color:white;
    text-decoration: none;
  }

a:hover {
  text-decoration: none;

@media (max-width: 740px) {
color:white;
align-content: center;
img{
    height:1rem;
    width: 1rem;
  }
}

  `;
