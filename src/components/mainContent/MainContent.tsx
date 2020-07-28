import React from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from 'components/mainContent/homePage/HomePage';
import ResumePage from 'components/mainContent/resumePage/ResumePage';
import ProjectsPage from 'components/mainContent/projectsPage/ProjectsPage';
import StatsPage from 'components/mainContent/statsPage/StatsPage';

import 'components/mainContent/mainContent.css';

export interface IMainContentProps {
  /**
   *  This flag is used to tell if the side bar animation is finished already
   * If so, the content in the MainContent component will show up right away.
   * Otherwise, the content will wait for the side bar animation, then show itself afterwards.
   */
  sideBarReady?: boolean;
};

const MainContent = (props: IMainContentProps) => {
  return (
    <div className="main-content">
      <Switch>
        <Route exact path="/"><HomePage {...props} /></Route>
        <Route exact path="/resume"><ResumePage {...props} /></Route>
        <Route exact path="/projects"><ProjectsPage {...props} /></Route>
        <Route exact path="/stats"><StatsPage {...props} /></Route>
      </Switch>
    </div>
  );
};

export default MainContent;
