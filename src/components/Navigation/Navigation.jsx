import React from 'react';
import * as S from './navigation.styled';
import Friends from './Friends/Friends';
const Navigation = (props) => {
    return (
        <S.Navigation>

          <div>
            <S.StyledLink to="/profile">Profile</S.StyledLink>
          </div>
          <div>
            <S.StyledLink to="/dialogs">Messages</S.StyledLink>
          </div>
          <div>
            <S.StyledLink to="/news">News</S.StyledLink>
          </div>
          <div>
            <S.StyledLink to="/music">Music</S.StyledLink>
          </div>

          <Friends state={props.state.friends} />

          <S.Settings>

            <S.StyledLink to="/settings">Settings</S.StyledLink>

          </S.Settings>

        </S.Navigation>
    );
}
export default Navigation;