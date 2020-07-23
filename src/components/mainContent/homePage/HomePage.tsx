import React from 'react';
import { Container, Divider, Header, Transition } from 'semantic-ui-react';

import { useTransitionEffect, animationDuration } from 'utils/transitionUtil';

import 'components/mainContent/homePage/homePage.css';

const HomePage = () => {
  const showContent = useTransitionEffect();
  return (
    <Transition animation="fade right" duration={animationDuration} visible={showContent}>
      <Container className="home-page">
        <Divider section hidden className="top-divider" />
        <Container className="home-page-content-container" textAlign="justified">
          <Header size="large">Hi there, I'm Jingcheng.</Header>
          <Header size="small">I like building things. I am a Software Development Engineer at Amazon Web Services. Before Amazon, I was at Byton, Faraday Future and BYD Coach and Bus building web apps that have improved EV manufacturing experience.</Header>
        </Container>
      </Container>
    </Transition>
  );
};

export default HomePage;