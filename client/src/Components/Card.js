import styled from 'styled-components';

export default styled.section `
padding:5rem 5rem;
align-content: center;
width:100%;
height:auto;
background:${props => (props.primary ? props.theme.background_primary : props.theme.background_secondary)};

@media (max-width: 660px) {
padding:2rem 2rem;

}
`
