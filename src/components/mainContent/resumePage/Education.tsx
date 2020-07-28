import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import { IEducation } from 'textContent/contentTypes';

interface IEducationProps {
  education: IEducation;
};

const Education = ({ education }: IEducationProps) => {
  return (
    <Container>
      <div className="resume-edu-degree-major">
        <Header className="resume-edu-item-degree" as="span" size="small">{`${education.degree}`}</Header>
        <Header className="resume-edu-item-in" as="span" size="small">in</Header>
        <Header className="resume-edu-item-major" as="span" size="small">{`${education.major}`}</Header>
      </div>
      <div className="resume-edu-school-class">
        <Header className="resume-edu-item-school" as="span" size="small">{education.school}</Header>
        <Header className="resume-edu-item-comma" as="span" size="small">,</Header>
        <Header className="resume-edu-item-class" as="span" size="small">{education.classOf}</Header>
      </div>
    </Container>
  );
};

export default Education;