import _ from 'lodash';

import messages from 'messages/messages';

const { sideNavigationBar: snbm } = messages;
export const pageItems = [
  snbm.home,
  snbm.about,
  snbm.projects,
  snbm.resume,
];

export const pagePathMap = {
  [snbm.home]: '/',
  [snbm.about]: '/about',
  [snbm.projects]: '/projects',
  [snbm.resume]: '/resume',
};

export const pathPageMap = _.invert(pagePathMap);