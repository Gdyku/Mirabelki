import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

export const NavBar = ({openCreateForm}) => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" style={{marginRight: 10}}/>
            Reactivities
        </Menu.Item>
        <Menu.Item name='Activities' />
        <Menu.Item>
            <Button onClick={openCreateForm} positive content='Create Product' />
        </Menu.Item>
      </Container>
    </Menu>
  );
};
