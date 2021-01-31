import React, { useState, FormEvent } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import {v4 as uuid} from 'uuid';

export const ProductForm= ({
  setEditMode,
  product: initialFormState,
  editProduct,
  createProduct,
  submitting
}) => {
  const initializeForm = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        id: '',
        name: '',
        category: '',
        description: '',
        dateAdded: '',
      };
    }
  };

  const [product, setProduct] = useState(initializeForm);

  const handleSubmit = () => {
    if (product.id.length === 0) {
      let newProduct = {
        ...product,
        id: uuid()
      };
      createProduct(newProduct);
    } else {
      editProduct(product);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    setProduct({ ...product, [name]: value });
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleInputChange}
          name='name'
          placeholder='name'
          value={product.name}
        />
        <Form.TextArea
          onChange={handleInputChange}
          name='description'
          rows={2}
          placeholder='Description'
          value={product.description}
        />
        <Form.Input
          onChange={handleInputChange}
          name='category'
          placeholder='Category'
          value={product.category}
        />
        <Form.Input
          onChange={handleInputChange}
          name='dateAdded'
          type='datetime-local'
          placeholder='Date'
          value={product.dateAdded}
        />
        <Button loading={submitting} floated='right' positive type='submit' content='Submit' />
        <Button
          onClick={() => setEditMode(false)}
          floated='right'
          type='button'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
};


