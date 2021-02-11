import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "./LoadingComponent";
import ProductList from "./ProductList";
import ProductStore from "./productStore";

const ProductDashboard: React.FC = () => {
  const productStore = useContext(ProductStore);

  useEffect(() => {
    productStore.loadProducts();
  }, [productStore]);

  if (productStore.loadingInitial)
    return <LoadingComponent content="Loading Products" />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ProductList />
      </Grid.Column>
      <Grid.Column width={6}></Grid.Column>
    </Grid>
  );
};

export default observer(ProductDashboard);
