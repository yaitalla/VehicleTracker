import React, { useContext } from 'react';
import SocketContext from '../../sockets/context';

const rounder = (num) => {
    return (Math.round(num * 1000)/1000) //Marker component does not recognize floats with too many decimals
}

const Markers = () => {
    const { locations } = useContext(SocketContext)
    console.log(locations)
    return (
        <>
        </>
    )
}

export default Markers;