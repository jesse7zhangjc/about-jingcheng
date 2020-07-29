import React, { useEffect } from 'react';
import { Container, Divider, Header, Transition } from 'semantic-ui-react';

import { useTransitionEffect, animationDuration } from 'utils/transitionUtil';
import messages from 'messages';
import { IMainContentProps } from 'components/mainContent/MainContent';

import 'components/mainContent/homePage/homePage.css';
import ProjectsPage from 'components/mainContent/projectsPage/ProjectsPage';

const {
  sideNavigationBar: sbm,
  content: { welcome: wm, contacts },
} = messages;

type IHomePageProps = IMainContentProps;

const HomePage = (props: IHomePageProps) => {
  const showContent = useTransitionEffect(
    props.sideBarReady ? 0 : animationDuration
  );
  useEffect(() => {
    document.title = `${sbm.about} | ${contacts.fullName}`;
  }, []);
  return (
    <Transition
      animation="fade right"
      duration={animationDuration}
      visible={showContent}
    >
      <Container className="home-page">
        <Divider section hidden className="top-divider" />
        <Container
          className="home-page-content-container"
          textAlign="justified"
        >
          <Header size="large">{wm.header}</Header>
          <Header size="small">{wm.subheader}</Header>
        </Container>
        <Divider hidden section className="top-divider" />
        <ProjectsPage isOnHomePage={true} />
      </Container>
    </Transition>
  );
};

export default HomePage;
