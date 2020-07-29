import React, { useEffect } from 'react';
import { Container, Header, Divider, Transition } from 'semantic-ui-react';

import messages from 'messages';
import Experience from 'components/mainContent/resumePage/Experience';
import Education from 'components/mainContent/resumePage/Education';

import 'components/mainContent/resumePage/resumePage.css'
import { useTransitionEffect, animationDuration } from 'utils/transitionUtil';
import { HashLink } from 'react-router-hash-link';
import { IMainContentProps } from '../MainContent';

const { sideNavigationBar: sbm, resumePage: rm, content: { experiences, educations, contacts } } = messages;
const resumeSubTitles = [
  rm.experience,
  rm.education,
  // TODO: add in skills section
  // rm.skills,
];

const ResumeSubTitleLinks = () => (
  <div className="subtitles">
    {resumeSubTitles.map(subTitle => (
      <Header className="resume-subtitle-link" size="small" key={subTitle} as="span">
        <HashLink smooth to={`/resume#${subTitle.toLowerCase()}-section`}>{subTitle}</HashLink>
      </Header>
    ))}
  </div>
);

const ExperienceSection = () => {
  return (
    <div id="experiment-section">
      <Header className="resume-subtitle" size="large">{rm.experience}</Header>
      {experiences.map((exp, idx) => (
        <div key={idx}>
          <Experience experience={exp} />
          {idx !== experiences.length && <Divider hidden section/>}
        </div>
      ))}
    </div>
  );
};

const EducationSection = () => {
  return (
    <div id="education-section">
      <Header className="resume-subtitle" size="large">{rm.education}</Header>
      {educations.map((edu, idx) => (
        <div key={idx}>
          <Education education={edu} />
          {idx !== experiences.length && <Divider hidden section/>}
        </div>
      ))}
    </div>
  );
};

type IResumePageProps = IMainContentProps;

const ResumePage = (props: IResumePageProps) => {
  const showContent = useTransitionEffect(props.sideBarReady ? 0 :animationDuration);
  useEffect(() => {
    document.title = `${sbm.resume} | ${contacts.fullName}`;
  }, [])
  return (
    <Transition animation="fade right" duration={animationDuration} visible={showContent}>
      <Container className="resume-page">
        <Divider section hidden />
        <Header className="resume-title" size="huge">{rm.resume}</Header>
        <Divider hidden />
        <ResumeSubTitleLinks />
        <Divider />
        <Divider hidden section/>
        <ExperienceSection />
        <Divider hidden section/>
        <EducationSection />
      </Container>
    </Transition>
  );
};

export default ResumePage;