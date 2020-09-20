import React from 'react';
import * as S from './Friends.styled';
import Friend from './FriendItem/FriendItem';

const Friends = (props) => {
    console.log(props.state);
    let FriendItem = props.state.map(friend => <Friend id={friend.id} name={friend.name} ava={friend.ava} />)
    return (
        <S.Friends>
            <h4>Friends</h4>
            <S.FriendsItems>
                {FriendItem}
            </S.FriendsItems>
        </S.Friends>
    );
}
export default Friends;