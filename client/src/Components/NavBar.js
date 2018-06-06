import styled from "styled-components";

export default styled.div`
  width: 100%;
  height: 7vh;
  margin-left: ${props=>(props.open?'-80vw':0)}
  background:${props=>(props.theme.label==="Main"?'rgba(64,134,187,1)':'rgba(245,166,35,1)')};
  transition: margin-left 500ms;
  z-index: 1;
  position: fixed;
  top: 0;
  padding: 0 5rem;
  font-size:1.2em;
  align-content: center;
  align-items: center;
  flex-flow: row nowrap;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  display: flex;
  flex: 1 0 auto;


    @media (max-width: 840px) {
      padding: 0 1rem;
      height:auto;
      color:white;
}

  `;
