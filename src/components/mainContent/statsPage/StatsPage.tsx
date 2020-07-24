import React from 'react';
import { Container, Header, Divider, Transition, Item } from 'semantic-ui-react';

import messages from 'messages/messages';
import { useTransitionEffect, animationDuration } from 'utils/transitionUtil';
import { IMainContentProps } from 'components/mainContent/MainContent';
import ProjectItem, { IProject } from 'components/mainContent/projectsPage/Project';

import 'components/mainContent/projectsPage/projectsPage.css'

const { projectsPage: pm } = messages;
const dummyProject = {
  name: 'About | Jingcheng',
  date: 'July, 2020',
  sourceHref: 'https://github.com/jesse7zhangjc/about-jingcheng',
  projectHref: 'https://jesse7zhangjc.github.io/about-jingcheng',
  desc: 'A simple personal website built from scratch with React',
  imgSrc: 'assets/images/projects/aboutJingchengPreview.png',
  stack: ['React', 'Semantic UI React']
};
const projectList: IProject[] = [
  dummyProject,
  dummyProject,
  dummyProject,
  dummyProject,
];

const ProjectsContent = () => {
  return (
    <Item.Group divided>
      {projectList.map((project, index) => <ProjectItem key={index} index={index + 1} project={project} />)}
    </Item.Group>
  );
};

type IProjectsPageProps = IMainContentProps;

const StatsPage = (props: IProjectsPageProps) => {
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

export default StatsPage;