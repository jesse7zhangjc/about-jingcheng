import React from 'react';
import { Container, Header, Divider, Transition } from 'semantic-ui-react';

import messages from 'messages/messages';
import Experience, { IExperienceProps } from 'components/mainContent/resumePage/Experience';
import Education, { IEducationProps } from 'components/mainContent/resumePage/Education';

import 'components/mainContent/resumePage/resumePage.css'
import { useTransitionEffect, animationDuration } from 'utils/transitionUtil';
import { HashLink } from 'react-router-hash-link';
import { IMainContentProps } from '../MainContent';

const {resumePage: rm} = messages;
const resumeSubTitles = [
  rm.experience,
  rm.education,
  // TODO: add in skills section
  // rm.skills,
];

const dummyExperience = {
  employerName: 'Amazon Web Services',
  title: 'Software Development Engineer',
  duration: 'November 2019 - Present',
  descriptions: [
    'Deployed quantitative strategies to predict the value of fine art in various pricing contexts',
    'Built production, on-line, end-to-end optimized machine learning pipelines with Pandas, Numpy, Scikit, Tensorflow, Dagster, Postgres, etc. on GCP with Kubernetes',
    'Designed micro-service architecture around: data collection, data integrity, feature engineering, research, strategy, backtesting, deployment, and reporting',
  ],
};

const experiences: IExperienceProps[] = [
  dummyExperience,
  dummyExperience,
  dummyExperience,
  dummyExperience,
  dummyExperience,
];

const education: IEducationProps[] = [
  {
    degree: 'M.S.',
    major: 'Industrial Engineering',
    school: 'New York University',
    classOf: 2015,
  },
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
          <Experience {...exp} />
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
      {education.map((edu, idx) => (
        <div key={idx}>
          <Education {...edu} />
          {idx !== experiences.length && <Divider hidden section/>}
        </div>
      ))}
    </div>
  );
};

type IResumePageProps = IMainContentProps;

const ResumePage = (props: IResumePageProps) => {
  const showContent = useTransitionEffect(props.sideBarReady ? 0 :animationDuration);
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