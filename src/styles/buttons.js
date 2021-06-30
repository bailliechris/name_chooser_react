import styled, { css } from 'styled-components';

export const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    cursor: pointer;
    margin: 0.5em 1em;
    padding: 0.25em 1em;

    &:hover {
        background: transparent;
        color: black;
    }

    ${props => props.primary && css`
        background: palevioletred;
        color: white;
    `}
`;