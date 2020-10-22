import styled from 'styled-components';

export const Wrap = styled.section`
    position: absolute;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    background: silver;
    width: 30%;
    height: 60%;
    overflow: hidden;
    color: black;
`;
export const H3 = styled.h3`
    color: black;
    text-align:center;
    border-bottom: 1px solid black;
    margin: 0;
    padding: 0;
`;

export const CloseBtn = styled.img`
    max-width: 30px;
    max-height: 30px;
    width: 20px;
    height: 30px;
    align-self: flex-end;
    margin: 0;
    padding: 0;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 1px 1px red;
        transform: scale(1.1);
    }
`;

export const Display = styled.div`
    display: flex;
    flex-direction: column;
    border: 1 px solid red;
    &:nth-of-type(1){
        border-bottom: 1px solid;
    }
`;

export const P = styled.p`
    text-align: left;
    margin: 0;
    font-size: .8em;
`;