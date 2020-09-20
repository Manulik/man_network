import React from 'react';
import * as S from './FriendItem.styled';

const FriendItem = (props) => {
    return (
        <S.Friend id={props.id}>
            <img src={props.ava} alt="ava or your friend"/>
            <div><p>{props.name}</p></div>
        </S.Friend>
    )
}
export default FriendItem;