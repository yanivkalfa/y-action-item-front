import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding:10px;
    font-size:14px;
    justify-content: flex-start;
`;

export const Title = styled.div`
    font-weight: bold;
    text-align: center;
    font-size: 16px;
`;

export const Img = styled.img`
    width: 200px;
    height: 200px;
    align-self: center;
`;

export const Label = styled.label`
    display: block;
`;


export const Input = styled.input`
    outline:none;
    width:100%;
    box-sizing: border-box;
`;

export const Textarea = styled.textarea`
    outline:none;
    width:100%;
    box-sizing: border-box;
`;

export const NameContainer = styled.div`
    padding: 10px 0;
`;

export const DescriptionContainer = styled.div`
    padding: 10px 0;
`;

export const PriceContainer = styled.div`
    padding: 10px 0;
`;

export const SaveContainer = styled.div`
    display: flex;
    justify-content:end;
`;

export default Container;