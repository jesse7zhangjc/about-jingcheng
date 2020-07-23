import React, { useState } from 'react';
import { Sidebar, Menu, Divider, Transition, Container, Icon, SemanticICONS } from 'semantic-ui-react';
import { useHistory, useLocation } from 'react-router-dom'


import { animationDuration } from 'utils/transitionUtil';
import { pagePathMap, pageItems, pathPageMap } from 'utils/pageUtils';

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

interface ISideBarContactIconProps {
  iconName: SemanticICONS;
  href: string;
};

const SideBarContactIcon = ({ iconName, href }: ISideBarContactIconProps) => (
  <a
    target="_blank"
    rel='noopener noreferrer'
    href={href}
  >
    <Icon name={iconName} size="big" />
  </a>
);

const contactInfo: ISideBarContactIconProps[] = [
  {
    iconName: 'linkedin',
    href: 'https://www.linkedin.com/in/jingcheng-zhang/',
  },
  {
    iconName: 'github',
    href: 'https://github.com/jesse7zhangjc',
  },
  {
    iconName: 'angellist',
    href: 'https://angel.co/u/jingcheng-zhang',
  },
  {
    iconName: 'mail outline',
    href: 'mailto:jingcheng.zhang@nyu.edu',
  },
];

const SideBarContactIcons = () => (
  <Container className="contact-icon-container" fluid>
    <div>
      {contactInfo.map((info, idx) => <SideBarContactIcon key={idx} {...info} />)}
    </div>
  </Container>
);

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
  setTimeout(() => setShowItems(true), animationDuration);
  return (
    <Sidebar animation="push" visible={showSidebar} width="wide">
      <Transition visible={showItems} animation="fade up" duration={500}>
        <Container fluid>
          <Divider className="top-divider" horizontal section />
          <SideBarHeader />
          <Divider horizontal section/>
          <SideBarMenuItems menuItems={pageItems} activeItem={activeItem} setActiveItem={setActiveItem} />
          <Divider horizontal section />
          <SideBarContactIcons />
        </Container>
      </Transition>
      <CopyRightFooter />
    </Sidebar>
  );
};



export default SideNavigationBar;