import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../features/users/userSlice';
import { Button, TextInput } from '../styles/inputs';

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    return (
        <div>
            <form>
                <TextInput
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                ></TextInput>
                <TextInput
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                ></TextInput>
            </form>
            <Button onClick={() => dispatch(signIn({email:email, pw:password}))}>Sign In</Button>
        </div>
    )
}

// Set redirect check once login is completed?
// Have status display in the form