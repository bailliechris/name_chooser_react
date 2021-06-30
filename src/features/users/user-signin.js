import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { signIn } from '../users/userSlice';

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    cursor: pointer;
    margin: 0.5em 1em;
    padding: 0.25em 1em;

    ${props => props.primary && css`
        background: palevioletred;
        color: white;
    `}
`;

const Container = styled.div`
    font-family: system-ui;
    background: #cad0db;
    color: darkgray;
    text-align: center;
    justify-content: center;
    align-content: center;
    height: 100vh;
    cursor: default;
`;

export function SignIn() {

    const dispatch = useDispatch();
    const { classes } = useSelector(state => state.users);
    const { status } = useSelector(state => state.users);

    return(
        <Container>
            <Button primary onClick={() => dispatch(signIn({email:"sporkina@hotmail.com", pw:"sporks"}))}>Sign In</Button>
            <p>{status}</p>
            <div>
                {classes.map((group) => {
                    return (
                        <div key={group._id}>
                            <p>{group.name}</p>
                            <p>{group.pupils}</p>
                        </div>
                    )
                })}
            </div>
        </Container>
    );
}