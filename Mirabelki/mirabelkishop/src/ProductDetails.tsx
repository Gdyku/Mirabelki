import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { IProduct } from './product';

interface IProps {
    product: IProduct;
    setEditMode: (editMode: boolean) => void;
    setSelectedProduct: (product: IProduct | null) => void;
}

export const ProductDetails: React.FC<IProps> = ({product, setEditMode, setSelectedProduct}) => {
  return (
    <Card fluid>
      <Image />
      <Card.Content>
        <Card.Header>{product.name}</Card.Header>
        <Card.Meta>
          <span>{product.dateAdded}</span>
        </Card.Meta>
        <Card.Description>
          {product.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
            <Button onClick={() => setEditMode(true)} basic color='blue' content='Edit' />
            <Button onClick={() => setSelectedProduct(null)} basic color='grey' content='Cancel' />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

