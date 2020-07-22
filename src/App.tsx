import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { SideNavigationBar } from 'components/sideNavigationBar/SideNavigationBar';

const App = () => {
  const [sideBarVisible, setSidebarVisible] = useState(false);
  // Update side bar visibility to show animation
  setTimeout(() => setSidebarVisible(true));
  return (
    <div className="App">
      <SideNavigationBar visible={sideBarVisible}/>
    </div>
  );
}

export default App;
