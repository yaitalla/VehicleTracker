import React, { useContext, useState, useCallback, memo } from 'react';
import SocketContext from '../../sockets/context';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Wrap, containerStyle, center } from './style';
import Markers from '../Markers';
import TrackList from '../TrackList';



const TrackMap = ({ setInfo, open }) => {
    const { locations } = useContext(SocketContext)
    const [map, setMap] = useState(null)
    
    const onLoad = useCallback((map) => {
        map.setCenter(new globalThis.google.maps.LatLng(center.lat, center.lng));
        map.setZoom(12)
        console.log('map loaded successfully')
    }, [])
    const onUnmount = useCallback(() => {
        setMap(null)
        console.log('map unmounted')
    }, [])
    
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
            <TrackList info={setInfo} openModal={open} />
       </Wrap>
    )
}
export default memo(TrackMap);