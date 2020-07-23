import React, { useState } from 'react';
import { Sidebar, Menu, Divider, Transition, Container } from 'semantic-ui-react';
import { useHistory, useLocation } from 'react-router-dom'


import { sidebarShowContentTimeout } from 'utils/transitionUtil';
import { pagePathMap, pageItems, contactItems, pathPageMap } from 'utils/pageUtils';

import 'components/sideNavigationBar/sideNavigationBar.css';




const SideBarHeader = () => (
  <Menu.Header>
    <div className="name">Jingcheng Zhang</div>
    <div className="title">Software Engineer</div>
    <div className="employer">@ Amazon Web Services</div>
  </Menu.Header>
);

interface ISideBarMenuItemsProps {
  menuItems: string[];
  activeItem?: string;
  setActiveItem?: React.Dispatch<React.SetStateAction<string>>;
}

const SideBarMenuItems = (props: ISideBarMenuItemsProps) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const goToPage = (item: string) => pagePathMap[item] && pathname !== pagePathMap[item] && history.push(pagePathMap[item]);
  const getMenuItem = (item: string) => {
    const onClick = () => {
      if (props.setActiveItem && item) {
        props.setActiveItem(item);
        goToPage(item);
      }
    };
    return (
      <Menu.Item
        content={<span>{item}</span>}
        key={item}
        active={item === props.activeItem}
        onClick={onClick}
      />
    );
  };
  return (
    <Menu vertical fluid text size='massive'>
      {props.menuItems.map(getMenuItem)}
    </Menu>
  );
};

const CopyRightFooter = () => (
  <div className="copy-right-footer">
    <p>© 2020 Jingcheng Zhang</p>
    <p>Built from scratch with React</p>
  </div>
);

const SideNavigationBar = () => {
  const [activeItem, setActiveItem] = useState(pageItems[0]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showItems, setShowItems] = useState(false);
  const { pathname } = useLocation();
  pathPageMap[pathname] && activeItem !== pathPageMap[pathname] && setActiveItem(pathPageMap[pathname]);
  setTimeout(() => setShowSidebar(true));
  setTimeout(() => setShowItems(true), sidebarShowContentTimeout);
  return (
    <Sidebar animation="push" visible={showSidebar} width="wide">
      <Transition visible={showItems} animation="fade up" duration={500}>
        <Container fluid>
          <Divider className="top-divider" horizontal section />
          <SideBarHeader />
          <Divider horizontal section/>
          <SideBarMenuItems menuItems={pageItems} activeItem={activeItem} setActiveItem={setActiveItem} />
          <Divider horizontal section />
          <SideBarMenuItems menuItems={contactItems} activeItem={activeItem} />
        </Container>
      </Transition>
      <CopyRightFooter />
    </Sidebar>
  );
};



export default SideNavigationBar;