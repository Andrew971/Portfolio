import styled from "styled-components";
import {slideIn,slideOut} from './Animation'


export default styled.div `
align-self: center;
position:absolute;
width:70%;
margin: 2rem;
border: ${props => (`1px solid ${props.theme.primary}`)};
background-image: ${props => props.src && `url(${props.src})`};
background-position: center;
background-size: cover;
box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
border-radius:50%;
opacity:0;
&.animation{
  ${slideIn('left')}
}

&.out{
  ${slideOut('right')}
}

::after{
  content:'';
  display: block;
  padding-bottom:100%;
}



  `;
