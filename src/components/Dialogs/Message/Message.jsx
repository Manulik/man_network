import React from 'react';
import * as S from './Message.styled';
// import { NavLink } from 'react-router-dom';

const Message = (props) => {
    return (
            <S.Message><p>{props.message}</p></S.Message>
    )
} 
export default Message;