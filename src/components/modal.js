import React, {useState} from 'react';
import { ModalArea, ModalOverlay, ModalContent } from '../styles/modal';
import { Button } from '../styles/inputs';
import { NavTitle } from '../styles/navbar';
import { LoginForm } from './loginform';
import { useSelector } from 'react-redux';
import { LogoutButton } from './logoutbutton';
import { Link } from 'react-router-dom';
import { SmallText } from '../styles/text';

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
                        <div>
                        {
                            isAuth
                                ? <LogoutButton changeShow={changeShow} />
                                : <LoginForm changeShow={changeShow} />
                            }
                        </div>
                        <div>
                        {
                            !isAuth
                                ?   <Link to="/register" onClick={() => setShow(false)} style={{ textDecoration: 'none' }}>
                                        <SmallText link>
                                            Register
                                        </SmallText>
                                    </Link>
                                : <SmallText>Hello!</SmallText>
                            }
                        </div>
                        <div>
                            <Button onClick={() => setShow(false)}>Cancel</Button>
                        </div>
                    </ModalContent>
                </ModalArea>
            </ModalOverlay>
        </div>
    )
}