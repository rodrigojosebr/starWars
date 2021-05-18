import React from 'react';
import * as Styled from './CardCharacter.styles'

export default function CardCharacter({ ...props }) {
  return (
    <Styled.CardBox>
      <Styled.TitleCard>{props.character.name}</Styled.TitleCard>
      <Styled.BoxInfo>
        <Styled.InfosCard>
          <p>Altura: {props.character.height} cm</p>
          <p>Peso: {props.character.mass} Kg</p>
        </Styled.InfosCard>
        <Styled.likeBtn>Like</Styled.likeBtn>
      </Styled.BoxInfo>
    </Styled.CardBox >
  )
}

{/* <S.Button onClick={(e) => formatYoutubeContent(fields?.content?.value, e)} > Inserir </S.Button> */ }
