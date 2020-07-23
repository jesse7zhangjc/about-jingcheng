import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';

export interface IExperienceProps {
  employerName: string,
  title: string,
  duration: string,
  descriptions: string[],
};

const Experience = (props: IExperienceProps) => {
  return (
    <Container>
      <div className="resume-exp-item-employer-title">
        <Header className="resume-exp-item-employer" as="span">{props.employerName}</Header>
        <Header className="resume-exp-item-dash" as="span">-</Header>
        <Header className="resume-exp-item-title" as="span">{props.title}</Header>
      </div>
      <Header className="resume-exp-item-duration" as="h5">{props.duration}</Header>
      <List bulleted className="resume-exp-item-desc-list">
        {props.descriptions.map((dsc, idx) => <List.Item key={idx} className="resume-exp-item-desc-item">{dsc}</List.Item>)}
      </List>
    </Container>
  );
};

export default Experience;