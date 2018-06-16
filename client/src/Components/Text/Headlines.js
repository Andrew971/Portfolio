import styled from "styled-components";

export default styled.div`
font-size:1.3rem;
text-align:justify;
text-justify: distribute;

h1,h2,h3{
  text-align:left;
  margin-bottom:1rem;
}
h3{
  margin-bottom:2rem;

}
    @media (max-width: 740px) {
      text-align:justify;
      h1,h2,h3{
        text-align:center;
        margin-bottom:1rem;
      }
      h3{
        margin-bottom:2rem;

      }
    }
    @media (min-width: 750px) and (max-width: 980px) {
      text-align:justify;
      h1,h2,h3{
        text-align:center;
        margin-bottom:1rem;
      }
      h3{
        margin-bottom:2rem;

      }
    }
  `;
