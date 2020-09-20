import styled from 'styled-components';
import { Active } from './navigation.styled';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav `
    grid-area: nav;
    background-color: #FFD287;
    padding: 20px;
    div {
        margin-bottom: 7px;
        :hover {
            cursor: pointer;
        }
    }
    a {
        text-decoration: none;
        color: white;
        font-size: 23px;
        :hover {
            transition: .5s;
            cursor: pointer;
            color: #000000;
        }
    }
`;
const activeClassName = 'nav-item-active';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    color: #4D1D00;
    margin-left: 30px;
    transition: .5s;
  }
`;

export const Settings = styled.div`
    margin-top: 35px;
`;