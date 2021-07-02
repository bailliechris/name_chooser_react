import styled from 'styled-components';

export const ModalArea = styled.div`
    display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    max-width: 85%;
    height: 400px;
    max-height: 85%;
    border-radius: 5px;
    z-index: 10;
`;

export const ModalContent = styled.div`
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    /* spacing as needed */
    padding: 20px;

    /* let it scroll */
    overflow: auto;
`;

export const ModalOverlay = styled.div`
    z-index: auto;
    display: ${({show}) => (show ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width:100vw;
    background: rgba(0,0,0,0.5);
`;