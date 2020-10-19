import React from 'react';
import SocketProvider from '../../sockets';
import { Wrap, Header, Section, TitleWrap,
     H1, H2, H3, Figure, Img, Caption
} from './style';

const MainPage = () => {
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
                <p>Salut</p>
                </SocketProvider>
                
            </Section>
        </Wrap>
    )
}

export default MainPage;