import React from 'react';
import * as S from  './app.styled';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = () =>  {
  return (
    <S.AppWrapper>
      <Header />

      <Navigation />

      <S.WrapperContent>
        <Dialogs />
        {/* <Profile /> */}
      </S.WrapperContent>
    </S.AppWrapper>
  );
}

export default App;
