import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Header, Image, Item, PlaceholderImage, Segment } from "semantic-ui-react";
import { IProduct } from "./product";

const productImageStyle = {
    filter: 'brightness(30%)'
};

const productImageTextStyle ={
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

const ProductDetailedHeader: React.FC<{product: IProduct}> = ({product}) => {
  return (
    <Segment.Group>
      <Segment basic attached='top' style={{padding: '0'}}>
        <Image src={PlaceholderImage} fluid style={productImageStyle} />
        <Segment basic style={productImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header size='huge' content={product.name} style={'white'} />
                <p>{product.dateAdded}</p>
                <p>Hosted by <strong>Patryk</strong></p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>
      <Segment clearing attached='bottom'>
        <Button color='teal'>Buy</Button>
        <Button color='orange' floated='right'>Edit auction</Button>
      </Segment>
    </Segment.Group>
  );
};

export default observer(ProductDetailedHeader);