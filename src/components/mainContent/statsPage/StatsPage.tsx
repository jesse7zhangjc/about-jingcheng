import React from 'react';
import { Container, Header, Divider, Transition, Statistic, Loader, Message } from 'semantic-ui-react';

import messages from 'messages/messages';
import { useRepoStatus, IRepoStatus } from 'apis/github';
import { useTransitionEffect, animationDuration } from 'utils/transitionUtil';
import { IMainContentProps } from 'components/mainContent/MainContent';

import 'components/mainContent/statsPage/statsPage.css'

const { statsPage: spm } = messages;

// TODO: redesign this section
const StatsSection = () => {
  const [repoStatus, isLoading] = useRepoStatus() as [IRepoStatus, (boolean | undefined)];
  if (isLoading === undefined) {
    return null;
  }

  if (isLoading) {
    return (
      <Statistic.Group size="small">
        <Statistic value={<Loader active inline />} label="Lines" />
        <Statistic value={<Loader active inline />} label="Forks" />
        <Statistic value={<Loader active inline />} label="Stargazers" />
        <Statistic value={<Loader active inline />} label="Subscribers" />
        <Statistic value={<Loader active inline />} label="Watchers" />
        <Statistic value={<Loader active inline />} label="Updated at" />
      </Statistic.Group>
    );
  }

  if (!repoStatus && !isLoading) {
    return (
      <Message negative>
        <Message.Header>Cannot fetch repo status data</Message.Header>
      </Message>
    );
  }
  return (
    <Statistic.Group size="tiny">
      <Statistic value={repoStatus.size.toLocaleString()} label="Lines" />
      <Statistic value={repoStatus.forks_count.toLocaleString()} label="Forks" />
      <Statistic value={repoStatus.stargazers_count.toLocaleString()} label="Stargazers" />
      <Statistic value={repoStatus.subscribers_count.toLocaleString()} label="Subscribers" />
      <Statistic value={repoStatus.watchers_count.toLocaleString()} label="Watchers" />
      <Statistic value={repoStatus.updated_at} label="Updated at" />
    </Statistic.Group>
  );
}

type IStatsPageProps = IMainContentProps;

const StatsPage = (props: IStatsPageProps) => {
  const showContent = useTransitionEffect(props.sideBarReady ? 0 :animationDuration);
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