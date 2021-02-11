import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Item, Button, Label, Segment } from "semantic-ui-react";
import ProductStore from "./productStore";

const ProductList: React.FC = () => {
  const productStore = useContext(ProductStore);
  const { productsByDate, deleteProduct, submitting, target } = productStore;

  return (
    <Segment clearing>
      <Item.Group divided>
        {productsByDate.map((product) => (
          <Item key={product.id}>
            <Item.Content>
              <Item.Header as="a">{product.name}</Item.Header>
              <Item.Meta>{product.dateAdded}</Item.Meta>
              <Item.Description>
                <div>{product.description}</div>
              </Item.Description>
              <Item.Extra>
                <Button
                  as={Link}
                  to={`/products/${product.id}`}
                  floated="right"
                  content="View"
                  color="blue"
                />
                <Button
                  name={product.id}
                  loading={target === product.id && submitting}
                  onClick={(e) => deleteProduct(e, product.id)}
                  floated="right"
                  content="Delete"
                  color="red"
                />
                <Label basic content={product.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default observer(ProductList);
