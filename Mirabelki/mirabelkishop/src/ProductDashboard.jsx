import React from "react";
import { Grid, List } from "semantic-ui-react";
import { ProductList } from "./ProductList";


export const ProductDashboard = ({products}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ProductList products={products}/>
        {/* <List>
          {products.map((product) => (
            <List.Item key={product.id}>{product.name}</List.Item>
            
          ))}
        </List> */}
      </Grid.Column>
    </Grid>
  );
};
