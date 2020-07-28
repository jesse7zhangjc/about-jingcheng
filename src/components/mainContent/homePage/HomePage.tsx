import React from 'react';
import { Container, Divider, Header, Transition } from 'semantic-ui-react';

import { useTransitionEffect, animationDuration } from 'utils/transitionUtil';
import messages from 'messages';
import { IMainContentProps } from 'components/mainContent/MainContent';

import 'components/mainContent/homePage/homePage.css';

const { welcome: wm } = messages.content;

type IHomePageProps = IMainContentProps;

const HomePage = (props: IHomePageProps) => {
  const showContent = useTransitionEffect(props.sideBarReady ? 0 : animationDuration);
  return (
    <Transition animation="fade right" duration={animationDuration} visible={showContent}>
      <Container className="home-page">
        <Divider section hidden className="top-divider" />
        <Container className="home-page-content-container" textAlign="justified">
          <Header size="large">{wm.header}</Header>
          <Header size="small">{wm.subheader}</Header>
        </Container>
      </Container>
    </Transition>
  );
};

export default HomePage;