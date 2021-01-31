import React from 'react';
import { Item, Button, Label, Segment } from 'semantic-ui-react';

export const ProductList = ({
  products,
  selectProduct,
  deleteProduct,
  submitting,
  target
}) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        {products.map(product => (
          <Item key={product.id}>
            <Item.Content>
              <Item.Header as='a'>{product.name}</Item.Header>
              <Item.Meta>{product.dateAdded}</Item.Meta>
              <Item.Description>
                <div>{product.description}</div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => selectProduct(product.id)}
                  floated='right'
                  content='View'
                  color='blue'
                />
                <Button
                  name={product.id}
                  loading={target === product.id && submitting}
                  onClick={(e) => deleteProduct(e, product.id)}
                  floated='right'
                  content='Delete'
                  color='red'
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
