import styled from 'styled-components';

export default styled.section `
padding:${props => (props.src ? '0rem 0rem' : '5rem 5rem')};
align-content: center;
width:100%;
height:auto;
background:${props => (props.primary ? props.theme.background.primary : props.theme.background.secondary)};
background-image: ${props => (props.src ? `url(${props.src})` : "")};
background-position: center center;
background-size: cover;

color:${props => (props.src || props.primary ? props.theme.color.primary : props.theme.color.secondary)};

@media (max-width: 660px) {
  padding:${props => (props.src ? '0rem 0rem' : '2rem 2rem')};

}

`
