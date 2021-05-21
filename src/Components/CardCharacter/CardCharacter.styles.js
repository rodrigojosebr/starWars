import styled from 'styled-components/macro';
import starBackground from '../../Images/starBackground.png';

export const CardBox = styled.div`
  background-image: url(${starBackground});
  color: white;
  position: relative;
  margin: auto;
  border: solid 2px yellow;
  border-radius: 20px;
  padding: 2px;
  width: 95%;
  box-shadow: 2px 2px 6px #f4d03f;
  &:hover{
    transform: translate(-1px, -1px);
    box-shadow: 4px 4px 6px #f4d03f;
    transition: all 0.2s;
  }
`
  
export const BoxInfo = styled.div`
  display:flex;
  padding: 2px;
  align-items: center;
  justify-content: space-between;
  margin: 3px 20px 3px 25px;
`
  
export const likeBtn = styled.button`
  border: solid 2px #5567c2;
  position: relative;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  color: white;
  background-color: #5567c2;
  border-radius: 8px ;
  box-shadow: 2px 2px 10px #5567c2;
  width: 58px;
  height: 22px;
  &:hover{
    border: solid 2px #e85d48;
    transform: translate(1.5px, 1.5px);
    background-color: #e85d48;
    box-shadow: 3px 3px 10px #e85d48;
    transition: all 0.1s;
  }
`

export const TitleCard = styled.p`
  font-size: large;
  font-weight: bold;
  margin: 2px 0px 0px 10px;
`

export const InfosCard = styled.p`
`