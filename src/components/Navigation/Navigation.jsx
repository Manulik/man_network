import React from 'react';
import * as S from './navigation.styled';

const Navigation = () => {
    return (
        <S.Navigation>
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
        <S.Settings>
          <a href="#">Settings</a>
        </S.Settings>
      </S.Navigation>
    );
}
export default Navigation;