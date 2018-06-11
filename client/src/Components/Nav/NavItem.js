import styled from "styled-components";

export default styled.span `
display: inline-flex;
width: 100%;
min-height:5vh;
background-color: transparent;
color: rgb(52,52,52);
padding: 12px 24px;
margin: 0;
border: 0;
position: relative;
box-sizing: border-box;
text-align: left;
align-items: center;
justify-content: flex-start;
vertical-align: middle;
text-decoration: none;
cursor: pointer;
outline: none;
user-select: none;
-moz-appearance: none;
-webkit-appearance: none;
-webkit-tap-highlight-color: transparent;

&[id="icon"]:hover .dropdown, &[id="icon"]:focus .dropdown{
       display:block;
     }


  a {
    display:block;
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }
    .dropdown {
        display:none;
         position: absolute;
         background-color: ${props => (props.theme.secondary)};
         top:100%;
         left:-50%;
         right:-50%;
         min-width: 160px;
         box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
         z-index: 1;
        color:white;
    span {
         padding: 12px 16px;
         text-decoration: none;
         display: block;
         cursor:pointer;

    &:hover {
       background-color: ${props => (props.theme.primary)};
     }
}
    }
    @media (max-width: 740px) {
      height: auto;
      flex-direction: column;
     .dropdown {
       position:absolute;
        left:0;
        right:0;
        background-color: transparent;
         span {
         color: white;
         text-align: center;

     }
     span:hover {
       background-color: rgba(50,50,50,0.5);
     }
     }
    }
  
  @media (max-width: 840px) {

span{
  padding:0 2rem;
}

.dropdown-content {

     top:100%;

 }
}
`;
