import React, { useContext } from 'react';
import SocketContext from '../../sockets/context';
import { Marker } from '@react-google-maps/api';

const rounder = (num) => {
    return (Math.round(num * 1000)/1000) //Marker component does not recognize floats with too many decimals
}

const Markers = () => {
    const { locations } = useContext(SocketContext)
    return (
        <>
        {
            locations ? 
            locations.map((veh, i) => {
                return(
                    <Marker
                        onLoad={marker => console.log('marker:'+marker.title+" loaded successfuly")}
                        icon={'/car.png'}
                        key={i}
                        title={veh[0]}
                        position={ { lat: rounder(veh[1]), lng: rounder(veh[2]) } }
                    >
                    </Marker>
                )
            }) : null
        }
       </>
    )
}

export default Markers;