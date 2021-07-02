import React, {useState} from 'react';
import { ModalArea, ModalOverlay, ModalContent } from '../styles/modal';
import { Button } from '../styles/inputs';
import { NavTitle } from '../styles/navbar';
import { LoginForm } from './loginform';

export function Modal({button_text}) {
    const [show, setShow] = useState(false);
    return (
        <div>
            <Button onClick={() => setShow(true)}>{button_text}</Button>
            <ModalOverlay show={show}>
                <ModalArea>
                    <ModalContent>
                        <NavTitle primary>Sign in...</NavTitle>
                        <LoginForm />
                        <Button onClick={() => setShow(false)}>Cancel</Button>
                    </ModalContent>
                </ModalArea>
            </ModalOverlay>
        </div>
    )
}