import styled from 'styled-components';
import {media} from './breakpoint'

export default styled.section `
display:flex;
flex-wrap: ${props=>props.wrap?props.wrap:'nowrap'};
flex-direction:${props=>props.direction?props.direction:'column'};
justify-content:${props=>props.justify?props.justify:'space-around'};
flex:1 1 auto;
width:100%;
height:auto;
background-color:${props => (props.primary ? props.theme.background.primary : props.theme.background.secondary)};
background: ${props => (props.src && `url(${props.src}) rgba(6,6,6,.38)`)};
background-blend-mode: multiply;
background-position: center center;
background-size: cover;
color:${props => (props.src || props.primary ? props.theme.color.primary : props.theme.color.secondary)};
transition : background-color 300ms ease-in-out;
font-family: lato;
h1,h2,h3,h4,h5{
  text-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: center;
  /* margin:auto; */
  overflow-wrap:break-word;

}
h1{
  font-size:4em;
}

h2{
  font-size:2.5em;
  word-break: normal;
}

h3{
  font-size:1.7em;
}
h4{
  font-size:1.5em;
}

p{
  margin: 1.5rem 0;
}



${media.phone`
padding: 5rem 2rem;
background-attachment: scroll;
`}

${media.tablet`
padding: 2rem 2rem;
background-attachment: scroll;
`}
${media.laptop`
background-attachment: scroll;
padding: 5rem 5rem;
`}
${media.desktop`
padding: 5rem 5rem;
background-attachment: fixed;
`}
`;

