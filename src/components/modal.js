import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../features/users/userSlice';
import { ModalArea, ModalOverlay, ModalContent } from '../styles/modal';
import { Button } from '../styles/buttons';

export function Modal() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    return (
        <div>
            <Button primary onClick={() => setShow(true)}>Show Modal</Button>
            <ModalOverlay show={show}>
                <ModalArea>
                    <ModalContent>
                        Modal!
                        <form>
                            <input
                                type="text"
                                placeholder="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            ></input>
                            <input
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            ></input>
                        </form>
                        <Button primary onClick={() => dispatch(signIn({email:email, pw:password}))}>Sign In</Button>
                        <Button primary onClick={() => setShow(false)}>Cancel</Button>
                    </ModalContent>
                </ModalArea>
            </ModalOverlay>
        </div>
    )
}