import styled from 'styled-components';
import {media} from './Grid/breakpoint'

export default styled.section `
padding:${props => (props.src ? '0rem 0rem' : '5rem 5rem')};
align-content: center;
width:100%;
height:auto;
background:${props => (props.primary ? props.theme.background.primary : props.theme.background.secondary)};
background-image: ${props => (props.src ? `url(${props.src}),url(${props.src})` : "")};
background-blend-mode: multiply;
background-position: center center;
background-size: cover;

color:${props => (props.src || props.primary ? props.theme.color.primary : props.theme.color.secondary)};

@media (max-width: 660px) {
  padding:${props => (props.src ? '0rem 0rem' : '2em 2em')};

}
${media.tablet`
padding:${props => (props.src ? '0rem 0rem' : '2rem 2rem')};
`}

${media.desktop`
background-attachment: fixed;
`}
`;
