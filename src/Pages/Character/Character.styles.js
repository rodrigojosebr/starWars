import styled from "styled-components/macro";

export const CharacterList = styled.div`
  display: grid;
  max-width: 1024px;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  padding: 5px;

  @media (min-width: 768px) {
   grid-template-columns: 1fr 1fr; 
  }
  
  @media (min-width: 1024px) {
   grid-template-columns: 1fr 1fr 1fr; 
  }
`