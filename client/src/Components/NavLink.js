import styled from "styled-components";

export default styled.div`
  width: 100%;
  color: white;
  font-size: 1.2em;

  ul {
    float: right;
    margin: auto;
  }

  li {
    display: inline-block;
    padding: 4rem 2rem;
  }
  li .dropdown-content {
      display: block;
  }
  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }
    .dropdown-content {
         display: none;
         position: absolute;
         background-color: #f1f1f1;
         top:7rem;
         right:-2rem;
         min-width: 160px;
         box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
         // border-radius: 25%;
         z-index: 1;
     }

     .dropdown-content span {
         color: black;
         padding: 12px 16px;
         text-decoration: none;
         display: block;
         cursor:pointer;
     }

     .dropdown-content span:hover {
       background-color: #ddd
     }


    @media (max-width: 740px) {
      height: auto;
      flex-direction: column;
    }
  }
  @media (max-width: 840px) {

li{
  padding:0 2rem;
}
.dropdown-content {

     top:3.3rem;

 }
}
`;
