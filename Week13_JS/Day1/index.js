var products = [
  {
    id: 1,
    name: "Controller",
    category: "Electronics",
    description:
      "High-performance laptop with stunning display and all-day battery life.",
    rating: 5,
    reviewCount: 256,
    currentPrice: 999.99,
    originalPrice: 1299.99,
    img: "./img/controller.png",
  },
  {
    id: 2,
    name: "PS5",
    category: "Electronics",
    description: "Next-generation gaming console with lightning-fast performance.",
    rating: 4,
    reviewCount: 189,
    currentPrice: 199.99,
    originalPrice: 299.99,
    id: 2,
    img: "./img/ps5.png",
  },
  {
    id: 3,
    name: "Smartphone",
    category: "Electronics",
    description: "Flagship smartphone with cutting-edge camera and performance.",
    rating: 5,
    reviewCount: 324,
    currentPrice: 149.99,
    originalPrice: 199.99,
    img: "./img/smartphone.png",
  },
];

function displayProducts(listofProducts) {
  var item = "";
  for (var obj in listofProducts) {
    item += `<div class="product-card">
                <span class="badge">Best Seller</span>
                <div class="product-image">
                    <img src="${listofProducts[obj].img}" alt="${listofProducts[obj].name}">
                </div>
                <div class="product-info">
                    <span class="product-category">${listofProducts[obj].category}</span>
                    <h2 class="product-name">${listofProducts[obj].name}</h2>
                    <p class="product-description">${listofProducts[obj].description}</p>
                    <div class="rating">
                        <span class="stars">${"★".repeat(Math.floor(listofProducts[obj].rating))}${listofProducts[obj].rating % 1 >= 0.5 ? "½" : ""}</span>
                        <span class="rating-count">(${listofProducts[obj].reviewCount} reviews)</span>
                    </div>
                    <div class="product-footer">
                        <div class="price">
                            <span class="current-price">$${listofProducts[obj].currentPrice.toFixed(2)}</span>
                            <span class="original-price">$${listofProducts[obj].originalPrice.toFixed(2)}</span>
                        </div>
                        <button class="btn-buy">Add to Cart 🛒</button>
                    </div>
                </div>
            </div>
        `;
        document.getElementById("product-list").innerHTML = item;
  }
}
displayProducts(products);
