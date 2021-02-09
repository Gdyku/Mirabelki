import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import ProductStore from "./productStore";

const ProductDetails: React.FC = () => {
  const productStore = useContext(ProductStore);
  const {
    selectedProduct: product,
    openEditForm,
    cancelSelectedProduct,
  } = productStore;

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
            onClick={() => openEditForm(product!.id)}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            onClick={() => cancelSelectedProduct}
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
