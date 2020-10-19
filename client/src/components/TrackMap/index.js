import React, { useContext, useState, useCallback } from 'react';
import SocketContext from '../../sockets/context';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Wrap, containerStyle, center } from './style';



const TrackMap = () => {
    const { locations } = useContext(SocketContext)
    const [map, setMap] = useState(null)
    const onLoad = useCallback((map) => {
        const bounds = new globalThis.google.maps.LatLngBounds();
        map.fitBounds(bounds);
    }, [])
    const onUnmount = useCallback((map) => {
        setMap(null)
    }, [])
    return (
       <Wrap>
        
        <LoadScript googleMapsApiKey="AIzaSyBTGhtVXuB3reFdv-1CEA3IjXWwALayyyM" >
        
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
            </GoogleMap>
        </LoadScript>

        {
            locations ? 
            locations.map((driver, i) => {
                return(<p key={i} >{driver[0]}</p>)
            }) : null
        }

       </Wrap>
    )
}
export default TrackMap;