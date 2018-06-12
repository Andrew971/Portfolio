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
transition : background-color 300ms ease-in-out


${media.phone`
padding: 2rem 2rem;
`}

${media.tablet`
padding: 2rem 2rem;
`}
${media.laptop`
background-attachment: fixed;
padding: 5rem 5rem;
`}
${media.desktop`
padding: 5rem 5rem;
background-attachment: fixed;
`}
`;
