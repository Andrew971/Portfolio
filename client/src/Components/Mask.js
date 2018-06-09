import styled from 'styled-components';

export default styled.div `
background:${props => (props.noneed ? '' : 'rgba(6,6,6,.38)')};
height:100%;
width:100%;
padding:${props => (props.primary ? '5rem 5rem' : '20vh 2yarn0vh')};
display:flex;
align-content:center;
flex-flow:column;
align-items:center;
justify-content: space-around;

@media (max-width: 770px) {
  padding:${props => (props.primary ? '2rem 2rem' : '20vh 5vh')};

}

@media (max-width: 1024px) {
  padding:${props => (props.primary ? '2rem 2rem' : '20vh 5vh')};

}


}



`
