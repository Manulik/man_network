import styled from 'styled-components';

export const Navigation = styled.nav `
    grid-area: nav;
    background-color: #bbbbbb;
    padding: 20px;
    div {
        margin-bottom: 7px;
    }
    a {
        text-decoration: none;
        color: white;
        font-size: 23px;
        :hover {
            transition: 1s;
            cursor: pointer;
            color: #000000
        }
    }
`;

export const Settings = styled.div`
    margin-top: 35px;
`;