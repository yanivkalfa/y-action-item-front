import styled, { css } from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
`;

const Section = css`
    padding: 20px 10px;
`;

export const Header = styled.div`
    ${Section}
    background-color: rgb(121, 183, 219);
    border: 2px solid gray;
`;

export const Actions = styled.div`
    ${Section}
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
`;

export const Action = styled.div`
    margin-right: 15px;
`;

export const Body = styled.div`
    ${Section}
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const ItemList = styled.div`
    width: 30%;
    margin-right: 25px;
`;

export const Footer = styled.div`
    ${Section}
    display: flex;
    justify-content: center;
`;

export default Container;