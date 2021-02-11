import { action, computed, configure, observable, runInAction } from "mobx";
import { createContext, SyntheticEvent } from "react";
import agent from "./agent";
import { IProduct } from "./product";

configure({ enforceActions: "always" });

class ProductStore {
  @observable productsRegistry = new Map();
  @observable product: IProduct | null = null;
  @observable loadingInitial = false;
  @observable submitting = false;
  @observable target = "";

  @computed get productsByDate() {
    return this.groupedProductsByDate(
      Array.from(this.productsRegistry.values())
    );
  }

  @action loadProducts = async () => {
    this.loadingInitial = true;
    try {
      const products = await agent.Products.list();
      runInAction("loading products", () => {
        products.forEach((product) => {
          product.dateAdded = product.dateAdded.split(".")[0];
          this.productsRegistry.set(product.id, product);
        });
        this.loadingInitial = false;
      });
    } catch (error) {
      runInAction("loading products error", () => {
        this.loadingInitial = false;
      });
      console.log(error);
    }
  };

  @action loadProduct = async (id: string) => {
    let product = this.getProduct(id);
    if (product) {
      this.product = product;
    } else {
      this.loadingInitial = true;
      try {
        product = await agent.Products.details(id);
        runInAction("getting product", () => {
          this.product = product;
          this.loadingInitial = false;
        });
      } catch (error) {
        runInAction("getting activity error", () => {
          this.loadingInitial = false;
        });
        console.log(error);
      }
    }
  };

  @action createProduct = async (product: IProduct) => {
    this.submitting = true;
    try {
      await agent.Products.create(product);
      runInAction("creating product", () => {
        this.productsRegistry.set(product.id, product);
        this.submitting = false;
      });
    } catch (error) {
      runInAction("creating product error", () => {
        this.submitting = false;
      });
      console.log(error);
    }
  };

  @action editProduct = async (product: IProduct) => {
    this.submitting = true;
    try {
      await agent.Products.update(product);
      runInAction("editing product", () => {
        this.productsRegistry.set(product.id, product);
        this.product = product;
        this.submitting = false;
      });
    } catch (error) {
      runInAction("editing product error", () => {
        this.submitting = false;
      });
      console.log(error);
    }
  };

  @action deleteProduct = async (
    event: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    this.submitting = true;
    this.target = event.currentTarget.name;
    try {
      await agent.Products.delete(id);
      runInAction("deleting product", () => {
        this.productsRegistry.delete(id);
        this.submitting = false;
        this.target = "";
      });
    } catch (error) {
      runInAction("deleting product error", () => {
        this.submitting = false;
        this.target = "";
      });

      console.log(error);
    }
  };

  @action clearProduct = () => {
    this.product = null;
  };

  getProduct = (id: string) => {
    return this.productsRegistry.get(id);
  };

  groupedProductsByDate(products: IProduct[]) {
    const groupedProducts = products.sort(
      (a, b) => Date.parse(a.dateAdded) - Date.parse(b.dateAdded)
    );
    return Object.entries(
      groupedProducts.reduce((products, product) => {
        const date = product.dateAdded.split("T")[0];
        products[date] = products[date]
          ? [...products[date], product]
          : [product];
        return products;
      }, {} as { [key: string]: IProduct[] })
    );
  }
}

export default createContext(new ProductStore());
