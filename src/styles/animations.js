import styled, { keyframes } from 'styled-components';

const fadeInKeyframes = keyframes`
    0%   {opacity: 1; }
    100%  {opacity: 0; }
`;

export const FadeInText = styled.h1`
    color:#f4511e;
    order: 1;
    font-size: 28px;
    width: 40vw;
    animation: ${fadeInKeyframes} 3s linear infinite;
    animation-delay: 1s;
`;

export const FadeInTextTwo = styled(FadeInText)`
    animation-delay: 2s;
`;

export const FadeInTextThree = styled(FadeInText)`
    animation-delay: 3s;
`;