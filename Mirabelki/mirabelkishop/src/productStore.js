import {createContext} from "react";
import { action, computed, decorate, observable } from "../node_modules/mobx/lib/mobx";
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

decorate(ProductStore, {
    start: observable,
    current: observable,
    elapsedTime: computed,
    tick: action
});

export default createContext(new ProductStore());