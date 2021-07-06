import React from 'react';
import { Modal } from './modal';
import { useSelector } from 'react-redux';
import { NavTitle, NavBar } from '../styles/navbar';
import { Link } from 'react-router-dom';

export function Nav() {
    const { user } = useSelector(state => state.users);

    return (
        <NavBar>
            <Link to="/">
                <NavTitle>Name Chooser</NavTitle>
            </Link>
            <Modal button_text={user.user || "Login"} />
        </NavBar>
    )
}