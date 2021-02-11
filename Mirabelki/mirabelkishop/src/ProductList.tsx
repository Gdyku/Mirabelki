import { observer } from "mobx-react-lite";
import React, { Fragment, useContext } from "react";
import { Item, Label } from "semantic-ui-react";
import ProductListItem from "./ProductListItem";
import ProductStore from "./productStore";

const ProductList: React.FC = () => {
  const productStore = useContext(ProductStore);
  const { productsByDate } = productStore;

  return (
    <Fragment>
      {productsByDate.map(([group, products]) => (
        <Fragment key={group}>
          <Label size="large" color="blue">
            {group}
          </Label>
          <Item.Group divided>
            {products.map(product => (
              <ProductListItem key={product.id} product={product} />
            ))}
          </Item.Group>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default observer(ProductList);
