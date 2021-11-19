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

  // ts/clothes.ts
  displayProducts();
  document.querySelectorAll(".checkbox").forEach((item) => {
    item.addEventListener("click", sorting);
  });
  document.querySelector("#sortby select")?.addEventListener("change", sorting);
  var categories = [];
  function sorting(e) {
    let category = e.target.id;
    if (categories.includes(category) === true) {
      const index = categories.indexOf(category, 0);
      if (index > -1) {
        categories.splice(index, 1);
      }
      console.log(categories);
    } else {
      categories.push(category);
      console.log(categories);
    }
    displayProducts();
  }
  function displayProducts() {
    console.log("products, " + categories);
    const productDiv = document.querySelector("#productsDiv");
    const productTemplate = document.querySelector("#productsTemplate");
    productDiv.innerHTML = "";
    if (categories === void 0 || categories === null || categories.toString() === "") {
      products_default.forEach((element) => {
        console.log(products_default);
        const clone = productTemplate.content.cloneNode(true);
        clone.querySelector(".products").id = element.id;
        clone.querySelector("img").src = element.image;
        productDiv.appendChild(clone);
      });
    } else {
      products_default.forEach((element) => {
        console.log(products_default);
        for (let i = 0; i < categories.length; i++) {
          if (element.category.includes(categories[i]) === true) {
            const clone = productTemplate.content.cloneNode(true);
            clone.querySelector(".products").id = element.id;
            clone.querySelector("img").src = element.image;
            productDiv.appendChild(clone);
          }
        }
      });
    }
  }

  // ts/main.ts
  displayProducts();
  var slideIndex = 0;
  function slideShow() {
    const slides = document.querySelectorAll("#slides img");
    for (let i = 0; i < slides.length; i++) {
      slides[i].className = "hidden";
    }
    slides[slideIndex].className = "";
    slideIndex++;
    if (slideIndex > slides.length - 1) {
      slideIndex = 0;
    }
    setTimeout(slideShow, 5e3);
  }
  slideShow();
})();
