import React from 'react';
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
                    <Caption>Vehicle Tracker</Caption>
                </Figure>
            </Header>
            <Section></Section>
        </Wrap>
    )
}

export default MainPage;