const express = require("express");
const {
  getAllProducts,
  getAProduct,
  addProduct,
  updateProduct,
} = require("../controllers/product.controllers");
const router = express.Router();

router.route("/").get(getAllProducts).post(addProduct);

router.get("/:userId", getAProduct);

router.patch("/:userId", updateProduct);

router.delete("/:userId", (req, res) => {
  res.json({
    message: `Delete a product with id ${req.params.userId}`,
  });
});

module.exports = router;
