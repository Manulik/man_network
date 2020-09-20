import React from 'react';
import * as S from  './app.styled';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) =>  {
  console.log(props);
  
  return (
    <BrowserRouter>
      <S.AppWrapper>
        <Header />

        <Navigation state={props.state.Sidebar} />

        <S.WrapperContent>
          <Route path="/profile" 
            render={() => <Profile 
              state={props.state.ProfilePage}
              addPost={props.addPost} /> } />

          <Route path="/dialogs" 
            render={() => <Dialogs 
              state={props.state.DialogsPage} /> } />
        </S.WrapperContent>
      </S.AppWrapper>
    </BrowserRouter>
  );
}

export default App;
