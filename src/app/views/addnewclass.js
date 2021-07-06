import React from 'react';
import { FlexContainer } from '../../styles/backgrounds';
import { SmallText, BigHeader } from '../../styles/text';
//import { useSelector } from 'react-redux';
// Add addNewClass in slice!

export function AddNewClass() {
    //const { classes } = useSelector(state => state.users);

    return (
        <div>
            <BigHeader>
                Add a New Class
            </BigHeader>
            <FlexContainer>
                <SmallText>Add new class stuff to go here.</SmallText>
            </FlexContainer>
        </div>

    )
}