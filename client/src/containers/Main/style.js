import styled, { keyframes } from 'styled-components';

const visible = keyframes`
    0%{
        transform: translateX(-200%);
        opacity: 0;
    }
    100%{
        transform: translateX(0%);
        opacity: 1;
    }
`;

const flash = keyframes`
    0%{
        opacity: 1;
    }
    50%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const titleGrow = keyframes`
    0%{
        transform: scale(0.2);
    }
    100%{
        transform: scale(1.5);
    }
`;
const showIcon = keyframes`
    0%{
        transform: translateX(100%);
    }
    100%{
        transform: translateX(-100%);
    }
`;
const showCaption = keyframes`
    0%{
        transform: translateX(100%);
    }
    100%{
        transform: translateX(-50%);
    }
`;

export const Container = styled.main`
    display: flex;
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background: black;
`;
export const Figure = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Caption = styled.figcaption`
    font-family: Pixel;
    color: white;
    animation: ${showCaption} .5s linear forwards;
`;
export const Img = styled.img`
    width: 150px;
    height: 150px;
    transform: translateX(100%);
    animation: ${showIcon} .5s linear forwards;
`;
export const Wrap = styled.article`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Header = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
`;
export const TitleWrap = styled.hgroup`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const H1 = styled.h1`
    text-align: center;
    color: white;
    font-family: Barcode;
    font-size: 2.3em;
    transform: scale(0.2);
    animation: ${titleGrow} 1s forwards;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 80%;
    border: 1px solid red;
    border-radius: 5px;
`;

export const Btn = styled.button`
    border: 1px solid red;
    border-radius: 8px;
    background: black;
    font-family: Pixel;
    color: white;
    height: 50px;
    width: 100px;
    font-size: 1.2em;
    animation: ${flash} 1.5s reverse infinite;
    &:hover{
        animation: ${flash} .2s reverse infinite;
        cursor: pointer;
        background: red;
    }
`;
export const BtnWrap = styled.div`
    transform: translateX(-200%);
    opacity: 0;
    animation: 1s ${visible} .5s linear forwards;
`