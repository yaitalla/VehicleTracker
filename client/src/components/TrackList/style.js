import styled from 'styled-components';

export const Wrap = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
`;

export const Line = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    margin: 5px;
    flex-direction: column;
    border: 1px solid white;
    border-radius: 5px;
    &:hover{
        cursor: pointer;
        background: white;
        color: black;
        border: 1px solid red;
}
`;

export const Info = styled.p`
    margin: 0;
    text-align: center;
`;