import React from 'react';
import { ImageBackground, BackgroundImageArea, ContentOverImage } from '../../styles/backgrounds';
import { FadeInText, FadeInTextTwo, FadeInTextThree } from '../../styles/animations';
import { BigText } from '../../styles/text';
//import { Modal } from '../../components/modal';
import { useSelector } from 'react-redux';

export function Landing() {
    const { isAuth, user } = useSelector(state => state.users);
    return (
        <BackgroundImageArea>
            <ImageBackground src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1625258875/bg_vgjvyd.png" />
            <ContentOverImage>
                <div>
                    <FadeInText>Random</FadeInText>
                    <FadeInTextTwo>Name</FadeInTextTwo>
                    <FadeInTextThree>Chooser</FadeInTextThree>
                </div>
                <div>
                    {isAuth
                        ? <BigText>Hello {user.user} !</BigText> 
                        : <BigText>Login Above!</BigText>
                    }
                </div>
            </ContentOverImage>
        </BackgroundImageArea>    
    );
}

// Set up home page.