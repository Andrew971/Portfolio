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
  li:hover .dropdown-content {
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

     .dropdown-content span:hover {
       background-color: #ddd
     }


    @media (max-width: 660px) {
      height: auto;
      flex-direction: column;
      padding: 0;
    }
  }
`;
