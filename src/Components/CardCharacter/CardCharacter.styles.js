import styled from 'styled-components/macro';
import starBackground from '../../Images/starBackground.png';

export const CardBox = styled.div`
  background-image: url(${starBackground});
  color: white;
  position: relative;
  margin: 5px;
  border: solid 2px yellow;
  border-radius: 20px;
  padding: 2px;
  width: 95%;
  box-shadow: 2px 2px 6px #f4d03f;
  &:hover{
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 6px #f4d03f;
    transition: all 0.3s;
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
  border: solid 1px yellow;
  position: relative;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  color: white;
  background: #f9882a;
  border-radius: 10px ;
  box-shadow: 2px 2px 4px #f4d03f;
  width: 70px;
  height: 20px;
  &:hover{
  background-color: red;
  }
`

export const TitleCard = styled.p`
  font-size: large;
  font-weight: bold;
  margin: 2px 0px 0px 10px;
`

export const InfosCard = styled.p`
`