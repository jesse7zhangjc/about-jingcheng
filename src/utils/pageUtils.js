import messages from 'messages/messages';

const { sideNavigationBar: snbm } = messages;
export const pageItems = [
  snbm.home,
  snbm.about,
  snbm.resume,
];

export const contactItems = [
  snbm.linkedIn,
  snbm.email,
];

export const pagePathMap = {
  [snbm.home]: '/',
  [snbm.about]: '/about',
  [snbm.resume]: '/resume',
};