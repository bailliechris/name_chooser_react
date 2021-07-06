import React from 'react';
import { Link } from 'react-router-dom';
import { FlexContainer, CardArea } from '../../styles/backgrounds';
import { SmallText, BigHeader } from '../../styles/text';
import { useSelector } from 'react-redux';
// Add registerUser in slice!

export function ShowClasses() {
    const { classes } = useSelector(state => state.users);
    console.log(classes);

    return (
        <div>
            <BigHeader>Classes</BigHeader>
            <FlexContainer>
            {
                classes.map((group) => (
                    <CardArea>
                        <SmallText link>{group.name}</SmallText>
                    </CardArea>
                ))
            }
            <CardArea alt>
                <Link to="/add"><SmallText link>+ Add a new class</SmallText></Link>     
            </CardArea>
            </FlexContainer>
        </div>
    )
}