import styled, {css} from 'styled-components';

export const NavTitle = styled.div`
    font-size: 20px;
    text-align: left;
    padding: 5px;
    transition: all 0.5s;
    color: #eeeeee;
  
    &:hover {
        color: #0a9ee1;
    }

    ${props => props.primary && css`
        color: #111111;
    `}
`;

export const SmallText = styled.h1`
    font-size:14px;
    padding: 5px;
    color:#eeeeee;
`;

export const BigText = styled.h1`
    font-size:20px;
    padding: 5px;
    color:#eeeeee;
`;