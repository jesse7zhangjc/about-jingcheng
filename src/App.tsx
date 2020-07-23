import React, { useState } from 'react';
import { HashRouter as Router } from "react-router-dom";
import { Sidebar, Segment } from 'semantic-ui-react';

import { animationDuration } from 'utils/transitionUtil';
import SideNavigationBar from 'components/sideNavigationBar/SideNavigationBar';
import MainContent from 'components/mainContent/MainContent';

import 'semantic-ui-css/semantic.min.css'

const App = () => {
  const [sideBarReady, setSideBarReady] = useState(false);
  setTimeout(() => {
    !sideBarReady && setSideBarReady(true);
  }, animationDuration);
  return (
    <Router>
        <Sidebar.Pushable as={Segment}>
          <SideNavigationBar />
          <Sidebar.Pusher>
          <MainContent sideBarReady={sideBarReady} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    </Router>
  );
}

export default App;
