import React, { useState, useEffect, Fragment } from "react";
import { Container } from "semantic-ui-react";
import {NavBar} from "./NavBar";
import { ProductDashboard } from "./ProductDashboard";
import agent from "./agent";
import {LoadingComponent} from "./LoadingComponent";

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [target, setTarget] = useState("");

  const handleOpenCreateForm = () => {
    setSelectedProduct(null);
    setEditMode(true);
  };

  const handleCreateProduct = (product) => {
    setSubmitting(true);
    agent.Products.create(product)
      .then(() => {
        setProducts([...products, product]);
        setSelectedProduct(product);
        setEditMode(false);
      })
      .then(() => setSubmitting(false));
  };

  const handleEditProduct = (product) => {
    setSubmitting(true);
    agent.Products.update(product)
      .then(() => {
        setProducts([...products.filter((p) => p.id !== product.id), product]);
        setSelectedProduct(product);
        setEditMode(false);
      })
      .then(() => setSubmitting(false));
  };

  const handleDeleteProduct = (event, id) => {
    setSubmitting(true);
    setTarget(event.currentTarget.name);
    agent.Products.delete(id)
      .then(() => {
        setProducts([...products.filter((p) => p.id !== id)]);
      })
      .then(() => setSubmitting(false));
  };

  const handleSelectProduct = (id) => {
    setSelectedProduct(products.filter((p) => p.id === id)[0]);
    setEditMode(false);
  };

  useEffect(() => {
    agent.Products.list()
      .then((response) => {
        let products = [];
        response.forEach((product) => {
          product.dateAdded = product.dateAdded.split(".")[0];
          products.push(product);
        });
        setProducts(products);
      })
      .then(() => setLoading(false));
  }, []);

  if (loading) return <LoadingComponent content="Loading activities" />;

  return (
    <Fragment>
      <NavBar openCreateForm={handleOpenCreateForm} />
      <Container style={{ marginTop: "7em" }}>
        <ProductDashboard
          products={products}
          selectProduct={handleSelectProduct}
          selectedProduct={selectedProduct}
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedProduct={setSelectedProduct}
          createProduct={handleCreateProduct}
          editProduc={handleEditProduct}
          deleteProduct={handleDeleteProduct}
          submitting={submitting}
          target={target}
        />
      </Container>
    </Fragment>
  );
};

export default App;
