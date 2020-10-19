import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    width: 100%;
    height: 100%;
    background: silver;
`;
export const Figure = styled.figure`
    display: flex;
    border: 1px solid cyan;
    align-items: center;
    justify-content: center;
`;
export const Caption = styled.figcaption`
    font-family: Pixel;
`;
export const Img = styled.img`
    width: 200px;
    height: 200px;
`;
export const Wrap = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Header = styled.section`
    display: flex;
    flex-direction: column;
`;
export const TitleWrap = styled.hgroup`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: 1px solid red;
`;
export const H1 = styled.h1`
    border: 1px solid red;
    text-align: center;
    font-family: Barcode;
    font-size: 2.3em;
`;
export const H2 = styled.h3`
`;
export const H3 = styled.h5`
`;
export const Section = styled.section`
    display: flex;
    height: 100%;
    width: 80%;
    border: 1px solid black;
`;