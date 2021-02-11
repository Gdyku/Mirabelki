import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";
import { IProduct } from "./product";

const ProductListItem: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <Segment.Group>
      <Segment>
        <Item>
          <Item.Content>
            <Item.Header as="a">{product.name}</Item.Header>
            <Item.Extra>
              <Label basic content={product.category} />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Segment>
      <Segment>
        <Icon name="clock" /> {product.dateAdded}
      </Segment>
      <Segment clearing>
        <span>{product.description}</span>
        <Button
          as={Link}
          to={`/products/${product.id}`}
          floated="right"
          content="View"
          color="blue"
        />
      </Segment>
    </Segment.Group>
  );
};

export default ProductListItem;
