import styled from "styled-components";

export default styled.div`
height: 100vh; /* 100% Full-height */
width: ${props => `${props.width}vw`}; /* 0 width - change this with JavaScript */
position: fixed; /* Stay in place */
z-index: 1; /* Stay on top */
top: 0;
right: 0;
background-color: #111; /* Black*/
overflow-x: hidden; /* Disable horizontal scroll */
padding-top: 60px; /* Place content 60px from the top */
transition: 500ms; /* 0.5 second transition effect to slide in the sidenav */
box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
a {
    padding: 1rem 2rem;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    /* transition: 0.3s; */
}
a:hover{
    color: #f1f1f1;
}

a:hover {
  text-decoration: none;
}

@media (max-width: 660px) {
  padding-top: 15px;
   a {font-size: 18px;}
  `;
