import styled from "styled-components/macro";
import starLightVelBackground from '../../Images/starLightVelBackground.png';

export const TitleBar = styled.div`
  display: flex;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
  width: 50%;
  justify-content: space-between;
  border: solid 2px yellow;
  max-width: 1024px;
  text-align: center;
  border-radius: 30px;
  margin: 15px auto 10px;
  padding: 5px;
  width: 80%;
  color: white;
  background-image: url(${starLightVelBackground});
  background-size: 100%;
  &:hover{
    border: solid 2px red;
    box-shadow: 6px 6px 10px red;
    transition: all 4s;
  }
  >img{
    width:80%;
    height:80%;
    margin:auto;
  }
`

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