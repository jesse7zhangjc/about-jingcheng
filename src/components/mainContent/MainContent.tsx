import React from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from 'components/mainContent/homePage/HomePage';
import ResumePage from 'components/mainContent/resumePage/ResumePage';

import 'components/mainContent/mainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/resume"><ResumePage /></Route>
      </Switch>
    </div>
  );
}

export default MainContent;
