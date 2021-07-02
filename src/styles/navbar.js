import styled, {css} from 'styled-components';

export const NavTitle = styled.h1`
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

export const NavBar = styled.div`
    display:flex;
    position:sticky;
    width:98vw;
    padding: 0px 0px 10px 0px;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between; 
`;