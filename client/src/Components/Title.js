import styled from 'styled-components';


export default styled.h1`
  display:flex;
  flex-wrap:nowrap;
  align-content:center;
  justify-content:space-around;
  font-size: 3.5em;
  text-align: center;
  color: ${props => (props.primary ?props.theme.color.primary:props.theme.primary)};
  margin-bottom: 5rem;
`;
