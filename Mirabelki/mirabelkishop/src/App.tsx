import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ProductDashboard from "./ProductDashboard";
import { observer } from "mobx-react-lite";
import { Route, RouteComponentProps, withRouter } from "react-router-dom";
import ProductForm from "./ProductForm";
import ProductDetails from "./ProductDetails";

const App: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Route exact path="/products" component={ProductDashboard} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route
          key={location.key}
          path={["/createProduct", "/manage/:id"]}
          component={ProductForm}
        />
      </Container>
    </Fragment>
  );
};

export default withRouter(observer(App));
