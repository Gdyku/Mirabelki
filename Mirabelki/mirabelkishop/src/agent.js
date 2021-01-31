import axios from "axios";

axios.defaults.baseURL = "https://localhost:44370/api/";

const responseBody = (response) => response.data;

const sleep = (ms) => (response) => new Promise((resolve) => setTimeout(() => resolve(response), ms));

const requests = {
  get: (url) => axios.get(url).then(sleep(1000)).then(responseBody),
  post: (url, body) => axios.post(url, body).then(sleep(1000)).then(responseBody),
  put: (url, body) => axios.put(url, body).then(sleep(1000)).then(responseBody),
  del: (url) => axios.delete(url).then(sleep(1000)).then(responseBody),
};

const Products = {
  list: () => requests.get("Products/getproducts"),
  details: (id) => requests.get(`/Products/${id}`),
  create: (product) => requests.post("/Products", product),
  update: (product) => requests.put(`/Products/${product.id}`, product),
  delete: (id) => requests.del(`/Products/${id}`),
};

export default {
  Products,
};
