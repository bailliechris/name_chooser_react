import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: block;
    margin: auto;
    justify-content:center;
`;

export const CardArea = styled.div`
    position: relative;
    background: #eeeeee;
    width: 20%;
    height: 15%;
    margin: auto;
    padding: 10px;
    border-radius: 5px;
    justify-content: center;
    align-content: center;
    text-align: center;

    ${props => props.alt && css`
        background: #444444;
        color: #eeeeee;
        border: 3px dotted #777777;
    `}
`;

export const FlexContainer = styled.div`
    display: flex;
    margin: auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
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

