import styled from 'styled-components'

export const AppWrapper = styled.div `
    margin: 0 auto;
    display: grid;
    max-width: 1250px;
    grid-template-areas:
    "header header"
    "nav content";
    grid-template-rows: 60px 1fr;
    grid-template-columns: 2fr 10fr;
    grid-gap: 10px;
`;

export const WrapperContent = styled.div `
    grid-area: content;
    background-color: lightgreen;
`;