import React from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from 'components/mainContent/homePage/HomePage';

import 'components/mainContent/mainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <Switch>
          <Route exact path="/"><HomePage /></Route>
      </Switch>
    </div>
  );
}

export default MainContent;
