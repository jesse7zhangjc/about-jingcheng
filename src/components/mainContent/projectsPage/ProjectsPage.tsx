import React from 'react';
import { Container, Header, Divider, Transition, Item } from 'semantic-ui-react';

import messages from 'messages';
import { useTransitionEffect, animationDuration } from 'utils/transitionUtil';
import { IMainContentProps } from 'components/mainContent/MainContent';
import ProjectItem from 'components/mainContent/projectsPage/Project';

import 'components/mainContent/projectsPage/projectsPage.css'

const { projectsPage: pm, content: { projects } } = messages;

const ProjectsContent = () => {
  return (
    <Item.Group divided>
      {projects.map((project, index) => <ProjectItem key={index} index={index + 1} project={project} />)}
    </Item.Group>
  );
};

type IProjectsPageProps = IMainContentProps;

const ProjectsPage = (props: IProjectsPageProps) => {
  const showContent = useTransitionEffect(props.sideBarReady ? 0 :animationDuration);
  return (
    <Transition animation="fade right" duration={animationDuration} visible={showContent}>
      <Container className="projects-page">
        <Divider section hidden />
        <Header className="projects-title" size="huge">{pm.projects}</Header>
        <Divider hidden />
        <Divider />
        <ProjectsContent />
      </Container>
    </Transition>
  );
};

export default ProjectsPage;