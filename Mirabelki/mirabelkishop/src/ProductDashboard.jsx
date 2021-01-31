import React from 'react';
import { Grid } from 'semantic-ui-react';
import {ProductList} from './ProductList';
import { ProductDetails } from './ProductDetails';
import { ProductForm } from './ProductForm';

export const ProductDashboard = ({
  products,
  selectProduct,
  selectedProduct,
  editMode,
  setEditMode,
  setSelectedProduct,
  createProduct,
  editProduct,
  deleteProduct,
  submitting,
  target
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ProductList
          products={products}
          selectProduct={selectProduct}
          deleteProduct={deleteProduct}
          submitting={submitting}
          target={target}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedProduct && !editMode && (
          <ProductDetails
            product={selectedProduct}
            setEditMode={setEditMode}
            setSelectedProduct={setSelectedProduct}
          />
        )}
        {editMode && (
          <ProductForm
            key={(selectedProduct && selectedProduct.id) || 0}
            setEditMode={setEditMode}
            product={selectedProduct}
            createProduct={createProduct}
            editProduct={editProduct}
            submitting={submitting}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

