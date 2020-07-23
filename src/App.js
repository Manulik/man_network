import React from 'react';
import * as S from  './app.styled';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Profile/Profile';

const App = () =>  {
  return (
    <S.AppWrapper>
      <Header />

      <Navigation />

    <Content />
    </S.AppWrapper>
  );
}

export default App;
