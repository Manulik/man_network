import React from 'react';
import * as S from './Post.styled';

const Post = (props) => {
    console.log(props.message);
    return(
        <S.Post>
            <img src="https://i.ytimg.com/vi/Y5GLCBjHR8U/maxresdefault.jpg" alt="posts image" />
            { props.message }
            <div>
                <span>Like: {props.likesCount}</span>
            </div>
        </S.Post>
    );
}
export default Post;