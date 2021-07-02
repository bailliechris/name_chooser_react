import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    margins: auto;
    justify-content:center;
`;

export const BackgroundImageArea = styled.div`
    position: relative;
    width:95vw;
    margin:auto;
    z-index:-1;
`;

export const ImageBackground = styled.img`
    margin: auto;
    width:95vw;
    z-index:-1;
`;

export const ContentOverImage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: space-around;
    align-items:baseline;

`;