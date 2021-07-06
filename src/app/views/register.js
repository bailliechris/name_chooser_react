import React, {useState} from 'react';
import { FlexContainer } from '../../styles/backgrounds';
import { SmallText, BigHeader } from '../../styles/text';
import { TextInput, Button } from '../../styles/inputs';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../features/users/userSlice';
// Add registerUser in slice!

export function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [check_password, setCheck_Password] = useState("");
    const dispatch = useDispatch();

    const checking_passwords = () => {
        if (password.length > 6) {
            if (password === check_password) {
                return true;
            }
        }

        return false;
    };

    return (
        <FlexContainer>
            <BigHeader>
                Register New User
            </BigHeader>
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
                <TextInput
                    type="password"
                    placeholder="re-type password"
                    value={check_password}
                    onChange={e => setCheck_Password(e.target.value)}
                ></TextInput>
            </form>
            <div>
                {
                    (checking_passwords)
                        // Add <Link> element here - to re-direct to classes page
                    ? <Button to="/classes" onClick={() => dispatch(registerUser())}>Register!</Button>
                    : <SmallText>Please re-type your passwords, they don't seem to match!</SmallText>
                }
            </div>
        </FlexContainer>    
    );
}

// Set up home page.