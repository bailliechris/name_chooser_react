import React from 'react';
import { Modal } from './modal';
import { useSelector } from 'react-redux';
import { NavTitle, NavBar } from '../styles/navbar';

export function Nav() {
    const { user } = useSelector(state => state.users);

    return (
        <NavBar>
            <NavTitle>Name Chooser</NavTitle>
            <Modal button_text={user.user || "Login"} />
        </NavBar>
    )
}