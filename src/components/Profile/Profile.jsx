import React from 'react';
import * as S from './profile.styled';
import MyPosts from './MyPosts/MyPosts';

const Content = () => {
    return (
        <div>
            <S.BlockImg>
                <img src="https://3.bp.blogspot.com/-vxsAhZm7sOU/T_7yITJsneI/AAAAAAAAAFE/r1B2waibTsk/s1600/HDR+WALLPAPERS+%E2%84%9687+(22).jpg" alt="main img" />
            </S.BlockImg>

            <S.ProfileBlock>
                <img src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg" alt="avatar" />
                Discription and information about user.
            </S.ProfileBlock>
            <MyPosts />
        </div>
    );
}

export default Content;