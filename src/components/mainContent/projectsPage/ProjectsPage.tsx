import React, { useEffect } from 'react';
import {
  Container,
  Header,
  Divider,
  Transition,
  Item,
} from 'semantic-ui-react';

import messages from 'messages';
import { useTransitionEffect, animationDuration } from 'utils/transitionUtil';
import { IMainContentProps } from 'components/mainContent/MainContent';
import ProjectItem from 'components/mainContent/projectsPage/Project';

import 'components/mainContent/projectsPage/projectsPage.css';

const {
  sideNavigationBar: sbm,
  projectsPage: pm,
  content: { projects, contacts },
} = messages;

const ProjectsContent = () => {
  return (
    <Item.Group divided>
      {projects.map((project, index) => (
        <ProjectItem key={index} index={index + 1} project={project} />
      ))}
    </Item.Group>
  );
};

interface IProjectsPageProps extends IMainContentProps {
  /** Use this flag to decide if we want to update the page title to Project */
  isOnHomePage: boolean;
}

const ProjectsPage = (props: IProjectsPageProps) => {
  const showContent = useTransitionEffect(
    props.sideBarReady ? 0 : animationDuration
  );
  useEffect(() => {
    if (!props.isOnHomePage) {
      document.title = `${sbm.projects} | ${contacts.fullName}`;
    }
    // Disable warnings for missing dependencies in useEffect
    // More details: https://github.com/facebook/create-react-app/issues/6880#issuecomment-485912528
    // eslint-disable-next-line
  }, []);
  return (
    <Transition
      animation="fade right"
      duration={animationDuration}
      visible={showContent}
    >
      <Container className="projects-page">
        <Divider section hidden />
        <Header className="projects-title" size="huge">
          {pm.projects}
        </Header>
        <Divider hidden />
        <Divider />
        <ProjectsContent />
      </Container>
    </Transition>
  );
};

export default ProjectsPage;
