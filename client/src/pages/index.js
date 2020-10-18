import React from 'react';
import Head from 'next/head';
import { Container } from '../containers/Main/style';
import MainPage from '../containers/Main';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Vehicle Tracker</title>
        <link rel="icon" href="/location-icon.png" />
      </Head>
      <MainPage />
    </Container>
  )
}
