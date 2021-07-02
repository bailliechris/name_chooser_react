import React from 'react';
import { ImageBackground, BackgroundImageArea, ContentOverImage } from '../../styles/backgrounds';
import { FadeInText } from '../../styles/animations';

export function Landing() {
    return(
        <BackgroundImageArea>
            <ImageBackground src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621280578/portfolio/bg_hbfxue_u30zyk.jpg" />
            <ContentOverImage>
                <FadeInText class="one">Random</FadeInText>
                <FadeInText class="two">Name</FadeInText>
                <FadeInText class="three">Chooser</FadeInText>
            </ContentOverImage>
        </BackgroundImageArea>

        
    );
}

// Set up home page.