import React from 'react';
import { Container, Header } from 'semantic-ui-react';

export interface IEducationProps {
  degree: string;
  major: string;
  school: string;
  classOf: number;
}

const Education = (props: IEducationProps) => {
  return (
    <Container>
      <div className="resume-edu-degree-major">
        <Header className="resume-edu-item-degree" as="span" size="small">{`${props.degree}`}</Header>
        <Header className="resume-edu-item-in" as="span" size="small">in</Header>
        <Header className="resume-edu-item-major" as="span" size="small">{`${props.major}`}</Header>
      </div>
      <div className="resume-edu-school-class">
        <Header className="resume-edu-item-school" as="span" size="small">{props.school}</Header>
        <Header className="resume-edu-item-comma" as="span" size="small">,</Header>
        <Header className="resume-edu-item-class" as="span" size="small">{props.classOf}</Header>
      </div>
    </Container>
  );
};

export default Education;