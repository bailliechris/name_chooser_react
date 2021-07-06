import styled, {css} from 'styled-components';

export const NavTitle = styled.div`
    font-size: 20px;
    text-align: left;
    padding: 5px;
    color: #eeeeee;
    transition: all 0.5s;
    background: #111111;
  
    &:hover {
        color: #0a9ee1;
    }

    ${props => props.primary && css`
        color: #111111;
        background: #eeeeee;
    `}
`;

export const BigHeader = styled(NavTitle)`
    font-size: 30px;
    text-align: center;
`;

export const SmallText = styled.p`
    font-size:14px;
    padding: 5px;
    color:#eeeeee;

    ${props => props.primary && css`
        font-weight: bold;
    `}

    ${props => props.link && css`
        font-weight: bold;
        transition: all 0.5s;
        color:#111111;
        &:hover{
            text-decoration: underline;
            color:#0a9ee1;
        }
    `}
`;

export const BigText = styled.h1`
    font-size:20px;
    padding: 5px;
    color:#eeeeee;
`;