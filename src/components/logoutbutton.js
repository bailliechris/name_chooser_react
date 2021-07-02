import React from 'react';
import { Button } from '../styles/inputs';
import { useDispatch } from 'react-redux';
import { signOut } from '../features/users/userSlice';

export function LogoutButton({changeShow}) {
    const dispatch = useDispatch();

    const trigger = () => {
        dispatch(signOut());
        changeShow(false);
    }

    return (
        <Button onClick={() => trigger}>Sign Out</Button>
    )
}