import styled, { css } from 'styled-components';

export const Button = styled.button`
    border-radius: 5px;
    background-color: #f4511e;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 14px;
    padding: 5px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
    z-index: inherit;

    &:hover {
        background-color: #0a9ee1;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }

    ${props => props.primary && css`
        background: #0a9ee1;
        color: #f4511e;
    `}
`;

export const TextInput = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #0a9ee1;
    border-radius: 5px;
    box-sizing: border-box;
`;