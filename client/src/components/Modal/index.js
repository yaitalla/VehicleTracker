import React from 'react';
import { Wrap, H3, CloseBtn, Display, P } from './style';

const DisplayData = ({ data }) => {
    return (
        <Display>
            { data ?
                 Object.keys(data).map((item, i) =>{
                    return (
                        <P key={i}>{item}: {data[item]}</P>
                    )
                }) : null
            }
        </Display>
    )
}

const Modal = ({data, close}) => {
    return (
        <Wrap>
            <CloseBtn onClick={close} src={'/close-button.png'} />
            <H3>Vehicle Informations</H3>
            <DisplayData data={data[0]} />
            <td/>
            <DisplayData data={data[1]} />
        </Wrap>
    )
}

export default Modal;