import { observable, action} from "mobx";
import {createContext} from "react";
import agent from "./agent";

class ProductStore{
    @observable products = [];
    @observable loadingInitial = false;

    @action loadProducts = () => {
        this.loadingInitial = true;
        agent.Products.list().then(products => {
            products.forEach((product) => {
                product.dateAdded = product.dateAdded.split(".")[0];
                this.products.push(product);
            });
        }).finally(() => this.loadingInitial = false);
    };
}

export default createContext(new ProductStore());