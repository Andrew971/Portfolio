import styled,{keyframes} from "styled-components";

const Spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`
export default styled.div`
display:flex;
flex-flow:column nowrap;
align-self: center;
width:70%;
margin: 2rem;
border-radius:50%;
transform:translateX(90vh);
border: ${props=>(`1px solid ${props.theme.primary}`)};
background-image: ${props=>props.src&&`url(${props.src})`};
background-position: center;
background-size: cover;
transition:border-radius 550ms;
box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
::after{
  content:'';
  display: block;
  padding-bottom:100%;

}

&.animation{
transform:translateX(0);
transition:transform 500ms;
}

  `;
