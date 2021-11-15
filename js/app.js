(() => {
  // products.json
  var products_default = [
    {
      name: "sildenafil citrate",
      category: "shoes",
      quantity: 261,
      unit_cost: "$225",
      id: "1",
      image: "./img/shoes1.jpeg"
    },
    {
      name: "jeans",
      category: "bottoms",
      quantity: 221,
      unit_cost: "$150",
      id: "2",
      image: "./img/pants1.jpeg"
    },
    {
      name: "shirt",
      category: "tops",
      quantity: 221,
      unit_cost: "$55",
      id: "3",
      image: "./img/shirt1.jpeg"
    },
    {
      name: "hat",
      category: "access",
      quantity: 221,
      unit_cost: "$95",
      id: "4",
      image: "./img/access1.jpeg"
    },
    {
      name: "wallet",
      category: "access",
      quantity: 221,
      unit_cost: "$69",
      id: "5",
      image: "./img/access2.jpeg"
    }
  ];

  // ts/main.ts
  function productsPrint() {
    const productDiv = document.querySelector("#productsDiv");
    const productTemplate = document.querySelector("#productsTemplate");
    products_default.forEach((element) => {
      const clone = productTemplate.content.cloneNode(true);
      clone.querySelector(".products").id = element.id;
      clone.querySelector("img").src = element.image;
      productDiv.appendChild(clone);
    });
  }
  productsPrint();
})();
