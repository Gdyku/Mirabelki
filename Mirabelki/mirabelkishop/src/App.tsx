import React, { useEffect, Fragment, useContext } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ProductDashboard from "./ProductDashboard";
import LoadingComponent from "./LoadingComponent";
import ProductStore from "./productStore";
import { observer } from "mobx-react-lite";

const App = () => {
  const productStore = useContext(ProductStore);

  useEffect(() => {
    productStore.loadProducts();
  }, [productStore]);

  if (productStore.loadingInitial)
    return <LoadingComponent content="Loading Products" />;

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ProductDashboard />
      </Container>
    </Fragment>
  );
};

export default observer(App);
