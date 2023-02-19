var express = require("express");
var router = express.Router();
const products = require("./products.json");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(products);
});
router.get("/:id", function (req, res, next) {
  const productId = req.params.id; // Récupérer l'ID du produit depuis l'URL
  const product = products[productId]; // Rechercher le produit correspondant dans la liste
  if (product) {
    res.json(product); // Renvoyer les détails du produit en réponse
  } else {
    res.status(404).send("Produit non trouvé"); // Renvoyer une erreur 404 si le produit n'est pas trouvé
  }
});
router.get("/:id/:qt", function (req, res, next) {
  const productId = req.params.id;
  const quantity = parseInt(req.params.qt);
  const product = products[productId];
  if (product) {
    const totalPrice = product.price * quantity;
    res.send(
      `Le prix total pour ${quantity} ${product.name} est de ${totalPrice}dinars`
    );
  } else {
    res.status(404).send("Produit non trouvé");
  }
});
//http://localhost:3000/product/in/stock/100
router.get("/in/stock/:qt", function (req, res, next) {
  const qt = parseInt(req.params.qt);
  const productsInStock = Object.entries(products).filter(
    ([id, product]) => product.stock >= qt
  );
  console.log("test");
  res.json(productsInStock);
});

module.exports = router;
