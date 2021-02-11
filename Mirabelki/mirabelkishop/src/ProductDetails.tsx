import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";
import LoadingComponent from "./LoadingComponent";
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
    <Card fluid>
      <Image />
      <Card.Content>
        <Card.Header>{product!.name}</Card.Header>
        <Card.Meta>
          <span>{product!.dateAdded}</span>
        </Card.Meta>
        <Card.Description>{product!.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            as={Link}
            to={`/manage/${product.id}`}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            onClick={() => history.push("/products")}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default observer(ProductDetails);
