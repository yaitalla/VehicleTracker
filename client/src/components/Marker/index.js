import React, { useContext } from 'react';
import SocketContext from '../../sockets/context';
import { Wrap } from './style';
const rounder = (num) => {
    return (Math.round(num * 1000)/1000) //Marker component does not recognize floats with too many decimals
}

const Markers = () => {
    const { locations } = useContext(SocketContext)
    // console.log(locations)
    return (
        <Wrap>
        {
            locations ? 
            locations.map((driver, i) => {
                return(<p key={i} >{driver[0]}</p>)
            }) : null
        }
       </Wrap>
    )
}

export default Markers;