import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './DialogItem.styled';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <S.DialogItem>
            <S.ActiveDialog to={path}>
                <img src={ props.ava } alt={props.name + "'s avatar"}/>
                <p>{ props.name }</p>
            </S.ActiveDialog>
        </S.DialogItem>
    )
}
export default DialogItem;