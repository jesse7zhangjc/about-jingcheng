import React, { useState } from 'react';
import { Sidebar, Menu, Divider } from 'semantic-ui-react';
import messages from 'messages/messages';
import 'components/sideNavigationBar/sideNavigationBar.css';

const { sideNavigationBar: snbm } = messages;
const pageItems = [
  snbm.home,
  snbm.about,
];
const contactItems = [
  snbm.resume,
  snbm.linkedIn,
  snbm.email,
];

const SideBarHeader = () => (
  <Menu.Header>
    <div className="name">Jingcheng Zhang</div>
    <div className="title">Software Engineer</div>
    <div className="employer">@ Amazon Web Services</div>
  </Menu.Header>
);

interface ISideBarMenuItem {
  menuItems: string[];
  activeItem?: string;
  setActiveItem?: React.Dispatch<React.SetStateAction<string>>;
}

const SideBarMenuItems = (props: ISideBarMenuItem) => {
  const onClickMenuItem = (item: string) => props.setActiveItem && item && props.setActiveItem(item)
  return (
    <Menu vertical fluid text size='massive'>
      {props.menuItems.map(
        item => (
          <Menu.Item
            content={<span>{item}</span>}
            key={item}
            active={item === props.activeItem}
            onClick={() => onClickMenuItem(item)}
          />
        )
      )}
    </Menu>
  );
};

interface ISideNavigationBarProps {
  visible: boolean,
};

export const SideNavigationBar = (props: ISideNavigationBarProps) => {
  const [activeItem, setActiveItem] = useState(pageItems[0]);
  return (
    <Sidebar animation="push" visible={props.visible} width="wide">
      <Divider className="top-divider" horizontal section />
      <SideBarHeader />
      <Divider horizontal section/>
      <SideBarMenuItems menuItems={pageItems} activeItem={activeItem} setActiveItem={setActiveItem} />
      <Divider horizontal section />
      <SideBarMenuItems menuItems={contactItems} activeItem={activeItem} />
    </Sidebar>
  );
};