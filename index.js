const express = require("express");
const app = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
//bodyParser
app.use(express.json());
app.get("/", (req, res) => {
  res.send("welcome to my server application");
});
app.use("/products", productRouter.router);
app.use("/users", userRouter.router);

app.listen(8080, () =>
  console.log("server is running on http://localhost:8080")
);
