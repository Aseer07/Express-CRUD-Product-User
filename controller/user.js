const fs = require("fs");

const rawData = fs.readFileSync("productData.json", "utf-8");
const data = JSON.parse(rawData);
const users = data.users;

//CRUD OPERATION
exports.createUser = (req, res) => {
  users.push(req.body);
  res.json(req.body);
};

exports.getAllUser = (req, res) => {
  res.json(users);
};

exports.getUser = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((p) => p.id === id);
  res.json(user);
};

exports.updateUser = (req, res) => {
  const id = Number(req.params.id);
  const findIndex = users.find((p) => p.id === id);
  let updateData = users.splice(findIndex, 1, { ...req.body, id });
  res.send(updateData);
};

exports.updateUserWithPatch = (req, res) => {
  const id = Number(req.params.id);
  const findIndex = users.find((p) => p.id === id);
  const userIndex = users[findIndex];
  products.splice(findIndex, 1, { ...userIndex, ...req.body });
  res.json({ message: "success" });
};

exports.deleteUser = (req, res) => {
  const id = Number(req.params.id);
  const findIndex = users.find((p) => p.id === id);
  const deleteItem = users[findIndex];
  products.splice(findIndex, 1);
  res.json(deleteItem);
};
