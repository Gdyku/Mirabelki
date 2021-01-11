import "./App.css";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "./Navbar";
import { Container } from "semantic-ui-react";
import { ProductDashboard } from "./ProductDashboard";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:44370/api/Products/getproducts").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Container style={{marginTop: '7em'}}>
        <ProductDashboard products={products}/>
      </Container>
    </Fragment>
  );
};

export default App;
