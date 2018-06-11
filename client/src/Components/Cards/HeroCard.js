import styled from "styled-components";
import {media} from './breakpoint'

export default styled.header `
display:flex;
align-content:center;
flex-wrap:nowrap;
flex-flow:column;
align-items:center;
justify-content: space-around;
width: 100%;
height: 100vh;
background-blend-mode: multiply;
flex:1 1 auto;
vertical-align:center;

h1{
  color:white;
  text-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  font-family: Andale Mono;
  text-align: center;
  margin:auto;
}

${media.phone `
background: ${props => (`url(${props.x2src}) rgba(6,6,6,.38)`)};
background-size: cover;
background-repeat: no-repeat;
background-position: 47%;
padding: 1rem;
`}

${media.tablet `
background: ${props => (`url(${props.x2src}) rgba(6,6,6,.38)`)};
background-size: cover;
background-repeat: no-repeat;
background-position: 47%;
padding: 2rem;
`}

${media.laptop `
background: ${props => (`url(${props.src}) rgba(6,6,6,.38)`)};
background-size: cover;
background-repeat: no-repeat;
background-position: center;
background-attachment: fixed;
`}
${media.desktop `
background: ${props => (`url(${props.src}) rgba(6,6,6,.38)`)};
background-size: cover;
background-repeat: no-repeat;
background-position: center;
background-attachment: fixed;
`}

  `;
