import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";

const NavBar: React.FC = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
          Store
        </Menu.Item>
        <Menu.Item name="Products" as={NavLink} to="/products" />
        <Menu.Item>
          <Button
            as={NavLink}
            to="/createProduct"
            positive
            content="Create Product"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
