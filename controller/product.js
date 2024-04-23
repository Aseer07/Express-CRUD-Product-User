const fs = require("fs");

const rawData = fs.readFileSync("productData.json", "utf-8");
const data = JSON.parse(rawData);
const products = data.products;

//CRUD OPERATION
exports.createProduct = (req, res) => {
  products.push(req.body);
  res.json(req.body);
};

exports.getAllProduct = (req, res) => {
  res.json(products);
};

exports.getProducts = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);
  res.json(product);
};

exports.updateProduct = (req, res) => {
  const id = Number(req.params.id);
  const findIndex = products.find((p) => p.id === id);
  let updateData = products.splice(findIndex, 1, { ...req.body, id });
  res.send(updateData);
};

exports.updateProductWithPatch = (req, res) => {
  const id = Number(req.params.id);
  const findIndex = products.find((p) => p.id === id);
  const productIndex = products[findIndex];
  products.splice(findIndex, 1, { ...productIndex, ...req.body });
  res.json({ message: "success" });
};

exports.deleteProduct = (req, res) => {
  const id = Number(req.params.id);
  const findIndex = products.find((p) => p.id === id);
  const deleteItem = products[findIndex];
  products.splice(findIndex, 1);
  res.json(deleteItem);
};
