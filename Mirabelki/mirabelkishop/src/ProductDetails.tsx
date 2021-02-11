import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "./LoadingComponent";
import { ProductDetailedChat } from "./ProductDetailedChat";
import  ProductDetailedHeader  from "./ProductDetailedHeader";
import { ProductDetailedInfo } from "./ProductDetailedInfo";
import { ProductDetailedSidebar } from "./ProductDetailedSidebar";
import ProductStore from "./productStore";

interface DetailParams {
  id: string;
}

const ProductDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history,
}) => {
  const productStore = useContext(ProductStore);
  const {
    product,
    loadProduct,
    loadingInitial,
  } = productStore;

  useEffect(() => {
    loadProduct(match.params.id);
  }, [loadProduct, match.params.id]);

  if (loadingInitial || !product)
    return <LoadingComponent content="Loading products" />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ProductDetailedHeader product={product}/>
        <ProductDetailedInfo product={product}/>
        <ProductDetailedChat/>
      </Grid.Column>
      <Grid.Column width={6}>
        <ProductDetailedSidebar />
      </Grid.Column>
    </Grid>
  );
};

export default observer(ProductDetails);
