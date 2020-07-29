import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';

import { IExperience } from 'textContent/contentTypes';

interface IExperienceProps {
  experience: IExperience;
}

const Experience = ({ experience }: IExperienceProps) => {
  return (
    <Container>
      <div className="resume-exp-item-employer-title">
        <Header className="resume-exp-item-employer" as="span">
          {experience.employerName}
        </Header>
        <Header className="resume-exp-item-dash" as="span">
          -
        </Header>
        <Header className="resume-exp-item-title" as="span">
          {experience.title}
        </Header>
      </div>
      <Header className="resume-exp-item-duration" as="h5">
        {experience.duration}
      </Header>
      <List bulleted className="resume-exp-item-desc-list">
        {experience.descriptions.map((dsc, idx) => (
          <List.Item key={idx} className="resume-exp-item-desc-item">
            {dsc}
          </List.Item>
        ))}
      </List>
    </Container>
  );
};

export default Experience;
