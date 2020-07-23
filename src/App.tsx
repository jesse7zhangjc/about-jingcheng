import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import { Sidebar, Segment } from 'semantic-ui-react';

import SideNavigationBar from 'components/sideNavigationBar/SideNavigationBar';
import MainContent from 'components/mainContent/MainContent';

import 'semantic-ui-css/semantic.min.css'

const App = () => {
  // const [sideBarVisible, setSidebarVisible] = useState(false);
  // const [mainContentVisible, setMainContentVisible] = useState(false);
  /** Update side bar visibility to show animation */
  // setTimeout(() => setSidebarVisible(true), sidebarPushTimeout);
  return (
    <Router>
        <Sidebar.Pushable as={Segment}>
          <SideNavigationBar />
          <Sidebar.Pusher>
            <MainContent />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    </Router>
  );
}

export default App;
