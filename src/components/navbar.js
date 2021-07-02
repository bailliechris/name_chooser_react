import React from 'react';
import { Modal } from './modal';
import { NavTitle, NavBar } from '../styles/navbar';

export function Nav() {

    return (
        <NavBar>
            <NavTitle>Name Chooser</NavTitle>
            <Modal button_text="Login" />
        </NavBar>
    )
}