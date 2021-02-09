import React, { useState, FormEvent, useContext } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { IProduct } from "./product";
import { v4 as uuid } from "uuid";
import ProductStore from "./productStore";
import { observer } from "mobx-react-lite";

interface IProps {
  product: IProduct;
}

const ProductForm: React.FC<IProps> = ({
  product: initialFormState,
}) => {
  const productStore = useContext(ProductStore);
  const {
    createProduct,
    editProduct,
    submitting,
    cancelOpenForm,
  } = productStore;
  const initializeForm = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        id: "",
        name: "",
        category: "",
        description: "",
        dateAdded: "",
      };
    }
  };

  const [product, setProduct] = useState<IProduct>(initializeForm);

  const handleSubmit = () => {
    if (product.id.length === 0) {
      let newProduct = {
        ...product,
        id: uuid(),
      };
      createProduct(newProduct);
    } else {
      editProduct(product);
    }
  };

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setProduct({ ...product, [name]: value });
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleInputChange}
          name="name"
          placeholder="Title"
          value={product.name}
        />
        <Form.TextArea
          onChange={handleInputChange}
          name="description"
          rows={2}
          placeholder="Description"
          value={product.description}
        />
        <Form.Input
          onChange={handleInputChange}
          name="category"
          placeholder="Category"
          value={product.category}
        />
        <Form.Input
          onChange={handleInputChange}
          name="dateAdded"
          type="datetime-local"
          placeholder="Date"
          value={product.dateAdded}
        />
        <Button
          loading={submitting}
          floated="right"
          positive
          type="submit"
          content="Submit"
        />
        <Button
          onClick={cancelOpenForm}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};

export default observer(ProductForm);
