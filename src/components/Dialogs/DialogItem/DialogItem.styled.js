import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DialogItem = styled.div `
    padding: 8px;
    margin-bottom: 12px;
    width: 130px;
    a {
      text-decoration: none;
      color: white;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-evenly;
    }
    p {
      margin: 0;
      padding: 0;
    }
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
`;

const activeClassName = 'dialog-item-active';

export const ActiveDialog = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    color: 	#B92E3B;
    margin-left: 30px;
    transition: .5s;
    display: flex;
    img {
      width: 25px;
      height: 25px;
    }
  }
`;