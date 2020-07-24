import React from 'react';
import { Item, Statistic, Icon } from 'semantic-ui-react';

export interface IProject {
  projectHref: string,
  sourceHref?: string,
  name: string,
  date: string,
  desc: string,
  imgSrc: string,
  stack?: string[],
};

interface IProjectItemProps {
  project: IProject,
  index: number,
}

const ProjectItem = ({ project, index }: IProjectItemProps) => {
  const projectStackSection = project.stack &&
    project.stack.length > 0 &&
    <Item.Extra className="project-item-stack">{`Stack: ${project.stack.join(', ')}`}</Item.Extra>;
  const projectSourceSection = project.sourceHref &&
    <Item.Extra className="project-item-stack" as="a" href={project.sourceHref} target='_blank' rel="noopener noreferrer">
      <Icon name="github"/>
      <span>Source code</span>
    </Item.Extra>;
  return (
    <Item className="project-item">
      <Item.Content className="project-item-content">
        <Statistic className={'project-item-index'} value={index.toString().padStart(2, '0')} size="small" />
        <Item.Header className="project-item-header" as="div">{project.name}</Item.Header>
        <Item.Meta className="project-item-date">{project.date}</Item.Meta>
        <Item.Description className="project-item-desc">{project.desc}</Item.Description>
        {projectStackSection}
        {projectSourceSection}
      </Item.Content>
      <Item.Image src={project.imgSrc} size="big" as="a" target="_blank" rel="noopener noreferrer" href={project.projectHref} />
    </Item>
  );
};

export default ProjectItem;