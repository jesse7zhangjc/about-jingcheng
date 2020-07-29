import React, { useEffect } from 'react';
import { Container, Header, Divider, Transition } from 'semantic-ui-react';

import messages from 'messages';
import { useTransitionEffect, animationDuration } from 'utils/transitionUtil';
import { IMainContentProps } from 'components/mainContent/MainContent';

import 'components/mainContent/statsPage/statsPage.css'
import AboutThisRepoSection from './AboutThisRepoSection';

const { sideNavigationBar: sbm, statsPage: spm, content: { contacts } } = messages;

const StatsSection = () => {
  return <AboutThisRepoSection />;
}

type IStatsPageProps = IMainContentProps;

const StatsPage = (props: IStatsPageProps) => {
  const showContent = useTransitionEffect(props.sideBarReady ? 0 :animationDuration);
  useEffect(() => {
    document.title = `${sbm.stats} | ${contacts.fullName}`;
  }, [])
  return (
    <Transition animation="fade right" duration={animationDuration} visible={showContent}>
      <Container className="stats-page">
        <Divider section hidden />
        <Header className="stats-title" size="huge">{spm.stats}</Header>
        <Divider hidden />
        <Divider />
        <StatsSection />
      </Container>
    </Transition>
  );
};

export default StatsPage;