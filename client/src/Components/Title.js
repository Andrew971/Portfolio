import styled from 'styled-components';


export default styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: ${props => (props.primary ?props.theme.color.primary:props.theme.primary)};
  margin-bottom: 5rem;
`;
