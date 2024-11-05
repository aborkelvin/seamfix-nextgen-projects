let products = [
  { id: 1, name: "Mango Juice", price: 5000 },
  { id: 2, name: "Orange Juice", price: 2800 },
  { id: 3, name: "Strawberry Juice", price: 4700 },
];

const getAllProducts = (req, res) => {
  res.json({
    message: "Products fetched succesfully",
    products: products,
  });
};

const getAProduct = (req, res) => {
  const item = products.find((item) => item.id == req.params.userId);
  if (item) {
    res.json({
      product: item,
    });
  } else {
    res.status(404).send("Not Found");
  }
};

const addProduct = (req, res) => {
  if (!req.body.name || !req.body.price) {
    res.status(400).send("Bad request");
    return;
  }

  const product = {
    name: req.body.name,
    price: req.body.price,
    id: products.length + 1,
  };
  products.push(product);
  res.json({
    product: product,
  });
};

const updateProduct = (req, res) => {
  const item = products.find((item) => item.id == req.params.userId);
  if (!item) {
    res.status(404).send("Not Found");
  } else if (!req.body.name || !req.body.price) {
    res.status(400).send("Bad request");
  } else {
    const oldProducts = products.filter(
      (item) => item.id !== Number(req.params.userId)
    );
    const updatedProduct = {
      id: Number(req.params.userId),
      name: req.body.name,
      price: req.body.price,
    };
    oldProducts.push(updatedProduct);
    products = oldProducts;
    console.log(products);
    res.json({
      product: updatedProduct,
    });
  }
};

const deleteProduct = (req, res) => {};

module.exports = {
  getAllProducts,
  getAProduct,
  addProduct,
  updateProduct,
};
