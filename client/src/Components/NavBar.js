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
  flex: wrap;

    @media (max-width: 670px) {
      padding: 0;
      color:white;
}
  `;
