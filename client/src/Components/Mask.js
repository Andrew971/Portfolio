import styled from 'styled-components';

export default styled.div `
background:${props => (props.noneed ? '' : 'rgba(6,6,6,.38)')};
height:100%;
width:100%;
padding:${props => (props.primary ? '5rem 5rem' : '10vh 0rem')};


@media (max-width: 670px) {
  padding:${props => (props.primary ? '2rem 2rem' : '0vh 0rem')};

}



`
