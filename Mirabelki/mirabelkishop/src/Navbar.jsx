import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

export const Navbar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item name ="home" style={{}}/>
        <Menu.Item position="right">
            <Button positive content="Log in" />
        </Menu.Item>
        <Menu.Item>
            <Button positive content="Sign up"/>
        </Menu.Item>
      </Container>
    </Menu>
  );
};
