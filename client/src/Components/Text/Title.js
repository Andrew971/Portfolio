import styled from 'styled-components';


export default styled.h1`
  display:flex;
  flex-wrap:nowrap;
  align-content:center;
  justify-content:space-around;
  font-size: 3.5em;
  font-family:  Optima, sans-serif	;;
  text-align: center;
  font-weight:1.04px;
  color: ${props => (props.primary ?props.theme.primary:props.theme.color.primary)};
  margin-bottom: 5rem;

`;
