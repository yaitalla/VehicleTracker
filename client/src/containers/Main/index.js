import React, { useState, useCallback, useEffect } from 'react';
import SocketProvider from '../../sockets';
import TrackMap from '../../components/TrackMap';
import { Wrap, Header, Section, BtnWrap, Btn,
     H1, H2, H3, Figure, Img, Caption
} from './style';



const MainPage = () => {
    const [started, setStarted] = useState(false)
    
    return (
        <Wrap>
            <Header>
                <H1>VEHICLE TRACKER</H1>
               
            </Header>
            {
                started ?
                <Section>
                    <Figure>
                        <Img src={'/location-icon.png'} />
                        <Caption>real-time gps tracking</Caption>
                        <BtnWrap>
                            <Btn onClick={() => setStarted(!started)} >Stop</Btn>
                        </BtnWrap>
                    </Figure>
                    <SocketProvider>
                        <TrackMap/>
                    </SocketProvider>
                </Section>
                :
                <Btn onClick={() => setStarted(!started)} >Start</Btn>
            }
            
        </Wrap>
    )
}

export default MainPage;