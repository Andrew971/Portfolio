import styled from "styled-components";

export default styled.div`

  width: 100%;
  height: 10vh;
  background:rgba(0,0,0,.63);
  z-index: 1;
  position: fixed;
  top: 0;
  padding: 0 5rem;
  font-size:1.2em;
  align-content: center;
  align-items: center;
  display: inline-flex;
  flex-flow: row nowrap;



    @media (max-width: 840px) {
      padding: 0 1rem;
      height:auto;
      color:white;
}

  `;
