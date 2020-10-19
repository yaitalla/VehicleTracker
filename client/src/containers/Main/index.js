import React, { useState, useCallback, useEffect } from 'react';
import SocketProvider from '../../sockets';
import TrackMap from '../../components/TrackMap';
import { Wrap, Header, Section, TitleWrap,
     H1, H2, H3, Figure, Img, Caption
} from './style';



const MainPage = () => {
    const [started, setStarted] = useState(false)
    
    useEffect(() => {
        // if (!started) {
        //     setStarted(true)
        //     initMap()
        //     setStarted(true)
        // }
    }, [])
    return (
        <Wrap>
            <Header>
                <H1>VEHICLE TRACKER</H1>
                <Figure>
                    <Img src={'/location-icon.png'} />
                    <Caption>real-time gps tracking</Caption>
                </Figure>
            </Header>
            <Section>
                <SocketProvider>
                    <TrackMap />
                </SocketProvider>
               <div id="map" ></div>
            </Section>
        </Wrap>
    )
}

export default MainPage;