import React, { useContext, useState, useCallback, memo } from 'react';
import SocketContect from '../../sockets/context';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Wrap, containerStyle, center } from './style';

const TrackMap = () => {
    const { locations } = useContext(SocketContext)
    const [map, setMap] = useState(null)
    const onLoad = useCallback((map) => {
        map.setCenter(new globalThis.google.maps.LatLng(center.lat, center.lng));
        map.setZoom(12)
        console.log('map loaded successfully', map)
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

                </GoogleMap>
            </LoadScript>
        </Wrap>
    )
}