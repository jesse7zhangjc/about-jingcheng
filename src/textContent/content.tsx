// This is more like a config file that allows you to update the content that is showing on the app
// Might consider changing it to a json config file in the future

import { IEducation, IExperience, IProject } from 'textContent/contentTypes';

const welcome = {
  header: `Hi there, I'm Jingcheng.`,
  subheader: `I am an NYU graduate and a Software Development Engineer at Amazon Web Services. Before Amazon, I was at Byton, Faraday Future and BYD Coach and Bus building web apps to improve EV manufacturing experience.`,
};

const educations: IEducation[] = [
  {
    degree: 'M.S.',
    major: 'Industrial Engineering',
    school: 'New York University',
    classOf: 2015,
  },
];

const experiences: IExperience[] = [
  {
    employerName: 'Amazon Web Services, Inc.',
    title: 'Software Development Engineer',
    duration: 'November 2019 - Present',
    descriptions: [
      'Build complex customer-facing user interfaces for a new data wrangling AWS Console with React/Redux',
      'Integrated back-end APIs including AWS Glue, S3services, etc. to support front-end interactive user interfaces',
      'Implement data modeling transforms such as Joins, Unions, Pivot/Unpivot, Aggregate, etc. to manipulate data on the UI for preview and send requests to update DynamoDB and schedule Glue jobs',
      'Lead the design, development, deployment and improvement of integration and unit testing for the console',
      'Partner with UI/UX Designers to design, fulfill styling changes and better user experience',
    ],
  },
  {
    employerName: 'Byton North America Corp.',
    title: 'Full stack Developer',
    duration: 'January 2019 - July 2019',
    descriptions: [
      'Led, designed and built Supply Chain Dashboard web app with React.js/Redux, Chart.js Python Tornado and SQL Supply Chain department to monitor purchase and logistic status',
      'Developed RESTful APIs and HTTP API wrappers in Python to streamline data communication among Engineering and Business systems, including Intuit Quick Base, Enovia PLM, MS SharePoint, logistic portals',
      'Performed data analysis and visualization with Python Pandas to evaluate and improve business efficiency',
    ],
  },
  {
    employerName: 'Faraday Future Inc.',
    title: 'Full stack Engineer',
    duration: 'June 2018 - January 2019',
    descriptions: [
      'Led, designed and built CVIS (Complete Vehicle Inspection System) at both front and back end to optimize quality issue logging experience and efficiency of quality inspectors with an intuitive and interactive 3D UI',
      'Built RESTful APIs to provide quality inspection information to other systems and handle incoming XML/JSON requests from MES (Manufacturing Execution System) and inspection hardware',
      'Incorporated, integrated and refactored 3D Model built with Three.js into React for better user interactions',
    ],
  },
  {
    employerName: 'BYD Coach and Bus LLC.',
    title: 'Full stack Developer',
    duration: 'August 2017 - June 2018',
    descriptions: [
      'Led, designed and built Internal Purchase Request System Web Application at both front and back end to process purchase requests submitted to Purchasing; Eliminated 90% manual work and 95% human errors',
      'Designed and built RESTful APIs to validate material information, submit material requests, suspicious duplicated purchase requests, etc.; Integrated PR system and reporting system UI with back-end RESTful APIs',
    ],
  },
  {
    employerName: 'Bomoda, a Division of Weber Shandwick',
    title: 'Full stack Developer',
    duration: 'July 2016 - July 2017',
    descriptions: [
      'Performed regular and ad-hoc data ETL and keyword content analysis on social and E-commerce platforms (3 - 5 GB / day) with Python and SQL; Managed Google BigQuery database of aggregated data output',
      'DAutomated data visualization with Python; Saved 50% of time (over 100 man-hour) of the monthly report process and eliminate 90 % of human errors',
    ],
  },
];

const projects: IProject[] = [
  {
    name: 'About | Jingcheng',
    date: 'July, 2020',
    sourceHref: 'https://github.com/jesse7zhangjc/about-jingcheng',
    projectHref: 'https://jesse7zhangjc.github.io/about-jingcheng',
    desc: 'A simple personal website built from scratch with React',
    imgSrc: 'assets/images/projects/aboutJingchengPreview.png',
    stack: ['React', 'TypeScript', 'Semantic UI'],
  },
];

const contacts = {
  fullName: 'Jingcheng Zhang',
  firstName: 'Jingcheng',
  lastName: 'Zhang',
  title: 'Software Engineer',
  linkedIn: 'https://www.linkedin.com/in/jingcheng-zhang',
  github: 'https://github.com/jesse7zhangjc',
  angellist: 'https://angel.co/u/jingcheng-zhang',
  email: 'jingcheng.zhang@nyu.edu',
};

export const content = {
  welcome,
  educations,
  experiences,
  projects,
  contacts,
};
