import _ from 'lodash';

import messages from 'messages';

const { sideNavigationBar: snbm } = messages;
enum Page {
  Home = '/',
  About = '/about',
  Projects = '/projects',
  Resume = '/resume',
  Stats = '/stats',
};

export const pageItems = [
  snbm.home,
  snbm.resume,
  snbm.projects,
  snbm.stats,
];

export const pagePathMap = {
  [snbm.home]: Page.Home,
  [snbm.about]: Page.About,
  [snbm.projects]: Page.Projects,
  [snbm.resume]: Page.Resume,
  [snbm.stats]: Page.Stats,
};

export const pathPageMap = _.invert(pagePathMap);