import styled, { css } from 'styled-components';

interface ContainerProps {
  $isSelected: boolean;
}
const Container = styled.div<ContainerProps>`
    ${({ $isSelected }) => $isSelected && css`background-color: rgb(195, 238, 238);`};
    padding: 15px;
    border: 1px solid gray;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    justify-items: center;
    height: 50px;
`;

export const Left = styled.div`
    justify-items: center;
    padding: 0px 5px;
`;

export const Mid = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 0px 5px;
    justify-content: flex-start;
`;
export const Right = styled.div`
    justify-content:end;
    padding: 0px 5px;
    display: flex;
    flex-direction: column;
`;
export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
`;
export const Name = styled.div`
    font-weight: bold;
    font-size: 14px;
`;
export const Desc = styled.div`
    font-size: 12px;
`;


export default Container;