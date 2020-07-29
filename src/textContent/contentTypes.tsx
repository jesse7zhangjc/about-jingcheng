export interface IEducation {
  degree: string;
  major: string;
  school: string;
  classOf: number;
}

export interface IExperience {
  employerName: string;
  title: string;
  duration: string;
  descriptions: string[];
}

export interface IProject {
  projectHref: string;
  sourceHref?: string;
  name: string;
  date: string;
  desc: string;
  imgSrc: string;
  stack?: string[];
}
