import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";

export const ProductList = ({ products }) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        {products.map((product) => (
          <Item key={product.ID}>
            <Item.Image size="tiny" />
            <Item.Content>
              <Item.Header as="a">{product.Name}</Item.Header>
              <Item.Meta>{product.DateAdded}</Item.Meta>
              <Item.Description>
                <div>{product.Description}</div>
              </Item.Description>
              <Item.Extra>
                <Button floated="right" content="View" color="blue" />
                <Label basic content={product.Category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};
