import React from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../components/modal';

export function SignIn() {
    const { classes, status } = useSelector(state => state.users);
    //const { status } = useSelector(state => state.users);
    /*const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Logging on: ${email}`);
    };*/

    return(
        <div>
            <p>{status}</p>
            <div>
                {classes.map((group) => {
                    return (
                        <div key={group._id}>
                            <p>{group.name}</p>
                            <p>{group.pupils}</p>
                        </div>
                    )
                })}
            </div>
            <Modal></Modal>
        </div>
    );
}