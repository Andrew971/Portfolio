import styled from "styled-components";

export default styled.div`
height: auto; /* 100% Full-height */
width: ${props => `${props.width}px`}; /* 0 width - change this with JavaScript */
position: fixed; /* Stay in place */
z-index: 1; /* Stay on top */
top: 0;
right: 0;
background-color: #111; /* Black*/
overflow-x: hidden; /* Disable horizontal scroll */
padding-top: 60px; /* Place content 60px from the top */
transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
border-radius: 0 0rem 0rem 5rem;
a {
    padding: 1rem 2rem;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}
a:hover{
    color: #f1f1f1;
}
ul {
  float: right;
  margin: auto;
}

li {
  display: inline-block;
  padding: 2rem 2rem;
}
li:hover .dropdown-content {
    display: block;
}


a:hover {
  text-decoration: none;
}
  .dropdown-content {
       display: none;
       position: relative;
       background-color: #f1f1f1;
       min-width: 160px;
       box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
       z-index: 1;
   }

   .dropdown-content span {
       color: black;
       padding: 12px 16px;
       text-decoration: none;
       display: block;
       cursor:pointer;
   }

   .dropdown-content span:hover {background-color: #ddd}
@media (max-width: 660px) {
  padding-top: 15px;
   a {font-size: 18px;}
  `;
