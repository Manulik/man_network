import React from 'react';
import * as S from './profile.styled';

const Content = () => {
    return (
        <S.Content>
            <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="main img" />
            </div>

            <div>
                <img src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg" alt="avatar" />
                Discription
            </div>
            <div>
                My posts
                <div>
                New post
                </div>
                <div>Posts</div>
            </div>
        </S.Content>
    );
}

export default Content;