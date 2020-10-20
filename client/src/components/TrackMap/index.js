import React, { useContext, useState, useCallback, memo } from 'react';
import SocketContext from '../../sockets/context';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Wrap, containerStyle, center } from './style';
import Markers from '../Markers';



const TrackMap = () => {
    const { locations } = useContext(SocketContext)
    const [map, setMap] = useState(null)
    const loadMarker = marker => {
        console.log('marker: ', marker)
    }
    const onLoad = useCallback((map) => {
        map.setCenter(new globalThis.google.maps.LatLng(center.lat, center.lng));
        map.setZoom(12)
        console.log('map loaded successfully', map)
    }, [])
    const onUnmount = useCallback(() => {
        setMap(null)
        console.log('map unmounted')
    }, [])
    const reset = () => {

    }
    return (
       <Wrap>
        
        <LoadScript googleMapsApiKey="AIzaSyBTGhtVXuB3reFdv-1CEA3IjXWwALayyyM" >
        
            <GoogleMap
                mapContainerStyle={containerStyle}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <Markers/>
            </GoogleMap>
        </LoadScript>


        {/* <button onClick={reset} >Reset</button> */}
        {
            locations ? 
            locations.map((driver, i) => {
                return(<p key={i} >{driver}</p>)
            }) : null
        }

       </Wrap>
    )
}
export default memo(TrackMap);