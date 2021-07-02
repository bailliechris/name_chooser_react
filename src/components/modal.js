import React, {useState} from 'react';
import { ModalArea, ModalOverlay, ModalContent } from '../styles/modal';
import { Button } from '../styles/inputs';
import { NavTitle } from '../styles/navbar';
import { LoginForm } from './loginform';
import { useSelector } from 'react-redux';
import { LogoutButton } from './logoutbutton';

export function Modal({ button_text}) {
    const { isAuth } = useSelector(state => state.users);
    const [show, setShow] = useState(false);

    const changeShow = (result) => {
        setShow(result);
    };

    return (
        <div>
            <Button onClick={() => setShow(true)}>{button_text}</Button>
            <ModalOverlay show={show}>
                <ModalArea>
                    <ModalContent>
                        <NavTitle primary>{isAuth ? "Log out?" : "Sign In"}</NavTitle>
                        {
                            isAuth
                                ? <LogoutButton changeShow={changeShow} />
                                : <LoginForm changeShow={changeShow} />
                        }
                            
                        <Button onClick={() => setShow(false)}>Cancel</Button>
                    </ModalContent>
                </ModalArea>
            </ModalOverlay>
        </div>
    )
}