import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    align-content:center;
`;

export const BackgroundImageArea = styled.div`
    position: relative;
`;

export const ImageBackground = styled.img`
    width:95vw;
    margin:  0px 0px 0px -10px ;
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