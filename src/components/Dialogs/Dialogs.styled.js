import styled from 'styled-components';

export const Dialogs = styled.div `
    display: grid;
    grid-template-columns: 2fr 10fr;
`;

export const DialogsItems = styled.div `

     padding: 10px;
    background: #6666;
    color: white;
    font-size: 20px;
    border-right: 1px solid #B92E3B;
`;

// const activeClassName = 'dialogs-item-active';
// export const ActiveItem = styled.a.attrs({ activeClassName })`
//   &.${activeClassName} {
//     text-decoration: none;
//     color: #4D1D00;
//     margin-left: 30px;
//     transition: .5s;
//   }
// `;

export const Messages = styled.div `
    padding: 10px;
`;

