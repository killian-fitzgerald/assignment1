import React from "react";
import { Menu } from 'semantic-ui-react';

const Nav = (props) => {
  return (
    <Menu color='orange' stackable inverted>
    <Menu.Item>
      <img src='images/logo.png' alt='CSGO Skins Logo' />
    </Menu.Item>

    <Menu.Item active>
      Home
    </Menu.Item>

    <Menu.Item>
      Buy Skins
    </Menu.Item>

  </Menu>
  )
};

export default Nav;
