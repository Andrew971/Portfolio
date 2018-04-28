import styled from "styled-components";
import {NavLink} from "react-router-dom";

export default styled(NavLink)`

  font-size: 3rem;
  text-decoration: none;
  margin:0;
  color:white;
  &:hover{
    color:white;
    text-decoration: none;
  }

a:hover {
  text-decoration: none;
@media (max-width: 660px) {
color:white;
align-content: center;

}
  `;
